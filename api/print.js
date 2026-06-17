const os = require('os');
const path = require('path');
const fs = require('fs');

// Force @sparticuz/chromium-min to recognize Vercel as an AWS Lambda environment
// and extract the system libraries (al2/al2023) from the remote tarball
if (process.env.VERCEL) {
  process.env.AWS_EXECUTION_ENV = 'AWS_Lambda_nodejs20.x';
  process.env.LAMBDA_TASK_ROOT = '/var/task';
}


module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { html } = req.body;
  if (!html) {
    return res.status(400).json({ error: 'Missing HTML content' });
  }

  let browser = null;
  try {
    let puppeteer;
    let options = {};

    if (process.env.VERCEL) {
      puppeteer = require('puppeteer-core');
      const chromium = require('@sparticuz/chromium-min');
      
      const remoteBinUrl = 'https://github.com/Sparticuz/chromium/releases/download/v123.0.1/chromium-v123.0.1-pack.tar';
      const executablePath = await chromium.executablePath(remoteBinUrl);
      
      options = {
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: executablePath,
        headless: chromium.headless,
      };

      // Set LD_LIBRARY_PATH to help Chromium find extracted system libraries (like libnss3.so)
      const execDir = path.dirname(executablePath);
      process.env.LD_LIBRARY_PATH = `${execDir}:${execDir}/lib:/tmp:/tmp/lib:/tmp/aws/lib:${process.env.LD_LIBRARY_PATH || ''}`;
    } else {
      // Local development fallback
      try {
        puppeteer = require('puppeteer');
      } catch (e) {
        puppeteer = require('puppeteer-core');
        // Try common local paths for Chrome based on OS
        if (os.platform() === 'darwin') {
          options.executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
        } else if (os.platform() === 'win32') {
          options.executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
        } else {
          options.executablePath = '/usr/bin/google-chrome';
        }
      }
      options.headless = true;
      options.args = ['--no-sandbox', '--disable-setuid-sandbox'];
    }

    browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    
    // Set content and wait until it's loaded (networkidle0 is key for webfonts/css)
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Generate A4 PDF with no margins and backgrounds printed
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
    return res.send(pdf);
  } catch (error) {
    console.error('PDF generation error:', error);
    
    // Diagnostic log of /tmp directory to identify where the shared libraries are extracted
    let tmpContents = {};
    try {
      const files = fs.readdirSync('/tmp');
      tmpContents.tmp = files;
      for (const file of files) {
        const fullPath = path.join('/tmp', file);
        if (fs.statSync(fullPath).isDirectory()) {
          tmpContents[`tmp_${file}`] = fs.readdirSync(fullPath);
        }
      }
    } catch (e) {
      tmpContents.error = e.message;
    }

    return res.status(500).json({ 
      error: 'Failed to generate PDF', 
      details: error.message,
      tmpContents
    });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};

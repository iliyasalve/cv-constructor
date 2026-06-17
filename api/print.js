const os = require('os');

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
      const chromium = require('@sparticuz/chromium');
      options = {
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      };
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
    return res.status(500).json({ error: 'Failed to generate PDF', details: error.message });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};

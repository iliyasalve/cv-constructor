// Studio Shell UI Interactions

// Micro-interaction for buttons
document.querySelectorAll('button, a, div[role="button"]').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.96)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// Sidebar Tab content panel switching logic
const tabs = document.querySelectorAll('aside nav > div');
const activeClasses = ['bg-secondary-container', 'dark:bg-primary-container/20', 'text-on-secondary-container', 'dark:text-inverse-primary', 'font-bold', 'translate-x-1', 'dark:border-primary-container/30'];
const inactiveClasses = ['text-on-surface-variant', 'hover:bg-surface-variant/50', 'dark:hover:bg-surface-variant/30'];

const panels = [
    document.getElementById('panel-theme'),
    document.getElementById('panel-typography'),
    document.getElementById('panel-accent'),
    document.getElementById('panel-file'),
    document.getElementById('panel-export')
];

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => {
            t.classList.remove(...activeClasses);
            t.classList.add(...inactiveClasses);
        });
        tab.classList.add(...activeClasses);
        tab.classList.remove(...inactiveClasses);

        // Hide all panels, show active
        panels.forEach((panel, pIdx) => {
            if (panel) {
                if (pIdx === index) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            }
        });
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
const htmlElement = document.documentElement;

function setTheme(theme) {
    htmlElement.classList.add('disable-transitions');

    if (theme === 'dark') {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        if (themeToggle) {
            themeToggle.textContent = 'light_mode';
            themeToggle.setAttribute('data-icon', 'light_mode');
        }
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        if (themeToggle) {
            themeToggle.textContent = 'dark_mode';
            themeToggle.setAttribute('data-icon', 'dark_mode');
        }
        localStorage.setItem('theme', 'light');
    }

    // Force browser reflow to apply theme classes before enabling transitions again
    window.getComputedStyle(htmlElement).opacity;

    requestAnimationFrame(() => {
        htmlElement.classList.remove('disable-transitions');
    });
}

// Initialize theme toggle UI elements based on the initial theme applied in <head>
if (themeToggle) {
    if (htmlElement.classList.contains('dark')) {
        themeToggle.textContent = 'light_mode';
        themeToggle.setAttribute('data-icon', 'light_mode');
    } else {
        themeToggle.textContent = 'dark_mode';
        themeToggle.setAttribute('data-icon', 'dark_mode');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}

if (sidebarThemeToggle) {
    sidebarThemeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}

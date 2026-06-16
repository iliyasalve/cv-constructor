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

// ==========================================
// Structure Panel Interaction Logic
// ==========================================
function updateStructurePanel() {
    const list = document.getElementById('cv-structure-list');
    if (!list) return;
    const hidden = window.cvData ? (window.cvData.hiddenSections || []) : [];
    
    list.querySelectorAll('[data-section-id]').forEach(row => {
        const secId = row.dataset.sectionId;
        const isHidden = hidden.includes(secId);
        
        // Toggle opacity classes
        if (isHidden) {
            row.classList.add('opacity-60', 'dark:opacity-50');
        } else {
            row.classList.remove('opacity-60', 'dark:opacity-50');
        }
        
        // Toggle eye icon
        const eye = row.querySelector('.eye-icon');
        if (eye) {
            eye.textContent = isHidden ? 'visibility_off' : 'visibility';
            eye.setAttribute('data-icon', isHidden ? 'visibility_off' : 'visibility');
        }
    });

    // Update Progress Indicator
    updateProgressIndicator();
}

// Helper to calculate CV progress percentage
function updateProgressIndicator() {
    const data = window.cvData;
    if (!data) return;
    
    const totalFields = 10;
    let filledFields = 0;

    if (data.name && data.name !== 'Votre Nom' && data.name.trim()) filledFields++;
    if (data.title && data.title !== 'Titre du Poste' && data.title.trim()) filledFields++;
    if (data.summary && data.summary.trim() && data.summary !== 'Décrivez votre profil professionnel, vos compétences clés et vos objectifs de carrière en quelques phrases.') filledFields++;
    if (data.contacts && data.contacts.length > 0) filledFields++;
    if (data.experiences && data.experiences.length > 0) filledFields++;
    if (data.projects && data.projects.length > 0) filledFields++;
    if (data.skills && data.skills.length > 0) filledFields++;
    if (data.education && data.education.length > 0) filledFields++;
    if (data.certifications && data.certifications.length > 0) filledFields++;
    if (data.languages && data.languages.length > 0) filledFields++;

    const percent = Math.round((filledFields / totalFields) * 100);
    
    // Update status elements
    const statusTitle = document.querySelector('aside .mt-auto p:first-child');
    const statusText = document.querySelector('aside .mt-auto p:last-child');
    const statusIcon = document.querySelector('aside .mt-auto .material-symbols-outlined');
    
    if (statusText) {
        statusText.textContent = `${percent}% des champs remplis`;
    }
    
    if (statusTitle) {
        if (percent < 40) {
            statusTitle.textContent = 'En cours de rédaction';
            if (statusIcon) {
                statusIcon.textContent = 'edit_note';
                statusIcon.setAttribute('data-icon', 'edit_note');
            }
        } else if (percent < 80) {
            statusTitle.textContent = 'Presque terminé';
            if (statusIcon) {
                statusIcon.textContent = 'hourglass_empty';
                statusIcon.setAttribute('data-icon', 'hourglass_empty');
            }
        } else {
            statusTitle.textContent = 'Prêt à exporter';
            if (statusIcon) {
                statusIcon.textContent = 'check_circle';
                statusIcon.setAttribute('data-icon', 'check_circle');
            }
        }
    }
}

function toggleSectionVisibility(secId) {
    if (!window.cvData) return;
    if (!window.cvData.hiddenSections) {
        window.cvData.hiddenSections = [];
    }
    
    const index = window.cvData.hiddenSections.indexOf(secId);
    if (index > -1) {
        window.cvData.hiddenSections.splice(index, 1);
    } else {
        window.cvData.hiddenSections.push(secId);
    }
    
    // Rerender the CV
    if (typeof window.renderCV === 'function') {
        window.renderCV(false);
    }
    
    // Trigger autoSave
    if (typeof window.autoSave === 'function') {
        window.autoSave();
    }
}

function scrollToSection(secId) {
    const c = document.getElementById('cv-container');
    if (!c) return;
    
    // Find the section element in the CV
    const secEl = c.querySelector(`.cv-section[data-section="${secId}"]`);
    if (secEl) {
        secEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Flash animation highlight
        secEl.style.outline = '2px dashed var(--primary)';
        secEl.style.outlineOffset = '6px';
        secEl.style.transition = 'outline 0.3s, outline-offset 0.3s';
        
        setTimeout(() => {
            secEl.style.outline = '';
            secEl.style.outlineOffset = '';
        }, 1200);
    }
}

// Bind event listeners on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('cv-structure-list');
    if (list) {
        list.addEventListener('click', (e) => {
            const row = e.target.closest('[data-section-id]');
            if (!row) return;
            
            const secId = row.dataset.sectionId;
            const isEyeClick = e.target.classList.contains('eye-icon') || e.target.closest('.eye-icon');
            
            if (isEyeClick) {
                e.stopPropagation();
                toggleSectionVisibility(secId);
            } else {
                scrollToSection(secId);
            }
        });
    }

    // Run initial panel sync
    setTimeout(() => {
        updateStructurePanel();
    }, 200);
});

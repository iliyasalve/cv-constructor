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

// Sidebar Accordion content panel switching logic
const activeClasses = ['bg-secondary-container', 'dark:bg-primary-container/20', 'text-on-secondary-container', 'dark:text-inverse-primary', 'font-bold', 'translate-x-1', 'dark:border-primary-container/30'];
const inactiveClasses = ['text-on-surface-variant', 'hover:bg-surface-variant/50', 'dark:hover:bg-surface-variant/30'];
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const targetId = header.dataset.target;
        const panel = document.getElementById(targetId);
        if (!panel) return;

        const isAlreadyOpen = !panel.classList.contains('hidden');

        // Close all accordion panels
        document.querySelectorAll('.accordion-content').forEach(p => {
            p.classList.add('hidden');
        });
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove(...activeClasses);
            h.classList.add(...inactiveClasses);
        });

        // Toggle the clicked one
        if (!isAlreadyOpen) {
            panel.classList.remove('hidden');
            header.classList.add(...activeClasses);
            header.classList.remove(...inactiveClasses);
        }
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
    
    const translate = (key) => (window.t ? window.t(key) : key);

    // Update status elements
    const statusTitle = document.getElementById('status-title');
    const statusText = document.getElementById('status-text');
    const statusIcon = document.getElementById('status-icon');
    
    if (statusText) {
        statusText.textContent = `${percent}% ${translate('fields-filled')}`;
    }
    
    if (statusTitle) {
        if (percent < 40) {
            statusTitle.textContent = translate('status-writing');
            if (statusIcon) {
                statusIcon.textContent = 'edit_note';
                statusIcon.setAttribute('data-icon', 'edit_note');
            }
        } else if (percent < 80) {
            statusTitle.textContent = translate('status-almost');
            if (statusIcon) {
                statusIcon.textContent = 'hourglass_empty';
                statusIcon.setAttribute('data-icon', 'hourglass_empty');
            }
        } else {
            statusTitle.textContent = translate('status-ready');
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

// Sync UI components with cvData properties
function syncLayoutUIFromData() {
    const data = window.cvData;
    if (!data) return;

    // 1. Density
    const density = data.density || 'normal';
    document.querySelectorAll('[data-density]').forEach(btn => {
        const isActive = btn.dataset.density === density;
        btn.classList.toggle('bg-primary-container', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('hover:bg-surface-variant', !isActive);
    });

    // 2. Header Alignment
    const align = data.headerAlignment || 'left';
    document.querySelectorAll('[data-header-align]').forEach(btn => {
        const isActive = btn.dataset.headerAlign === align;
        btn.classList.toggle('bg-primary-container', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('hover:bg-surface-variant', !isActive);
    });

    // 3. Contact Icons
    const checkbox = document.getElementById('toggle-contact-icons');
    if (checkbox) {
        checkbox.checked = data.showContactIcons !== false;
    }

    // 4. Typography
    const pairing = data.fontPairing || 'default';
    document.querySelectorAll('#typography-pairings > div').forEach(card => {
        const isSelected = card.dataset.pairing === pairing;
        card.classList.toggle('border-primary-container', isSelected);
        card.classList.toggle('border-outline-variant/20', !isSelected);
    });
}
window.syncLayoutUIFromData = syncLayoutUIFromData;
window.updateStructurePanel = updateStructurePanel;

// Help Modal controls
const helpModal = document.getElementById('help-modal');
const btnHelp = document.getElementById('btn-help-trigger');
const btnCloseModal = document.getElementById('close-help-modal');
const btnCloseConfirm = document.getElementById('btn-close-help-confirm');

function openHelpModal() {
    if (!helpModal) return;
    helpModal.classList.remove('hidden');
    setTimeout(() => {
        helpModal.classList.remove('opacity-0');
        const card = helpModal.querySelector('.transform');
        if (card) {
            card.classList.remove('scale-95');
            card.classList.add('scale-100');
        }
    }, 10);
}

function closeHelpModal() {
    if (!helpModal) return;
    helpModal.classList.add('opacity-0');
    const card = helpModal.querySelector('.transform');
    if (card) {
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
    }
    setTimeout(() => {
        helpModal.classList.add('hidden');
    }, 300);
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

    // Bind layout density buttons
    document.querySelectorAll('[data-density]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!window.cvData) return;
            window.cvData.density = btn.dataset.density;
            if (typeof window.renderCV === 'function') {
                window.renderCV(false);
            }
            if (typeof window.autoSave === 'function') {
                window.autoSave();
            }
            syncLayoutUIFromData();
        });
    });

    // Bind header alignment buttons
    document.querySelectorAll('[data-header-align]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!window.cvData) return;
            window.cvData.headerAlignment = btn.dataset.headerAlign;
            if (typeof window.renderCV === 'function') {
                window.renderCV(false);
            }
            if (typeof window.autoSave === 'function') {
                window.autoSave();
            }
            syncLayoutUIFromData();
        });
    });

    // Bind contact icons toggle
    const checkboxIcons = document.getElementById('toggle-contact-icons');
    if (checkboxIcons) {
        checkboxIcons.addEventListener('change', (e) => {
            if (!window.cvData) return;
            window.cvData.showContactIcons = e.target.checked;
            if (typeof window.renderCV === 'function') {
                window.renderCV(false);
            }
            if (typeof window.autoSave === 'function') {
                window.autoSave();
            }
            syncLayoutUIFromData();
        });
    }

    // Bind typography preset cards
    document.querySelectorAll('#typography-pairings > div').forEach(card => {
        card.addEventListener('click', () => {
            if (!window.cvData) return;
            window.cvData.fontPairing = card.dataset.pairing;
            if (typeof window.renderCV === 'function') {
                window.renderCV(false);
            }
            if (typeof window.autoSave === 'function') {
                window.autoSave();
            }
            syncLayoutUIFromData();
        });
    });

    // Bind help modal elements
    if (btnHelp) btnHelp.addEventListener('click', openHelpModal);
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeHelpModal);
    if (btnCloseConfirm) btnCloseConfirm.addEventListener('click', closeHelpModal);
    if (helpModal) {
        helpModal.addEventListener('click', (e) => {
            if (e.target === helpModal) {
                closeHelpModal();
            }
        });
    }

    // Bind language select change listener
    const selectLang = document.getElementById('select-language');
    if (selectLang) {
        selectLang.addEventListener('change', (e) => {
            const newLang = e.target.value;
            if (typeof applyLanguage === 'function') {
                applyLanguage(newLang);
                localStorage.setItem('cv_studio_lang', newLang);
            }
            if (window.cvData) {
                window.cvData.cvLanguage = newLang;
                if (typeof window.translateCVData === 'function') {
                    window.translateCVData(window.cvData, newLang);
                }
                if (typeof window.renderCV === 'function') {
                    window.renderCV(false);
                }
                if (typeof window.updateStructurePanel === 'function') {
                    window.updateStructurePanel();
                }
                if (typeof window.autoSave === 'function') {
                    window.autoSave();
                }
            }
        });
    }

    // Run initial panel sync
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    updateStructurePanel();
    syncLayoutUIFromData();
});

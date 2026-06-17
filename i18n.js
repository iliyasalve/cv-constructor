// i18n localization dictionary and engine for CV Constructor Studio
const TRANSLATIONS = {
    fr: {
        // Top Navbar
        "btn-export-pdf": "Export PDF",
        "btn-export-html": "Export HTML",
        "theme-dark": "Mode sombre",

        // Sidebar Main
        "studio-controls": "Contrôles du Studio",
        "customize-cv": "Personnalisez votre CV",
        "accordion-layout": "Mise en page",
        "accordion-typography": "Typographie",
        "accordion-color": "Couleur",
        "accordion-project": "Projet",
        "accordion-help": "Aide",
        "accordion-settings": "Paramètres",

        // Layout panel
        "layout-desc": "Ajustez la densité et l'agencement visuel de votre CV.",
        "layout-density": "Densité du contenu",
        "density-compact": "Compact",
        "density-normal": "Normal",
        "density-spacious": "Spacieux",
        "layout-align": "Alignement de l'en-tête",
        "align-left": "À gauche",
        "align-center": "Centré",
        "layout-icons": "Icônes de contact",

        // Typography panel
        "typo-desc": "Choisissez une combinaison de polices pour votre CV.",
        "typo-default-badge": "Par défaut",
        "typo-default-desc": "Le style d'origine du CV, moderne et compact.",
        "typo-inter-desc": "Sans-serif géométrique & lisible.",
        "typo-serif-desc": "Style classique, académique et littéraire.",
        "typo-modern-desc": "En-tête moderne & corps с empattement.",

        // Accent panel
        "accent-desc": "Sélectionnez une couleur pour mettre en valeur les éléments clés de votre CV.",
        "custom-color": "Couleur personnalisée",

        // Project panel
        "project-desc": "Commencez un nouveau CV ou rechargez un fichier de projet sauvegardé.",
        "btn-new-cv": "Nouveau CV vide",
        "btn-load-cv": "Charger un projet (.html)",

        // Settings panel
        "settings-desc": "Configurez les paramètres globaux de l'application.",
        "cv-language": "Langue du CV",
        "cv-language-help": "💡 La traduction automatique des rubriques standard et le support multilingue sont en cours de développement.",

        // Structure panel (Right sidebar)
        "structure-title": "Structure du CV",
        "structure-desc": "Activez/désactivez les sections et cliquez pour y accéder.",
        "sect-experiences": "Expériences",
        "sect-projects": "Projets",
        "sect-skills": "Compétences",
        "sect-education": "Formation",
        "sect-certifications": "Certifications",
        "sect-qualities": "Qualités",
        "sect-languages": "Langues",
        "status-ready": "Prêt à exporter",
        "status-writing": "En cours de rédaction",
        "status-almost": "Presque terminé",
        "fields-filled": "des champs remplis",

        // Help Modal
        "help-modal-title": "Centre d'aide & Astuces",
        "help-shortcuts-title": "Raccourcis Clavier & Édition",
        "help-shortcut-line": "Insère un retour à la ligne simple dans n'importe quel champ de texte.",
        "help-hover-line": "Survolez une section (Expériences, Projets) pour afficher les flèches ▲ ▼ de réordonnancement ou la croix ✕ de suppression.",
        "help-autosave-line": "Le CV est automatiquement sauvegardé dans votre navigateur à chaque modification.",
        "help-pdf-title": "Configuration d'Export PDF",
        "help-pdf-desc": "Pour obtenir un rendu PDF parfait sur une seule page A4, appliquez ces options dans la fenêtre d'impression :",
        "help-dest": "Destination :",
        "help-dest-val": "Enregistrer au format PDF",
        "help-layout": "Mise en page :",
        "help-layout-val": "Portrait",
        "help-paper": "Taille du papier :",
        "help-paper-val": "A4",
        "help-margins": "Marges :",
        "help-margins-val": "Aucune",
        "help-bg": "Graphismes d'arrière-plan :",
        "help-bg-val": "ACTIVÉ ☑",
        "btn-got-it": "Compris",

        // Toasts & Alerts
        "toast-export-html": "CV exporté en HTML ✓",
        "toast-print-info": "Utilisez « Enregistrer en PDF » dans la boîte de dialogue",
        "toast-loaded": "CV chargé : ",
        "toast-error": "Erreur : ",
        "confirm-delete-item": "Supprimer cet élément ?",
        
        // CV Headings defaults (used when generating new items or empty template)
        "cv-title-experience": "Expériences",
        "cv-title-projects": "Projets",
        "cv-title-skills": "Compétences",
        "cv-title-education": "Formation",
        "cv-title-certifications": "Certifications",
        "cv-title-qualities": "Qualités",
        "cv-title-languages": "Langues",
        "cv-placeholder-name": "Votre Nom",
        "cv-placeholder-title": "Titre du Poste",
        "cv-placeholder-summary": "Décrivez votre profil professionnel, vos compétences clés et vos objectifs de carrière en quelques phrases."
    },
    en: {
        // Top Navbar
        "btn-export-pdf": "Export PDF",
        "btn-export-html": "Export HTML",
        "theme-dark": "Dark mode",

        // Sidebar Main
        "studio-controls": "Studio Controls",
        "customize-cv": "Customize your CV",
        "accordion-layout": "Layout",
        "accordion-typography": "Typography",
        "accordion-color": "Color",
        "accordion-project": "Project",
        "accordion-help": "Help",
        "accordion-settings": "Settings",

        // Layout panel
        "layout-desc": "Adjust the density and visual layout of your CV.",
        "layout-density": "Content Density",
        "density-compact": "Compact",
        "density-normal": "Normal",
        "density-spacious": "Spacious",
        "layout-align": "Header Alignment",
        "align-left": "Left",
        "align-center": "Centered",
        "layout-icons": "Contact Icons",

        // Typography panel
        "typo-desc": "Choose a font combination for your CV.",
        "typo-default-badge": "Default",
        "typo-default-desc": "The original CV style, modern and compact.",
        "typo-inter-desc": "Geometric & readable sans-serif.",
        "typo-serif-desc": "Classic academic and literary style.",
        "typo-modern-desc": "Modern header & serif body text.",

        // Accent panel
        "accent-desc": "Select a color to highlight key elements of your CV.",
        "custom-color": "Custom Color",

        // Project panel
        "project-desc": "Start a new CV or load a saved project file.",
        "btn-new-cv": "New Blank CV",
        "btn-load-cv": "Load Project (.html)",

        // Settings panel
        "settings-desc": "Configure global application settings.",
        "cv-language": "CV Language",
        "cv-language-help": "💡 Automatic translation of standard sections and multilingual support are in development.",

        // Structure panel (Right sidebar)
        "structure-title": "CV Structure",
        "structure-desc": "Enable/disable sections and click to navigate.",
        "sect-experiences": "Experience",
        "sect-projects": "Projects",
        "sect-skills": "Skills",
        "sect-education": "Education",
        "sect-certifications": "Certifications",
        "sect-qualities": "Qualities",
        "sect-languages": "Languages",
        "status-ready": "Ready to export",
        "status-writing": "Writing in progress",
        "status-almost": "Almost finished",
        "fields-filled": "of fields filled",

        // Help Modal
        "help-modal-title": "Help Center & Tips",
        "help-shortcuts-title": "Keyboard Shortcuts & Editing",
        "help-shortcut-line": "Inserts a simple line break in any text field.",
        "help-hover-line": "Hover over a section (Experience, Projects) to show ▲ ▼ reorder arrows or ✕ delete button.",
        "help-autosave-line": "The CV is automatically saved in your browser with every modification.",
        "help-pdf-title": "PDF Export Configuration",
        "help-pdf-desc": "To get a perfect PDF render on a single A4 page, apply these options in the print dialog:",
        "help-dest": "Destination:",
        "help-dest-val": "Save as PDF",
        "help-layout": "Layout:",
        "help-layout-val": "Portrait",
        "help-paper": "Paper size:",
        "help-paper-val": "A4",
        "help-margins": "Margins:",
        "help-margins-val": "None",
        "help-bg": "Background graphics:",
        "help-bg-val": "ENABLED ☑",
        "btn-got-it": "Got it",

        // Toasts & Alerts
        "toast-export-html": "CV exported to HTML ✓",
        "toast-print-info": "Use 'Save as PDF' in the print dialog box",
        "toast-loaded": "CV loaded: ",
        "toast-error": "Error: ",
        "confirm-delete-item": "Delete this item?",
        
        // CV Headings defaults (used when generating new items or empty template)
        "cv-title-experience": "Experience",
        "cv-title-projects": "Projects",
        "cv-title-skills": "Skills",
        "cv-title-education": "Education",
        "cv-title-certifications": "Certifications",
        "cv-title-qualities": "Qualities",
        "cv-title-languages": "Languages",
        "cv-placeholder-name": "Your Name",
        "cv-placeholder-title": "Job Title",
        "cv-placeholder-summary": "Describe your professional profile, key skills, and career goals in a few sentences."
    },
    ru: {
        // Top Navbar
        "btn-export-pdf": "Экспорт в PDF",
        "btn-export-html": "Экспорт в HTML",
        "theme-dark": "Темная тема",

        // Sidebar Main
        "studio-controls": "Панель управления",
        "customize-cv": "Настройте резюме",
        "accordion-layout": "Разметка",
        "accordion-typography": "Шрифты",
        "accordion-color": "Цвет",
        "accordion-project": "Проект",
        "accordion-help": "Справка",
        "accordion-settings": "Параметры",

        // Layout panel
        "layout-desc": "Настройте плотность отступов и структуру шапки резюме.",
        "layout-density": "Плотность контента",
        "density-compact": "Компактный",
        "density-normal": "Обычный",
        "density-spacious": "Просторный",
        "layout-align": "Выравнивание шапки",
        "align-left": "По левому краю",
        "align-center": "По центру",
        "layout-icons": "Иконки контактов",

        // Typography panel
        "typo-desc": "Выберите гарнитуру шрифтов для вашего резюме.",
        "typo-default-badge": "По умолчанию",
        "typo-default-desc": "Оригинальный стиль резюме, современный и компактный.",
        "typo-inter-desc": "Геометрический и легко читаемый без засечек.",
        "typo-serif-desc": "Классический академический и литературный стиль.",
        "typo-modern-desc": "Современные заголовки и читаемый текст с засечками.",

        // Accent panel
        "accent-desc": "Выберите акцентный цвет для выделения разделов резюме.",
        "custom-color": "Свой цвет",

        // Project panel
        "project-desc": "Начните новое резюме или загрузите сохраненный HTML-проект.",
        "btn-new-cv": "Новое резюме",
        "btn-load-cv": "Загрузить проект (.html)",

        // Settings panel
        "settings-desc": "Глобальные настройки интерфейса.",
        "cv-language": "Язык интерфейса",
        "cv-language-help": "💡 Автоматический перевод ваших собственных данных пока не поддерживается. Переводятся элементы управления.",

        // Structure panel (Right sidebar)
        "structure-title": "Структура резюме",
        "structure-desc": "Включайте разделы и кликайте для быстрого перехода.",
        "sect-experiences": "Опыт работы",
        "sect-projects": "Проекты",
        "sect-skills": "Навыки",
        "sect-education": "Образование",
        "sect-certifications": "Сертификаты",
        "sect-qualities": "Личные качества",
        "sect-languages": "Языки",
        "status-ready": "Готово к экспорту",
        "status-writing": "В процессе заполнения",
        "status-almost": "Почти готово",
        "fields-filled": "полей заполнено",

        // Help Modal
        "help-modal-title": "Справка и подсказки",
        "help-shortcuts-title": "Горячие клавиши и редактирование",
        "help-shortcut-line": "Shift + Enter вставляет перенос строки внутри любого текстового поля.",
        "help-hover-line": "Наведите курсор на пункт (Опыт, Проекты) для отображения стрелок ▲ ▼ перемещения или крестика ✕ удаления.",
        "help-autosave-line": "Резюме автоматически сохраняется в вашем браузере при каждом изменении.",
        "help-pdf-title": "Идеальные параметры печати в PDF",
        "help-pdf-desc": "Чтобы резюме поместилось на один лист A4, настройте печать следующим образом:",
        "help-dest": "Принтер (Назначение):",
        "help-dest-val": "Сохранить как PDF",
        "help-layout": "Ориентация (Макет):",
        "help-layout-val": "Книжная",
        "help-paper": "Размер бумаги:",
        "help-paper-val": "A4",
        "help-margins": "Поля:",
        "help-margins-val": "Отсутствуют (Нет)",
        "help-bg": "Фоновые рисунки (графика):",
        "help-bg-val": "ВКЛЮЧЕНО ☑",
        "btn-got-it": "Понятно",

        // Toasts & Alerts
        "toast-export-html": "Резюме экспортировано в HTML ✓",
        "toast-print-info": "Используйте «Сохранить как PDF» в открывшемся окне печати",
        "toast-loaded": "Резюме загружено: ",
        "toast-error": "Ошибка: ",
        "confirm-delete-item": "Удалить этот элемент?",
        
        // CV Headings defaults (used when generating new items or empty template)
        "cv-title-experience": "Опыт работы",
        "cv-title-projects": "Проекты",
        "cv-title-skills": "Навыки",
        "cv-title-education": "Образование",
        "cv-title-certifications": "Сертификаты",
        "cv-title-qualities": "Личные качества",
        "cv-title-languages": "Языки",
        "cv-placeholder-name": "Ваше Имя",
        "cv-placeholder-title": "Желаемая Должность",
        "cv-placeholder-summary": "Опишите свой профессиональный профиль, ключевые компетенции и карьерные цели в нескольких предложениях."
    }
};

let currentLang = 'fr';

// Safely translate elements with data-i18n attributes
function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const text = TRANSLATIONS[lang][key];
        
        if (text) {
            if (el.placeholder !== undefined) {
                el.placeholder = text;
            } else if (el.tagName === 'SELECT') {
                // Ignore selects or handle them custom
            } else {
                // If it contains only text or if we have an icon child, preserve the icon
                const icon = el.querySelector('[data-icon], .material-symbols-outlined, i[class*="fa-"]');
                if (icon) {
                    // Elements like buttons and menu items have icons inside.
                    // We only replace the text node, keeping the icon element intact.
                    const iconOuter = icon.outerHTML;
                    el.innerHTML = iconOuter + ' ' + text;
                } else {
                    el.textContent = text;
                }
            }
        }
    });

    // Update document HTML lang attribute
    document.documentElement.lang = lang;
}

// Function to translate custom string keys on-the-fly (e.g. for dynamic alerts, confirm popups)
function t(key) {
    return TRANSLATIONS[currentLang]?.[key] || key;
}

// Initialize language from LocalStorage or browser default
function initLanguage() {
    const saved = localStorage.getItem('cv_studio_lang');
    const system = navigator.language || navigator.userLanguage;
    let lang = 'fr'; // default
    
    if (saved && TRANSLATIONS[saved]) {
        lang = saved;
    } else if (system) {
        const code = system.split('-')[0].toLowerCase();
        if (TRANSLATIONS[code]) {
            lang = code;
        }
    }
    
    applyLanguage(lang);
    
    // Sync UI select value
    const select = document.getElementById('select-language');
    if (select) {
        select.value = lang;
    }
}

// Bind globally
window.TRANSLATIONS = TRANSLATIONS;
window.applyLanguage = applyLanguage;
window.t = t;
window.initLanguage = initLanguage;
window.getCurrentLanguage = () => currentLang;

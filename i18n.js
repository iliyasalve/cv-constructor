// i18n localization dictionary and engine for CV Constructor Studio
const TRANSLATIONS = {
    fr: {
        // SEO metadata
        "seo-title": "CV Constructor Studio | Créateur de CV Professionnel en Ligne",
        "seo-description": "Créez un CV professionnel, moderne et compatible ATS en ligne. Générateur de CV gratuit, sécurisé et personnalisable avec export PDF vectoriel de haute qualité.",
        "seo-keywords": "créateur de cv, faire un cv, cv en ligne, générateur de cv gratuit, cv professionnel, cv ats, cv constructor, cv builder, cv-builder",

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

        "layout-sect-page": "Structure de la page",
        "layout-sect-header": "Style de l'en-tête",
        "layout-density": "Densité du contenu",
        "density-compact": "Compact",
        "density-normal": "Normal",
        "density-spacious": "Spacieux",
        "layout-align": "Alignement de l'en-tête",
        "align-left": "À gauche",
        "align-center": "Centré",
        "align-right": "À droite",
        "layout-icons": "Icônes de contact",
        "icons-left": "À gauche",
        "icons-hidden": "Masquées",
        "icons-right": "À droite",
        "layout-columns": "Disposition des colonnes",
        "cols-1": "1 colonne",
        "cols-2": "2 colonnes",

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
        "btn-load-cv": "Charger un projet",

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
        "help-language-line": "Le changement de langue ne traduit pas automatiquement le contenu d'un CV existant. Pour traduire les rubriques standard, créez un nouveau CV ou modifiez-les manuellement.",
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
        "privacy-message": "Ce site ne collecte ni ne suit vos données personnelles. Toutes les données de votre CV sont stockées localement dans votre navigateur.",
        "help-author-title": "À propos de l'auteur",
        "help-author-tagline": "Développeur Mobile, Full-Stack & Data",
        "help-author-link-website": "Site web",
        "mobile-overlay-title": "Version mobile non prise en charge",
        "mobile-overlay-desc": "La version mobile n'est pas prise en charge actuellement. Veuillez ouvrir l'application sur un ordinateur de bureau ou portable.",

        // Toasts & Alerts
        "toast-export-html": "CV exporté en HTML ✓",
        "toast-pdf-generating": "Génération du PDF sur le serveur...",
        "toast-pdf-failed": "Échec. Ouverture de la boîte d'impression...",
        "toast-print-info": "Utilisez « Enregistrer en PDF » dans la boîte de dialogue",
        "toast-loaded": "CV chargé : ",
        "toast-error": "Erreur : ",
        "confirm-delete-item": "Supprimer cet élément ?",
        "confirm-new-cv": "Créer un nouveau CV ? Les modifications non exportées seront perdues.",
        "toast-new-cv-created": "Nouveau CV créé ✨",
        "btn-add-experience": "+ Ajouter une expérience",
        "btn-add-project": "+ Ajouter un projet",
        "btn-add-contact": "+ Contact",
        "btn-add-skill-group": "+ Ajouter un groupe de compétences",
        "btn-add-education": "+ Ajouter une formation",
        "btn-add-certification": "+ Ajouter une certification",
        "btn-add-quality": "+ Ajouter une qualité",
        "btn-add-language": "+ Ajouter une langue",
        "empty-section": "Aucun élément",
        "prompt-contact-url": "URL du lien (vide = aucun lien) :",
        "no-icons-found": "Aucune icône trouvée",
        
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
        // SEO metadata
        "seo-title": "CV Constructor Studio | Professional Resume Workspace",
        "seo-description": "Build premium, ATS-friendly, and professional CVs online. Free, secure, and customizable resume builder with high-fidelity vector PDF export.",
        "seo-keywords": "CV builder, resume creator, professional CV, ATS friendly resume, online CV constructor, resume workspace, cv maker",
        
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

        "layout-sect-page": "Page Structure",
        "layout-sect-header": "Header Style",
        "layout-density": "Content Density",
        "density-compact": "Compact",
        "density-normal": "Normal",
        "density-spacious": "Spacious",
        "layout-align": "Header Alignment",
        "align-left": "Left",
        "align-center": "Centered",
        "align-right": "Right",
        "layout-icons": "Contact Icons",
        "icons-left": "Left",
        "icons-hidden": "Hidden",
        "icons-right": "Right",
        "layout-columns": "Columns Layout",
        "cols-1": "1 Column",
        "cols-2": "2 Columns",

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
        "btn-load-cv": "Load Project",

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
        "help-language-line": "Changing the language does not automatically translate the content of an existing CV. To translate standard sections, create a new CV or edit them manually.",
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
        "privacy-message": "This website does not collect or track your personal data. All your CV data is stored locally in your browser.",
        "help-author-title": "About the Author",
        "help-author-tagline": "Mobile, Full-Stack & Data Developer",
        "help-author-link-website": "Website",
        "mobile-overlay-title": "Mobile version not supported",
        "mobile-overlay-desc": "Mobile version is currently not supported. Please open the application on a desktop or laptop computer.",

        // Toasts & Alerts
        "toast-export-html": "CV exported to HTML ✓",
        "toast-pdf-generating": "Generating PDF on the server...",
        "toast-pdf-failed": "Failed. Opening local print dialog...",
        "toast-print-info": "Use 'Save as PDF' in the dialog box",
        "toast-loaded": "CV loaded: ",
        "toast-error": "Error: ",
        "confirm-delete-item": "Delete this item?",
        "confirm-new-cv": "Create a new CV? Unexported changes will be lost.",
        "toast-new-cv-created": "New CV created ✨",
        "btn-add-experience": "+ Add an experience",
        "btn-add-project": "+ Add a project",
        "btn-add-contact": "+ Contact",
        "btn-add-skill-group": "+ Add a skill group",
        "btn-add-education": "+ Add education",
        "btn-add-certification": "+ Add a certification",
        "btn-add-quality": "+ Add a personal quality",
        "btn-add-language": "+ Add a language",
        "empty-section": "No items",
        "prompt-contact-url": "Link URL (empty = no link):",
        "no-icons-found": "No icons found",
        
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
        // SEO metadata
        "seo-title": "CV Constructor Studio | Конструктор Профессиональных Резюме Онлайн",
        "seo-description": "Создайте профессиональное, современное и ATS-совместимое резюме онлайн. Бесплатный, безопасный и настраиваемый конструктор резюме с качественным экспортом в векторный PDF.",
        "seo-keywords": "создать резюме, конструктор резюме, резюме онлайн, бесплатное резюме, профессиональное резюме, резюме для ит, cv maker, cv builder",
        
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

        "layout-sect-page": "Структура страницы",
        "layout-sect-header": "Стиль шапки",
        "layout-density": "Плотность контента",
        "density-compact": "Компакт",
        "density-normal": "Обычный",
        "density-spacious": "Простор",
        "layout-align": "Выравнивание шапки",
        "align-left": "По левому краю",
        "align-center": "По центру",
        "align-right": "По правому краю",
        "layout-icons": "Иконки контактов",
        "icons-left": "Слева",
        "icons-hidden": "Скрыты",
        "icons-right": "Справа",
        "layout-columns": "Колонки",
        "cols-1": "1 колонка",
        "cols-2": "2 колонки",

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
        "btn-load-cv": "Загрузить проект",

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
        "help-language-line": "Смена языка не переводит автоматически содержание уже существующего резюме. Чтобы перевести стандартные разделы, создайте новое резюме или отредактируйте их вручную.",
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
        "privacy-message": "Этот сайт не собирает и не отслеживает ваши личные данные. Все данные вашего резюме хранятся локально в вашем браузере.",
        "help-author-title": "Об авторе",
        "help-author-tagline": "Разработчик мобильных приложений, Full-Stack и Data",
        "help-author-link-website": "Сайт",
        "mobile-overlay-title": "Мобильная версия не поддерживается",
        "mobile-overlay-desc": "Мобильная версия в настоящий момент не поддерживается. Пожалуйста, откройте приложение на компьютере или ноутбуке.",

        // Toasts & Alerts
        "toast-export-html": "Резюме экспортировано в HTML ✓",
        "toast-pdf-generating": "Генерация PDF на сервере...",
        "toast-pdf-failed": "Не удалось. Открытие встроенной печати...",
        "toast-print-info": "Используйте «Сохранить как PDF» в открывшемся окне печати",
        "toast-loaded": "Резюме загружено: ",
        "toast-error": "Ошибка: ",
        "confirm-delete-item": "Удалить этот элемент?",
        "confirm-new-cv": "Создать новое резюме? Несохраненные изменения будут потеряны.",
        "toast-new-cv-created": "Создано новое резюме ✨",
        "btn-add-experience": "+ Добавить опыт работы",
        "btn-add-project": "+ Добавить проект",
        "btn-add-contact": "+ Добавить контакт",
        "btn-add-skill-group": "+ Добавить группу навыков",
        "btn-add-education": "+ Добавить образование",
        "btn-add-certification": "+ Добавить сертификат",
        "btn-add-quality": "+ Добавить личное качество",
        "btn-add-language": "+ Добавить язык",
        "empty-section": "Нет элементов",
        "prompt-contact-url": "URL ссылки (пусто = без ссылки):",
        "no-icons-found": "Иконки не найдены",
        
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

    // Dynamically update SEO metadata tags
    const title = TRANSLATIONS[lang]["seo-title"];
    const desc = TRANSLATIONS[lang]["seo-description"];
    const keywords = TRANSLATIONS[lang]["seo-keywords"];

    if (title) document.title = title;
    
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag && desc) descTag.setAttribute('content', desc);

    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag && keywords) keywordsTag.setAttribute('content', keywords);

    // Update Open Graph and Twitter cards
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && desc) ogDesc.setAttribute('content', desc);

    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && title) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc && desc) twitterDesc.setAttribute('content', desc);
}

// Function to translate custom string keys on-the-fly (e.g. for dynamic alerts, confirm popups)
function t(key) {
    return TRANSLATIONS[currentLang]?.[key] || key;
}

// Initialize language from URL, LocalStorage or browser default
function initLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    let lang = 'fr'; // default
    if (urlLang && TRANSLATIONS[urlLang]) {
        lang = urlLang;
        localStorage.setItem('cv_studio_lang', lang);
    } else {
        const saved = localStorage.getItem('cv_studio_lang');
        const system = navigator.language || navigator.userLanguage;
        if (saved && TRANSLATIONS[saved]) {
            lang = saved;
        } else if (system) {
            const code = system.split('-')[0].toLowerCase();
            if (TRANSLATIONS[code]) {
                lang = code;
            }
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

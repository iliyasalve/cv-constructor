/* ==========================================
   CONSTANTS
   ========================================== */
const COLOR_PRESETS = [
    '#0284c7','#2563eb','#0d9488','#4f46e5','#059669','#e11d48','#d97706','#7c3aed'
];

const DEFAULT_CV = {
    hiddenSections: [],
    name: 'Votre Nom',
    title: 'Titre du Poste',
    summary: 'Décrivez votre profil professionnel, vos compétences clés et vos objectifs de carrière en quelques phrases.',
    accentColor: '#2563eb',
    contacts: [
        { icon: 'fa-solid fa-location-dot', text: 'Ville, Pays', url: '' },
        { icon: 'fa-solid fa-phone', text: '00 00 00 00 00', url: '' },
        { icon: 'fa-solid fa-envelope', text: 'email@example.com', url: 'mailto:email@example.com' },
        { icon: 'fa-solid fa-globe', text: 'votresite.com', url: 'https://votresite.com' },
        { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/in/votre-nom', url: 'https://linkedin.com/in/votre-nom' }
    ],
    experienceTitle: 'Expériences Professionnelles',
    experiences: [{
        role: 'Titre du Poste',
        company: 'Entreprise',
        location: 'Ville, Pays',
        dates: 'Mois Année – Présent',
        bullets: [
            'Description de votre réalisation ou responsabilité principale.',
            'Autre réalisation ou compétence démontrée dans ce poste.'
        ]
    }],
    projectsTitle: 'Projets',
    projects: [],
    skillsTitle: 'Compétences',
    skills: [
        { title: 'Catégorie 1', tags: 'Compétence A, Compétence B, Compétence C' },
        { title: 'Catégorie 2', tags: 'Compétence D, Compétence E' }
    ],
    educationTitle: 'Diplômes et Formations',
    education: [
        { title: 'Nom du Diplôme', institution: 'Établissement', dates: '2020 – 2024' }
    ],
    certificationsTitle: 'Certifications',
    certifications: [],
    qualitiesTitle: 'Qualités Personnelles',
    qualities: ['Qualité 1', 'Qualité 2', 'Qualité 3'],
    languagesTitle: 'Langues',
    languages: [
        { name: 'Français', level: 'Natif' },
        { name: 'Anglais', level: 'Intermédiaire' }
    ]
};

const EXPORT_CSS = `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
    --primary: #0f172a;
    --accent: __ACCENT__;
    --accent-light: __ACCENT_LIGHT__;
    --text-main: #334155;
    --text-dark: #0f172a;
    --border: #e2e8f0;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: 'Outfit', sans-serif;
    color: var(--text-main);
    background-color: #f8fafc;
    line-height: 1.4;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}

.cv-container {
    width: 210mm; height: 297mm; background-color: #ffffff;
    margin: 20px auto; padding: 10mm 12mm;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    display: flex; flex-direction: column; overflow: hidden; position: relative;
}

.header {
    display: flex; justify-content: space-between; align-items: flex-start;
    border-bottom: 2px solid var(--border); padding-bottom: 10px; margin-bottom: 12px;
}
.header-left { flex: 1; padding-right: 20px; }
.name { font-size: 28px; font-weight: 700; color: var(--primary); letter-spacing: -0.5px; text-transform: uppercase; }
.title { font-size: 16px; font-weight: 600; color: var(--accent); margin-top: 2px; text-transform: uppercase; letter-spacing: 0.5px; }
.summary { font-size: 12px; color: var(--text-main); margin-top: 6px; text-align: justify; line-height: 1.45; }
.header-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; font-size: 11.5px; min-width: 190px; padding-top: 38px; }
.contact-item { color: var(--text-main); text-decoration: none; display: flex; align-items: center; gap: 5px; }
.contact-item a { color: var(--accent); text-decoration: none; font-weight: 500; }
.contact-item a:hover { text-decoration: underline; }

.contact-item i {
    font-size: 11.5px;
    width: 16px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}

.main-content { display: flex; flex: 1; gap: 20px; min-height: 0; }
.col-left { width: 61%; display: flex; flex-direction: column; gap: 12px; }
.col-right { width: 39%; display: flex; flex-direction: column; gap: 12px; border-left: 1px solid var(--border); padding-left: 18px; }

.section-title { font-size: 13.5px; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1.5px solid var(--border); padding-bottom: 3px; margin-bottom: 8px; }

.item { margin-bottom: 8px; }
.item:last-child { margin-bottom: 0; }
.item-header { display: flex; justify-content: space-between; align-items: baseline; font-weight: 600; font-size: 13px; color: var(--text-dark); }
.item-role { font-weight: 600; color: var(--text-dark); }
.item-company { color: var(--accent); font-weight: 600; white-space: nowrap; }
.item-meta { display: flex; justify-content: space-between; font-size: 10.5px; color: #64748b; margin-top: 1px; margin-bottom: 4px; }

.item-bullets { list-style-type: none; padding-left: 0; }
.item-bullets li { font-size: 11.5px; position: relative; padding-left: 10px; margin-bottom: 4px; text-align: justify; line-height: 1.4; }
.item-bullets li::before { content: "•"; color: var(--accent); font-weight: bold; position: absolute; left: 0; top: 0; }

.skills-list { display: flex; flex-direction: column; gap: 6px; }
.skill-group { font-size: 11.5px; line-height: 1.35; }
.skill-group-title { font-weight: 600; color: var(--text-dark); margin-bottom: 1px; }
.skill-group-tags { color: var(--text-main); }

.edu-item { margin-bottom: 6px; font-size: 11.5px; }
.edu-item:last-child { margin-bottom: 0; }
.edu-title { font-weight: 600; color: var(--text-dark); }
.edu-meta { display: flex; justify-content: space-between; font-size: 10.5px; color: #64748b; }

@media print {
    body { background-color: #ffffff; }
    .cv-container { margin: 0; box-shadow: none; padding: 10mm 12mm; width: 210mm; height: 297mm; }
}
.section-hidden { display: none !important; }`;

let cvData = null;
Object.defineProperty(window, 'cvData', {
    get: function() { return cvData; },
    set: function(val) { cvData = val; },
    configurable: true
});
let skipNextSync = false;

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */
function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

function setNested(obj, path, value) {
    const keys = path.split('.');
    let cur = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const k = isNaN(keys[i]) ? keys[i] : parseInt(keys[i]);
        if (cur[k] === undefined) return;
        cur = cur[k];
    }
    const last = isNaN(keys[keys.length - 1]) ? keys[keys.length - 1] : parseInt(keys[keys.length - 1]);
    cur[last] = value;
}

function getAccentLight(hex) {
    try {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const lr = Math.round(r + (255 - r) * 0.94);
        const lg = Math.round(g + (255 - g) * 0.96);
        const lb = Math.round(b + (255 - b) * 0.95);
        return '#' + [lr, lg, lb].map(v => v.toString(16).padStart(2, '0')).join('');
    } catch { return '#eff6ff'; }
}

function esc(str) {
    if (!str) return '';
    return str;
}

function showToast(msg, type = 'success') {
    const t = document.createElement('div');
    t.className = 'toast toast-' + type;
    t.textContent = msg;
    document.getElementById('toast-container').appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

/* ==========================================
   RENDER FUNCTIONS
   ========================================== */
function renderCV(doSkipSync) {
    if (!doSkipSync) syncFromDOM();

    const c = document.getElementById('cv-container');
    c.innerHTML = renderHeader() + renderMainContent();
    applyAccentColor();
    if (typeof updateStructurePanel === 'function') {
        updateStructurePanel();
    }
}

function renderHeader() {
    const d = cvData;
    return `
    <div class="header">
        <div class="header-left">
            <h1 class="name" contenteditable="true" data-path="name" data-placeholder="Votre nom">${esc(d.name)}</h1>
            <h2 class="cv-title" contenteditable="true" data-path="title" data-placeholder="Titre du poste">${esc(d.title)}</h2>
            <p class="summary" contenteditable="true" data-path="summary" data-html="1" data-placeholder="Résumé professionnel...">${d.summary || ''}</p>
        </div>
        <div class="header-right">
            ${d.contacts.map((ct, i) => renderContact(ct, i)).join('')}
            <button class="add-btn" data-action="add-contact" style="font-size:10px;padding:4px 8px;margin-top:4px;">+ Contact</button>
        </div>
    </div>`;
}

function renderContact(ct, i) {
    return `
    <div class="contact-item" style="position:relative;">
        <span class="contact-emoji" data-index="${i}" style="min-width:16px;text-align:center;cursor:pointer;user-select:none;display:inline-flex;align-items:center;" title="Changer l'icône"><i class="${ct.icon || 'fa-solid fa-location-dot'}"></i></span>
        <span contenteditable="true" data-path="contacts.${i}.text" data-placeholder="Texte">${esc(ct.text)}</span>
        <div class="contact-actions">
            <button data-action="edit-link" data-index="${i}" title="Modifier le lien URL">🔗</button>
            <button class="btn-danger" data-action="remove-contact" data-index="${i}" title="Supprimer">✕</button>
        </div>
    </div>`;
}

function renderMainContent() {
    return `
    <div class="main-content">
        <div class="col-left">
            ${renderLeftSection('experiences', cvData.experienceTitle)}
            ${renderLeftSection('projects', cvData.projectsTitle)}
        </div>
        <div class="col-right">
            ${renderSkillsSection()}
            ${renderEduSection('education', cvData.educationTitle)}
            ${renderEduSection('certifications', cvData.certificationsTitle)}
            ${renderQualitiesSection()}
            ${renderLanguagesSection()}
        </div>
    </div>`;
}

function renderLeftSection(section, sectionTitle) {
    const items = cvData[section];
    const titlePath = section === 'experiences' ? 'experienceTitle' : 'projectsTitle';
    const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes(section);
    return `
    <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="${section}">
        <h3 class="section-title" contenteditable="true" data-path="${titlePath}" data-placeholder="Titre de section">${esc(sectionTitle)}</h3>
        ${items.length > 0 ? items.map((item, i) => renderItem(item, section, i)).join('') : '<div class="section-empty">Aucun élément</div>'}
        <button class="add-btn" data-action="add-item" data-section="${section}">+ Ajouter ${section === 'experiences' ? 'une expérience' : 'un projet'}</button>
    </div>`;
}

function renderItem(item, section, index) {
    return `
    <div class="item cv-editable">
        <div class="item-actions">
            <button data-action="move-up" data-section="${section}" data-index="${index}" title="Monter">▲</button>
            <button data-action="move-down" data-section="${section}" data-index="${index}" title="Descendre">▼</button>
            <button class="btn-danger" data-action="remove-item" data-section="${section}" data-index="${index}" title="Supprimer">✕</button>
        </div>
        <div class="item-header">
            <span class="item-role" contenteditable="true" data-path="${section}.${index}.role" data-placeholder="Poste / Titre">${esc(item.role)}</span>
            <span class="item-company" contenteditable="true" data-path="${section}.${index}.company" data-placeholder="Entreprise">${esc(item.company)}</span>
        </div>
        <div class="item-meta">
            <span contenteditable="true" data-path="${section}.${index}.location" data-placeholder="Lieu">${esc(item.location)}</span>
            <span contenteditable="true" data-path="${section}.${index}.dates" data-placeholder="Dates">${esc(item.dates)}</span>
        </div>
        <ul class="item-bullets">
            ${item.bullets.map((b, bi) => `
            <li style="position:relative;padding-right:22px;">
                <span class="bullet-content" contenteditable="true" data-path="${section}.${index}.bullets.${bi}" data-html="1" data-placeholder="Description...">${b}</span>
                <button class="bullet-remove-btn" data-action="remove-bullet" data-section="${section}" data-index="${index}" data-bullet="${bi}" title="Supprimer">✕</button>
            </li>`).join('')}
        </ul>
        <button class="add-bullet-btn" data-action="add-bullet" data-section="${section}" data-index="${index}">+ Point</button>
    </div>`;
}

function renderSkillsSection() {
    const d = cvData;
    const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('skills');
    return `
    <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="skills">
        <h3 class="section-title" contenteditable="true" data-path="skillsTitle" data-placeholder="Compétences">${esc(d.skillsTitle)}</h3>
        <div class="skills-list">
            ${d.skills.map((s, i) => `
            <div class="skill-group cv-editable" style="position:relative;">
                <button class="inline-remove-btn btn-danger" data-action="remove-skill" data-index="${i}" title="Supprimer">✕</button>
                <div class="skill-group-title" contenteditable="true" data-path="skills.${i}.title" data-placeholder="Catégorie">${esc(s.title)}</div>
                <div class="skill-group-tags" contenteditable="true" data-path="skills.${i}.tags" data-placeholder="Compétence 1, Compétence 2...">${esc(s.tags)}</div>
            </div>`).join('')}
        </div>
        <button class="add-btn" data-action="add-skill">+ Ajouter un groupe de compétences</button>
    </div>`;
}

function renderEduSection(section, sectionTitle) {
    const items = cvData[section];
    const titlePath = section === 'education' ? 'educationTitle' : 'certificationsTitle';
    const label = section === 'education' ? 'une formation' : 'une certification';
    const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes(section);
    return `
    <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="${section}">
        <h3 class="section-title" contenteditable="true" data-path="${titlePath}" data-placeholder="Titre">${esc(sectionTitle)}</h3>
        ${items.map((item, i) => `
        <div class="edu-item cv-editable" style="position:relative;">
            <button class="inline-remove-btn btn-danger" data-action="remove-${section === 'education' ? 'education' : 'certification'}" data-index="${i}" title="Supprimer">✕</button>
            <div class="edu-title" contenteditable="true" data-path="${section}.${i}.title" data-placeholder="Titre du diplôme">${esc(item.title)}</div>
            <div class="edu-meta">
                <span contenteditable="true" data-path="${section}.${i}.institution" data-placeholder="Établissement">${esc(item.institution)}</span>
                <span contenteditable="true" data-path="${section}.${i}.dates" data-placeholder="Dates">${esc(item.dates)}</span>
            </div>
        </div>`).join('')}
        ${items.length === 0 ? '<div class="section-empty">Aucun élément</div>' : ''}
        <button class="add-btn" data-action="add-${section === 'education' ? 'education' : 'certification'}">+ Ajouter ${label}</button>
    </div>`;
}

function renderQualitiesSection() {
    const d = cvData;
    const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('qualities');
    return `
    <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="qualities">
        <h3 class="section-title" contenteditable="true" data-path="qualitiesTitle" data-placeholder="Qualités">${esc(d.qualitiesTitle)}</h3>
        <div class="qualities-list">
            ${d.qualities.map((q, i) => `
            <div class="quality-item cv-editable" style="position:relative;">
                <button class="inline-remove-btn btn-danger" data-action="remove-quality" data-index="${i}" title="Supprimer" style="right:-22px;top:0;">✕</button>
                <span contenteditable="true" data-path="qualities.${i}" data-placeholder="Qualité">${esc(q)}</span>
            </div>`).join('')}
        </div>
        ${d.qualities.length === 0 ? '<div class="section-empty">Aucun élément</div>' : ''}
        <button class="add-btn" data-action="add-quality">+ Ajouter une qualité</button>
    </div>`;
}

function renderLanguagesSection() {
    const d = cvData;
    const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('languages');
    return `
    <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="languages">
        <h3 class="section-title" contenteditable="true" data-path="languagesTitle" data-placeholder="Langues">${esc(d.languagesTitle)}</h3>
        <div class="languages-list">
            ${d.languages.map((l, i) => `
            <div class="language-item cv-editable" style="position:relative;">
                <button class="inline-remove-btn btn-danger" data-action="remove-language" data-index="${i}" title="Supprimer" style="right:-22px;top:0;">✕</button>
                <strong><span contenteditable="true" data-path="languages.${i}.name" data-placeholder="Langue">${esc(l.name)}</span> :</strong>
                <span contenteditable="true" data-path="languages.${i}.level" data-placeholder="Niveau">${esc(l.level)}</span>
            </div>`).join('')}
        </div>
        ${d.languages.length === 0 ? '<div class="section-empty">Aucun élément</div>' : ''}
        <button class="add-btn" data-action="add-language">+ Ajouter une langue</button>
    </div>`;
}

/* ==========================================
   SYNC (DOM → Data Model)
   ========================================== */
function syncFromDOM() {
    const c = document.getElementById('cv-container');
    if (!c || !c.children.length) return;
    c.querySelectorAll('[data-path]').forEach(el => syncField(el));
}

function syncField(el) {
    const path = el.dataset.path;
    if (!path) return;
    let value;
    if (el.dataset.html !== undefined && el.dataset.html !== '') {
        value = el.innerHTML.trim();
        if (value === '<br>' || value === '<br/>') value = '';
    } else {
        value = el.textContent.trim();
    }
    setNested(cvData, path, value);
}

/* ==========================================
   ACCENT COLOR
   ========================================== */
function applyAccentColor() {
    const c = document.getElementById('cv-container');
    c.style.setProperty('--accent', cvData.accentColor);
    c.style.setProperty('--accent-light', getAccentLight(cvData.accentColor));

    document.querySelectorAll('.color-swatch').forEach(s => {
        s.classList.toggle('active', s.dataset.color === cvData.accentColor);
    });
    document.getElementById('custom-color').value = cvData.accentColor;
}

/* ==========================================
   ACTION HANDLERS
   ========================================== */
function handleAction(btn) {
    const action = btn.dataset.action;
    const section = btn.dataset.section;
    const index = btn.dataset.index !== undefined ? parseInt(btn.dataset.index) : -1;

    syncFromDOM();

    switch (action) {
        case 'add-item':
            cvData[section].push({ role: '', company: '', location: '', dates: '', bullets: [''] });
            break;
        case 'remove-item':
            if (confirm('Supprimer cet élément ?')) cvData[section].splice(index, 1);
            else return;
            break;
        case 'move-up':
            if (index > 0) [cvData[section][index], cvData[section][index - 1]] = [cvData[section][index - 1], cvData[section][index]];
            break;
        case 'move-down':
            if (index < cvData[section].length - 1) [cvData[section][index], cvData[section][index + 1]] = [cvData[section][index + 1], cvData[section][index]];
            break;
        case 'add-bullet':
            cvData[section][index].bullets.push('');
            break;
        case 'remove-bullet': {
            const bi = parseInt(btn.dataset.bullet);
            cvData[section][index].bullets.splice(bi, 1);
            break;
        }
        case 'add-contact':
            cvData.contacts.push({ icon: 'fa-solid fa-location-dot', text: '', url: '' });
            break;
        case 'remove-contact':
            cvData.contacts.splice(index, 1);
            break;
        case 'edit-link': {
            const ct = cvData.contacts[index];
            const url = prompt('URL du lien (vide = aucun lien) :', ct.url || '');
            if (url !== null) ct.url = url;
            break;
        }
        case 'add-skill':
            cvData.skills.push({ title: '', tags: '' });
            break;
        case 'remove-skill':
            cvData.skills.splice(index, 1);
            break;
        case 'add-education':
            cvData.education.push({ title: '', institution: '', dates: '' });
            break;
        case 'remove-education':
            cvData.education.splice(index, 1);
            break;
        case 'add-certification':
            cvData.certifications.push({ title: '', institution: '', dates: '' });
            break;
        case 'remove-certification':
            cvData.certifications.splice(index, 1);
            break;
        case 'add-quality':
            cvData.qualities.push('');
            break;
        case 'remove-quality':
            cvData.qualities.splice(index, 1);
            break;
        case 'add-language':
            cvData.languages.push({ name: '', level: '' });
            break;
        case 'remove-language':
            cvData.languages.splice(index, 1);
            break;
        default: return;
    }

    renderCV(true);
    autoSave();
}

/* ==========================================
   EXPORT: Standalone HTML
   ========================================== */
function exportHTML() {
    syncFromDOM();

    const accent = cvData.accentColor;
    const accentLight = getAccentLight(accent);
    const css = EXPORT_CSS.replace('__ACCENT__', accent).replace('__ACCENT_LIGHT__', accentLight);

    const title = `${(cvData.name || 'CV').toUpperCase()} - ${cvData.title || 'CV'}`;

    let html = `<!DOCTYPE html>\n<html lang="fr">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${escHTML(title)}</title>\n    <style>\n        ${css}\n    </style>\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">\n</head>\n<body>\n\n    <div class="cv-container">\n`;

    // Header
    html += `        <!-- Header -->\n        <div class="header">\n            <div class="header-left">\n`;
    html += `                <h1 class="name">${escHTML(cvData.name)}</h1>\n`;
    html += `                <h2 class="title">${escHTML(cvData.title)}</h2>\n`;
    html += `                <p class="summary">\n                    ${cvData.summary}\n                </p>\n`;
    html += `            </div>\n            <div class="header-right">\n`;
    cvData.contacts.forEach(ct => {
        if (ct.url) {
            const target = ct.url.startsWith('mailto:') ? '' : ' target="_blank"';
            html += `                <div class="contact-item"><i class="${ct.icon || 'fa-solid fa-location-dot'}"></i> <a href="${escHTML(ct.url)}"${target}>${escHTML(ct.text)}</a></div>\n`;
        } else {
            html += `                <div class="contact-item"><i class="${ct.icon || 'fa-solid fa-location-dot'}"></i> ${escHTML(ct.text)}</div>\n`;
        }
    });
    html += `            </div>\n        </div>\n\n`;

    // Main content
    html += `        <!-- Two Column Main Content -->\n        <div class="main-content">\n`;

    // Left column
    html += `            <!-- Left Column -->\n            <div class="col-left">\n`;
    // Experiences
    if (cvData.experiences.length > 0) {
        const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('experiences');
        html += `                <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="experiences">\n`;
        html += exportItemSection(cvData.experienceTitle, cvData.experiences);
        html += `                </div>\n`;
    }
    // Projects
    if (cvData.projects.length > 0) {
        const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('projects');
        html += `                <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="projects">\n`;
        html += exportItemSection(cvData.projectsTitle, cvData.projects);
        html += `                </div>\n`;
    }
    html += `            </div>\n\n`;

    // Right column
    html += `            <!-- Right Column -->\n            <div class="col-right">\n`;
    // Skills
    if (cvData.skills.length > 0) {
        const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('skills');
        html += `                <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="skills">\n`;
        html += `                    <h3 class="section-title">${escHTML(cvData.skillsTitle)}</h3>\n                    <div class="skills-list">\n`;
        cvData.skills.forEach(s => {
            html += `                        <div class="skill-group">\n                            <div class="skill-group-title">${escHTML(s.title)}</div>\n                            <div class="skill-group-tags">${escHTML(s.tags)}</div>\n                        </div>\n`;
        });
        html += `                    </div>\n                </div>\n\n`;
    }
    // Education
    if (cvData.education.length > 0) {
        const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('education');
        html += `                <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="education">\n`;
        html += exportEduSection(cvData.educationTitle, cvData.education);
        html += `                </div>\n`;
  }
    // Certifications
    if (cvData.certifications.length > 0) {
        const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('certifications');
        html += `                <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="certifications">\n`;
        html += exportEduSection(cvData.certificationsTitle, cvData.certifications);
        html += `                </div>\n`;
    }
    // Qualities
    if (cvData.qualities.length > 0 && cvData.qualities.some(q => q.trim())) {
        const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('qualities');
        html += `                <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="qualities">\n`;
        html += `                    <h3 class="section-title">${escHTML(cvData.qualitiesTitle)}</h3>\n                    <div style="font-size: 11.5px; line-height: 1.4;">\n`;
        const validQ = cvData.qualities.filter(q => q.trim());
        html += validQ.map((q, i) => `                        • ${escHTML(q)}` + (i < validQ.length - 1 ? '<br>' : '')).join('\n') + '\n';
        html += `                    </div>\n                </div>\n\n`;
    }
    // Languages
    if (cvData.languages.length > 0 && cvData.languages.some(l => l.name.trim())) {
        const isHidden = cvData.hiddenSections && cvData.hiddenSections.includes('languages');
        html += `                <div class="cv-section${isHidden ? ' section-hidden' : ''}" data-section="languages">\n`;
        html += `                    <h3 class="section-title">${escHTML(cvData.languagesTitle)}</h3>\n                    <div style="font-size: 11.5px; line-height: 1.4;">\n`;
        const validL = cvData.languages.filter(l => l.name.trim());
        html += validL.map((l, i) => `                        <strong>${escHTML(l.name)} :</strong> ${escHTML(l.level)}` + (i < validL.length - 1 ? '<br>' : '')).join('\n') + '\n';
        html += `                    </div>\n                </div>\n`;
    }

    html += `            </div>\n        </div>\n    </div>\n\n</body>\n</html>\n`;

    // Download
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safeName = (cvData.name || 'CV').replace(/[^a-zA-ZÀ-ÿ0-9_\- ]/g, '').replace(/\s+/g, '_');
    a.download = `CV_${safeName}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast('CV exporté en HTML ✓');
}

function exportItemSection(title, items) {
    let h = `                <div>\n                    <h3 class="section-title">${escHTML(title)}</h3>\n`;
    items.forEach(item => {
        h += `                    \n                    <div class="item">\n`;
        h += `                        <div class="item-header">\n                            <span class="item-role">${escHTML(item.role)}</span>\n                            <span class="item-company">${escHTML(item.company)}</span>\n                        </div>\n`;
        h += `                        <div class="item-meta">\n                            <span>${escHTML(item.location)}</span>\n                            <span>${escHTML(item.dates)}</span>\n                        </div>\n`;
        if (item.bullets.length > 0 && item.bullets.some(b => b.trim())) {
            h += `                        <ul class="item-bullets">\n`;
            item.bullets.filter(b => b.trim()).forEach(b => {
                h += `                            <li>${b}</li>\n`;
            });
            h += `                        </ul>\n`;
        }
        h += `                    </div>\n`;
    });
    h += `                </div>\n\n`;
    return h;
}

function exportEduSection(title, items) {
    let h = `                <div>\n                    <h3 class="section-title">${escHTML(title)}</h3>\n`;
    items.forEach(item => {
        h += `                    <div class="edu-item">\n                        <div class="edu-title">${escHTML(item.title)}</div>\n                        <div class="edu-meta">\n                            <span>${escHTML(item.institution)}</span>\n                            <span>${escHTML(item.dates)}</span>\n                        </div>\n                    </div>\n`;
    });
    h += `                </div>\n\n`;
    return h;
}

function escHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/* ==========================================
   EXPORT: PDF (via Print)
   ========================================== */
function exportPDF() {
    syncFromDOM();
    showToast('Utilisez « Enregistrer en PDF » dans la boîte de dialogue', 'info');
    setTimeout(() => window.print(), 300);
}

/* ==========================================
   LOAD & PARSE CV
   ========================================== */
function loadFromFile() {
    document.getElementById('file-input').click();
}

function handleFileLoad(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
        try {
            cvData = parseCV(evt.target.result);
            renderCV(true);
            autoSave();
            showToast('CV chargé : ' + file.name);
        } catch (err) {
            showToast('Erreur : ' + err.message, 'error');
            console.error(err);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

function parseCV(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const data = deepClone(DEFAULT_CV);

    // Parse hidden sections
    data.hiddenSections = [];
    doc.querySelectorAll('.cv-section.section-hidden').forEach(sec => {
        const secId = sec.getAttribute('data-section');
        if (secId) {
            data.hiddenSections.push(secId);
        }
    });

    const styleText = doc.querySelector('style')?.textContent || '';
    const accentMatch = styleText.match(/--accent:\s*([^;]+)/);
    if (accentMatch) {
        const val = accentMatch[1].trim();
        if (val.startsWith('#') || val.match(/^[a-z]+$/i)) {
            data.accentColor = val;
        }
    }

    const nameEl = doc.querySelector('.name');
    if (nameEl) data.name = nameEl.textContent.trim();

    const titleEl = doc.querySelector('.title, h2');
    if (titleEl) data.title = titleEl.textContent.trim();

    const summaryEl = doc.querySelector('.summary');
    if (summaryEl) data.summary = summaryEl.innerHTML.trim();

    // Contacts
    const contactEls = doc.querySelectorAll('.header-right .contact-item');
    if (contactEls.length > 0) {
        data.contacts = [];
        contactEls.forEach(el => {
            const link = el.querySelector('a');
            const iconEl = el.querySelector('i[class*="fa-"]');
            let iconClass = iconEl ? iconEl.className : '';
            
            if (!iconClass) {
                // Fallback to check text emoji or old Lucide data-lucide
                const lucideEl = el.querySelector('[data-lucide]');
                const oldLucideName = lucideEl ? lucideEl.getAttribute('data-lucide') : '';
                
                const fullText = el.textContent.trim();
                const emojiRegex = /^([\p{Emoji_Presentation}\p{Emoji}\uFE0F\u200D]+)/u;
                const m = fullText.match(emojiRegex);
                
                if (oldLucideName) {
                    const mapping = {
                        'github': 'fa-brands fa-github',
                        'linkedin': 'fa-brands fa-linkedin',
                        'send': 'fa-brands fa-telegram',
                        'phone': 'fa-solid fa-phone',
                        'globe': 'fa-solid fa-globe',
                        'mail': 'fa-solid fa-envelope',
                        'map-pin': 'fa-solid fa-location-dot',
                        'car': 'fa-solid fa-car',
                        'briefcase': 'fa-solid fa-briefcase',
                        'calendar': 'fa-solid fa-cake-candles',
                        'user': 'fa-solid fa-user',
                        'award': 'fa-solid fa-award',
                        'code': 'fa-solid fa-code',
                        'heart': 'fa-solid fa-heart'
                    };
                    iconClass = mapping[oldLucideName] || 'fa-solid fa-location-dot';
                } else if (m) {
                    const emoji = m[1];
                    const mapping = {
                        '🐙': 'fa-brands fa-github', '🐱': 'fa-brands fa-github', '💻': 'fa-solid fa-code', '🧑‍💻': 'fa-solid fa-code',
                        '💼': 'fa-solid fa-briefcase', '👔': 'fa-solid fa-briefcase',
                        '💬': 'fa-brands fa-telegram', '✈️': 'fa-brands fa-telegram',
                        '📞': 'fa-solid fa-phone', '📱': 'fa-solid fa-phone',
                        '🌐': 'fa-solid fa-globe', '🔗': 'fa-solid fa-globe',
                        '✉️': 'fa-solid fa-envelope', '📧': 'fa-solid fa-envelope',
                        '📍': 'fa-solid fa-location-dot', '🏠': 'fa-solid fa-location-dot',
                        '🚗': 'fa-solid fa-car', '🪪': 'fa-solid fa-car',
                        '🎂': 'fa-solid fa-cake-candles', '📅': 'fa-solid fa-cake-candles',
                        '🌍': 'fa-solid fa-globe', '💍': 'fa-solid fa-heart', '👨‍👩‍👧‍👦': 'fa-solid fa-user', '👶': 'fa-solid fa-user', '🐦': 'fa-brands fa-twitter'
                    };
                    iconClass = mapping[emoji] || 'fa-solid fa-location-dot';
                } else {
                    iconClass = 'fa-solid fa-location-dot';
                }
            }
            const text = link ? link.textContent.trim() : el.textContent.trim().replace(/^[\p{Emoji}\s]+/u, '');
            const url = link ? (link.getAttribute('href') || '') : '';
            data.contacts.push({ icon: iconClass, text, url });
        });
    }

    // Left column sections
    const colLeft = doc.querySelector('.col-left');
    if (colLeft) {
        const sections = colLeft.querySelectorAll(':scope > div');
        let isFirstSection = true;
        sections.forEach(section => {
            const titleEl = section.querySelector('.section-title');
            if (!titleEl) return;
            const items = section.querySelectorAll('.item');
            const parsed = [];
            items.forEach(item => {
                const role = item.querySelector('.item-role')?.textContent.trim() || '';
                const company = item.querySelector('.item-company')?.textContent.trim() || '';
                const metaSpans = item.querySelectorAll('.item-meta span');
                const location = metaSpans[0]?.textContent.trim() || '';
                const dates = metaSpans[1]?.textContent.trim() || '';
                const bulletEls = item.querySelectorAll('.item-bullets li');
                const bullets = Array.from(bulletEls).map(li => li.innerHTML.trim());
                parsed.push({ role, company, location, dates, bullets: bullets.length ? bullets : [''] });
            });

            if (isFirstSection) {
                data.experienceTitle = titleEl.textContent.trim();
                data.experiences = parsed;
                isFirstSection = false;
            } else {
                data.projectsTitle = titleEl.textContent.trim();
                data.projects = parsed;
            }
        });
    }

    // Right column sections
    const colRight = doc.querySelector('.col-right');
    if (colRight) {
        const sections = colRight.querySelectorAll(':scope > div');
        sections.forEach(section => {
            const titleEl = section.querySelector('.section-title');
            if (!titleEl) return;
            const titleText = titleEl.textContent.trim();
            const titleLower = titleText.toLowerCase();

            if (titleLower.includes('compétence')) {
                data.skillsTitle = titleText;
                data.skills = [];
                section.querySelectorAll('.skill-group').forEach(sg => {
                    data.skills.push({
                        title: sg.querySelector('.skill-group-title')?.textContent.trim() || '',
                        tags: sg.querySelector('.skill-group-tags')?.textContent.trim() || ''
                    });
                });
            } else if (titleLower.includes('diplôme') || titleLower.includes('formation')) {
                data.educationTitle = titleText;
                data.education = [];
                section.querySelectorAll('.edu-item').forEach(ei => {
                    data.education.push({
                        title: ei.querySelector('.edu-title')?.textContent.trim() || '',
                        institution: ei.querySelector('.edu-meta span:first-child')?.textContent.trim() || '',
                        dates: ei.querySelector('.edu-meta span:last-child')?.textContent.trim() || ''
                    });
                });
            } else if (titleLower.includes('certification')) {
                data.certificationsTitle = titleText;
                data.certifications = [];
                section.querySelectorAll('.edu-item').forEach(ei => {
                    data.certifications.push({
                        title: ei.querySelector('.edu-title')?.textContent.trim() || '',
                        institution: ei.querySelector('.edu-meta span:first-child')?.textContent.trim() || '',
                        dates: ei.querySelector('.edu-meta span:last-child')?.textContent.trim() || ''
                    });
                });
            } else if (titleLower.includes('qualité')) {
                data.qualitiesTitle = titleText;
                const contentDiv = Array.from(section.children).find(c => !c.classList.contains('section-title'));
                if (contentDiv) {
                    const text = contentDiv.innerHTML;
                    data.qualities = text.split(/<br\s*\/?>/)
                        .map(q => q.replace(/^[\s•·\-–—]+/, '').replace(/&amp;/g, '&').trim())
                        .filter(q => q);
                }
            } else if (titleLower.includes('langue')) {
                data.languagesTitle = titleText;
                const contentDiv = Array.from(section.children).find(c => !c.classList.contains('section-title'));
                if (contentDiv) {
                    data.languages = [];
                    contentDiv.innerHTML.split(/<br\s*\/?>/).forEach(line => {
                        const match = line.match(/<strong>([^<]*?)(?:\s*:)?\s*<\/strong>\s*:?\s*(.+)/i);
                        if (match) {
                            data.languages.push({
                                name: match[1].replace(/\s*:$/, '').trim(),
                                level: match[2].replace(/&amp;/g, '&').trim()
                            });
                        }
                    });
                }
            }
        });
    }

    return data;
}

/* ==========================================
   LOCAL STORAGE
   ========================================== */
const STORAGE_KEY = 'cv_constructor_data';
let saveTimeout = null;

function autoSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        syncFromDOM();
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
        } catch (e) { /* quota exceeded — ignore */ }
    }, 500);
}

function loadFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            cvData = { ...deepClone(DEFAULT_CV), ...parsed };
            
            // Map older emoji or Lucide properties to Font Awesome classes
            if (cvData.contacts) {
                const mapping = {
                    '🐙': 'fa-brands fa-github', '🐱': 'fa-brands fa-github', 'github': 'fa-brands fa-github',
                    '💼': 'fa-solid fa-briefcase', 'briefcase': 'fa-solid fa-briefcase',
                    '💬': 'fa-brands fa-telegram', 'telegram': 'fa-brands fa-telegram', 'send': 'fa-brands fa-telegram',
                    '📞': 'fa-solid fa-phone', 'phone': 'fa-solid fa-phone',
                    '🌐': 'fa-solid fa-globe', 'globe': 'fa-solid fa-globe', '🔗': 'fa-solid fa-globe',
                    '✉️': 'fa-solid fa-envelope', 'mail': 'fa-solid fa-envelope', '📧': 'fa-solid fa-envelope',
                    '📍': 'fa-solid fa-location-dot', 'map-pin': 'fa-solid fa-location-dot', '🏠': 'fa-solid fa-location-dot',
                    '🚗': 'fa-solid fa-car', 'car': 'fa-solid fa-car', '🪪': 'fa-solid fa-car',
                    '🎂': 'fa-solid fa-cake-candles', 'calendar': 'fa-solid fa-cake-candles', '📅': 'fa-solid fa-cake-candles',
                    '🌍': 'fa-solid fa-globe', '💍': 'fa-solid fa-heart', 'heart': 'fa-solid fa-heart',
                    '👨‍👩‍👧‍👦': 'fa-solid fa-user', 'user': 'fa-solid fa-user', '👶': 'fa-solid fa-user',
                    'linkedin': 'fa-brands fa-linkedin', 'fa-brands fa-linkedin-in': 'fa-brands fa-linkedin'
                };
                cvData.contacts.forEach(ct => {
                    if (ct.emoji && !ct.icon) {
                        ct.icon = mapping[ct.emoji] || 'fa-solid fa-location-dot';
                    } else if (ct.icon && !ct.icon.startsWith('fa-')) {
                        ct.icon = mapping[ct.icon] || 'fa-solid fa-location-dot';
                    }
                });
            }
            return true;
        }
    } catch (e) { /* corrupted — ignore */ }
    return false;
}

function showIconPicker(targetEl, contactIndex) {
    document.querySelectorAll('.emoji-picker-popover').forEach(el => el.remove());

    const popover = document.createElement('div');
    popover.className = 'emoji-picker-popover';
    popover.style.position = 'absolute';
    popover.style.zIndex = '1000';
    popover.style.background = 'rgba(15, 15, 30, 0.96)';
    popover.style.backdropFilter = 'blur(16px)';
    popover.style.border = '1px solid rgba(255, 255, 255, 0.15)';
    popover.style.borderRadius = '8px';
    popover.style.padding = '12px';
    popover.style.width = '300px';
    popover.style.maxHeight = '380px';
    popover.style.overflowY = 'auto';
    popover.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    popover.style.display = 'flex';
    popover.style.flexDirection = 'column';
    popover.style.gap = '10px';
    popover.style.scrollbarWidth = 'thin';
    popover.style.scrollbarColor = 'rgba(255,255,255,0.2) rgba(0,0,0,0.1)';
    
    const categories = [
        {
            id: 'all',
            title: 'Toutes',
            shortTitle: 'Toutes'
        },
        {
            id: 'contacts',
            title: 'Contacts principaux',
            shortTitle: 'Contacts',
            icons: [
                { class: 'fa-solid fa-phone', title: 'Téléphone' },
                { class: 'fa-solid fa-envelope', title: 'E-mail' },
                { class: 'fa-solid fa-location-dot', title: 'Adresse' },
                { class: 'fa-solid fa-globe', title: 'Site Web' },
                { class: 'fa-solid fa-user', title: 'Profil' },
                { class: 'fa-solid fa-cake-candles', title: 'Anniversaire' },
                { class: 'fa-solid fa-car', title: 'Permis' }
            ]
        },
        {
            id: 'messageries',
            title: 'Messageries',
            shortTitle: 'Messages',
            icons: [
                { class: 'fa-brands fa-telegram', title: 'Telegram' },
                { class: 'fa-brands fa-whatsapp', title: 'WhatsApp' },
                { class: 'fa-brands fa-weixin', title: 'WeChat' },
                { class: 'fa-brands fa-viber', title: 'Viber' },
                { class: 'fa-brands fa-discord', title: 'Discord' },
                { class: 'fa-brands fa-slack', title: 'Slack' }
            ]
        },
        {
            id: 'reseaux',
            title: 'Réseaux & Dev',
            shortTitle: 'Réseaux',
            icons: [
                { class: 'fa-brands fa-linkedin', title: 'LinkedIn' },
                { class: 'fa-brands fa-github', title: 'GitHub' },
                { class: 'fa-brands fa-gitlab', title: 'GitLab' },
                { class: 'fa-brands fa-stack-overflow', title: 'Stack Overflow' },
                { class: 'fa-solid fa-code', title: 'Code' },
                { class: 'fa-solid fa-graduation-cap', title: 'Google Scholar' }
            ]
        },
        {
            id: 'creatif',
            title: 'Créatif & Contenu',
            shortTitle: 'Créatif',
            icons: [
                { class: 'fa-brands fa-behance', title: 'Behance' },
                { class: 'fa-brands fa-dribbble', title: 'Dribbble' },
                { class: 'fa-solid fa-briefcase', title: 'Portfolio' },
                { class: 'fa-brands fa-medium', title: 'Medium' },
                { class: 'fa-solid fa-pen-nib', title: 'Habr / Blog' }
            ]
        },
        {
            id: 'loisirs',
            title: 'Loisirs & Autres',
            shortTitle: 'Loisirs',
            icons: [
                { class: 'fa-brands fa-x-twitter', title: 'Twitter / X' },
                { class: 'fa-brands fa-youtube', title: 'YouTube' },
                { class: 'fa-brands fa-instagram', title: 'Instagram' },
                { class: 'fa-solid fa-award', title: 'Certification' },
                { class: 'fa-solid fa-book', title: 'Loisirs / Études' },
                { class: 'fa-solid fa-heart', title: 'Intérêts' }
            ]
        }
    ];

    // Search bar container (sticky at top)
    const searchContainer = document.createElement('div');
    searchContainer.style.position = 'sticky';
    searchContainer.style.top = '0';
    searchContainer.style.background = 'rgba(15, 15, 30, 0.96)';
    searchContainer.style.zIndex = '10';
    searchContainer.style.paddingBottom = '8px';
    searchContainer.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Rechercher une icône...';
    searchInput.style.width = '100%';
    searchInput.style.padding = '6px 10px';
    searchInput.style.border = '1px solid rgba(255, 255, 255, 0.15)';
    searchInput.style.borderRadius = '6px';
    searchInput.style.background = 'rgba(255, 255, 255, 0.05)';
    searchInput.style.color = '#fff';
    searchInput.style.fontSize = '12px';
    searchInput.style.outline = 'none';
    searchInput.style.boxSizing = 'border-box';
    searchInput.style.fontFamily = 'inherit';
    searchContainer.appendChild(searchInput);

    // Tabs container
    const tabsContainer = document.createElement('div');
    tabsContainer.style.display = 'flex';
    tabsContainer.style.flexWrap = 'wrap';
    tabsContainer.style.gap = '4px';
    tabsContainer.style.marginTop = '8px';

    let activeTabId = 'all';

    const tabButtons = [];
    categories.forEach(cat => {
        const tabBtn = document.createElement('button');
        tabBtn.textContent = cat.shortTitle;
        tabBtn.style.padding = '3px 8px';
        tabBtn.style.fontSize = '10.5px';
        tabBtn.style.border = 'none';
        tabBtn.style.borderRadius = '4px';
        tabBtn.style.cursor = 'pointer';
        tabBtn.style.background = cat.id === activeTabId ? 'rgba(99, 102, 241, 0.3)' : 'transparent';
        tabBtn.style.color = cat.id === activeTabId ? '#fff' : '#94a3b8';
        tabBtn.style.transition = 'all 0.2s';
        tabBtn.style.fontWeight = '500';

        tabBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            activeTabId = cat.id;
            tabButtons.forEach(btn => {
                const isCurrent = btn.dataset.id === activeTabId;
                btn.style.background = isCurrent ? 'rgba(99, 102, 241, 0.3)' : 'transparent';
                btn.style.color = isCurrent ? '#fff' : '#94a3b8';
            });
            updateList();
        });

        tabBtn.dataset.id = cat.id;
        tabButtons.push(tabBtn);
        tabsContainer.appendChild(tabBtn);
    });

    searchContainer.appendChild(tabsContainer);
    popover.appendChild(searchContainer);

    // Icon list container
    const listContainer = document.createElement('div');
    listContainer.style.display = 'flex';
    listContainer.style.flexDirection = 'column';
    listContainer.style.gap = '12px';
    popover.appendChild(listContainer);

    function updateList() {
        listContainer.innerHTML = '';
        const searchVal = searchInput.value.toLowerCase().trim();

        const categoriesToRender = categories.filter(c => c.id !== 'all' && (activeTabId === 'all' || activeTabId === c.id));
        let matchCount = 0;

        categoriesToRender.forEach(cat => {
            const filteredIcons = cat.icons.filter(icon => {
                if (!searchVal) return true;
                return icon.title.toLowerCase().includes(searchVal) || icon.class.toLowerCase().includes(searchVal);
            });

            if (filteredIcons.length === 0) return;
            matchCount += filteredIcons.length;

            const catBox = document.createElement('div');
            catBox.style.display = 'flex';
            catBox.style.flexDirection = 'column';
            catBox.style.gap = '6px';

            const header = document.createElement('div');
            header.textContent = cat.title;
            header.style.fontSize = '9px';
            header.style.textTransform = 'uppercase';
            header.style.color = '#94a3b8';
            header.style.fontWeight = '700';
            header.style.letterSpacing = '0.5px';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
            header.style.paddingBottom = '3px';
            header.style.marginBottom = '2px';
            catBox.appendChild(header);

            const grid = document.createElement('div');
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
            grid.style.gap = '6px';

            filteredIcons.forEach(icon => {
                const btn = document.createElement('button');
                btn.innerHTML = `<i class="${icon.class}" style="font-size:15px;color:#fff;"></i>`;
                btn.style.background = 'transparent';
                btn.style.border = 'none';
                btn.style.cursor = 'pointer';
                btn.style.padding = '6px';
                btn.style.borderRadius = '4px';
                btn.style.transition = 'background 0.2s';
                btn.style.display = 'flex';
                btn.style.alignItems = 'center';
                btn.style.justifyContent = 'center';
                btn.title = icon.title;

                btn.addEventListener('mouseover', () => {
                    btn.style.background = 'rgba(255,255,255,0.1)';
                });
                btn.addEventListener('mouseout', () => {
                    btn.style.background = 'transparent';
                });

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    cvData.contacts[contactIndex].icon = icon.class;
                    renderCV(true);
                    autoSave();
                    popover.remove();
                });

                grid.appendChild(btn);
            });

            catBox.appendChild(grid);
            listContainer.appendChild(catBox);
        });

        if (matchCount === 0) {
            const noResult = document.createElement('div');
            noResult.textContent = 'Aucune icône trouvée';
            noResult.style.color = '#94a3b8';
            noResult.style.fontSize = '12px';
            noResult.style.textAlign = 'center';
            noResult.style.padding = '12px 0';
            listContainer.appendChild(noResult);
        }
    }

    searchInput.addEventListener('input', updateList);

    // Initial render
    updateList();

    document.body.appendChild(popover);

    const rect = targetEl.getBoundingClientRect();
    const top = rect.bottom + window.scrollY + 6;
    const left = rect.left + window.scrollX - 10;

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;

    const closePicker = (e) => {
        if (!popover.contains(e.target) && e.target !== targetEl) {
            popover.remove();
            document.removeEventListener('click', closePicker);
        }
    };
    setTimeout(() => document.addEventListener('click', closePicker), 10);
}

/* ==========================================
   EVENT LISTENERS
   ========================================== */
function setupEvents() {
    const cv = document.getElementById('cv-container');

    cv.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            handleAction(btn);
            return;
        }

        const emojiBtn = e.target.closest('.contact-emoji');
        if (emojiBtn) {
            e.preventDefault();
            e.stopPropagation();
            const idx = parseInt(emojiBtn.dataset.index);
            showIconPicker(emojiBtn, idx);
        }
    });

    cv.addEventListener('focusout', (e) => {
        const el = e.target.closest('[data-path]');
        if (el) {
            if (el.textContent.trim() === '' || el.innerHTML.trim() === '<br>') {
                el.innerHTML = '';
            }
            syncField(el);
            autoSave();
        }
    });

    cv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.matches('[contenteditable]')) {
            const el = e.target;
            if (el.classList.contains('summary') && e.shiftKey) return;
            if (el.classList.contains('bullet-content') && e.shiftKey) return;
            e.preventDefault();
            el.blur();
        }
    });

    document.getElementById('btn-new').addEventListener('click', () => {
        if (confirm('Créer un nouveau CV ? Les modifications non exportées seront perdues.')) {
            cvData = deepClone(DEFAULT_CV);
            renderCV(true);
            autoSave();
            showToast('Nouveau CV créé ✨');
        }
    });

    document.getElementById('btn-load').addEventListener('click', loadFromFile);
    document.getElementById('file-input').addEventListener('change', handleFileLoad);
    document.getElementById('btn-export-html').addEventListener('click', exportHTML);
    document.getElementById('btn-export-pdf').addEventListener('click', exportPDF);

    document.getElementById('color-options').addEventListener('click', (e) => {
        const swatch = e.target.closest('.color-swatch');
        if (swatch) {
            cvData.accentColor = swatch.dataset.color;
            applyAccentColor();
            autoSave();
        }
    });

    document.getElementById('custom-color').addEventListener('input', (e) => {
        cvData.accentColor = e.target.value;
        applyAccentColor();
        autoSave();
    });

    cv.addEventListener('input', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => autoSave(), 1000);
    });
}

/* ==========================================
   INIT
   ========================================== */
function init() {
    if (!loadFromStorage()) {
        cvData = deepClone(DEFAULT_CV);
    }
    setupEvents();
    renderCV(true);
    applyAccentColor();
}

// Expose functions to window
window.renderCV = renderCV;
window.autoSave = autoSave;

document.addEventListener('DOMContentLoaded', init);

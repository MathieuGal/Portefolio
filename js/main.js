import { personalInfo, skills, projects, veille, formation } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPersonalInfo();
    loadSkills(); // Si sur la page d'accueil
    loadProjects(); // Si sur la page projets
    loadVeille(); // Si sur la page veille
    loadFormation(); // Si sur la page formation
    loadProjectDetails(); // Si sur la page détails
});

function loadPersonalInfo() {
    // Header & Footer
    const nameElements = document.querySelectorAll('.user-name');
    nameElements.forEach(el => el.textContent = personalInfo.name);

    const titleElements = document.querySelectorAll('.user-title');
    titleElements.forEach(el => el.textContent = personalInfo.title);

    // Hero Section (Home)
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = personalInfo.heroTitle;

    const heroDesc = document.getElementById('hero-desc');
    if (heroDesc) heroDesc.textContent = personalInfo.heroDescription;

    // Links
    const githubLinks = document.querySelectorAll('.github-link');
    githubLinks.forEach(el => el.href = personalInfo.github);

    const linkedinLinks = document.querySelectorAll('.linkedin-link');
    linkedinLinks.forEach(el => el.href = personalInfo.linkedin);

    const cvButtons = document.querySelectorAll('.cv-btn');
    cvButtons.forEach(el => el.href = personalInfo.cvLink);
}

function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skills.map(skill => `
        <div class="card" style="text-align: center;">
            <i class="fab ${skill.icon} fa-3x" style="color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h3>${skill.name}</h3>
            <div style="background: #e5e7eb; height: 10px; border-radius: 5px; margin-top: 10px; overflow: hidden;">
                <div style="width: ${skill.level}%; background: var(--primary-color); height: 100%;"></div>
            </div>
        </div>
    `).join('');
}

function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `
        <div class="card">
            <div style="height: 200px; background: #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem; overflow: hidden;">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x200?text=Projet'">
            </div>
            <h3>${project.title}</h3>
            <p style="color: var(--text-muted); margin: 0.5rem 0;">${project.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0;">
                ${project.tags.map(tag => `<span style="background: var(--bg-color); color: var(--primary-color); padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.875rem; border: 1px solid var(--primary-color);">${tag}</span>`).join('')}
            </div>
            <a href="projet-details.html?id=${project.id}" class="btn btn-secondary" style="width: 100%; display: block; text-align: center;">Voir les détails</a>
        </div>
    `).join('');
}

function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    const project = projects.find(p => p.id === projectId);

    if (!project) return;

    // Set Title & Description
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.longDescription || project.description;

    // Set Main Image
    const mainImage = document.getElementById('project-main-image');
    if (mainImage) mainImage.src = project.image;

    // Set Tags
    const tagsContainer = document.getElementById('project-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }

    // Set Features
    const featuresList = document.getElementById('project-features');
    if (featuresList && project.features) {
        featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    }

    // Set Competences
    const competencesEl = document.getElementById('project-competences');
    if (competencesEl && project.competences) {
        competencesEl.textContent = project.competences.join(', ');
    }

    // Set GitHub Link
    const githubLink = document.getElementById('project-github');
    if (githubLink) githubLink.href = project.github;

    // Set Gallery
    const galleryContainer = document.getElementById('project-gallery');
    if (galleryContainer && project.gallery) {
        galleryContainer.innerHTML = project.gallery.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Screenshot ${project.title}" onerror="this.style.display='none'">
            </div>
        `).join('');
    }
}

function loadVeille() {
    const veilleContainer = document.getElementById('veille-container');
    if (!veilleContainer) return;

    document.getElementById('sujet-veille').textContent = veille.sujet;
    document.getElementById('outils-veille').textContent = veille.outils.join(', ');

    veilleContainer.innerHTML = veille.articles.map(article => `
        <div class="card">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <span style="color: var(--primary-color); font-weight: 600;">${article.source}</span>
                <span style="color: #6b7280;">${article.date}</span>
            </div>
            <h3>${article.titre}</h3>
            <p style="margin: 1rem 0;">${article.resume}</p>
            <a href="${article.lien}" class="btn btn-secondary">Lire l'article</a>
        </div>
    `).join('');
}

function loadFormation() {
    const formationContainer = document.getElementById('formation-details');
    if (!formationContainer) return;

    formationContainer.innerHTML = `
        <p><strong>École :</strong> ${formation.ecole}</p>
        <p><strong>Option :</strong> ${formation.option}</p>
        <p><strong>Années :</strong> ${formation.annees}</p>
        <p style="margin-top: 1rem;">${formation.description}</p>
    `;
}

import { personalInfo, skills, projects, personalProjects, projetsPro, veille, epreuves, formation } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPersonalInfo();
    loadSkills();
    loadProjects();
    loadPersonalProjects();
    loadVeille();
    loadEpreuves();
    loadFormation();
    loadProjectDetails();
});

function loadPersonalInfo() {
    const nameElements = document.querySelectorAll('.user-name');
    nameElements.forEach(el => el.textContent = personalInfo.name);

    const titleElements = document.querySelectorAll('.user-title');
    titleElements.forEach(el => el.textContent = personalInfo.title);

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = personalInfo.heroTitle;

    const heroDesc = document.getElementById('hero-desc');
    if (heroDesc) heroDesc.textContent = personalInfo.heroDescription;

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
        </div>
    `).join('');
}

function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        const all = [
            ...projects,
            ...(typeof projetsPro !== 'undefined' ? projetsPro : [])
        ];
        projectsContainer.innerHTML = all.map(project => createProjectCard(project)).join('');
    }

    const proContainer = document.getElementById('pro-projects-container');
    if (proContainer && typeof projetsPro !== 'undefined') {
        proContainer.innerHTML = projetsPro.map(project => createProjectCard(project)).join('');
    }
}

function loadPersonalProjects() {
    const container = document.getElementById('personal-projects-container');
    if (!container) return;

    container.innerHTML = personalProjects.map(project => createProjectCard(project)).join('');
}

function loadEpreuves() {
    const container = document.getElementById('epreuves-container');
    if (!container || !epreuves.e4) return;

    container.innerHTML = epreuves.e4.map(project => createProjectCard(project)).join('');
}

function createProjectCard(project) {
    const isPrivate = project.private === true;
    const privateBadge = isPrivate
        ? `<span style="display:inline-block; background:#fff3cd; color:#856404; padding:0.25rem 0.6rem; border-radius:999px; font-size:0.8rem; border:1px solid #ffeeba; margin-bottom:0.75rem;"><i class="fas fa-lock" style="margin-right:5px;"></i>Dépo privé entreprise</span>`
        : '';
    const githubButton = (project.github && project.github !== '')
        ? `<a href="${project.github}" class="btn btn-primary" style="width: 100%; display: block; text-align: center; margin-bottom: 0.5rem;" target="_blank" rel="noopener"><i class="fa${isPrivate ? 's fa-lock' : 'b fa-github'}" style="margin-right: 8px;"></i>${isPrivate ? 'Dépo privé — Voir sur GitHub' : 'Voir sur GitHub'}</a>`
        : '';
    return `
        <div class="card">
            <div style="height: 200px; background: #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem; overflow: hidden;">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x200?text=Projet'">
            </div>
            <h3>${project.title}</h3>
            ${privateBadge}
            <p style="color: var(--text-muted); margin: 0.5rem 0;">${project.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0;">
                ${project.tags.map(tag => `<span style="background: var(--bg-color); color: var(--primary-color); padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.875rem; border: 1px solid var(--primary-color);">${tag}</span>`).join('')}
            </div>
            ${githubButton}
            <a href="projet-details.html?id=${project.id}" class="btn btn-secondary" style="width: 100%; display: block; text-align: center;">Voir les détails</a>
        </div>
    `;
}

function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));

    const allProjects = [
        ...projects,
        ...personalProjects,
        ...(typeof projetsPro !== 'undefined' ? projetsPro : []),
        ...(veille.projets || []),
        ...(epreuves.e4 || [])
    ];
    const project = allProjects.find(p => p.id === projectId);

    if (!project) return;

    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.longDescription || project.description;

    const mainImage = document.getElementById('project-main-image');
    if (mainImage) mainImage.src = project.image;

    const tagsContainer = document.getElementById('project-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }

    const featuresList = document.getElementById('project-features');
    if (featuresList && project.features) {
        featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    }

    const competencesEl = document.getElementById('project-competences');
    if (competencesEl && project.competences) {
        competencesEl.textContent = project.competences.join(', ');
    }

    const teamEl = document.getElementById('project-team');
    if (teamEl && project.equipe) {
        teamEl.innerHTML = `<strong>Équipe :</strong> ${project.equipe.join(', ')}`;
        teamEl.style.display = 'block';
    }

    const githubLink = document.getElementById('project-github');
    if (githubLink) {
        const isPrivate = project.private === true;
        if (project.github && project.github !== '') {
            githubLink.href = project.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener';
            githubLink.style.display = '';
            githubLink.style.cursor = '';
            githubLink.style.opacity = '';
            if (isPrivate) {
                githubLink.innerHTML = '<i class="fas fa-lock" style="margin-right:8px;"></i> Dépo privé — Voir sur GitHub';
            } else {
                githubLink.innerHTML = '<i class="fab fa-github" style="margin-right:8px;"></i> Voir sur GitHub';
            }
        } else {
            githubLink.removeAttribute('href');
            githubLink.style.cursor = 'not-allowed';
            githubLink.style.opacity = '0.65';
            githubLink.innerHTML = '<i class="fas fa-lock" style="margin-right:8px;"></i> Dépo privé (entreprise)';
        }
    }

    const galleryContainer = document.getElementById('project-gallery');
    if (galleryContainer && project.gallery) {
        galleryContainer.innerHTML = project.gallery.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Screenshot ${project.title}" style="cursor: pointer;" onclick="openModal('${img}')" onerror="this.style.display='none'">
            </div>
        `).join('');
    }

    const codeExamplesContainer = document.getElementById('code-examples-container');
    if (codeExamplesContainer && project.codeExamples && project.codeExamples.length > 0) {
        codeExamplesContainer.innerHTML = `
            <h2 style="margin-top: 2rem; color: var(--primary-color);">Exemples de Code</h2>
            ${project.codeExamples.map(example => `
                <div class="code-example" style="margin: 1.5rem 0;">
                    <h3 style="margin-bottom: 0.5rem;">${example.title}</h3>
                    <pre style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 0.5rem; padding: 1rem; overflow-x: auto; font-size: 0.875rem;"><code class="language-${example.language}">${escapeHtml(example.code)}</code></pre>
                </div>
            `).join('')}
        `;
        codeExamplesContainer.style.display = 'block';
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function loadVeille() {
    const veilleContainer = document.getElementById('veille-container');
    if (veilleContainer) {
        document.getElementById('sujet-veille').textContent = veille.sujet;
        document.getElementById('outils-veille').textContent = veille.outils.join(', ');

        const descContainer = document.getElementById('veille-description-container');
        if (descContainer && veille.description) {
            descContainer.innerHTML = veille.description.replace(/\n/g, '<br/>');
        }

        const imgVeille = document.getElementById('image-veille');
        if (imgVeille && veille.image) {
            imgVeille.src = veille.image;
            imgVeille.style.display = 'inline-block';
        }

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

    const veilleProjetsContainer = document.getElementById('veille-projets-container');
    if (veilleProjetsContainer && veille.projets) {
        veilleProjetsContainer.innerHTML = veille.projets.map(project => createProjectCard(project)).join('');
    }
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

    const diplomesContainer = document.getElementById('diplomes-container');
    if (diplomesContainer && formation.diplomes) {
        diplomesContainer.innerHTML = formation.diplomes.map(d => `
            <div class="card">
                <h4 style="color: var(--primary-color);">${d.titre}</h4>
                <p><strong>${d.etablissement}</strong></p>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${d.periode}${d.modalite ? ' — ' + d.modalite : ''}</p>
                ${d.details && d.details.length ? `<ul style="margin-top: 0.75rem; padding-left: 1.25rem;">${d.details.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
            </div>
        `).join('');
    }

    const expContainer = document.getElementById('experiences-container');
    if (expContainer && formation.experiences) {
        expContainer.innerHTML = formation.experiences.map(e => `
            <div class="card">
                <h4 style="color: var(--primary-color);">${e.poste}</h4>
                <p><strong>${e.entreprise}</strong></p>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${e.periode}</p>
                ${e.missions && e.missions.length ? `<ul style="margin-top: 0.75rem; padding-left: 1.25rem;">${e.missions.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
            </div>
        `).join('');
    }
}

window.openModal = function (imageSrc) {
    let modal = document.getElementById('image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <span class="modal-close" onclick="closeModal()">&times;</span>
            <img class="modal-content" id="modal-img">
        `;
        modal.onclick = function (e) {
            if (e.target === modal) {
                closeModal();
            }
        };
        document.body.appendChild(modal);
    }
    const modalImg = document.getElementById('modal-img');
    modalImg.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function () {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

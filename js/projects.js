function renderProjectsList(projects) {
  const el = document.getElementById('projects-list');
  if (!el) return;
  el.innerHTML = projects.map(project => `
    <div class="project-card">
      <img class="project-image" src="${project.image}" alt="${project.title} thumbnail">
      <div class="project-content">
        <div>
          <div class="project-title">${project.title}</div>
          <div class="project-desc">${project.description}</div>
        </div>
        <div class="tech-tags">
          ${project.techTags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.demo ? `<a class="project-link" href="${project.links.demo}" target="_blank">Live Demo</a>` : ''}
          ${project.links.source ? `<a class="project-link" href="${project.links.source}" target="_blank">View Source</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

if (typeof projectsData !== 'undefined') {
  renderProjectsList(projectsData);
}

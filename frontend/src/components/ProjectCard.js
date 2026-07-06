export function createProjectCard(data = {}) {
  const root = document.createElement('article');
  root.className = 'project-card';
  root.tabIndex = 0;
  root.setAttribute('role', 'article');
  root.setAttribute('aria-label', data.title || 'Project card');
  
  // Handle keyboard interaction (Enter or Space to navigate)
  root.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (data.link && data.link !== '#') {
        window.location.href = data.link;
      }
    }
  });
  
  // Thumbnail placeholder
  const thumbnail = document.createElement('div');
  thumbnail.className = 'thumbnail';
  thumbnail.textContent = data.title ? data.title.charAt(0) : 'P';
  root.appendChild(thumbnail);
  
  // Title
  const title = document.createElement('h3');
  title.textContent = data.title || 'Project';
  root.appendChild(title);
  
  // Description
  const desc = document.createElement('p');
  desc.textContent = data.shortDescription || data.description || '';
  root.appendChild(desc);
  
  // Tags
  if (data.tags && data.tags.length > 0) {
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'tags';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'project-tag';
      span.textContent = tag;
      tagsDiv.appendChild(span);
    });
    root.appendChild(tagsDiv);
  }
  
  return root;
}

export default createProjectCard;

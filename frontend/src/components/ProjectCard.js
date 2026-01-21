export function createProjectCard(data = {}){
  const root = document.createElement('div');
  root.className = 'project-card';
  root.tabIndex = 0;
  root.setAttribute('role','article');
  const title = document.createElement('h3');
  title.textContent = data.title || 'Project';
  root.appendChild(title);
  const desc = document.createElement('p');
  desc.textContent = data.description || '';
  root.appendChild(desc);
  return root;
}

export default createProjectCard;

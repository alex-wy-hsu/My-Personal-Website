export function createProjectCard(data = {}){
  const root = document.createElement('div');
  root.className = 'project-card';
  root.tabIndex = 0;
  root.setAttribute('role','article');
  root.setAttribute('aria-label', data.title || 'Project card');
  
  // Handle keyboard interaction (Enter or Space to navigate)
  root.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      if(data.link && data.link !== '#') window.location.href = data.link;
    }
  });
  
  const title = document.createElement('h3');
  title.textContent = data.title || 'Project';
  root.appendChild(title);
  
  const desc = document.createElement('p');
  desc.textContent = data.description || '';
  root.appendChild(desc);
  
  return root;
}

export default createProjectCard;

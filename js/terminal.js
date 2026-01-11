function renderTerminalContent(data) {
  const el = document.getElementById('terminal-content');
  if (!el) return;
  el.innerHTML = `
    <div><span class="prompt">&gt; ${data.name}</span><span class="cursor">█</span></div>
    <div><span class="prompt">&gt; location</span></div>
    <div style="margin-left:2em;">${data.location}</div>
    <div><span class="prompt">&gt; contact</span></div>
    <div style="margin-left:2em;">email: <a href="mailto:${data.email}">${data.email}</a></div>
    <div style="margin-left:2em;">linkedin: <a href="${data.socialLinks.linkedin}" target="_blank">${data.socialLinks.linkedin}</a></div>
    <div style="margin-left:2em;">github: <a href="${data.socialLinks.github}" target="_blank">${data.socialLinks.github}</a></div>
    <div><span class="prompt">&gt; resume</span></div>
    <div style="margin-left:2em;"><a href="${data.resumeUrl}" target="_blank">resume.pdf</a></div>
    <div><span class="prompt">&gt; interests</span></div>
    <div style="margin-left:2em;">${data.interests.map(i => `- ${i}`).join('<br>')}</div>
    <div><span class="prompt">&gt; education</span></div>
    <div style="margin-left:2em;">${data.education.degree} - ${data.education.university}<br>${data.education.year}</div>
    <div><span class="prompt">&gt; skills</span></div>
    <div style="margin-left:2em;">${data.skills.join(', ')}</div>
  `;
}

if (typeof aboutData !== 'undefined') {
  renderTerminalContent(aboutData);
}

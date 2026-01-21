// Minimal entry point for local preview and hooking components
import '../src/components/TerminalBlock.js';

document.addEventListener('DOMContentLoaded', () => {
  const termRoot = document.getElementById('terminal-root');
  if (termRoot && window.TerminalBlock) {
    const tb = new window.TerminalBlock();
    termRoot.appendChild(tb.render());
  }
});

export default {};

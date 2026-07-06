/**
 * Theme Toggle Component
 * Handles light/dark mode switching with localStorage persistence
 * and respects prefers-color-scheme system preference.
 */

/**
 * Get the current theme, checking localStorage first, then system preference
 * @returns {'light' | 'dark'} The current theme
 */
function getCurrentTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  // Fall back to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Apply theme to document
 * @param {'light' | 'dark'} theme 
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  updateToggleIcon(theme);
}

/**
 * Update the toggle button icon based on current theme
 * @param {'light' | 'dark'} theme 
 */
function updateToggleIcon(theme) {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  
  const sunIcon = toggle.querySelector('.icon-sun');
  const moonIcon = toggle.querySelector('.icon-moon');
  
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
      toggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
      toggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || getCurrentTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
}

/**
 * Initialize the theme toggle functionality
 * Call this after DOM is ready
 */
export function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) {
    console.warn('Theme toggle button not found');
    return;
  }
  
  // Apply current theme
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);
  
  // Handle click
  toggle.addEventListener('click', toggleTheme);
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only update if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

export { getCurrentTheme, applyTheme, toggleTheme };

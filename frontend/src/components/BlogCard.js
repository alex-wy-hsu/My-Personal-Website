/**
 * Blog Card Component
 * Creates a blog post card element matching the Figma design.
 */

/**
 * Create a blog card element
 * @param {Object} post - Blog post data
 * @param {string} post.id - Unique identifier
 * @param {string} post.title - Post title
 * @param {string} post.summary - One-line summary
 * @param {number} post.year - Publication year
 * @returns {HTMLElement} The blog card element
 */
export function createBlogCard(post) {
  const card = document.createElement('article');
  card.className = 'blog-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'article');
  card.setAttribute('aria-labelledby', `blog-title-${post.id}`);
  
  card.innerHTML = `
    <div class="blog-card-header">
      <h2 class="blog-card-title" id="blog-title-${post.id}">${post.title}</h2>
      <span class="blog-card-year">${post.year}</span>
    </div>
    <p class="blog-card-summary">${post.summary}</p>
  `;
  
  return card;
}

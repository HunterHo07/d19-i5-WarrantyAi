/**
 * Utility function to get the correct path for assets
 * This helps with GitHub Pages deployment by handling the base path
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  // In development, use the path as is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // In production, prepend the base path
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

/**
 * Global function to make asset paths available in the window object
 * This helps with inline styles and other places where the utility function can't be imported
 */
if (typeof window !== 'undefined') {
  window.getAssetPath = getAssetPath;
}

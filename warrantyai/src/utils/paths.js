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

// Web Analytics for Vercel deployment
// Tracks page performance and user interactions

export function initVercelAnalytics() {
  if (typeof window !== 'undefined') {
    // Dynamically import Vercel Web Analytics
    import('@vercel/analytics').catch(err => {
      console.warn('Vercel Analytics failed to load:', err);
    });
  }
}

// Detect iOS and show install modal if not already installed
window.addEventListener('load', () => {
  const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  const isInStandalone = window.navigator.standalone === true;
  const modal = document.getElementById('installModal');

  if (isIos && !isInStandalone) {
    modal.style.display = 'flex';
  }

  document.getElementById('closeInstall').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('Service Worker registered'))
      .catch((err) => console.error('Service Worker failed:', err));
  }
});

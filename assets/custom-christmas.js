(() => {
  const VIDEO_URL =
    'https://cdn.shopify.com/videos/c/o/v/16757e02bea2496aa2498566ce9dfcaf.mp4';

  if (typeof window === 'undefined') return;

  // Homepage only
  if (window.location.pathname !== '/') return;

  const injectPopup = () => {
    if (document.querySelector('[data-popup="christmas-video"]')) return;

    const overlay = document.createElement('div');
    overlay.setAttribute('data-popup', 'christmas-video');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.padding = '24px';
    overlay.style.background = 'rgba(0, 0, 0, 0.65)';

    const panel = document.createElement('div');
    panel.style.maxWidth = '900px';
    panel.style.width = '100%';
    panel.style.padding = '18px';
    panel.style.borderRadius = '10px';
    panel.style.background = '#fff';
    panel.style.fontFamily = 'inherit';
    panel.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';

    panel.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:flex-end; margin-bottom: 12px;">
        <span data-action="close" role="button" aria-label="Close" tabindex="0" style="width: 42px; height: 42px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; color: #000;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </div>
      <div style="position:relative; width:100%;">
        <video
          src="${VIDEO_URL}"
          style="display:block; width:100%; height:auto; border-radius: 8px; background:#000;"
          controls
          playsinline
        ></video>
      </div>
    `;

    const video = panel.querySelector('video');
    const closeControl = panel.querySelector('[data-action="close"]');

    const cleanup = () => {
      try {
        if (video) {
          video.pause();
          video.removeAttribute('src');
          video.load();
        }
      } catch (e) {
        // no-op
      }
      document.removeEventListener('keydown', onKeyDown);
      overlay.remove();
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') cleanup();
    };

    const onCloseKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        cleanup();
      }
    };

    closeControl?.addEventListener('click', cleanup);
    closeControl?.addEventListener('keydown', onCloseKeyDown);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) cleanup();
    });
    document.addEventListener('keydown', onKeyDown);

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    // Best-effort autoplay (may be blocked by browser policies)
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Autoplay blocked; user can press play.
          video.muted = false;
        });
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectPopup, { once: true });
  } else {
    injectPopup();
  }
})();

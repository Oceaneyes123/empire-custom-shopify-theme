(() => {
  const TARGET_PATH = '/collections/stihl-lawn-garden-tools';

  if (typeof window === 'undefined' || !window.location.pathname.includes(TARGET_PATH)) {
    return;
  }

  const injectPopup = () => {
    if (document.querySelector('[data-popup="stihl-garden-tools"]')) {
      return;
    }

    const overlay = document.createElement('div');
    overlay.setAttribute('data-popup', 'stihl-garden-tools');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'rgba(0, 0, 0, 0.6)';

    const panel = document.createElement('div');
    panel.style.maxWidth = '720px';
    panel.style.width = '90%';
    panel.style.padding = '32px 36px';
    panel.style.borderRadius = '10px';
    panel.style.background = '#fff';
    panel.style.fontFamily = 'inherit';
    panel.style.textAlign = 'center';
    panel.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';

    panel.innerHTML = `
      <h2 style="margin: 0 0 16px; font-size: 1.75rem; line-height: 1.2;">STIHL Recalls BR 800 Backpack Blowers Due to Laceration Hazard</h2>
      <p style="margin: 0 0 20px; color: #333;">
        This recall involves the fan wheel of the STIHL BR 800 Magnum, models X and C-E, a backpack blower 
        powered by a combustion engine. The backpack blower is gray and orange. “STIHL,” “BR 800,” and “X” 
        or “C-E” are printed on the rear of the blower. The recalled blower’s serial number is located on 
        a label on the blower tube. Only backpack blowers with serial numbers ranging from 546515117 to 
        547916107 are included in the recall.
      </p>
      <div style="display:flex; gap:8px; justify-content: center; margin-top: 18px;">
        <button type="button" style="padding: 10px 22px; border: none; background: #111; color: #fff; cursor: pointer; border-radius: 6px;">Close</button>
      </div>
    `;

    const closeBtn = panel.querySelector('button');
    const cleanup = () => overlay.remove();

    closeBtn?.addEventListener('click', cleanup);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        cleanup();
      }
    });

    overlay.appendChild(panel);
    document.body.appendChild(overlay);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectPopup, { once: true });
  } else {
    injectPopup();
  }
})();

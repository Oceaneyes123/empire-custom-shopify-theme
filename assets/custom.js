document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  const backdrop = modal.querySelector('[data-checkout-modal-backdrop]');
  const closeButtons = modal.querySelectorAll('[data-checkout-modal-close]');
  const proceedButton = modal.querySelector('.checkout-modal__proceed');
  
  function showModal() {
    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function hideModal() {
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function getTriggers() {
    const selectors = [
      // Intentionally exclude '[data-checkout-modal-trigger]' from direct binding.
      // We capture it via delegated listener to handle dynamic/templated markup reliably.
      '[data-product-atc]',
      '[data-product-atc-preorder]',
      '.shopify-payment-button button:not(.see-the-price--btn)',
      '.shopify-payment-button__button:not(.see-the-price--btn)',
      '.shopify-payment-button__button--unbranded:not(.see-the-price--btn)',
      'button[name="add"]:not(.see-the-price--btn)',
      '.product-form--atc-button:not(.see-the-price--btn)',
      '.productitem--action-atc:not(.see-the-price--btn)',
      '[data-quick-buy]'
    ];

    return Array.from(document.querySelectorAll(selectors.join(', '))).filter(btn => {
      const buttonText = btn.innerText || btn.textContent || '';
      const lowerText = buttonText.trim().toLowerCase();
      return !btn.hasAttribute('data-modal-listener-added') && 
             !btn.closest('a[href*="/account/login"]') &&
             !lowerText.includes('choose options') &&
             !lowerText.includes('add to cart');
    });
  }

  function attachListeners() {
    getTriggers().forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        if (this.classList.contains('see-the-price--btn')) return;
        const buttonText = this.innerText || this.textContent || '';
        const lowerText = buttonText.trim().toLowerCase();
        // "Choose Options" button: redirect to product page
        if (lowerText.includes('choose options')) {
          const productItem = this.closest('[data-product-item]');
          if (productItem) {
            const productLink = productItem.querySelector('[data-product-page-link]');
            if (productLink && productLink.href) {
              window.location.href = productLink.href;
              return;
            }
          }
          return;
        }
        // "Add to Cart" button: let original function work
        if (lowerText.includes('add to cart')) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        const form = this.closest('form');
        const isPaymentButton = this.closest('.shopify-payment-button') || 
                               this.classList.contains('shopify-payment-button__button');
        if (form && proceedButton) {
          proceedButton.onclick = function() {
            hideModal();
            if (isPaymentButton) {
              form.action = '/cart';
            }
            // Ensure Shopify receives the checkout intent
            let hidden = form.querySelector('input[name="checkout"]');
            let cleanup = null;
            if (!hidden) {
              hidden = document.createElement('input');
              hidden.type = 'hidden';
              hidden.name = 'checkout';
              hidden.value = '1';
              form.appendChild(hidden);
              cleanup = () => hidden.remove();
            }
            form.submit();
            if (cleanup) setTimeout(cleanup, 0);
          };
        }
        showModal();
      }, true);
      
      trigger.setAttribute('data-modal-listener-added', 'true');
    });
  }

  // Modal close handlers
  if (backdrop) backdrop.addEventListener('click', hideModal);
  closeButtons.forEach(btn => btn.addEventListener('click', hideModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) hideModal();
  });

  // Initialize and observe for new buttons
  attachListeners();
  
  const observer = new MutationObserver(() => {
    const hasNewButtons = getTriggers().length > 0;
    if (hasNewButtons) setTimeout(attachListeners, 100);
  });
  
  observer.observe(document.body, { childList: true, subtree: true });

  // Always capture clicks on checkout-modal triggers (handles dynamic ATC banner buttons)
  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('[data-checkout-modal-trigger]');
    if (!trigger) return;

    // Respect explicit opt-outs
    if (trigger.classList.contains('see-the-price--btn')) return;

    const buttonText = trigger.innerText || trigger.textContent || '';
    const lowerText = buttonText.trim().toLowerCase();
    if (lowerText.includes('choose options') || lowerText.includes('add to cart')) return;

    const form = trigger.closest('form');
    const isPaymentButton = trigger.closest('.shopify-payment-button') || 
                            trigger.classList.contains('shopify-payment-button__button');

    // If modal UI exists, intercept and show it. Otherwise, fall through.
    if (form && proceedButton) {
      e.preventDefault();
      e.stopPropagation();
      // Stop other listeners in capture to prevent dupe behavior
      if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();

      proceedButton.onclick = function() {
        hideModal();
        if (isPaymentButton) {
          form.action = '/cart';
        }
        // Ensure Shopify receives the checkout intent
        let hidden = form.querySelector('input[name="checkout"]');
        let cleanup = null;
        if (!hidden) {
          hidden = document.createElement('input');
          hidden.type = 'hidden';
          hidden.name = 'checkout';
          hidden.value = '1';
          form.appendChild(hidden);
          cleanup = () => hidden.remove();
        }
        form.submit();
        if (cleanup) setTimeout(cleanup, 0);
      };

      showModal();
    }
    // If no modal present, allow default submit (type="submit" fallback)
  }, true);
  
  // Handle quickshop triggers
  document.addEventListener('click', e => {
    if (e.target.matches('[data-quickshop-full], [data-quickshop-slim]')) {
      setTimeout(attachListeners, 500);
    }
  });

  // Handle "Choose Options" buttons - redirect to product page
  document.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (button) {
      const buttonText = button.innerText || button.textContent || '';
      if (buttonText.trim().toLowerCase().includes('choose options')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Find the product link and redirect
        const productItem = button.closest('[data-product-item]');
        if (productItem) {
          const productLink = productItem.querySelector('[data-product-page-link]');
          if (productLink && productLink.href) {
            window.location.href = productLink.href;
          }
        }
      }
    }
  });
});

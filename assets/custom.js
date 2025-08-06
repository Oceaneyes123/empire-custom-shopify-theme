document.addEventListener('DOMContentLoaded', function() {
  function getAllTriggers() {
    const cartCheckoutTriggers = document.querySelectorAll('[data-checkout-modal-trigger]');
    const productATCButtons = document.querySelectorAll('[data-product-atc]:not([data-product-atc-preorder])');
    const preorderButtons = document.querySelectorAll('[data-product-atc-preorder]');
    const paymentButtons = document.querySelectorAll([
      '[data-shopify="payment-button"] button',
      '.shopify-payment-button button',
      '.shopify-payment-button__button',
      '.shopify-payment-button__button--unbranded',
      'button[name="add"]',
      '.product-form--atc-button:not(.see-the-price--btn)',
      '.productitem--action-atc:not(.see-the-price--btn)',
      '[data-quick-buy]',
      '[data-quickshop-slim]',
      '[data-quickshop-full]',
      '.modal .shopify-payment-button button',
      '.modal .shopify-payment-button__button',
      '.modal .shopify-payment-button__button--unbranded',
      '.product__container--quick-shop .shopify-payment-button button',
      '.product__container--quick-shop .shopify-payment-button__button',
      '.product__container--quick-shop .shopify-payment-button__button--unbranded'
    ].join(', '));
    
    // Filter out "See the Price" buttons that are inside login links
    const filteredPaymentButtons = Array.from(paymentButtons).filter(button => {
      return !button.classList.contains('see-the-price--btn') && 
             !button.closest('a[href*="/account/login"]');
    });
    
    return [
      ...cartCheckoutTriggers,
      ...productATCButtons,
      ...preorderButtons,
      ...filteredPaymentButtons
    ];
  }
  function initCheckoutModal() {
    const checkoutModal = document.getElementById('checkout-modal');
    if (!checkoutModal) {
      return false;
    }
    const allTriggers = getAllTriggers();
    const backdrop = checkoutModal.querySelector('[data-checkout-modal-backdrop]');
    const closeButtons = checkoutModal.querySelectorAll('[data-checkout-modal-close]');
    const proceedButton = checkoutModal.querySelector('.checkout-modal__proceed');
    function showModal() {
      checkoutModal.classList.add('active');
      checkoutModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    function hideModal() {
      checkoutModal.classList.remove('active');
      checkoutModal.style.display = 'none';
      document.body.style.overflow = '';
    }
    const originalForms = new Map();
    function attachListeners(triggers) {
      triggers.forEach(function(trigger) {
        if (trigger.hasAttribute('data-modal-listener-added')) {
          return;
        }
        trigger.addEventListener('click', function(e) {
          // Don't prevent default for "See the Price" buttons - let them navigate to login
          if (trigger.classList.contains('see-the-price--btn') || 
              trigger.closest('a[href*="/account/login"]')) {
            return;
          }
          
          // Always prevent default behavior for payment buttons and ATC buttons
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          const isPaymentButton = this.closest('.shopify-payment-button') || 
                                this.closest('[data-shopify="payment-button"]') ||
                                this.classList.contains('shopify-payment-button__button') ||
                                this.classList.contains('shopify-payment-button__button--unbranded');
          
          if (this.hasAttribute('data-product-atc') || this.hasAttribute('data-product-atc-preorder')) {
            // Regular Add to Cart button - submit the form
            const form = this.closest('form');
            if (form) {
              originalForms.set('currentForm', form);
              if (proceedButton) {
                proceedButton.onclick = function(e) {
                  e.preventDefault();
                  hideModal();
                  form.submit();
                };
              }
            }
          } else if (isPaymentButton) {
            // Payment button (Buy it Now) - store the form reference and submit it
            const form = this.closest('form');
            if (form) {
              originalForms.set('currentForm', form);
              if (proceedButton) {
                proceedButton.onclick = function(e) {
                  e.preventDefault();
                  hideModal();
                  // Submit the form directly to go to checkout
                  form.action = '/cart';
                  form.submit();
                };
              }
            }
          } else {
            if (proceedButton) {
              proceedButton.onclick = null;
            }
          }
          showModal();
        }, true);
        trigger.setAttribute('data-modal-listener-added', 'true');
      });
    }
    attachListeners(allTriggers);
    if (backdrop) {
      backdrop.addEventListener('click', hideModal);
    }
    closeButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        hideModal();
      });
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && checkoutModal.classList.contains('active')) {
        hideModal();
      }
    });
    return true;
  }
  function rescanForButtons() {
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
      const newTriggers = getAllTriggers();
      const proceedButton = checkoutModal.querySelector('.checkout-modal__proceed');
      const originalForms = new Map();
      function showModal() {
        checkoutModal.classList.add('active');
        checkoutModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
      function hideModal() {
        checkoutModal.classList.remove('active');
        checkoutModal.style.display = 'none';
        document.body.style.overflow = '';
      }
      newTriggers.forEach(function(trigger) {
        if (trigger.hasAttribute('data-modal-listener-added')) {
          return;
        }
        trigger.addEventListener('click', function(e) {
          // Don't prevent default for "See the Price" buttons - let them navigate to login
          if (trigger.classList.contains('see-the-price--btn') || 
              trigger.closest('a[href*="/account/login"]')) {
            return;
          }
          
          // Always prevent default behavior for payment buttons and ATC buttons
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          const isPaymentButton = this.closest('.shopify-payment-button') || 
                                this.closest('[data-shopify="payment-button"]') ||
                                this.classList.contains('shopify-payment-button__button') ||
                                this.classList.contains('shopify-payment-button__button--unbranded');
          
          if (this.hasAttribute('data-product-atc') || this.hasAttribute('data-product-atc-preorder')) {
            // Regular Add to Cart button - submit the form
            const form = this.closest('form');
            if (form) {
              originalForms.set('currentForm', form);
              if (proceedButton) {
                proceedButton.onclick = function(e) {
                  e.preventDefault();
                  hideModal();
                  form.submit();
                };
              }
            }
          } else if (isPaymentButton) {
            // Payment button (Buy it Now) - store the form reference and submit it
            const form = this.closest('form');
            if (form) {
              originalForms.set('currentForm', form);
              if (proceedButton) {
                proceedButton.onclick = function(e) {
                  e.preventDefault();
                  hideModal();
                  // Submit the form directly to go to checkout
                  form.action = '/cart';
                  form.submit();
                };
              }
            }
          } else {
            if (proceedButton) {
              proceedButton.onclick = null;
            }
          }
          showModal();
        }, true);
        trigger.setAttribute('data-modal-listener-added', 'true');
      });
    }
  }
  if (initCheckoutModal()) {
  } else {
    let attempts = 0;
    const maxAttempts = 20;
    const retryInterval = setInterval(function() {
      attempts++;
      if (initCheckoutModal()) {
        clearInterval(retryInterval);
      } else if (attempts >= maxAttempts) {
        clearInterval(retryInterval);
      }
    }, 100);
  }
  setTimeout(initCheckoutModal, 200);
  setTimeout(initCheckoutModal, 1000);
  const observer = new MutationObserver(function(mutations) {
    let shouldRescan = false;
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) {
            if (node.querySelector && (
              node.querySelector('[data-product-atc]') ||
              node.querySelector('[data-shopify="payment-button"]') ||
              node.querySelector('.shopify-payment-button') ||
              node.querySelector('.shopify-payment-button__button') ||
              node.querySelector('.shopify-payment-button__button--unbranded') ||
              node.querySelector('[data-quick-buy]') ||
              node.querySelector('[data-quickshop-slim]') ||
              node.querySelector('[data-quickshop-full]') ||
              node.classList.contains('shopify-payment-button') ||
              node.classList.contains('shopify-payment-button__button') ||
              node.classList.contains('shopify-payment-button__button--unbranded') ||
              node.classList.contains('modal') ||
              node.classList.contains('product__container--quick-shop')
            )) {
              shouldRescan = true;
            }
          }
        });
      }
    });
    if (shouldRescan) {
      setTimeout(rescanForButtons, 100);
      setTimeout(rescanForButtons, 500);
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  document.addEventListener('modalContentLoaded', function() {
    setTimeout(rescanForButtons, 100);
  });
  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-quickshop-full], [data-quickshop-slim]')) {
      setTimeout(rescanForButtons, 500);
      setTimeout(rescanForButtons, 1000);
    }
  });
  const paymentObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1 && 
            (node.classList.contains('shopify-payment-button') || 
             node.querySelector && node.querySelector('.shopify-payment-button'))) {
          setTimeout(rescanForButtons, 100);
        }
      });
    });
  });
  paymentObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
});

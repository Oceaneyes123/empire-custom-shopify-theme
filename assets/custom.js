let buttonHTML = `<div class="productitem--action atc--button" style="width:100%">
                <button onclick="seePriceLogin()" class="see-the-price--btn productitem--action-trigger productitem--action-atc button-primary mdc-ripple-surface mdc-ripple-upgraded" type="button">
                  <span class="atc-button--text">See the Price</span>
                </button>
              </div>`;

let contactButtonHTML = `<div class="productitem--action atc--button" style="width:100%">
            <button onclick="openContactUs()" class="black-btn productitem--action-trigger productitem--action-atc button-secondary mdc-ripple-surface mdc-ripple-upgraded" type="button">
                <span class="quickshop-button">Check Next in Stock Date</span>
            </button>
        </div>`;
let url = window.location.pathname;
let homePageRegex = /^\/$/;
let collectionPageRegex = /^\/collections\/.*$/; //PRODUCT PAGE
let productViewPageRegex = /^.*\/products\/.*$/;

// if(homePageRegex.test(url) || collectionPageRegex.test(url)){
//     document.addEventListener('DOMContentLoaded', function() {
//         fetch('https://cdn.shopify.com/s/files/1/0616/5590/8525/files/hideProducts.json?v=1729930099')
//         .then(response => response.json())
//         .then(data => {
//             let isLogin = localStorage.getItem('isLoggedIn') === 'true';
//             if (!isLogin) {
//                 let productItemContainers = document.querySelectorAll('.productitem__container');
//                 let dataTitles = new Set(data.map(item => item.title));
                
//                 //HOME  AND PRODUCT PAGE
//                 productItemContainers.forEach(container => {
//                     let title = container.querySelector('.productitem--title').textContent.trim();
//                     if (dataTitles.has(title)) {
//                         let price = container.querySelector('.productitem__price');
//                         let action = container.querySelector('.productitem--actions');
//                         if (price) price.style.display = 'none';
//                         if (action){
//                             action.innerHTML = buttonHTML;
//                         }else{
//                             let div = document.createElement('div');
//                             div.innerHTML = buttonHTML;
//                             price.parentNode.appendChild(div);
//                         }
//                     }
//                 });
//             }
//         })
//         .then(() => {
//             let productItemContainers = document.querySelectorAll('.productitem__container');
//             productItemContainers.forEach(container => {
//                 //OUT OF STOCK
//                 let stock = container.querySelector('.product-stock-level__text');
//                 if (stock && stock.innerText === 'Out of stock') {
//                     let action = container.querySelector('.productitem--actions');
//                     if (action) {
//                         let contactButton = document.createElement('div');
//                         contactButton.style.width = '100%';
//                         contactButton.innerHTML = contactButtonHTML;
//                         action.appendChild(contactButton);
//                     }
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching hideProducts.json:', error);
//         });
//     });
// }

// PRODUCT VIEW PAGE
// if(productViewPageRegex.test(url)){
//     document.addEventListener('DOMContentLoaded', function() {
//         console.log(document.querySelector('.price__current'))
//         fetch('https://cdn.shopify.com/s/files/1/0616/5590/8525/files/hideProducts.json?v=1729930099')
//         .then(response => response.json())
//         .then(data => {
//             let isLogin = localStorage.getItem('isLoggedIn') === 'true';
//             if (!isLogin) {
//                 let productPrice = document.querySelector('.product-pricing');
//                 let productATC = document.querySelector('.product-form--atc');
//                 let titleElement = document.querySelector('.product-title');
//                 let title = titleElement ? titleElement.textContent.trim() : null;
//                 let recentViewBox = document.querySelector('.product-section--content');
//                 let dataTitles = new Set(data.map(item => item.title));

//                 //HIDE PRICE IF NOT LOGGED IN - PRODUCT VIEW PAGE
//                 const observerCallback = () => {
//                     let itemInRecent = document.querySelectorAll('.productitem__container');
//                     itemInRecent.forEach(item => {
//                         let titleElement = item.querySelector('.productitem--title');
//                         if (titleElement && dataTitles.has(titleElement.textContent.trim())) {
//                             let price = item.querySelector('.productitem__price');
//                             let button = item.querySelector('.see-the-price--btn');
//                             if (price && !button) {
//                                 price.style.display = 'none';
//                                 let div = document.createElement('div');
//                                 div.innerHTML = buttonHTML;
//                                 price.parentNode.appendChild(div);
//                             }
//                         }else{
//                             document.querySelector('.price__current').style.display = 'block';
//                         }
//                     });
//                 };

//                 const observer = new MutationObserver(observerCallback);
//                 observer.observe(recentViewBox, { childList: true, subtree: false });
            
//                 if (title && dataTitles.has(title)) {
//                     if (productPrice) productPrice.style.display = 'none';
//                     if (productATC) productATC.innerHTML = buttonHTML;
//                 }

//                 let productItemContainers = document.querySelectorAll('.productitem__container');
//                 productItemContainers.forEach(container => {
//                     let titleElement = container.querySelector('.productitem--title');
//                     if (titleElement && dataTitles.has(titleElement.textContent.trim())) {
//                         let action = container.querySelector('.productitem--actions');
//                         if (action) action.innerHTML = buttonHTML;
//                     }
//                 });
//             }else{
//                 document.querySelector('.price__current').style.display = 'block';
//             }
//         })
//         .then(() => {
//             let productItemContainers = document.querySelectorAll('.productitem__container');
//             productItemContainers.forEach(container => {
//                 let stock = container.querySelector('.product-stock-level__text');
//                 if (stock && stock.innerText === 'Out of stock') {
//                     let action = container.querySelector('.productitem--actions');
//                     if (action) {
//                         let contactButton = document.createElement('div');
//                         contactButton.innerHTML = contactButtonHTML;
//                         action.appendChild(contactButton.firstChild);
//                     }
//                 }
//             });
//         });
//         let nextStockButton = `<button onclick="openContactUs()" class="black-btn product-form--atc-button" type="button">
//                     <span class="quickshop-button">Check Next in Stock Date</span>
//                 </button>`
//         if(productViewPageRegex.test(url)){
//         let priceContainer = document.querySelector('.product-form--regular');
//         let button = priceContainer.querySelector('.product-form--atc-button');
//         let parent = button.parentNode;
//         if(button.innerText == "Sold out"){
//             button.style.display = 'none';
//             parent.innerHTML += nextStockButton;
//         }
//         }
//     });
   
// }

// function seePriceLogin() {
//     window.location.href = '/account/login';
// }

// function openContactUs() {
//     window.location.href = '/pages/contact';
// }

const locations = [
    {
      "name": "Calgary",
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.039268029768!2d-113.9721757!3d50.9969465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717a3ff80d1c5b%3A0x52d8421036f8f931!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742805783319!5m2!1sen!2sph",
      "width": "100%",
      "height": "450",
      "style": "border:0;",
      "allowfullscreen": "",
      "loading": "lazy",
      "referrerpolicy": "no-referrer-when-downgrade"
    },
    {
      "name": "Kamloops",
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.923267487648!2d-120.3273702!3d50.6842493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2b81fe340001%3A0xd70234a1fcddd95c!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742805984599!5m2!1sen!2sph",
      "width": "100%",
      "height": "450",
      "style": "border:0;",
      "allowfullscreen": "",
      "loading": "lazy",
      "referrerpolicy": "no-referrer-when-downgrade"
    },
    {
      "name": "Edmonton",
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.2479451218055!2d-113.57171299999999!3d53.642551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a025a571879163%3A0x54d88fc3e72f31c8!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742806173950!5m2!1sen!2sph",
      "width": "100%",
      "height": "450",
      "style": "border:0;",
      "allowfullscreen": "",
      "loading": "lazy",
      "referrerpolicy": "no-referrer-when-downgrade"
    },
    {
      "name": "Toronto",
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.5312246293447!2d-79.5319529!3d43.8033394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fa10be71a13%3A0x3a6c5006d5b8bd!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1743501159163!5m2!1sen!2sph",
      "width": "100%",
      "height": "450",
      "style": "border:0;",
      "allowfullscreen": "",
      "loading": "lazy",
      "referrerpolicy": "no-referrer-when-downgrade"
    },
    {
      "name": "Winnipeg",
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.9771261563583!2d-96.9710939!3d49.9180042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea726e6255faf3%3A0xe69c95002eeae95d!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742808333612!5m2!1sen!2sph",
      "width": "100%",
      "height": "450",
      "style": "border:0;",
      "allowfullscreen": "",
      "loading": "lazy",
      "referrerpolicy": "no-referrer-when-downgrade"
    }
]

document.addEventListener('DOMContentLoaded', function() {
    var storefrontSelect = document.getElementById('storefrontLocation');
    if (storefrontSelect) {
      var savedLocation = localStorage.getItem('storefrontLocation') || 'Calgary';
      storefrontSelect.value = savedLocation;
      updateStorefrontMap(savedLocation);
      
      storefrontSelect.addEventListener('change', function() {
        localStorage.setItem('storefrontLocation', this.value);
        updateStorefrontMap(this.value);
      });
    }
    
    function updateStorefrontMap(selectedName) {
      let selected = locations.find(loc => loc.name === selectedName);
      let mapContainer = document.getElementById('storefrontMap');
      if (mapContainer) {
        mapContainer.innerHTML = '';
        if (selected) {
          let iframe = document.createElement('iframe');
          iframe.src = selected.src;
          iframe.width = selected.width;
          iframe.height = selected.height;
          iframe.style.cssText = selected.style;
          iframe.setAttribute('allowfullscreen', selected.allowfullscreen);
          iframe.loading = selected.loading;
          iframe.referrerPolicy = selected.referrerpolicy;
          mapContainer.appendChild(iframe);
        }
      }
    }
});


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
if(productViewPageRegex.test(url)){
    document.addEventListener('DOMContentLoaded', function() {
        console.log(document.querySelector('.price__current'))
        fetch('https://cdn.shopify.com/s/files/1/0616/5590/8525/files/hideProducts.json?v=1729930099')
        .then(response => response.json())
        .then(data => {
            let isLogin = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLogin) {
                let productPrice = document.querySelector('.product-pricing');
                let productATC = document.querySelector('.product-form--atc');
                let titleElement = document.querySelector('.product-title');
                let title = titleElement ? titleElement.textContent.trim() : null;
                let recentViewBox = document.querySelector('.product-section--content');
                let dataTitles = new Set(data.map(item => item.title));

                //HIDE PRICE IF NOT LOGGED IN - PRODUCT VIEW PAGE
                const observerCallback = () => {
                    let itemInRecent = document.querySelectorAll('.productitem__container');
                    itemInRecent.forEach(item => {
                        let titleElement = item.querySelector('.productitem--title');
                        if (titleElement && dataTitles.has(titleElement.textContent.trim())) {
                            let price = item.querySelector('.productitem__price');
                            let button = item.querySelector('.see-the-price--btn');
                            if (price && !button) {
                                price.style.display = 'none';
                                let div = document.createElement('div');
                                div.innerHTML = buttonHTML;
                                price.parentNode.appendChild(div);
                            }
                        }else{
                            document.querySelector('.price__current').style.display = 'block';
                        }
                    });
                };

                const observer = new MutationObserver(observerCallback);
                observer.observe(recentViewBox, { childList: true, subtree: false });
            
                if (title && dataTitles.has(title)) {
                    if (productPrice) productPrice.style.display = 'none';
                    if (productATC) productATC.innerHTML = buttonHTML;
                }

                let productItemContainers = document.querySelectorAll('.productitem__container');
                productItemContainers.forEach(container => {
                    let titleElement = container.querySelector('.productitem--title');
                    if (titleElement && dataTitles.has(titleElement.textContent.trim())) {
                        let action = container.querySelector('.productitem--actions');
                        if (action) action.innerHTML = buttonHTML;
                    }
                });
            }else{
                document.querySelector('.price__current').style.display = 'block';
            }
        })
        .then(() => {
            let productItemContainers = document.querySelectorAll('.productitem__container');
            productItemContainers.forEach(container => {
                let stock = container.querySelector('.product-stock-level__text');
                if (stock && stock.innerText === 'Out of stock') {
                    let action = container.querySelector('.productitem--actions');
                    if (action) {
                        let contactButton = document.createElement('div');
                        contactButton.innerHTML = contactButtonHTML;
                        action.appendChild(contactButton.firstChild);
                    }
                }
            });
        });
        let nextStockButton = `<button onclick="openContactUs()" class="black-btn product-form--atc-button" type="button">
                    <span class="quickshop-button">Check Next in Stock Date</span>
                </button>`
        if(productViewPageRegex.test(url)){
        let priceContainer = document.querySelector('.product-form--regular');
        let button = priceContainer.querySelector('.product-form--atc-button');
        let parent = button.parentNode;
        if(button.innerText == "Sold out"){
            button.style.display = 'none';
            parent.innerHTML += nextStockButton;
        }
        }
    });
   
}





function seePriceLogin() {
    window.location.href = '/account/login';
}

function openContactUs() {
    window.location.href = '/pages/contact';
}
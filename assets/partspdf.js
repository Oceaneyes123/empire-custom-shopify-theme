console.log('hello from partspdf.js');
document.addEventListener('DOMContentLoaded', function() {
    console.log(product.id);
    async function fetchProductMetafields() {
        const client = ShopifyStorefrontAPIClient.createStorefrontApiClient({
              storeDomain: 'http://backtrack-7a34.myshopify.com',
              apiVersion: '2025-10',
              publicAccessToken: '8d1afb3ac67f61264f4ee3bb73fe3956'
        });

        const shopQuery = `
          query {
            product(id: "gid://shopify/Product/${product.id}") {
              partsPdf: metafield(namespace: "custom", key: "parts_pdf") {
                id
                namespace
                key
                value
                type
              }
              pagePdfFile: metafield(namespace: "custom", key: "page_pdf_file") {
                id
                namespace
                key
                value
                type
              }
              productPdf: metafield(namespace: "custom", key: "product_pdf") {
                id
                namespace
                key
                value
                type
              }
            }
          }
          `;

        const {data, errors, extensions} = await client.request(shopQuery);
        console.log('test', data)
        console.log('errors', errors)

        let fileURL = data.product.productPdf.value || data.product.partsPdf.value;
        
        if(fileURL != null) {
          let baseElement = document.querySelector('.product-form--atc')
          let button = `<div class="atc--button" style="width:100%: padding: 0; margin-top: 20px">
                <a href="${fileURL}" target="_blank">
                  <button class="see-the-price--btn productitem--action-atc button-primary product-form--atc-button mdc-ripple-surface mdc-ripple-upgraded" type="button">
                    <span class="atc-button--text">Download PDF</span>
                  </button>
                </a>
              </div>`;

          baseElement.insertAdjacentHTML('afterend', button);
        }
    }

    fetchProductMetafields();

  }); 
let contactSection = `<!-- Contact Section -->
<section class="contact-section">
  <div class="contact-container">
    <div class="contact-info">
      <h2>We’d Love to Hear From You</h2>
      <p>Whether you have a question, need more information, or just want to say hello, feel free to reach out using the contact information to the right.</p>
      <p>We're happy to help!</p>
    </div>
    <div class="contact-box">
      <h3 class="contact-heading">Contact Details</h3>
      <p><strong>Address:</strong> 123 Street, City, Country</p>
      <p><strong>Phone:</strong> +1 234 567 890</p>
      <div class="btn-wrapper">
        <a href="/pages/contact"><button class="contact-btn">Contact us</button></a>
      </div>
    </div>
  </div>
</section>`;

const locations = [
  // ...existing locations array...
  {
    name: "Calgary",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.039268029768!2d-113.9721757!3d50.9969465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717a3ff80d1c5b%3A0x52d8421036f8f931!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742805783319!5m2!1sen!2sph",
    width: "100%",
    height: "450",
    style: "border:0;",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    address: "2115-4416 64 Ave SE, Calgary AB T2C 2B3",
    phone: ["403-879-2495", "888-437-4779"],
    email: {
      sales: "tristan@backtrack.com",
      service: "tristan@backtrack.com"
    },
    hours: [
      "Monday to Friday: 8:00-4:00",
      "Saturday and Sunday: Closed"
    ],
    placeID: "ChIJWxwN-D96cVMRMfn4NhBC2FI",
    profileID: "13684662485077448544",
    image: "https://cdn.shopify.com/s/files/1/0616/5590/8525/files/Calgary.jpg?v=1748517012"
  },
  // ...other locations...
  {
    name: "Kamloops",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.923267487648!2d-120.3273702!3d50.6842493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2b81fe340001%3A0xd70234a1fcddd95c!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742805984599!5m2!1sen!2sph",
    width: "100%",
    height: "450",
    style: "border:0;",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    address: "657 Sarcee Street West, Kamloops BC V2H 1E4",
    phone: ["778-399-0737", "888-634-3418"],
    email: {
      sales: "tupson@backtrack.com",
      service: "tupson@backtrack.com"
    },
    hours: [
      "Monday to Friday: 8:00-4:00",
      "Saturday and Sunday: Closed"
    ],
    placeID: "ChIJAQA0_oErflMRXNnd_KE0Atc",
    profileID: "16231699396510810475",
    image: "https://cdn.shopify.com/s/files/1/0616/5590/8525/files/Kamloops.jpg?v=1748517010"
  },
  {
    name: "Edmonton",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.2479451218055!2d-113.57171299999999!3d53.642551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a025a571879163%3A0x54d88fc3e72f31c8!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742806173950!5m2!1sen!2sph",
    width: "100%",
    height: "450",
    style: "border:0;",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    address: "55 Corriveau Ave, St.Albert AB T8N 5A3",
    phone: ["780-418-4252", "888-744-7245"],
    email: {
      sales: "corey@backtrack.com",
      service: "aaron@backtrack.com"
    },
    hours: [
      "Monday: 8:00-4:00",
      "Tuesday to Friday: 8:00-5:00",
      "Saturday: 10:00-2:00",
      "Sunday: Closed"
    ],
    placeID: "ChIJY5GHcaUloFMRyDEv58OP2FQ",
    profileID: "7513797813009368832",
    image: "https://cdn.shopify.com/s/files/1/0616/5590/8525/files/Edmonton.jpg?v=1748517012"
  },
  {
    name: "Toronto",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.5312246293447!2d-79.5319529!3d43.8033394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fa10be71a13%3A0x3a6c5006d5b8bd!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1743501159163!5m2!1sen!2sph",
    width: "100%",
    height: "450",
    style: "border:0;",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    address: "4-130 Pennsylvania Ave, Concord ON L4K 4A8",
    phone: ["905-760-9785", "888-253-6806"],
    email: {
      sales: "tracy@backtrack.com",
      service: "geoff@backtrack.com"
    },
    hours: [
      "Monday to Friday: 8:00-4:00",
      "Saturday and Sunday: Closed"
    ],
    placeID: "ChIJExrnC6EvK4gRvbjVBlBsOgA",
    profileID: "5146561405530466952",
    image: "https://cdn.shopify.com/s/files/1/0616/5590/8525/files/Toronto.jpg?v=1748517012"
  },
  {
    name: "Winnipeg",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.9771261563583!2d-96.9710939!3d49.9180042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea726e6255faf3%3A0xe69c95002eeae95d!2sBacktrack%20Railway%20Services%20Ltd.!5e0!3m2!1sen!2sph!4v1742808333612!5m2!1sen!2sph",
    width: "100%",
    height: "450",
    style: "border:0;",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    address: "270 Transport Rd, Sunnyside MB R5R 0J5",
    phone: ["204-694-1165", "866-679-7245"],
    email: {
      sales: "rdobslaw@backtrack.com",
      service: "rdobslaw@backtrack.com"
    },
    hours: [
      "Monday to Friday: 8:00-4:00",
      "Saturday and Sunday: Closed"
    ],
    placeID: "ChIJ8_pVYm5y6lIRXenqLgCVnOY",
    profileID: "8355840561432144503",
    image: "https://cdn.shopify.com/s/files/1/0616/5590/8525/files/Winnipeg.jpg?v=1748517011"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  locations.forEach(location => {
    if (location.image) {
      const img = new Image();
      img.src = location.image;
    }
  });

  var footerMenu = document.querySelector('.site-footer-block-menu');
  if (footerMenu) {
    var newDiv = document.createElement('div');
    newDiv.className = 'footer-menu';
    newDiv.style.marginTop = '20px';
    newDiv.innerHTML = '<a href="/pages/support" style="color:#fff; text-decoration:none; cursor:pointer;">Contact Support</a>';
    footerMenu.appendChild(newDiv);
  }
    var storefrontSelect = document.getElementById('storefrontLocation');
    if (storefrontSelect) {
      var savedLocation = localStorage.getItem('storefrontLocation') || 'Calgary';
      storefrontSelect.value = savedLocation;      let storeDetails = document.getElementById('storeDetails');
      if (storeDetails) {
        storeDetails.innerHTML = contactSection;
        updateStorefrontMap(savedLocation);
          const defaultLocation = locations.find(loc => loc.name === savedLocation);
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && defaultLocation && defaultLocation.image) {
          heroSection.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${defaultLocation.image}')`;
          heroSection.style.backgroundSize = 'cover';
          heroSection.style.backgroundPosition = 'center';
          heroSection.style.backgroundRepeat = 'no-repeat';
        }
      }
      storefrontSelect.addEventListener('change', function() {
        localStorage.setItem('storefrontLocation', this.value);
        
        if (window.location.pathname !== '/' && window.location.pathname !== '') {
          window.location.href = '/';
          return;
        }
        
        updateStorefrontMap(this.value);
      });
    }
    
    function updateStorefrontMap(selectedName) {
      let selected = locations.find(loc => loc.name === selectedName);
      let mapContainer = document.getElementById('storefrontMap');
      let storeDetails = document.getElementById('storeDetails');
      
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
      }      if (storeDetails && selected) {
        let detailsHtml = contactSection.replace('123 Street, City, Country', selected.address)
          .replace('+1 234 567 890', selected.phone.join(' / '));
        if (!document.getElementById('hours-indent-style')) {
          const style = document.createElement('style');
          style.id = 'hours-indent-style';
          style.innerHTML = `.hours-indent { display: block; margin-left: 1.5em; }`;
          document.head.appendChild(style);
        }
        const hoursHtml = `<p><strong>Hours:</strong><br>${selected.hours.map(h => `<span class='hours-indent'>${h}</span>`).join('')}</p>`;
        detailsHtml = detailsHtml.replace('</p>\n      <div class="btn-wrapper">', `</p>\n      ${hoursHtml}\n      <div class="btn-wrapper">`);
        storeDetails.innerHTML = detailsHtml;
      }      const heroSection = document.querySelector('.hero-section');
      if (heroSection && selected && selected.image) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${selected.image}')`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
        heroSection.style.backgroundRepeat = 'no-repeat';
      }
      if (selected && selected.placeID) {
        fetch(`https://backtrack-api-coa2.onrender.com/api/place-details?placeId=${selected.placeID}`)
          .then(res => res.json())
          .then(data => {
            const storeReviewsContainer = document.getElementById('storeReviews');
            if (storeReviewsContainer) {
              storeReviewsContainer.innerHTML = '';
              if (data.result && data.result.reviews && data.result.reviews.length > 0) {
                displayReviews(data.result.reviews, storeReviewsContainer);
              } else {
                storeReviewsContainer.innerHTML = '<p>No reviews available for this location.</p>';
              }
            }
          })
          .catch(error => {
            const storeReviewsContainer = document.getElementById('storeReviews');
            if (storeReviewsContainer) {
              storeReviewsContainer.innerHTML = '<p>Could not load reviews at this time.</p>';
            }
          });
      }
    }

    function displayReviews(reviews, container) {
      container.innerHTML = '';
      const reviewsToShow = reviews;
      let currentIndex = 0;
      const maxDisplay = 4;
      const reviewsWrapper = document.createElement('div');
      reviewsWrapper.className = 'reviews-wrapper';
      const reviewCardsContainer = document.createElement('div');
      reviewCardsContainer.className = 'review-cards-container';
      reviewsWrapper.appendChild(reviewCardsContainer);      
      function renderReviewCards() {
        reviewCardsContainer.innerHTML = '';
        const visibleReviews = reviewsToShow.slice(currentIndex, currentIndex + maxDisplay);
        visibleReviews.forEach(review => {
          const reviewCard = document.createElement('div');
          reviewCard.className = 'review-card';
          reviewCard.innerHTML = `
            <div class="review-author">
              <img src="${review.profile_photo_url}" alt="${review.author_name}" class="review-author-img">
              <strong>${review.author_name}</strong>
            </div>
            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p class="review-text">${review.text}</p>
            <a href="${review.author_url}" target="_blank" class="review-link">Read full review</a>
            <p class="review-time">${review.relative_time_description}</p>
          `;
          reviewCardsContainer.appendChild(reviewCard);
        });
        const prevBtn = reviewsWrapper.querySelector('.review-prev');
        const nextBtn = reviewsWrapper.querySelector('.review-next');
        if (prevBtn) prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
        if (nextBtn) nextBtn.style.display = currentIndex + maxDisplay < reviewsToShow.length ? 'block' : 'none';
      }
      if (reviewsToShow.length > maxDisplay) {
        const prevButton = document.createElement('button');
        prevButton.className = 'review-nav review-prev';
        prevButton.innerHTML = '&#10094;';
        prevButton.onclick = () => {
          currentIndex = Math.max(0, currentIndex - maxDisplay);
          renderReviewCards();
        };
        const nextButton = document.createElement('button');
        nextButton.className = 'review-nav review-next';
        nextButton.innerHTML = '&#10095;';
        nextButton.onclick = () => {
          currentIndex = Math.min(reviewsToShow.length - maxDisplay, currentIndex + maxDisplay);
          renderReviewCards();
        };
        reviewsWrapper.appendChild(prevButton);
        reviewsWrapper.appendChild(nextButton);
      }
      container.appendChild(reviewsWrapper);
      renderReviewCards();
      if (!document.getElementById('reviews-style')) {
        const style = document.createElement('style');
        style.id = 'reviews-style';
        style.innerHTML = 
        `.reviews-wrapper {
            position: relative;
            margin-top: 20px;
            margin-bottom: 40px;
          }
          .review-cards-container {
            display: flex;
            gap: 15px;
            overflow: hidden;
            justify-content: center;
          }
          .review-card {
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 15px;
            width: calc(25% - 15px);
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            background-color: #fff;
            display: flex;
            flex-direction: column;
            min-width: 200px;
          }
          .review-author {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          .review-author-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .review-rating {
            color: #f8c102;
            margin-bottom: 5px;
          }
          .review-text {
            font-size: 0.9em;
            color: #555;
            flex-grow: 1;
            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
          .review-link {
            font-size: 0.8em;
            color: #007bff;
            text-decoration: none;
            margin-bottom: 5px;
          }
          .review-link:hover {
            text-decoration: underline;
          }
          .review-time {
            font-size: 0.8em;
            color: #777;
            margin-top: auto;
          }
          .review-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0,0,0,0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
            z-index: 10;
            font-size: 18px;
            line-height: 1;
          }
          .review-prev {
            left: -5px;
          }
          .review-next {
            right: -5px;
          }
          @media (max-width: 992px) {
            .review-card {
              width: calc(50% - 10px);
            }
          }
          @media (max-width: 576px) {
            .review-card {
              width: 100%;
            }
            .review-nav {
              top: auto;
              bottom: -40px;
              transform: none;
            }
            .review-prev {
              left: 35%;
            }
            .review-next {
              right: 35%;
            }
            .reviews-wrapper {
              padding-bottom: 50px;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
  });

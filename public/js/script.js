let btnLogo = document.getElementById('btn-logo');
let btnWebsite = document.getElementById('btn-website');
let btnMenu = document.getElementById('btn-menu');
let btnCard = document.getElementById('btn-card');
let btnPoster = document.getElementById('btn-poster');
let btnAd = document.getElementById('btn-ad');

btnLogo.addEventListener('click', function(){
  window.open('public/components/logos.html', '_blank');
})

<<<<<<< HEAD
btnWebsite.addEventListener('click', function(){
  window.open('public/components/websites.html', '_blank');
})
=======
    // Loop through checkboxes to check which ones are checked
    checkboxes.forEach(function (chk) {
      if (chk.checked) {
        // Get the value of the checked checkbox
        var category = chk.value;
        // Add images or videos based on the selected category
        if (checkbox.checked && category === "websites") {
          // Redirect to website.html if "websites" checkbox is checked
          window.location.href = "websites.html";
        }
        switch (category) {
          case "websites":
            addTemplate("public/img", "Website Template 1");
            break;
          case "logos":
            addTemplate("public/img/logos/logo1.png", "Business Logo 1");
            addTemplate("public/img/logos/logo2.png", "Business Logo 2");
            addTemplate("public/img/logos/logo3.png", "Business Logo 3");
            addTemplate("public/img/logos/logo4.png", "Business Logo 4");
            addTemplate("public/img/logos/logo12.jpg", "Business Logo 5");
            addTemplate("public/img/logos/logo6.png", "Business Logo 6");
            addTemplate("public/img/logos/logo8.jpg", "Business Logo 7");
            addTemplate("public/img/logos/logo9.jpg", "Business Logo 8");
            addTemplate("public/img/logos/logo5.png", "Business Logo 9");
            addTemplate("public/img/logos/logo15.jpg", "Business Logo 10");
            addTemplate("public/img/logos/logo16.jpg", "Business Logo 11");
            addTemplate("public/img/logos/Gums&Bums.jpg", "Business Logo 12");
            break;
          case "cards":
            addTemplate("public/img/cards/card1.png", "Business Card 1");
            addTemplate("public/img/cards/card2.png", "Business Card 2");
            addTemplate("public/img/cards/card3.png", "Business Card 3");
            addTemplate("public/img/cards/card4.png", "Business Card 4");
            addTemplate("public/img/cards/card5.png", "Business Card 5");
            addTemplate("public/img/cards/card6.png", "Business Card 6");
            break;
          case "ads":
            // addTemplate("public/img/ads/logo8.mp4", "Business Video 1", true); 
            // addTemplate("public/img/ads/video2.mp4", "Business Video 2", true);
            break;
          case "flyers":
            addTemplate("https://via.placeholder.com/300", "Business Flyer 1");
            addTemplate("https://via.placeholder.com/300", "Business Flyer 2");
            break;
          case "posters":
            addTemplate("public/img/poster/poster1.png", "Business Poster 1");
            addTemplate("public/img/poster/poster2.png", "Business Poster 2");
            addTemplate("public/img/poster/poster3.png", "Business Poster 3");
            addTemplate("public/img/poster/poster4.png", "Business Poster 4");
            addTemplate("public/img/poster/poster5.png", "Business Poster 4");
            break;
        }
      }
    });
  });
});
>>>>>>> a6795f94d3393d8641673781d88a20e0f3b77c8b

btnMenu.addEventListener('click', function(){
  window.open('public/components/menus.html', '_blank');
})

btnCard.addEventListener('click', function(){
  window.open('public/components/cards.html', '_blank');
})

btnPoster.addEventListener('click', function(){
  window.open('public/components/posters.html', '_blank');
})

btnAd.addEventListener('click', function(){
  window.open('public/components/ads.html', '_blank');
})
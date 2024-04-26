let btnLogo = document.getElementById('btn-logo');
let btnWebsite = document.getElementById('btn-website');
let btnMenu = document.getElementById('btn-menu');
let btnCard = document.getElementById('btn-card');
let btnPoster = document.getElementById('btn-poster');
let btnAd = document.getElementById('btn-ad');

btnLogo.addEventListener('click', function(){
  window.open('public/components/logos.html', '_blank');
})

btnWebsite.addEventListener('click', function(){
  window.open('public/components/websites.html', '_blank');
})

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

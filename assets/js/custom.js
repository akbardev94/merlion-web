// main-accordion
var acc = document.getElementsByClassName("main-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// Leaflet JS Documentation
var map = L.map('map').setView([1.286920, 103.854570], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {  
    iconSize:     [38, 60],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
  }
});

var mapsIcon = new LeafIcon({iconUrl: 'assets/img/icon/maps.png'});

var mIconMarlion = L.marker([1.286920, 103.854570], {icon: mapsIcon}).bindPopup('Merlion').addTo(map);
var mIconACM  = L.marker([1.287466, 103.851424], {icon: mapsIcon}).bindPopup('Asian Civilization Museum').addTo(map);
var mIconCQ = L.marker([1.290555,  103.846188], {icon: mapsIcon}).bindPopup('Clarke Quey').addTo(map);
var mIconFCP = L.marker([1.295526, 103.845331], {icon: mapsIcon}).bindPopup('Fort Canning Park').addTo(map);
var mIconOR = L.marker([1.302279, 103.837399], {icon: mapsIcon}).bindPopup('Orchard Road').addTo(map);
var mIconSF = L.marker([1.289332, 103.863152], {icon: mapsIcon}).bindPopup('Singapore Flayer').addTo(map);
var mIconMBS = L.marker([1.283099, 103.860295], {icon: mapsIcon}).bindPopup('Marina Bay Sands').addTo(map);
var mIconGBB = L.marker([1.281790, 103.863954], {icon: mapsIcon}).bindPopup('Garden by the Bay').addTo(map);
var mIconCT = L.marker([1.284193, 103.843362], {icon: mapsIcon}).bindPopup('China Town').addTo(map);

// sidebar detail
function closeNav() {
  document.getElementById("detail").style.display = "none";
}

function openNav() {
  document.getElementById("detail").style.display = "block";
}



"use strict";
// get user current position
const getCurPosition = function (position) {
  const { latitude, longitude } = position.coords;

  // initializing the map
  let map = L.map("map", {
    center: [latitude, longitude],
    zoom: 13,
  });

  // Adding tiles to the map so as to show area details
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Using marker to identify user current location
  L.marker([latitude, longitude]).addTo(map);
};

navigator.geolocation.getCurrentPosition(getCurPosition, function (error) {
  console.error(error);
});

// console.log(navigator.geolocation);

// Economy, business class, first class

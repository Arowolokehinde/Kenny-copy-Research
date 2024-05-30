"use strict";
// get user current position
const getCurPosition = function (position) {
  const { latitude, longitude } = position.coords;

  // initializing the map
  let map = L.map("map", {
    center: [latitude, longitude],
    zoom: 13,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
};

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);

    // This is for including and setting the map to a coordinate
    let map = L.map("map", {
      center: [latitude, longitude],
      zoom: 13,
    });

    // This allows the display of tiles on the map
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
  },

  function (error) {
    console.error(error);
  }
);

// console.log(navigator.geolocation);

// Economy, business class, first class

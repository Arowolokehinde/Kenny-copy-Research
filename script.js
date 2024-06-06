"use strict";
const form = document.querySelector("form");
const chooseTrain = document.querySelector(".header__choose-train");
const trainClassList = document.querySelector(".header__choose-class");
const trainClassItems = document.querySelectorAll(".header__choose-item");

// input fields
const currentLocationInput = document.querySelector(".current-location");
const nearestTrainInput = document.querySelector(".nearest-train");

// input fields value
const curLocationValue = currentLocationInput.value;
const curNearestTrainValue = nearestTrainInput.value;

// button
const headerBookTrainButton = document.querySelector(
  ".header__book-train button"
);

const headerChooseClass = document.querySelector(
  ".header__choose-train button"
);

// get user current position
const getCurPosition = function (position) {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);

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

// get error position if any
const getError = function (error) {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(getCurPosition, getError);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  chooseTrain.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  if (curLocationValue && curNearestTrainValue) {
    chooseTrain.classList.remove("hidden");
    headerBookTrainButton.classList.add("hidden");
  }
});

trainClassList.addEventListener("click", function (e) {
  trainClassItems.forEach((item) => item.classList.remove("active"));
  e.target.closest(".header__choose-item").classList.toggle("active");
  console.log(e.target.closest(".header__choose-item"));
});

// get user location
const getAddress = async function (latitude, longitude) {
  try {
    const data = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const res = await data.json();

    currentLocationInput.value = res.display_name;

    currentLocationInput.disabled = true;

    console.log(res.display_name);
  } catch (error) {
    console.log(error);
  }
};

headerChooseClass?.addEventListener("click", function () {
  document.querySelector(".overlay").classList.toggle("hidden");
  console.log(document.querySelector(".overlay"));
});

document.querySelector(".overlay")?.addEventListener("click", function (e) {
  console.log(e.target.classList.value);
  if (e.target.classList.value === "overlay")
    document.querySelector(".overlay").classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () =>
  getAddress(6.5018255, 3.369134)
);

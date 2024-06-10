"use strict";
const form = document.querySelector("form");
const chooseTrain = document.querySelector(".header__choose-train");
const trainClassList = document.querySelector(".header__choose-class");
const trainClassItems = document.querySelectorAll(".header__choose-item");

// input fields
const currentLocationInput = document.querySelector(".current-location");
const nearestTrainInput = document.querySelector("#train-station");
const boardingTime = document.querySelector("#boarding");

// input fields value
const curLocationValue = currentLocationInput.value;
const curNearestTrainValue = nearestTrainInput.value;

// button
const buttonActivateBook = document.querySelector(".header__book-train button");

const headerChooseClass = document.querySelector(
  ".header__choose-train button"
);

const payButton = document.querySelector(".overlay__form button");

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

  getAddress(latitude, longitude);
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
    buttonActivateBook.classList.add("hidden");
  }
});

trainClassList.addEventListener("click", function (e) {
  trainClassItems.forEach((item) => item.classList.remove("active"));
  e.target.closest(".header__choose-item").classList.toggle("active");
  console.log(e.target.closest(".header__choose-item"));
});

headerChooseClass?.addEventListener("click", function () {
  document.querySelector(".overlay").classList.toggle("hidden");
  console.log(document.querySelector(".overlay"));
});

payButton?.addEventListener("click", function (e) {
  e.preventDefault();
  const data = {
    currentLocation: currentLocationInput.value,
    trainStation: nearestTrainInput.value,
    boardingTime: boardingTime.value,
    trainClass: [...trainClassItems]
      .filter((item) => item.classList.contains("active"))[0]
      .querySelector(".train-class").textContent,
    price: [...trainClassItems]
      .filter((item) => item.classList.contains("active"))[0]
      .querySelector(".train-price").textContent,
  };
  console.log(data);
});

document.querySelector(".overlay")?.addEventListener("click", function (e) {
  console.log(e.target.classList.value);
  if (e.target.classList.value === "overlay")
    document.querySelector(".overlay").classList.toggle("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape")
    document.querySelector(".overlay").classList.toggle("hidden");
});

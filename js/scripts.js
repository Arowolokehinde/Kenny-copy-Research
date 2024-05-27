// function openModal(modalId) {
//   document.getElementById(modalId).style.display = "block";
// }

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("signInModal");
  if (event.target == modal) {
    closeModal("signInModal");
  }
};

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function showDepartureDropdown() {
  var dropdown = document.getElementById("departure-dropdown");
  dropdown.classList.toggle("show");
}

function showArrivalDropdown() {
  var dropdown = document.getElementById("arrival-dropdown");
  dropdown.classList.toggle("show");
}

function selectDeparture(event, destination) {
  event.preventDefault();
  var departureInput = document.getElementById("departure");
  departureInput.value = destination;
  closeDropdown("departure-dropdown");
}

function selectDestination(event, destination) {
  event.preventDefault(); // Prevent the default action of the anchor tag
  var arrivalInput = document.getElementById("arrival");
  arrivalInput.value = destination;
  closeDropdown();
}

function closeDropdown() {
  var dropdown = document.getElementById("arrival-dropdown");
  if (dropdown) {
    dropdown.classList.remove("show");
  }
}

function setFixedTime() {
  var timeInput = document.getElementById("time");
  if (timeInput) {
    timeInput.value = "11:00";
  } else {
    console.error("Time input not found!");
  }
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches("#arrival") && !event.target.closest(".dropdown")) {
    closeDropdown();
  }
  if (
    !event.target.matches("#departure") &&
    !event.target.closest(".dropdown")
  ) {
    closeDropdown("departure-dropdown");
  }
});

function showDateDropdown() {
  var dropdown = document.getElementById("date-dropdown");
  dropdown.classList.toggle("show");
}

// document
//   .getElementById("book-now-button")
//   .addEventListener("click", function (event) {
//     console.log("Button clicked!");
//     //var paymentSection = document.getElementById("payment-section");
//     //paymentSection.style.display = "block";
//     showSignInForm();
//   });

// function showSignInForm() {
//   openModal("signInModal");
// }

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Here you can add your logic to process the payment details
    // For example, you can send the data to a server using AJAX

    // After processing, you can show a success message or redirect the user to a thank you page
    alert("Payment submitted successfully!");
  });

// scripts.js

// function openModal() {
//   document.getElementById("signInModal").style.display = "block";
// }

function closeModal() {
  document.getElementById("signInModal").style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("signInModal");
  if (event.target == modal) {
    closeModal();
  }
};

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function showDateDropdown() {
  var dropdown = document.getElementById("date-dropdown");
  dropdown.classList.toggle("show");
}

// function openModal() {
//   document.getElementById("signInModal").style.display = "block";
// }

function closeModal() {
  document.getElementById("signInModal").style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("signInModal");
  if (event.target == modal) {
    closeModal();
  }
};

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});

document
  .getElementById("book-now-button")
  .addEventListener("click", function (event) {
    // console.log("Button clicked!");
    var paymentSection = document.getElementById("payment-details");
    paymentSection.style.display = "block";
    showSignInForm();
  });

// function showSignInForm() {
//   // Get the sign-in form modal element
//   var signInFormModal = document.getElementById("signin-form");
//   // Display the sign-in form modal
//   signInFormModal.style.display = "block";
// }

document.addEventListener("DOMContentLoaded", function () {
  // Get the button and menu elements
  var dropdownButton = document.getElementById("dropdownButton");
  var dropdownMenuItems = document.querySelectorAll(".dropdown-item");

  // Add a click event listener to each dropdown menu item
  dropdownMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Update the button text with the selected item's data-value
      dropdownButton.innerText = this.getAttribute("data-value");
    });
  });
});

const loginBtn = () => {
  window.location.href = "./pages/login.html";
};

const signUpBtn = () => {
  window.location.href = "./pages/signup.html";
};

const submitForm = () => {
  const form = document.getElementById("myForm");

  // Reset the form
  form.reset();

  // Display an alert message
  alert("Form submitted successfully");
};

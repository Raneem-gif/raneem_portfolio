document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let country = document.getElementById("country").value.trim();
  let comments = document.getElementById("comments").value.trim();

  if (fullName === "" || email === "" || country === "" || comments === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert("Form submitted successfully!");
});

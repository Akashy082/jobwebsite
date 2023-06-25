document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
  
    // Perform login validation
    if (email === "example@example.com" && password === "password") {
      alert("Login successful!");
      // Add code to redirect to a different page or perform further actions
    } else {
      alert("Invalid email or password.");
    }
  });
  
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
  
    // Perform registration
    // Add code to store the user's registration details
  
    alert("Registration successful!");
    // Add code to redirect to a different page or perform further actions
  });

//login javascript
  const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });
  
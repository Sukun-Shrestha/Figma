document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      if (password.length < 8) {
        throw new Error(
          "Password must be at least 8 characters,symbols and numbers"
        );
      }
      alert("Sign in successful!");

      //   if (username === "admin" && password === password") {
      //     alert("Sign in successful!");
      //   } else {
      //     throw new Error("Invalid username or password");
      //   }
    } catch (error) {
      const errorElement = document.getElementById("error");
      errorElement.textContent = error.message;
      errorElement.style.display = "block";

      document.getElementById("password").value = "";
      document.getElementById("passwordError").textContent = error.message;
    }
  });

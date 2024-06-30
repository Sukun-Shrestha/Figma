class LoginPage {
  constructor() {
    this.usernameInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.loginBtn = document.getElementById("loginBtn");

    this.addEventListeners();
  }

  addEventListeners() {
    this.loginBtn.addEventListener("click", () => this.login());
  }

  login() {
    const username = this.usernameInput.value;
    const password = this.passwordInput.value;

    if (this.validate(username, password)) {
      alert("Login successful");
    } else {
      alert("Invalid username or password");
    }
  }

  validate(username, password) {
    return username === "sukunshr@gmail.com" && password === "qwerty12345";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new LoginPage();
});

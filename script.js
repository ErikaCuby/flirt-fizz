function generatePickUp(event) {
  event.preventDefault();

  new Typewriter("#pick-up-line", {
    strings: "lalalaal",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let pickUpForm = document.querySelector("#form");
pickUpForm.addEventListener("submit", generatePickUp);

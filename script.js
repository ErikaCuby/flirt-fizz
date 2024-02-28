function displayPickUp(response) {
  new Typewriter("#pick-up-line", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePickUp(event) {
  event.preventDefault();

  let pickUpInput = document.querySelector("#pick-up-input");
  let apiKey = "b5913f071fao57fb23b245a065fb8tac";
  let context =
    "You are the best pick-up line AI assistant thank knows how to tell a great line to pick up a partner at the bar. You are up to date with modern dating and exactly knows what words to use to attract a person. You make people feel aprechiated and you have a strong sense of decribing their features and uniques. Please, make sure to follow the user instructions.";
  let prompt = `User instructions: Please, write down a pick-up line about ${pickUpInput.value} in the format <p>Your pick-up-line</p>. Please behave and thank you.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let pickUpElement = document.querySelector("#pick-up-line");
  pickUpElement.classList.remove("hidden");
  pickUpElement.innerHTML =
    `<div class="generating">Generating the Pick Up Line about ${pickUpInput.value}.</div>`;

  axios.get(apiUrl).then(displayPickUp);
}

let pickUpForm = document.querySelector("#form");
pickUpForm.addEventListener("submit", generatePickUp);

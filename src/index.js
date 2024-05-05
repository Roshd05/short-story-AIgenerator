function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-story");
  let apiKey = "840df5b063f365oba39tb282d8c1d0cc";
  let context =
    "You are very smart and have a lot of information and history your mission is to create a short story about the topic the user choose as a topic and follow users instructions";
  let promtp = `Users instructions: Generate a short story about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="generating">⏳ Generating a short story about ${instructionsInput.value}?
    </div>`;

  axios.get(apiUrl).then(displayStory);
}

let storyformGenerator = document.querySelector("#story-generator");
storyformGenerator.addEventListener("submit", generateStory);

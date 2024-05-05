function generateStory(event) {
    event.preventDefault();
    new Typewriter("#story", {
    strings: "The women who loved her Golden Retriever so much",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let storyformGenerator = document.querySelector("story-generator");
storyformGenerator.addEventListener("submit" generateStory);
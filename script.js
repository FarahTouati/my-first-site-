 const affirmations = [
    "I am capable of doing hard things.",
    "Every day is a fresh start.",
    "I choose to be kind to myself today.",
    "My potential to succeed is infinite.",
    "I am enough just as I am.",
    "I focus on what I can control and let go of the rest."
];

const textElement = document.getElementById("affirmation-text");
const button = document.getElementById("new-btn");

button.addEventListener("click", () => {
    // Pick a random number based on the list size
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    // Change the text on the screen
    textElement.innerText = `"${affirmations[randomIndex]}"`;
});
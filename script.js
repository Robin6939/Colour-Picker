// Get the button element by its id
const button = document.getElementById('clickButton');

// Add a click event listener to the button

button.addEventListener('click', () => {
    var randColour = Math.floor(Math.random() * 16777215);
    var colour = "#" + randColour.toString(16);
    document.body.style.backgroundColor = colour;
    console.log(colour);
});

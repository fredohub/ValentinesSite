function showMessage(response) {
  const container = document.querySelector(".container");
  const image = document.querySelector(".image");
  const question = document.getElementById("question");
  const nameHeading = document.getElementById("name");
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yesButton");

  if (response === "No") {
    // Ensure the container is relative so button moves inside it
    container.style.position = "relative";

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image to gun.gif
    image.src = "images/gun.gif";

    // Calculate max coordinates inside container
    const maxWidth = container.clientWidth - noButton.offsetWidth;
    const maxHeight = container.clientHeight - noButton.offsetHeight;

    // Generate random coordinates
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Move the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update question text and hide name
    question.textContent = "The 'No' button is just for fun 😉";
    nameHeading.style.display = "none";
  }

  if (response === "Yes") {
    // Remove name heading and no button
    nameHeading.remove();
    noButton.remove();

    // Update question text
    question.textContent = "YAY! See you on the 14th, babygirl 💖";
    question.style.display = "block";
    question.style.fontStyle = "normal";

    // Change image to dance.gif
    image.src = "images/dance.gif";

    // Remove yes button
    yesButton.remove();
  }
}
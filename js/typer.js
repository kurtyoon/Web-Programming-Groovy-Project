window.onload = function () {
  const typerText = document.querySelector(".typer-text h1");
  const text = typerText.textContent;
  let index = 0;

  function writeText() {
    if (index < text.length) {
      typerText.innerHTML = text.slice(0, index);
      index++;
    } else {
      index = 0; // Reset the index
    }
  }

  setInterval(writeText, 300); // Adjust the speed of the typing here
};

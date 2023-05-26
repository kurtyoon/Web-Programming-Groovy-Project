window.onload = function () {
  const items = document.querySelectorAll(".todo-item");

  items.forEach((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        item.classList.add("done");
      } else {
        item.classList.remove("done");
      }
    });
  });
};

const ul = document.querySelector(".ul");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

let tasks = [];

function render() {
  ul.innerHTML = "";
  tasks.forEach((elem, i) => {
    ul.insertAdjacentHTML(
      "afterbegin",
      `<div><li>${elem}<button class='clickB'>X</buttton></li></div>`
    );

    const clickB = document.querySelectorAll(".clickB");
    clickB.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        handleClickRemove(i);
      });
    });
  });
}

const handleClickRemove = (index) => {
    tasks.splice(index, 1);
    ul.innerHTML = '';
    render();
};

const handleClickAdd = (e) => {
  e.preventDefault();
  tasks.push(input.value);
  render();
};

window.onload = render();
btn.addEventListener("click", handleClickAdd);


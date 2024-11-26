let per = document.querySelector(".per");
let child = document.querySelector(".child");
let parent = document.querySelector(".parent");

let index = 0;
window.addEventListener("load", () => {
  let time = setInterval(() => {
    per.textContent = index;
    if (index >= 100) {
      clearInterval(time);
    }
    index++;
    child.style.width = `${index}%`;
    child.style.background = "red";
  }, 10);
});

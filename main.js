let active = document.querySelectorAll(
  ".wrapper .container .socials .category div i"
);
active.forEach(function (ele) {
  ele.onclick = function () {
    active.forEach(function (ele) {
      ele.classList.remove("active");
      ele.classList.add("text-cyan-500");
    });
    this.classList.remove("text-cyan-500");
    this.classList.add("active");
  };
});

// Toggle THeme
const html = document.querySelector("html");
const toggleTheme = document.querySelector("#toggle-theme");
const toggleThemeIcon = document.querySelector("img");
const changeThemeImg = document.querySelector(".equ");
toggleTheme.addEventListener("click", () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  const themeIcon = isDark ? "light" : "dark";
  const themeImg = isDark ? "light" : "dark";
  toggleThemeIcon.src = `./img/icon-${themeIcon}.svg`;
  changeThemeImg.src = `./img/eq-${themeImg}.png`;
});

let menuButton = document.getElementById("toggleMenu");
let sidebar = document.querySelector(".sidebar");
let closeButton = document.getElementById("closeIco")
menuButton.addEventListener("click", () => {
   sidebar.style.display = `flex`;
})
closeButton.addEventListener("click", () => {
   sidebar.style.display = `none`;
})
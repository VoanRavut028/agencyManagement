let iconBar = document.querySelector(".humbergur-bar");
let asideDashboard = document.getElementById("handle-aside-dashboard");
let handleBodyTask = document.getElementById("handle-task-body");
let isActive = true;

function updatehandleBodyTaskWidth() {
  const screen = window.innerWidth;
  const asideWidth = parseInt(asideDashboard.style.width || 220); // default to 220 if not set
  handleBodyTask.style.width = screen - asideWidth + "px";
}

handleBodyTask.style.position = "absolute";
handleBodyTask.style.left = "220px";
updatehandleBodyTaskWidth();
iconBar.addEventListener("click", () => {
  if (isActive) {
    asideDashboard.style.width = "80px";
    handleBodyTask.style.position = "absolute";
    handleBodyTask.style.left = "80px";
    asideDashboard.classList.add("hidde-aside-text");
    asideDashboard.style.transition = "all 0.3s ease";
    handleBodyTask.style.transition = "all 0.3s ease";
    isActive = false;
  } else {
    asideDashboard.style.width = "220px";
    asideDashboard.classList.remove("hidde-aside-text");
    asideDashboard.classList.add("trancestion-aside-text");
    asideDashboard.style.transition = "all 0.3s ease";
    handleBodyTask.style.position = "absolute";
    handleBodyTask.style.transition = "all 0.3s ease";
    handleBodyTask.style.left = "220px";
    isActive = true;
  }
  updatehandleBodyTaskWidth();
});

window.addEventListener("resize", updatehandleBodyTaskWidth);

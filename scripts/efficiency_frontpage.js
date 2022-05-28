/* Javascript by Timm Hinsch */

/* Test */
console.log('js running')

/* Startside js */

  /* notifikations knappen */
  function showNtfy() {
    let x = document.getElementById("notifications");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

/* log ud knappen */
function showLogout() {
    let x = document.getElementById("logoutButton");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  /* læs mere pomodoro */
  function ReadMorePomodoro() {
    let x = document.getElementById("startside-about-pomodoro");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  /* læs mere organize */
  function ReadMoreOrganize() {
    let x = document.getElementById("startside-about-organize");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

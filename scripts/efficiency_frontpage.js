/* Javascript by Timm Hinsch */

/* Test */
console.log('js running')

/* Startside js */

  /* notifikations knappen */
  document.getElementById("notifications").style.display = "none";
  function showNtfy() {
    let x = document.getElementById("notifications");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

/* log ud knappen */
document.getElementById("logoutButton").style.display = "none";
function showLogout() {
    let x = document.getElementById("logoutButton");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  /* læs mere pomodoro */
  document.getElementById("startside-about-pomodoro").style.display = "none";
  function ReadMorePomodoro() {
    let x = document.getElementById("startside-about-pomodoro");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  /* læs mere organize */
  document.getElementById("startside-about-organize").style.display = "none";
  function ReadMoreOrganize() {
    let x = document.getElementById("startside-about-organize");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const arrayNtfy = ["Thomas Petersen - CEO <hr>", "Inaccessable Link <br>", "Adobe Creative Cloud <br> <hr>", "System Notification <hr>", "Trial Expired <br>", "Jetpack <br><hr>", "System Notification <hr>", "New Possible Savings <br>", "Browserstack"];

let text = "";
for (let i = 0; i < arrayNtfy.length; i++) {
  text += arrayNtfy[i] + "<br>";
}

document.getElementById("ntfy").innerHTML = text;
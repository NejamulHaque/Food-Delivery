// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.addEventListener("click", () => {
    // For now just redirect, later you can clear localStorage/cookies or call logout API
    alert("Logging out...");
    window.location.href = "loginpage.html";
  });
});

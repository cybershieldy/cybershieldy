document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("cyberPopupSeen")) return;

  setTimeout(function () {
    const popup = document.getElementById("cyber-popup");
    if (popup) popup.style.display = "flex";
  }, 5000);

});

function closePopup() {
  document.getElementById("cyber-popup").style.display = "none";
  localStorage.setItem("cyberPopupSeen", "true");
}

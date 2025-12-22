/* =========================
   POPUP – 5 saniyə sonra
========================= */
document.addEventListener("DOMContentLoaded", function () {

  // Əgər popup artıq bağlanıbsa
  if (!localStorage.getItem("cyberPopupSeen")) {
    setTimeout(function () {
      const popup = document.getElementById("cyber-popup");
      if (popup) popup.style.display = "flex";
    }, 5000);
  }

});

/* Popup bağla */
function closePopup() {
  const popup = document.getElementById("cyber-popup");
  if (popup) popup.style.display = "none";
  localStorage.setItem("cyberPopupSeen", "true");
}

/* =========================
   WHATSAPP FORM GÖNDƏRİŞİ
========================= */
function sendWhatsApp() {
  let name = document.getElementById('name')?.value.trim();
  let phone = document.getElementById('phone')?.value.trim();
  let service = document.getElementById('service')?.value.trim();

  if (!name || !phone || !service) {
    alert("Zəhmət olmasa bütün xanaları doldurun!");
    return;
  }

  let msg =
    `Salam, mən müraciət etmək istəyirəm:%0A` +
    `Ad Soyad: ${name}%0A` +
    `Telefon: ${phone}%0A` +
    `Xidmət: ${service}`;

  let number = "994555182523";
  window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
}

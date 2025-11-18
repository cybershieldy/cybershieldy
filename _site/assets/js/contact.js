function sendWhatsApp() {
  let name = document.getElementById('name').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let service = document.getElementById('service').value.trim();

  // Xanaların yoxlanması
  if (!name || !phone || !service) {
    alert("Zəhmət olmasa bütün xanaları doldurun!");
    return; // WhatsApp'a getməsin
  }

  let msg = `Salam, mən müraciət etmək istəyirəm:%0A` +
            `Ad Soyad: ${name}%0A` +
            `Telefon: ${phone}%0A` +
            `Xidmət: ${service}`;

  let number = "994555182523";

  window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
}

function sendWhatsApp() {
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let service = document.getElementById('service').value;

  let msg = `Salam, mən müraciət etmək istəyirəm:%0A` +
            `Ad Soyad: ${name}%0A` +
            `Telefon: ${phone}%0A` +
            `Xidmət: ${service}`;

  let number = "994555182523";

  window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
}

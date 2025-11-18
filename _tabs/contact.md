---
title: "Müraciət Et"
icon: fas fa-phone
order: 10
---

<style>
.contact-box {
  background: #111;
  padding: 20px;
  border-radius: 12px;
  color: #fff;
}
.contact-box input, .contact-box select {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #222;
  color: #fff;
}
.contact-box button {
  margin-top: 15px;
  width: 100%;
  padding: 12px;
  background: #28A745;
  border: none;
  font-size: 18px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}
</style>

<div class="contact-box">
  <h2>Müraciət Formu</h2>

  <label>Ad Soyad:</label>
  <input id="name" type="text" placeholder="Adınızı daxil edin">

  <label>Telefon:</label>
  <input id="phone" type="text" placeholder="+994XX-XXX-XX-XX">

  <label>Xidmət seçin:</label>
  <select id="service">
    <option value="Kiber Təhlükəsizlik">Kiber Təhlükəsizlik</option>
    <option value="Penetration Testing">Penetration Testing</option>
    <option value="Web Development">Web Development</option>
    <option value="Consulting">Consulting</option>
  </select>

  <button onclick="sendWhatsApp()">WhatsApp ilə Göndər</button>
</div>

<script>
  function sendWhatsApp() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let service = document.getElementById('service').value;

    let msg = `Salam, mən müraciət etmək istəyirəm:%0A` +
              `Ad Soyad: ${name}%0A` +
              `Telefon: ${phone}%0A` +
              `Xidmət: ${service}`;

    let number = "+994555182523"; // <-- BURADA ÖZ WHATSAPP NÖMRƏNİ YAZ

    window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
  }
</script>

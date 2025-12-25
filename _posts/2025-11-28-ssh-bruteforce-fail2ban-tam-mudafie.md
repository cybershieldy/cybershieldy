---
title: "SSH Brute Force Hücumları və Fail2Ban ilə Tam Müdafiə (2025 Yenilənmiş)"
date: 2025-11-28 12:00:00 +0400
lastmod: 2025-11-28 12:30:00 +0400
categories: [təhlükəsizlik, server, cybersecurity]
tags: [ssh, brute force, fail2ban, linux təhlükəsizliyi, blue team, kiberhücum, cybersecurity kursu, ethical hacking, red team, penetration testing]
description: "Real SSH brute-force hücumu, Hydra ilə canlı sınaq və Fail2Ban müdafiəsi. Öğrənmək istəyənlər üçün 2025 yenilənmiş cyber security tədris materialı — Emin Savaylov."
image: /assets/images/brute.webp
canonical: https://cybershieldy.com/posts/ssh-bruteforce-fail2ban
permalink: /posts/ssh-bruteforce-fail2ban
---

<!-- Structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "headline": "SSH Brute Force Hücumları və Fail2Ban ilə Tam Müdafiə (2025 Yenilənmiş)",
  "description": "SSH brute-force hücumlarının real nümunəsi, Hydra ilə sınaq və Fail2Ban müdafiəsi haqqında geniş bələdçi.",
  "author": { "@type": "Person", "name": "Emin Savaylov" },
  "publisher": {
    "@type": "Organization",
    "name": "CyberShieldy",
    "logo": { "@type": "ImageObject", "url": "https://cybershieldy.com/assets/images/logo.png" }
  },
  "datePublished": "2025-11-28T12:00:00+04:00",
  "dateModified": "2025-11-28T12:30:00+04:00",
  "image": "https://cybershieldy.com/assets/images/ssh-fail2ban.webp",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cybershieldy.com/posts/ssh-bruteforce-fail2ban" }
}
</script>

# SSH Brute Force Hücumu və Fail2Ban ilə Tam Müdafiə (2025)

Bu məqalə **cybersecurity kursu axtaran tələbələr**, **ethical hacking üzrə öyrənənlər**, həmçinin **Linux sistem administratorları** üçün hazırlanmış real laboratoriya ssenarisidir.

Burada real SSH brute-force hücumu göstərilir və Fail2Ban-ın bu hücumlara necə cavab verdiyi canlı şəkildə nümayiş olunur.

---

## 💻 Canlı Terminal Animasiya – Real Hücum Ssenarisi

<div id="terminal-neon"></div>

<script>
const neonMessages = [
 "🔥 Hydra brute-force hücumu başladılır...",
 "🔍 Trying username: root | password: summer2024...",
 "🚨 Uğursuz giriş cəhdləri artır!",
 "🛡️ Fail2Ban şübhəli IP-ni aşkar etdi...",
 "❌ IP 10 dəqiqəlik banlandı — hücum bloklandı.",
 "CyberShieldy.com | Linux təhlükəsizliyi təlimləri"
];

let neonIndex = 0;
const terminalNeon = document.getElementById('terminal-neon');
const typingSpeed = 100;

function typeNeon(msg, i = 0) {
  if (i < msg.length) {
    terminalNeon.textContent += msg.charAt(i);
    setTimeout(() => typeNeon(msg, i + 1), typingSpeed);
  } else {
    setTimeout(() => eraseNeon(msg.length), 1500);
  }
}

function eraseNeon(len) {
  if (len > 0) {
    terminalNeon.textContent = terminalNeon.textContent.slice(0, -1);
    setTimeout(() => eraseNeon(len - 1), typingSpeed / 2);
  } else {
    neonIndex = (neonIndex + 1) % neonMessages.length;
    typeNeon(neonMessages[neonIndex]);
  }
}

typeNeon(neonMessages[neonIndex]);
</script>

<style>
#terminal-neon {
  font-family: 'Courier New', Courier, monospace;
  background-color: #000;
  color: #39ff14;
  padding: 12px 22px;
  border-radius: 8px;
  width: max-content;
  min-width: 420px;
  margin-bottom: 25px;
  white-space: nowrap;
  box-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14;
  text-shadow: 0 0 3px #39ff14, 0 0 6px #39ff14;
}
</style>

---

## 🧨 SSH Brute-Force Hücumu Nədir?

Brute-force hücumu — avtomatlaşdırılmış alətlərlə saysız-hesabsız parol sınamaqla giriş əldə etməyə çalışmaqdır.

### Əsas hədəflər:

- root və admin hesabları  
- serverdə tam nəzarət  
- sistemə zərərli kod yerləşdirmək  
- məlumat oğurluğu  

---

## 🧪 Real Hydra Brute-Force Testi



![Hydra SSH brute force sınağı](/assets/images/hydra.webp)

Hydra qısa müddətdə yüzlərlə uğursuz giriş cəhdi edir və bu cəhdlər loglarda aydın görünür.

---

## 🛑 Fail2Ban – Hücumu Bloklayan Müdafiə Sistemi

Fail2Ban `auth.log` faylını izləyərək kütləvi uğursuz giriş cəhdlərini aşkarlayır və IP-ni avtomatik bloklayır.

fail2ban-client status sshd




![Fail2Ban ban list output](/assets/images/fail2ban.webp)

---

## ⚙️ Fail2Ban SSH Konfiqurasiyası

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
bantime = 10m
findtime = 2m
maxretry = 5


Bu konfiqurasiya hücum edən IP-ni 5 səhv cəhddən sonra 10 dəqiqəlik bloklayır.

---

## 🔐 2025-ci il üzrə Blue Team Təhlükəsizlik Strategiyası

- Fail2Ban aktivləşdirin  
- SSH portunu dəyişin  
- Parol login-in bağlayın — yalnız **SSH key**  
- UFW ilə whitelist tətbiq edin  
- Root login-i deaktiv edin  
- 2FA (Google Authenticator + SSH) əlavə edin  

Bu addımlar serverinizi brute-force hücumlarından maksimum qoruyur.

---

## 📞 Praktiki Təlim və Cyber Security Kursu

📲 [WhatsApp ilə əlaqə saxlayın](https://wa.me/994555182523?text=Salam%2C%20kibert%C9%99hl%C3%BCk%C9%99sizlik%20d%C9%99rsl%C9%99ri%20il%C9%99%20maraqlan%C4%B1ram.) — Kibertəhlükəsizlik təlimləri və praktik dəstək.
---

## 📚 Oxşar Məqalələr
- [Phishing hücumu nədir? Müdafiə yolları](/posts/sosial-mühəndislik)  
- [Wi-Fi hücumları və təhlükəsizlik tövsiyələri](/posts/wifi-hucumlari)  
- [MITM hücumu və şəbəkədə müdaxilə halları](/posts/sebeke-hucumlari)  
- [Red Team vs Blue Team — 2025](/posts/red-team-vs-blue-team)


{% include cyber-popup.html %}

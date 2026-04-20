---
title: "📡🛡️ Ideaspark ESP32 ilə SIEM İnteqrasiyası: SSH Brute Force Hücumu necə Aşkarlanır? (2026)"
date: 2026-04-20 10:00:00 +0400
lastmod: 2026-04-10 20:00:00 +0400
categories: [kibertəhlükəsizlik, siem, iot security]
tags:
  - kiber dersler
  - kiber təhlükəsizlik
  - kiber tehlukesizlik
  - hacker dersleri
  - xaker dersleri
  - cyber security
  - siber güvenlik
  - siem
  - wazuh
  - esp32
  - ideaspark
  - iot security
  - red team
  - blue team
description: "Ideaspark ESP32 modulu ilə SIEM inteqrasiyası, SSH brute force hücumunun real vaxtda aşkarlanması, monitorinq, alert və müdafiə yanaşmaları haqqında geniş SEO dostu məqalə."
keywords: "ideaspark esp32, siem, wazuh, ssh brute force, kiber dersler, kiber təhlükəsizlik, hacker dersleri, cyber security, siber güvenlik, esp32 security, iot security"
image: /assets/images/ideaspark.webp
canonical: https://cybershieldy.com/posts/ideaspark-esp32-siem-ssh-brute-force
permalink: /posts/ideaspark-esp32-siem-ssh-brute-force
---

# 📡🛡️ Ideaspark ESP32 ilə SIEM İnteqrasiyası: SSH Brute Force Hücumu necə Aşkarlanır?

Bugünkü kibertəhlükəsizlik dünyasında hücumlar artıq yalnız serverdə, firewall-da və ya log fayllarında görünən hadisələr deyil. Müasir müdafiə yanaşmalarında hadisələrin **real vaxtda vizual izlənməsi**, **SIEM sistemlərinə inteqrasiya olunması**, **IoT cihazlar üzərindən xəbərdarlıq verilməsi** və **praktiki lab ssenarilərinin qurulması** çox böyük əhəmiyyət daşıyır.

Bu məqalədə mən **Ideaspark ESP32** modulu üzərində qurduğum mini təhlükəsizlik ekranı ilə **SSH brute force** hücumunun necə aşkarlanmasını, SIEM ilə necə işləməsini və bu yanaşmanın real dünyada necə tətbiq oluna biləcəyini izah edirəm.

---

# 🎥 Canlı Demo və Sosial Media Paylaşımı

**Instagram paylaşımı:**  
https://www.instagram.com/p/DXW6afYjPgi/

<iframe src="https://www.instagram.com/p/DXW6afYjPgi/embed" width="100%" height="650"></iframe>

---

# ⚡ Ideaspark ESP32 nədir?

Ideaspark ESP32 — WiFi dəstəyi olan, OLED ekranlı kompakt mikrokontrollerdir və kibertəhlükəsizlik lablarında vizual monitor kimi istifadə oluna bilər.

---

# 🚨 SSH Brute Force nədir?

SSH brute force — sistemə çoxsaylı parol cəhdləri ilə daxil olmağa çalışmaqdır. Bu zaman loglarda çoxsaylı uğursuz girişlər yaranır.

---

# 🧠 SIEM bu layihədə nə edir?

SIEM:
- logları toplayır
- analiz edir
- qayda əsasında alert yaradır
- digər sistemlərə ötürür

---

# 🔗 Hücumdan Vizual Alert-ə qədər Tam Axın

## 1. Uğursuz Giriş
Permission denied, please try again.


---

## 2. Loglara Yazılır

- `/var/log/auth.log`
- `systemd journal`

---

## 3. SIEM Analizi

- brute force kimi qiymətləndirilir
- alert yaranır

---

## 4. Alert Yayılır

- Wazuh dashboard
- Telegram
- n8n
- ESP32

---

## 5. ESP32 Vizual Alert


SSH-BRUTE
sshd: authentication
IP: 192.168.x.x
Level: 5


---

# 💥 Niyə Bu Sistem Güclüdür?

- vizual və real-time
- SOC düşüncəsi yaradır
- praktiki öyrənmə verir
- content üçün ideal

---

# 🔴 Red Team Baxışı

- brute force davranışı
- detection limitləri
- log izi

---

# 🔵 Blue Team Baxışı

- monitorinq
- alerting
- response

---

# 🌐 IoT ilə inteqrasiya

ESP32 burada:
➡️ vizual monitor rolundadır

---

# 🛠️ Komponentlər

- Ubuntu
- Wazuh
- Fail2Ban
- n8n
- ESP32

---

# 🛡️ Qorunma

- güclü parol
- SSH key
- Fail2Ban
- SIEM

---

# 🔗 Oxşar Mövzular

- 🎣⚠️ [Phishing Hücumu Nədir?](https://cybershieldy.com/posts/sosial-mühəndislik)  
- 🔴🔵🛡️ [Red Team vs Blue Team](https://cybershieldy.com/posts/red-team-vs-blue-team)  
- 📶🔓⚠️ [Wi-Fi təhlükələri](https://cybershieldy.com/posts/wifi-hucumlari)  
- 🔌💀🧠 [Fiziki hücumlar](https://cybershieldy.com/posts/fiziki-hucumlar-genis)  
- 📡🔓⚠️ [BLE vs Classic Bluetooth hücumları](https://cybershieldy.com/posts/ble-vs-classic-bluetooth)

---

## 📢 CyberShieldy Academy

**Savaylov Emin — Kibertəhlükəsizlik mütəxəssisi  
Red & Blue Team üzrə təlimçi**

🚀 Real bilik > sertifikat  
💻 Praktiki lablar • Real ssenarilər • Canlı testlər

{% include cyber-popup.html %}
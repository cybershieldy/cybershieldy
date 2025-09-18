---
title: "Wi-Fi Trafik Hücumları: Deauth, Sniffing və KRACK Taktikası ilə Geniş Hücum Ssenarisi (2025)"
date: 2025-09-18 12:00:00 +0400
lastmod: 2025-09-18 12:00:00 +0400
categories: [wifi hücumları, şəbəkə təhlükəsizliyi]
tags: [deauth attack, sniffing, krack, wifi zəifliyi, wpa2, packet capture, red team, wifi trafik hücumları]
description: "Wi-Fi şəbəkələrinə qarşı istifadə olunan Deauthentication, Packet Sniffing və KRACK hücumlarının necə işlədiyini ətraflı öyrənin. Real dünya ssenarisi və 2025-ci ilə uyğun müdafiə yolları ilə bələdçi."
image: /assets/images/wifi-traffic-attacks.webp
canonical: https://cybershieldy.com/wifi-trafik-hucumlari-2025
permalink: /posts/wifi-trafik-hucumlari.html
---

# Wi-Fi Trafik Hücumları: Deauth, Sniffing və KRACK Taktikası ilə Geniş Hücum Ssenarisi (2025)

> **Son Yenilənmə:** 18 Sentyabr 2025  
> **Yazı tipi:** Təhlükəsizlik Hücum Ssenarisi və Texniki Təhlil

---

## 📷 Vizual Görüntü

![Wi-Fi Trafik Hücumları - Deauth, Sniffing, KRACK](/assets/images/wifi-traffic-attacks.webp "Wi-Fi Trafik Hücumları – Deauth, Packet Sniffing və KRACK birləşmiş hücumu")

---

## 🧠 Hücumun Strukturu: Üçtərəfli Taktika

Bu hücum modeli **bir neçə mərhələdən** ibarətdir və çox zaman **Red Team simulyasiyalarında** tətbiq olunur. Aşağıda bu hücumların birləşmiş şəkildə necə istifadə olunduğunu izah edirik.

---

### 1️⃣ **Deauthentication Attack – Qurbanı şəbəkədən qoparma**

- Bu mərhələdə hücumçu `aireplay-ng`, `wifite`, və ya `mdk4` kimi alətlərdən istifadə edərək qurban cihazı mövcud Wi-Fi şəbəkəsindən qoparır.
- Bu, IEEE 802.11 standartında zəiflikdən istifadə edərək həyata keçirilir.

📌 **Məqsəd:** Qurbanın yenidən qoşulması zamanı `4-way handshake`-in tutulması.

---

### 2️⃣ **Packet Sniffing – Trafikin dinlənməsi və ələ keçirilməsi**

- Hücumçu qurban cihazı öz yaratdığı saxta AP-yə yönləndirir.
- Burada `Wireshark`, `tcpdump`, və ya `airodump-ng` istifadə olunur.
- Trafik analiz edilir: HTTP sorğuları, DNS sorğuları, şifrlənməmiş girişlər və hətta session cookie-lər ələ keçirilə bilər.

📌 **Ən təhlükəli hal:** HTTPS istifadə olunmayan giriş formaları.

---

### 3️⃣ **KRACK Attack – WPA2 protokol zəifliyindən istismar**

- **KRACK (Key Reinstallation Attack)** WPA2-PSK protokolunun `4-way handshake` mərhələsində kriptoqrafik açarın təkrar istifadəsinə əsaslanır.
- Hücumçu, `reinstallation` mesajını təkrar göndərərək **trafikin deşifrə edilməsinə** nail olur.

📌 **Əlavə risk:** Şəbəkə trafiki şifrələnmiş olsa da, **KRACK** ilə bu məlumatlar oxunaqlı hala gətirilə bilər.

---

## 🎯 Real Dünya Hücum Ssenarisi

### 🔍 Ssenari:

> Təşkilatın əməkdaşı `Office_FreeWiFi` adlı şəbəkəyə qoşulub. Hücumçu bu şəbəkənin eynisini yaradaraq cihazı deauth hücumu ilə real AP-dən qoparır. Yenidən qoşulma zamanı həm `handshake` məlumatı toplanır, həm də istifadəçi trafiki sniff edilir. Əgər WPA2 istifadə olunursa, KRACK hücumu ilə şifrələnmiş paketlər deşifrə edilir.

**Nəticə:**
- İstifadəçinin daxil olduğu saytlarda şifrə və sessiya məlumatları ələ keçirilir.
- Şəbəkəyə digər cihazların da aktivliyi izlənilir.
- Şirkət məlumatları risk altına düşür.

---

## 🛡️ Müdafiə Yolları (2025 Standartlarına Uyğun)

✅ **WPA3 dəstəyi olan cihazlardan istifadə edin**  
✅ **Firmware və şəbəkə avadanlığı müntəzəm yeniləyin**  
✅ **VPN tətbiqi ilə şəbəkə trafikinizi şifrələyin**  
✅ **HTTPS Everywhere və DNS over HTTPS istifadə edin**  
✅ **Wi-Fi monitorinq sistemləri qurun (Rogue AP Detection, IDS)**  
✅ **Cihazınızın Wi-Fi-ni istifadə etmədiyiniz zaman deaktiv edin**  
✅ **Red Team simulyasiyaları ilə şəbəkə zəifliklərini yoxlayın**

---

## 👨‍💻 Red Team Tətbiqi

Red Team ssenarilərində bu hücum taktikaları belə birləşdirilir:

- `Deauth + Evil Twin + Sniffing + KRACK`  
- VPN istifadə etməyən qurumlarda məlumat sızması 90%-dən çox ehtimalla mümkündür  
- Test nəticələri rəhbərliyə təqdim edilir və Blue Team tədbirləri planlaşdırılır

---

## 🔵 Blue Team Müdafiəsi

Blue Team bu hücumlara qarşı aşağıdakı tədbirləri görür:

- **WPA2-dən WPA3-ə keçid proqramı**
- **Sniffing hücumlarına qarşı firewall və IDS-lər**
- **Şirkət daxilində Wi-Fi şifrə siyasətinin dəyişməsi**
- **Əməkdaşların maarifləndirilməsi və risk testləri**

---

## 📌 Nəticə

Wi-Fi trafikinə edilən hücumlar — xüsusilə **Deauth**, **Packet Sniffing** və **KRACK** — həm texniki, həm də praktiki baxımdan ciddi təhlükə yaradır. Bu hücumlar bir-biri ilə **kombinə olunduqda**, nəticələr daha dağıdıcı olur.

📢 **Tövsiyə:**  
Əgər Wi-Fi şəbəkələrindən istifadə edirsinizsə, yalnız parol ilə deyil, **protokol səviyyəsində təhlükəsizliklə** özünüzü və təşkilatınızı qoruyun.

---

> Əlaqə və təlim üçün: [cyberdersler@gmail.com](mailto:cyberdersler@gmail.com)

---

<!-- Strukturlaşdırılmış məlumat (JSON-LD) -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wi-Fi Trafik Hücumları: Deauth, Sniffing və KRACK Taktikası ilə Geniş Hücum Ssenarisi (2025)",
  "description": "Wi-Fi şəbəkələrinə qarşı istifadə olunan Deauthentication, Packet Sniffing və KRACK hücumlarının necə işlədiyini ətraflı öyrənin. Real dünya ssenarisi və 2025-ci ilə uyğun müdafiə yolları ilə bələdçi.",
  "image": "https://cybershieldy.com/assets/images/wifi-traffic-attacks.webp",
  "author": {
    "@type": "Person",
    "name": "CyberShieldy"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CyberShieldy",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cybershieldy.com/assets/images/logo.png"
    }
  },
  "datePublished": "2025-09-18T12:00:00+04:00",
  "dateModified": "2025-09-18T12:00:00+04:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cybershieldy.com/wifi-trafik-hucumlari-2025"
  }
}
</script>

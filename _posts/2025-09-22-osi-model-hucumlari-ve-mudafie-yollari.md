---
title: "OSI Modelinə Görə Hücumlar və Müdafiə Yolları – 7 Qatlı Təhlükəsizlik Analizi (2025)"
date: 2025-09-22 12:00:00 +0400
lastmod: 2025-09-22 12:00:00 +0400
categories: [kiber təhlükəsizlik, osi modeli, hücumlar, şəbəkə təhlükəsizliyi]
tags: [osi model, network security, penetration testing, layer 1 attack, layer 2 attack, layer 3 attack, layer 4 attack, layer 5 attack, layer 6 attack, layer 7 attack, ddos, man in the middle, arp spoofing, session hijacking, sql injection, xss, phishing, cyber attacks, cybersecurity 2025]
description: "OSI modelinin 7 qatına aid hücum növlərini və müdafiə üsullarını dərindən öyrənin. Şəbəkə hücumları, protokol zəiflikləri, tətbiqetmə qatındakı XSS, SQL Injection və sosial mühəndislik taktikaları ilə bağlı ən son təhlil."
image: /assets/images/osi.webp
canonical: https://cybershieldy.com/osi-model-hucumlari-2025
permalink: /posts/osi-model-hucumlari-2025
---

# OSI Modelinə Görə Hücumlar və Müdafiə Yolları – 7 Qatlı Təhlükəsizlik Analizi (2025)

> **Son Yenilənmə:** 22 Sentyabr 2025  
> **Yazı tipi:** OSI Modeli, Hücumlar və Real Dünya Təhlükəsizliyi  

---

## OSI Modeli Nədir?

OSI (Open Systems Interconnection) modeli şəbəkə əlaqələrinin 7 təbəqədən ibarət konsepsiyasıdır:

1. Fiziki qat (Physical Layer)  
2. Data Link qat (Layer 2)  
3. Şəbəkə qat (Network Layer)  
4. Nəqliyyat qat (Transport Layer)  
5. Sessiya qat (Session Layer)  
6. Təqdimat qat (Presentation Layer)  
7. Tətbiq qat (Application Layer)  

Hər qat özünəməxsus protokollar və funksiyalar daşıyır, buna görə də hücumlar qatlara görə dəyişir.

---

## 1️⃣ Fiziki Qat Hücumları (Layer 1)

- **Hücum növləri:**  
  - Kabel kəsilməsi, fiziki müdaxilə  
  - Jamming hücumu (Wi-Fi və ya radiosiqnalın pozulması)  
  - Hardware manipulyasiyası  

- **Açar sözlər:** fiziki hücum, hardware sabotaj, jamming, kabel kəsilməsi

- **Müdafiə yolları:**  
  - Fiziki təhlükəsizlik tədbirləri (kameralar, giriş nəzarəti)  
  - Qoşulma nöqtələrinin fiziki qorunması  
  - RF mühitinin monitorinqi  

---

## 2️⃣ Data Link Qat Hücumları (Layer 2)

- **Hücum növləri:**  
  - ARP Spoofing / Poisoning  
  - MAC Spoofing  
  - VLAN hopping  
  - STP (Spanning Tree Protocol) hücumları  

- **Açar sözlər:** arp spoofing, mac spoofing, vlan hopping, stp attack, layer 2 attack

- **Müdafiə yolları:**  
  - Dinamik ARP inspection (DAI)  
  - Port security və MAC filtrasiya  
  - VLAN segmentasiyası və ACL-lər  
  - Şəbəkə monitorinqi və anomal davranış aşkarlanması  

---

## 3️⃣ Şəbəkə Qat Hücumları (Layer 3)

- **Hücum növləri:**  
  - IP Spoofing  
  - ICMP Flood (ping flood)  
  - Routing hücumları (BGP hijacking)  
  - Man-in-the-Middle (MITM)  

- **Açar sözlər:** ip spoofing, icmp flood, bgp hijacking, mitm attack, network layer attack

- **Müdafiə yolları:**  
  - İntrusion Detection/Prevention Systems (IDS/IPS)  
  - IP source guard  
  - RPKI (Resource Public Key Infrastructure) BGP qorunması  
  - Şəbəkə trafikinin şifrələnməsi (VPN, IPsec)  

---

## 4️⃣ Nəqliyyat Qat Hücumları (Layer 4)

- **Hücum növləri:**  
  - TCP SYN Flood (DDoS)  
  - Port scanning  
  - Session hijacking  
  - UDP flood  

- **Açar sözlər:** tcp syn flood, ddos attack, session hijacking, port scanning, layer 4 attack

- **Müdafiə yolları:**  
  - Firewall və DoS qorunması  
  - SYN Cookies istifadəsi  
  - Trafik limiti və anomaliya aşkarlanması  
  - Sessiya idarəetmə protokollarının gücləndirilməsi  

---

## 5️⃣ Sessiya Qat Hücumları (Layer 5)

- **Hücum növləri:**  
  - Session hijacking  
  - Session fixation  
  - Man-in-the-Middle sessiya hücumları  

- **Açar sözlər:** session hijacking, session fixation, mitm session, layer 5 attack

- **Müdafiə yolları:**  
  - Sessiya tokenlərinin təhlükəsiz idarə olunması  
  - HTTPS və TLS istifadəsi  
  - Multi-factor authentication (MFA)  
  - Sessiya müddəti və avtomatik logout  

---

## 6️⃣ Təqdimat Qat Hücumları (Layer 6)

- **Hücum növləri:**  
  - SSL stripping  
  - MIME-based hücumlar  
  - Kodlaşdırma və şifrələmə zəiflikləri  

- **Açar sözlər:** ssl stripping, mime attack, encoding vulnerabilities, layer 6 attack

- **Müdafiə yolları:**  
  - TLS 1.3 və müasir şifrələmə standartları  
  - HTTP Strict Transport Security (HSTS)  
  - Data validation və sanitizasiya  
  - Kodlaşdırma standartlarına riayət  

---

## 7️⃣ Tətbiq Qat Hücumları (Layer 7)

- **Hücum növləri:**  
  - SQL Injection  
  - Cross-Site Scripting (XSS)  
  - Cross-Site Request Forgery (CSRF)  
  - Phishing və sosial mühəndislik  
  - Remote Code Execution (RCE)  

- **Açar sözlər:** sql injection, xss, csrf, phishing, rce, web application attack, layer 7 attack

- **Müdafiə yolları:**  
  - Input validation və parametrizə edilmiş sorğular  
  - Web Application Firewall (WAF)  
  - User təlimləri və sosial mühəndislikdən müdafiə  
  - Daima yenilənən təhlükəsizlik yamaqları və kod yoxlamaları  

---

## Nəticə və Tövsiyələr

OSI modelinə əsaslanan bu qatlı yanaşma ilə hücumların növlərini və müdafiə metodlarını yaxşı başa düşmək mümkündür. Hər qat özünəməxsus zəifliklərə malikdir, buna görə də təhlükəsizlik qatlı və çoxsahəli olmalıdır.

**Əlavə olaraq:**

- Penetrasiya testləri ilə zəifliklərin aşkarlanması  
- Red Team və Blue Team əməliyyatlarının həyata keçirilməsi  
- Müntəzəm təhlükəsizlik auditləri  
- İstifadəçilərin maarifləndirilməsi və təlimlər  

---

## Əlaqə və Təlimlər

📲 [WhatsApp ilə əlaqə saxlayın](https://wa.me/994555182523?text=Salam%2C%20OSI%20modeli%20hücumlar%C4%B1%20v%C9%99%20təhlükəsizlik%20d%C9%99rsl%C9%99ri%20il%C9%99%20maraqlan%C4%B1ram.) — Kiber Təhlükəsizlik və OSI Model Hücumları üzrə təlim və mentorluq.

---

<!-- Strukturlaşdırılmış məlumat (SEO – JSON-LD) -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "OSI Modelinə Görə Hücumlar və Müdafiə Yolları – 7 Qatlı Təhlükəsizlik Analizi (2025)",
  "description": "OSI modelinin 7 qatına aid hücum növlərini və müdafiə üsullarını dərindən öyrənin. Şəbəkə hücumları, protokol zəiflikləri, tətbiqetmə qatındakı XSS, SQL Injection və sosial mühəndislik taktikaları ilə bağlı ən son təhlil.",
  "image": "https://cybershieldy.com/assets/images/osi.webp",
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
  "datePublished": "2025-09-22T12:00:00+04:00",
  "dateModified": "2025-09-22T12:00:00+04:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cybershieldy.com/osi-model-hucumlari-2025"
  }
}
</script>

## 📚 Oxşar Yazılar

- 🔐 [Phishing Hücumu Nədir? Canlı Nümunələr və Qorunma Yolları](https://cybershieldy.com/posts/sosial-mühəndislik)  
  Sosial mühəndislik və e-mail ilə gələn təhdidlərin analizi.

- 🥷 [Kibertəhlükəsizlikdə Red Team və Blue Team nədir?](https://cybershieldy.com/posts/red-team-vs-blue-team)  
  Hücum və müdafiə simulyasiyalarının real ssenarilərlə izahı.

- 📶 [İctimai Wi-Fi istifadə edərkən nələrə diqqət etməli?](https://cybershieldy.com/posts/wifi-hucumlari)  
  Wi-Fi üzərindən edilən MITM, sniffing və spoofing hücumları.

---
title: "Antivirus və Firewall Sistemləri Necə İşləyir? Viruslar, Backdoor-lar və Real Müdafiə Mexanizmləri (2026)"
date: 2026-01-14 10:00:00 +0400
lastmod: 2026-01-14 10:00:00 +0400
categories: [kibertəhlükəsizlik, müdafiə, antivirus]
tags: [
  antivirus dərsləri,
  firewall nədir,
  kibertəhlükəsizlik dərsləri,
  hacker dərsləri,
  virus necə işləyir,
  backdoor nədir,
  clamav,
  kaspersky firewall,
  avast antivirus,
  blue team,
  ethical hacking,
  web developer dərsləri,
  kiber kurslar
]
description: "Antivirus və firewall sistemlərinin iş prinsipi. Viruslar, trojanlar və backdoor-lar necə aşkarlanır? ClamAV, Kaspersky və Avast nümunələri ilə real kibertəhlükəsizlik dərsi."
image: /assets/images/antivirus.webp
canonical: https://cybershieldy.com/posts/antivirus-firewall-nece-isleyir
permalink: /posts/antivirus-firewall-nece-isleyir
---

# 🛡️ Antivirus və Firewall Sistemləri Necə İşləyir? (2026)
## 🧠 Viruslar, Backdoor-lar və Real Kibertəhlükəsizlik Müdafiəsi

Müasir **kibertəhlükəsizlik** dünyasında yalnız hücum (hacking) bilikləri kifayət deyil.  
Peşəkar **hacker dərsləri**, **kiber dərslər** və **web developer kursları** mütləq şəkildə:

- 🛡️ antivirus mexanizmlərini  
- 🔥 firewall arxitekturasını  
- 🦠 virus və backdoor davranışlarını  

dərindən izah etməlidir.

Bu məqalə **Blue Team**, **Ethical Hacking**, **System Security** və **Web təhlükəsizlik dərsləri** üçün konsept dərs materialıdır.

> ⚠️ Qeyd: Buradakı bütün məlumatlar **qanuni**, **etik** və **təlim məqsədi** daşıyır.

---

## 🦠 Virus nədir və sistemə necə yoluxur?

Virus — istifadəçi xəbəri olmadan işləyən və sistemdə dəyişiklik edən **zərərli proqram kodudur**.

### Ən çox rast gəlinən yoluxma yolları:
- 📎 Phishing email əlavələri  
- 💾 Crack / warez proqramlar  
- 🌐 Zərərli web saytlar  
- 🔌 USB və BadUSB cihazları  
- 📥 Script injection (XSS, RCE sonrası payload)

Virusun əsas məqsədi:
- məlumat oğurlamaq
- sistemə nəzarət etmək
- backdoor yerləşdirmək
- botnet-ə qoşmaqdır

---

## 🚪 Backdoor nədir? Hacker sistemdə necə gizlənir?

**Backdoor** — sistemə gizli giriş nöqtəsidir.

### Backdoor necə yaranır?
- 🔓 Zəif parol və ya default credential
- 💉 Exploit sonrası shell yerləşdirilməsi
- 📦 Zərərli library və ya service
- ⚙️ Startup və registry injection

### Backdoor nə edir?
- 🕵️ sistemə səssiz giriş
- 🔁 C2 (Command & Control) əlaqəsi
- 📡 məlumat ötürülməsi
- 🧨 əlavə payload yüklənməsi

Backdoor-lar **klassik antiviruslar üçün ən çətin aşkarlanan təhlükələrdəndir**.

---

## 🛡️ Antivirus nədir və necə işləyir?

Antivirus — sistemdə işləyən prosesləri, faylları və davranışları analiz edən **təhlükəsizlik proqramıdır**.

### Antivirusların əsas iş prinsipləri:

#### 1️⃣ Signature-based Detection
- məlum virus imzaları ilə müqayisə
- sürətli, lakin zero-day-a qarşı zəif

#### 2️⃣ Heuristic Analysis
- şübhəli kod davranışını analiz edir
- yeni virusları aşkarlaya bilir

#### 3️⃣ Behavioral Detection
- real vaxtda prosesləri izləyir
- backdoor və RAT-ları tutmaq üçün effektivdir

#### 4️⃣ Sandbox mexanizmi
- fayl izolə mühitdə işə salınır
- real sistemə zərər vermədən analiz edilir

---

## 🧪 ClamAV – Open Source Antivirus (Linux / Server)

**ClamAV** əsasən:
- Linux serverlər
- Mail serverlər
- Web hosting mühitləri

üçün istifadə olunur.

### ClamAV xüsusiyyətləri:
- 🐧 Linux üçün ideal
- 📧 Email attachment scan
- 📦 Fayl və arxiv analizi
- 🔓 Open Source və audit edilə bilən

### İstifadə ssenariləri:
- Web developer server security
- Hosting və VPS qorunması
- SOC və Blue Team lab-ları

ClamAV **kiber təhlükəsizlik dərsləri üçün mükəmməl laboratoriya alətidir**.

---

## 🔥 Firewall nədir və nə üçün vacibdir?

Firewall — şəbəkəyə daxil olan və çıxan trafiki **qaydalara əsasən idarə edən müdafiə qatıdır**.

Firewall olmadan:
- virus rahat yayılır
- backdoor C2 bağlantı qurur
- data leak baş verir

---

## 🧱 Firewall növləri

### 🔹 Network Firewall
- router və gateway səviyyəsində
- IP, port və protokol filtrasiya

### 🔹 Host-based Firewall
- birbaşa əməliyyat sistemində
- proses əsaslı nəzarət

### 🔹 Application Firewall (WAF)
- web hücumlarına qarşı
- SQLi, XSS, RCE bloklayır

---

## 🛡️ Kaspersky & Avast Firewall necə işləyir?

### 🧠 Ağıllı trafik analizi
- şübhəli outbound connection
- C2 server davranışı

### 🔐 Application control
- hansı proqram hara çıxır
- backdoor-un internetə çıxışı bloklanır

### 📡 IDS / IPS inteqrasiyası
- hücum pattern-ləri aşkarlanır
- real vaxtda bloklanır

Bu firewall-lar **Blue Team dərslərində real müdafiə ssenariləri üçün istifadə olunur**.

---

## 🔗 Antivirus + Firewall birlikdə necə işləyir?

| Təhlükə | Antivirus | Firewall |
|------|---------|----------|
| Virus faylı | ✅ | ❌ |
| Backdoor connection | ⚠️ | ✅ |
| Data exfiltration | ❌ | ✅ |
| Zero-day exploit | ⚠️ | ⚠️ |

➡️ **Tək antivirus kifayət deyil**  
➡️ **Firewall olmadan sistem açıqdır**

---

## 🎓 Hacker və Web Developer dərsləri üçün dərs konsepti

Bu mövzu:
- 🧠 hacker dərsləri
- 🛡️ kiber təhlükəsizlik dərsləri
- 🌐 web developer kursları
- 🔵 blue team təlimləri

üçün **əsas fundamentdir**.

Hücum bilmədən müdafiə olmaz,  
müdafiəni bilmədən peşəkar hacker olunmaz.

---

## ✅ Nəticə

Müasir kibertəhlükəsizlik:
- yalnız hücum deyil
- real müdafiə mexanizmlərini anlamaqdır

> **Antivirus və firewall bilməyən hacker yarımçıqdır.**

---

📲 [WhatsApp ilə əlaqə](https://wa.me/994555182523?text=Salam%2C%20kiber%20tehlukesizlik%20dersleri%20ile%20maraqlaniram.)

**CyberShieldy Academy**  
Kiber Dərslər • Hacker Dərsləri • Web Security • Blue Team • Ethical Hacking • Real Lablar

---

## 📚 Oxşar Yazılar
- [İki faktorlu identifikasiya nədir?](/posts/iki-faktorlu-identifikasiya) 
- [Viruslar və Telefon Hücumları: Metasploit (msfconsole) ilə Real Ssenarilər](https://cybershieldy.com/posts/viruslar-telefon-hucumlari-msfconsole) 
- [IDS və IPS nədir? Kibertəhlükəsizlikdə Aşkarlama və Qarşısının Alınması](https://cybershieldy.com/posts/ids-ips-kibertelhukesizlik)


{% include cyber-popup.html %}

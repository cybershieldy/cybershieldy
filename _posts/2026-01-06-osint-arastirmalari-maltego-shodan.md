---
title: "OSINT Araşdırmaları: Maltego, Shodan və Digər Alətlərlə Rəqəmsal İz Axtarışı (2026)"
date: 2026-01-06 22:30:00 +0400
lastmod: 2026-01-06 22:30:00 +0400
categories: [kibertəhlükəsizlik, osint, hacking]
tags: [
  osint axtarış,
  osint alətləri,
  maltego osint,
  shodan hacking,
  kiber dərslər,
  hacker dərsləri,
  ethical hacking,
  web təhlükəsizlik,
  web proqramlama,
  kiber təlimlər
]
description: "OSINT nədir və necə işləyir? Maltego, Shodan və digər OSINT alətləri ilə açıq mənbələrdən informasiya toplama üsulları. Hacker dərsləri, kiber təlimlər və web təhlükəsizlik üçün 2026 bələdçisi."
image: /assets/images/osint.webp
canonical: https://cybershieldy.com/posts/osint-arastirmalari
permalink: /posts/osint-arastirmalari
---

# OSINT Araşdırmaları (2026)
## Maltego, Shodan və Digər Alətlərlə Açıq Mənbə Kəşfiyyatı

Müasir kibertəhlükəsizlik dünyasında **ilk hücum da, ilk müdafiə də informasiya ilə başlayır**.  
Bu informasiyanın böyük hissəsi isə artıq **açıq mənbələrdə (Open Source)** mövcuddur.

Bu sahənin adı:
> **OSINT – Open Source Intelligence**

Bu məqalə **kiber dərslər**, **hacker dərsləri**, **ethical hacking kursları** və **web proqramlama sahəsində təhlükəsizlik** öyrənənlər üçün hazırlanıb.

> ⚠️ Qeyd: OSINT yalnız **qanuni**, **etik** və **maarifləndirici** məqsədlər üçün istifadə edilməlidir.

---

## 🧠 OSINT Nədir?

**OSINT** – açıq və hamı üçün əlçatan mənbələrdən məlumat toplama və analiz etmə prosesidir.

Bu mənbələrə daxildir:
- veb saytlar  
- sosial şəbəkələr  
- domen və IP məlumatları  
- server bannerləri  
- metadata və leak edilmiş datalar  

Hackerlər üçün OSINT:
- target tanıma
- zəifliklərin tapılması
- sosial mühəndisliyin planlanması

deməkdir.

Müdafiə tərəfi (Blue Team) üçün isə:
- risk analizi
- açıq sızıntıların aşkarlanması
- reputasiya qorunması

mənbəyidir.

---

## 🔍 OSINT Niyə Hacker Dərslərində Keçilir?

Çünki real dünyada:
- heç bir hücum “sıfırdan” başlamır
- əvvəlcə **kəşfiyyat (reconnaissance)** aparılır
- sistem haqqında maksimum informasiya toplanır

Bu mərhələ **ethical hacking**, **red team təlimləri** və **kiber kurslar** üçün əsas fundamentdir.

---

# 🔥 Maltego ilə OSINT Araşdırmaları

## Maltego Nədir?

**Maltego** – vizual OSINT və link analysis alətidir.  
İnsanlar, domenlər, IP-lər, email-lər və şirkətlər arasında əlaqələri qrafik formada göstərir.

Maltego əsasən:
- kiber istintaqlar
- sosial şəbəkə analizləri
- korporativ OSINT
- red team araşdırmaları

üçün istifadə olunur.

---

## Maltego ilə Nələr Tapmaq Olar?

- Bir domenə bağlı:
  - subdomainlər
  - IP ünvanları
  - serverlər
- Email → sosial media profilləri
- Şirkət → işçilər → platformalar
- İnfrastruktur əlaqələri

Bu yanaşma **kiber dərslər** və **hacker kurslar** zamanı real ssenarilər üzərindən öyrədilir.

---

## Maltego Niyə Güclüdür?

Çünki:
- məlumatı **vizual düşünməyə** imkan verir
- manual OSINT-i avtomatlaşdırır
- əlaqələri gizli şəkildə üzə çıxarır

Bu bacarıq **web təhlükəsizlik** və **pentest təlimləri** üçün kritikdir.

---

# 🌐 Shodan ilə İnternetin Axtarışı

## Shodan Nədir?

**Shodan** – internetə qoşulu cihazlar üçün axtarış mühərrikidir.

Google veb səhifələri indeksləyir,  
Shodan isə:
- serverləri
- routerləri
- IoT cihazlarını
- firewall və kameraları

görür.

---

## Shodan ilə Hansı Məlumatlar Tapılır?

- Açıq portlar (22, 80, 443 və s.)
- Server bannerləri
- İstifadə olunan texnologiyalar
- Köhnə və zəif sistemlər
- Default config olan cihazlar

Bu biliklər **hacker dərsləri**, **kiber təlimlər** və **web proqramlama təhlükəsizliyi** üçün real laboratoriya rolunu oynayır.

---

## Shodan Riskləri və Dərsləri

Shodan göstərir ki:
- bir çox sistem səhv konfiqurasiya olunub
- adminlər təhlükəsizliyi unudur
- internetdə “görünməz” heç nə yoxdur

Bu səbəbdən Shodan **Blue Team** üçün də vacib alətdir.

---

# 🧰 Digər Vacib OSINT Alətləri

## 🔹 Google Dorks
- gizli panellər
- açıq fayllar
- admin səhifələr

## 🔹 theHarvester
- email toplama
- domain recon
- subdomain aşkarlanması

## 🔹 SpiderFoot
- avtomatlaşdırılmış OSINT
- IP, domain, leak analizi

## 🔹 Have I Been Pwned
- data leak yoxlanışı
- istifadəçi təhlükəsizliyi analizi

Bu alətlər **ethical hacking kursları** və **kiber dərslər** üçün standartdır.

---

# 🧠 OSINT Hücum Zənciri (Conceptual)

Tipik OSINT mərhələləri:

1. Target müəyyənləşir  
2. Açıq mənbələr analiz olunur  
3. Texniki və sosial məlumatlar toplanır  
4. Zəifliklər xəritələnir  
5. Hücum və ya müdafiə planı qurulur  

Bu model **real red team dərslərində** istifadə edilir.

---

# 🛡️ OSINT-ə Qarşı Müdafiə

Şirkətlər və fərdlər üçün:

- Açıq dataların audit edilməsi
- Metadata təmizlənməsi
- Sosial media paylaşım nəzarəti
- Server banner gizlədilməsi
- OSINT footprint azaldılması

Bu yanaşma **kiber təhlükəsizlik dərsləri** üçün əsas mövzudur.

---

## Nəticə

OSINT göstərir ki:

> Hacker olmaq üçün ilk addım hücum deyil — **informasiya toplamaqdır**.

OSINT bilikləri:
- hacker dərsləri
- kiber kurslar
- web proqramlama təhlükəsizliyi
- real dünya ssenariləri

üçün vazkeçilməzdir.

---

## 📞 OSINT və Kiber Təlimlər

📲 [WhatsApp ilə əlaqə](https://wa.me/994555182523?text=Salam%2C%20OSINT%20ve%20kiber%20tehlukesizlik%20dersleri%20ile%20maraqlaniram.)

**CyberShieldy Academy**  
Kiber Dərslər • Hacker Dərsləri • OSINT Təlimləri • Ethical Hacking • Web Təhlükəsizlik • Real Ssenarilər

---

## 📚 Oxşar Yazılar
<!--
- [OSINT vs Social Engineering](/posts/osint-vs-social-engineering)  
- [Red Team üçün Reconnaissance Texnikaları](/posts/red-team-recon)  
- [Shodan ilə IoT Riskləri](/posts/shodan-iot-riskleri)

-->

{% include cyber-popup.html %}

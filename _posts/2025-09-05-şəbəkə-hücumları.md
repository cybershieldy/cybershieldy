---
title: "MITM (Man-in-the-Middle) hücumu nədir? Şəbəkədəki görünməz düşmən"
date: 2025-09-05 14:00:00 +0400
categories: [təhlükəsizlik, şəbəkə hücumları]
tags: [mitm, man in the middle, şəbəkə təhlükəsizliyi, sniffing, vpn, kibertəhlükəsizlik, ictimai wi-fi, red team, blue team]
description: "MITM hücumu ilə şəxsi məlumatlar necə ələ keçirilir? Sadə Wi-Fi bağlantısı belə həyatınızı dəyişə bilər. Texniki izah, real senari və qorunma yolları — Emin Savaylov-un təhlükəsizlik bloqunda. Bloqu oxuyun və özünüzü qorumağı öyrənin."
image: /assets/images/2.jpg
---

<!-- Canonical link -->
<link rel="canonical" href="https://cybershieldy.com/posts/mitm-hucumu-nedir.html" />

<!-- Structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "MITM (Man-in-the-Middle) hücumu nədir? Şəbəkədəki görünməz düşmən",
  "description": "MITM hücumu ilə şəxsi məlumatlar necə ələ keçirilir? Sadə Wi-Fi bağlantısı belə həyatınızı dəyişə bilər. Texniki izah, real senari və qorunma yolları — Emin Savaylov-un təhlükəsizlik bloqunda.",
  "author": {
    "@type": "Person",
    "name": "Emin Savaylov"
  },
  "datePublished": "2025-09-05",
  "image": "https://cybershieldy.com/assets/images/2.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cybershieldy.com/posts/mitm-hucumu-nedir.html"
  }
}
</script>

# MITM (Man-in-the-Middle) hücumu nədir? Şəbəkədəki görünməz düşmən

İnternetdə "güvəndiyiniz bağlantı" sizi aldada bilər. **MITM (Man-in-the-Middle)** hücumları — hakerlərin şəbəkənizlə server arasına girərək sizin **şəxsi məlumatlarınızı oğurlamasının** ən təhlükəli yollarından biridir.

Bu yazıda MITM-in necə işlədiyini, real bir ssenarini və **özünüzü qorumağın effektiv yollarını** öyrənəcəksiniz.

---

![MITM konsepti və sxematik görünüş](/assets/images/man-in-the-middle-attack.svg "Şəbəkə üzərində MITM hücumunun necə baş verdiyini göstərən texniki vizual")

> *Şəkil: Hücumçunun qurban və server arasında gizli şəkildə yerləşdiyi MITM strukturu*

---

## 💣 MITM hücumları necə işləyir? (Sadə dillə izah)

MITM hücumu zamanı haker sizi və daxil olmaq istədiyiniz serveri **bir-birinə birləşdirir**, amma trafikiniz əvvəlcə onun əlindən keçir. Bu, həm şifrə oğurlamaq, həm də sizi saxta saytlara yönləndirmək üçün istifadə olunur.

### Əsas mərhələlər:

- **Trafik ələ keçirilir**
- **Məlumatlar oxunur və analiz olunur**
- **Zərərli yönləndirmə və ya manipulyasiya edilir**

---

## 🎯 Real ssenari: Kafedə “pulsuz Wi-Fi” MITM tələsi

Bir kafedə `Free_Coffee_Wifi` adlı pulsuz Wi-Fi-a qoşuldunuz. Amma bu əslində **hücumçu tərəfindən yaradılmış saxta şəbəkədir**.

Siz sosial media və ya bank hesabınıza girərkən **bütün trafik MITM hücumçunun laptopundan keçir**.

> 🔎 Alətlər: `Wireshark`, `Ettercap`, `Bettercap` və s.  
> HTTPS olmayan səhifələrdə hər şey açıq şəkildə görünür!

---

## 🛡️ MITM hücumlarından necə qorunmaq olar?

🔐 **1. VPN istifadə edin**  
Trafikinizi şifrələyən VPN, MITM hücumlarına qarşı ən effektiv qorunmadır.

🌐 **2. Yalnız HTTPS olan saytlardan istifadə edin**  
“Kilid” simvolu olmayan saytlara şifrə daxil etməyin.

📶 **3. Tanımadığınız Wi-Fi-lardan uzaq durun**  
Eyni adlı Wi-Fi-lar varsa ehtiyatlı olun. “Evil Twin” texnikası çox yayılıb.

⚙️ **4. Antivirus və firewall aktiv edin**  
Əsas təhlükəsizlik qatıdır.

📱 **5. SSL Pinning tətbiq edin (developer-lər üçün)**  
Tətbiqlər yalnız etibarlı serverlərlə işləməlidir.

🔗 **Əlavə resurs:**  
<a href="https://safety.google/intl/en" target="_blank" rel="noopener noreferrer">Google Təhlükəsizlik Mərkəzi</a>

---

## 👨‍💻 Red Team: MITM necə istifadə olunur?

> “Pentest zamanı saxta Wi-Fi yaradıldı. 13 nəfər qoşuldu, 5 istifadəçinin login məlumatları MITM vasitəsilə oğurlandı.”

Bu hücumlar istifadəçiyə **toxunmadan məlumat oğurlamaq** üçün ideal üsuldur.

---

## 🔐 Blue Team: Müdafiə strategiyaları

- 🔍 SIEM ilə trafik monitorinqi
- 🚫 DNS spoofing və ARP poisoning qoruması
- 🎓 Maarifləndirmə təlimləri
- 📶 Wi-Fi təhlükəsizlik sistemləri

---

## ✅ Nəticə: Gözə görünməyən təhlükə

MITM hücumları — sadəcə texniki bir termin deyil. O, **real həyatda şəxsi və korporativ məlumatlarınızı** ciddi şəkildə riskə ata bilər.

🔐 **Maariflən — qorun — paylaş.**

---

## 📞 Əlaqə və praktiki dəstək

> Hücumla qarşılaşmısınız və ya kibertəhlükəsizlik təlimi almaq istəyirsiniz?  
📲 **[WhatsApp ilə əlaqə saxlayın](https://wa.me/994555182523)** — Birbaşa konsultasiya.

---

## 📚 Oxşar yazılar

- [Phishing hücumu nədir? Canlı nümunə və qorunma yolları](/posts/phishing-hucumu-nedir.html)
- [Kibertəhlükəsizlikdə Red Team və Blue Team nədir?](/posts/red-team-blue-team.html)
- [İctimai Wi-Fi istifadə edərkən nələrə diqqət etməli?](/posts/ictimai-wifi-riskleri.html)

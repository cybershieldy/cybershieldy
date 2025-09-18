---
title: "Evil Twin Hücumları nədir? Real Ssenari, Fəaliyyət Prinsipi və Qorunma Yolları (2025 Bələdçisi)"
date: 2025-09-18 09:00:00 +0400
lastmod: 2025-09-18 09:00:00 +0400
categories: [şəbəkə təhlükəsizliyi, wifi hücumları]
tags: [evil twin, wifi hücumları, fake access point, sniffing, phishing, red team, kibertəhlükəsizlik]
description: "Evil Twin hücumlarının necə işlədiyini, real dünya ssenarisində necə tətbiq edildiyini və bu hücumdan qorunma yollarını 2025-ci ilin təcrübəsinə əsasən öyrənin."
image: /assets/images/evil1.webp
canonical: https://cybershieldy.com/evil-twin-hucumlari-2025
permalink: /posts/evil-twin-hucumlari.html
---

# Evil Twin Hücumları nədir? Real Ssenari, Fəaliyyət Prinsipi və Qorunma Yolları (2025 Bələdçisi)

> **Son Yenilənmə:** 18 Sentyabr 2025  
> **Yazı Tipi:** Texniki Təhlükəsizlik Bələdçisi

**Evil Twin hücumu**, Wi-Fi şəbəkələri üzərindən istifadəçilərin aldanaraq saxta (fake) bir Access Point-ə (AP) qoşulması və məlumatlarının oğurlanması ilə nəticələnən ciddi bir **kibertəhlükəsizlik hücumudur**.

---

## 📸 Hücumun Vizual Görünüşü

![Evil Twin Hücumu nümunəsi](/assets/images/evil2.webp "Evil Twin Hücumu — Fake Access Point ilə real Wi-Fi təqlidi")

---

## 🧠 Hücum necə işləyir?

**Evil Twin hücumu** adətən belə bir ssenari ilə baş verir:

1. Hücumçu, istifadəçinin qoşulmaq istədiyi ictimai Wi-Fi şəbəkəsinin eynisini yaradır. (məsələn, `FreeCoffee_WiFi`)
2. Saxta access point real AP-nin adı, SSID-si və MAC ünvanı ilə eyni görünür.
3. İstifadəçi fərqində olmadan saxta AP-yə qoşulur.
4. Hücumçu MITM (Man-in-the-Middle) mövqeyində yerləşərək:
   - Trafiki dinləyir (sniffing)
   - HTTPS olmayan saytlarda şifrələri toplayır
   - Session cookie-ləri ələ keçirir
   - Phishing səhifələrlə istifadəçini aldatmağa çalışır

---

## 🎯 Real Dünya Ssenarisi

**Ssenari:** Bir iş mərkəzində `Guest_WiFi_Open` adlı pulsuz Wi-Fi şəbəkəsi mövcuddur. Hücumçu eyni adı və siqnal gücünü istifadə edərək bir access point yaradır. Onlar DNS spoofing vasitəsilə qurbanın `facebook.com` sorğusunu öz phishing səhifəsinə yönləndirir.

> Nəticə: Qurban istifadəçi hesabı və şifrə məlumatını fırıldaqçı səhifəyə daxil edir.

---

## 🛡️ Evil Twin hücumundan necə qorunmalı?

2025-ci ildə hücumlar daha da ağıllılaşıb. Müdafiə isə aşağıdakı prinsiplərlə gücləndirilə bilər:

✅ **VPN istifadə edin** — Trafikinizi şifrələyin və MITM riskini azaldın.  
✅ **Public Wi-Fi şəbəkələrindən uzaq durun** — Mümkünsə öz mobil internetinizi istifadə edin.  
✅ **HTTPS istifadə edən saytları ziyarət edin** — `https://` protokolu olan saytlar MITM qarşısında daha dayanıqlıdır.  
✅ **Cihazınızın avtomatik Wi-Fi qoşulma funksiyasını deaktiv edin**  
✅ **Rogue AP Detector alətlərindən istifadə edin**  
✅ **Firewall və Wi-Fi IDS sistemləri qurun**

---

## 👨‍💻 Red Team baxışı

Red Team simulyasiyalarında Evil Twin hücumu geniş yayılıb. Aşağıdakı hallarda istifadə olunur:

- Phishing kampaniyaları ilə birlikdə
- DNS spoofing testləri üçün
- Əməkdaşların kibertəhlükəsizliyə yanaşmasını ölçmək üçün

> "Simulyasiya zamanı 28 işçi saxta Wi-Fi şəbəkəsinə qoşuldu və 14 nəfər giriş məlumatlarını phishing səhifəsinə daxil etdi."

---

## 🔐 Blue Team müdafiəsi

Blue Team bu cür hücumlara qarşı aşağıdakı addımları atır:

- Wi-Fi trafikini real-time monitorinq edir  
- DNS və DHCP trafikini yoxlayır  
- Rogue Access Point aşkarlayan sistemlər qurur  
- Şirkət daxili Wi-Fi təhlükəsizlik təlimləri keçirir

---

## 🔄 Hücum Texnologiyalarının Yenilənməsi

Evil Twin hücum texnikaları artıq daha **avtomatlaşdırılmış və görünməz** hala gəlib:

- `Wifiphisher`, `Fluxion` kimi açıq mənbə alətlərlə hücumlar 5 dəqiqədən az vaxtda hazırlanır  
- **Deauth + Evil Twin** kombinasiya hücumları geniş yayılıb  
- QR kod vasitəsilə istifadəçini yönləndirmə (phishing) üsulları istifadə olunur

---

## 📌 Nəticə

**Evil Twin hücumları**, səssiz və təhlükəli olması ilə seçilir. Əgər ictimai Wi-Fi istifadə edirsinizsə, bu hücumun potensial hədəfinə çevrilirsiniz.

**Tövsiyə:**  
Wi-Fi istifadə etdiyiniz hər məkanda öz təhlükəsizliyinizi prioritet tutun. Müasir şəbəkə hücumlarına qarşı müdafiə yalnız texnologiya ilə deyil, həm də biliklə mümkündür.

---

> Əlaqə və təlim üçün: [cyberdersler@gmail.com](mailto:cyberdersler@gmail.com)

---

<!-- Strukturlaşdırılmış məlumat (JSON-LD) -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Evil Twin Hücumları nədir? Real Ssenari, Fəaliyyət Prinsipi və Qorunma Yolları (2025 Bələdçisi)",
  "description": "Evil Twin hücumlarının necə işlədiyini, real dünya ssenarisində necə tətbiq edildiyini və bu hücumdan qorunma yollarını 2025-ci ilin təcrübəsinə əsasən öyrənin.",
  "image": "https://cybershieldy.com/assets/images/evil-twin.webp",
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
  "datePublished": "2025-09-18T09:00:00+04:00",
  "dateModified": "2025-09-18T09:00:00+04:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cybershieldy.com/evil-twin-hucumlari-2025"
  }
}
</script>

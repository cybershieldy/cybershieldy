---
title: "SS7 Hücumları — Mobil Rabitə Zəifliyi və Məlumatların Oğurlanması (2025)"
date: 2025-11-06 14:10:00 +0400
lastmod: 2025-11-06 14:10:00 +0400
categories: [kiber təhlükəsizlik, mobil şəbəkə, exploit, telecom]
tags: [ss7 attack, ss7 nədir, mobil rabitə hücumu, telecom hack, sms interception, call tracking, mobile exploit, signaling system no.7, gsm, kiber təhlükəsizlik, ethical hacking, hacker kurs, mobil təhlükəsizlik]
description: "SS7 zəifliyi mobil şəbəkələrdə zəng və SMS izlənməsini necə mümkün edir? Bu məqalə SS7 hücumlarının texniki tərəflərini, risklərini və onlardan qorunma yollarını izah edir."
image: /assets/images/ss7-attack.webp
canonical: https://cybershieldy.com/posts/ss7-hucumlari
permalink: /posts/ss7-hucumlari
---

# 📱 SS7 Hücumları — Mobil Rabitə Zəifliyi və Məlumatların Oğurlanması (2025)

**Qısa xülasə:**  
SS7 (Signaling System No.7) — mobil operatorlar arasında rabitəni idarə edən protokoldur. Lakin bu sistemin köhnə quruluşu səbəbilə, hücumçular zəngləri izləyə, SMS mesajlarını ələ keçirə və istifadəçilərin yerini təyin edə bilirlər. Bu məqalə SS7 hücumlarının necə işlədiyini, real riskləri və onlardan qorunmaq yollarını izah edir.

---

## 🔍 SS7 nədir və niyə təhlükəlidir?

**SS7 (Signaling System No.7)** — GSM, 3G və bəzi LTE şəbəkələrdə zənglərin və mesajların yönləndirilməsini təmin edən siqnal protokollar toplusudur.  
Bu sistem 1980-ci illərdə dizayn olunub və **“etimada əsaslanan arxitektura”** üzərində qurulub — yəni bir operator digər operatora avtomatik güvənir.

Bu etimad mexanizmi isə müasir dövrdə böyük bir problem yaradır:
> “Əgər hücumçu SS7 şəbəkəsinə çıxış əldə edirsə, istənilən mobil nömrə haqqında real zamanlı məlumat toplaya bilər.”

---

## ⚠️ SS7 Hücumu ilə nələr mümkündür?

1. **SMS interception:** iki faktorlu autentifikasiya (MFA) üçün göndərilən SMS kodlarını ələ keçirmək.  
2. **Call redirection:** gələn zəngləri başqa nömrəyə yönləndirmək.  
3. **Location tracking:** istifadəçinin coğrafi yerini (cell ID və LAC vasitəsilə) təyin etmək.  
4. **Data exfiltration:** mobil trafikdə gizli məlumatların sızdırılması.  
5. **Subscriber information theft:** IMSI, IMEI və abunəçi məlumatlarını əldə etmək.

---

## 🔬 SS7 Hücum Mexanizmi (Sadə izah)

1. Hücumçu SS7 şəbəkəsinə çıxış əldə edir (tez-tez “leased access” və ya kompromit olunmuş operatorlar vasitəsilə).  
2. “UpdateLocation” və “ProvideSubscriberInfo” sorğuları ilə hədəf abunəçinin IMSI və yer məlumatı əldə olunur.  
3. “SendRoutingInfoForSM” mesajı ilə SMS yönləndirilə və ya tutulur.  
4. Hücumçu SMS və zəng məlumatlarını öz serverinə yönləndirir.

> **Nəticə:** Hədəfin xəbəri olmadan zəng və SMS məlumatları sızdırıla bilər.

---

## 🧠 Real həyatda SS7 hücumlarının nümunələri

- **2017 Almaniya Bank Hücumu:** Hackerlər SS7 zəifliyindən istifadə edərək bank SMS təsdiqlərini ələ keçirdi və müştərilərin hesablarından pul köçürdülər.  
- **2019 İsrail Araşdırması:** Telekom mütəxəssisləri SS7 üzərindən bütün ölkə üzrə abunəçilərin yerini izləməyə nail oldular.  
- **APT Hücumları:** Dövlət səviyyəli hücum qrupları SS7 zəifliyindən kəşfiyyat və izləmə məqsədilə istifadə edir.

---

## 🧰 Müdafiə və Təhlükəsizlik Tədbirləri

### Şəxsi istifadəçi üçün
- **SMS əvəzinə MFA tətbiqləri:** Google Authenticator, Authy və ya hardware tokenlərdən istifadə et.  
- **VPN və şifrəli rabitə:** Signal, Telegram Secret Chat kimi uçtan-uca şifrəli platformalardan istifadə et.  
- **Mobil operatorla əlaqə:** mümkün olduqda SS7 filtrasiya dəstəkli operator seç.  
- **Şübhəli fəaliyyətləri izləmək:** bank bildirişlərində və hesab girişlərində qəribə aktivlikləri yoxla.

### Operatorlar və şirkətlər üçün
- **SS7 firewall tətbiqi:** anormal sorğuları analiz edən və bloklayan filtrasiya sistemləri.  
- **Diameter və LTE təhlükəsizlik təkmilləşdirmələri:** müasir protokollarla SS7 zəifliklərini aradan qaldırmaq.  
- **Threat intelligence inteqrasiyası:** hücum göstəricilərinin (IOC) toplanması və paylaşımı.  
- **Audit və pentest:** telecom infrastrukturu üçün müntəzəm sızma testləri.

---

## ⚙️ Texniki baxış: SS7 mesajnı necə “manipulyasiya” etmək olur?

> Bu bölmə yalnız **maarifləndirici və texniki izah məqsədi daşıyır**, heç bir praktiki istismar təlimatı verilmir.

- **MAP protokolu:** `SendRoutingInfo`, `UpdateLocation`, `InsertSubscriberData` kimi mesajlar zəiflik nöqtəsidir.  
- **Global Title Translation (GTT):** SS7 mesajlarının istiqamətini təyin edən sistem, səhv konfiqurasiyada zərərli manipulyasiyalara açıqdır.  
- **Firewalls və monitoring olmadan:** hər hansı operator node-a daxil olan hücumçu, “trusted” əlaqə kimi görünür və sorğu göndərə bilir.

---

## 🧾 Hüquqi və etik aspektlər

- SS7 hücumlarını həyata keçirmək və ya belə sistemlərə icazəsiz çıxış **cinayət əməlidir.**  
- Telekom infrastrukturuna müdaxilə ciddi hüquqi məsuliyyət yaradır.  
- Bu məqalə yalnız **kiber təhlükəsizlik tədrisi və maarifləndirmə** məqsədilə hazırlanmışdır.  

---

## 🔑 Nəticə

- SS7 — mobil rabitənin “əski skeleti” olaraq qalır və müasir dövrdə **ciddi zəifliklər** daşıyır.  
- Hücumçular SMS və zəng məlumatlarını ələ keçirə bilər.  
- Təhlükəsizlik üçün SMS-based autentifikasiyadan uzaq durmaq, müasir operator seçmək və mobil təhlükəsizlik alətlərindən istifadə vacibdir.  
- Qorunmaq üçün həm **fərdi**, həm də **korporativ səviyyədə** tədbirlər görülməlidir.

---

## 📎 Əlaqəli Mövzular — Sayt daxili keçidlər

- [MITM hücumu və şəbəkə izlənməsi](/posts/sebeke-hucumlari)  
- [SIM Swap hücumu nədir və necə qorunmalı](/posts/sim-swap-hucumu)  
- [Phishing və sosial mühəndislik hücumları](/posts/sosial-muhendislik)  
- [MFA və identifikasiya üsulları](/posts/iki-faktorlu-identifikasiya)  
- [Mobil təhlükəsizlik və 5G riskləri](/posts/5g-tehlukesizlik)  

---

## 📲 Təlim və kurslar

Əgər **mobil rabitə təhlükəsizliyi, SS7 zəiflikləri və telecom protokolları** haqqında daha dərindən öyrənmək istəyirsənsə —  
**CyberShieldy Academy** real praktiki laboratoriyalar və ethical hacking kursları təklif edir.  
📩 [WhatsApp ilə əlaqə](https://wa.me/994555182523?text=Salam%2C%20SS7%20h%C3%BCcumlar%C4%B1%20haqq%C4%B1nda%20kurs%20m%C9%99lumat%C4%B1%20ist%C9%99yir%C9%99m.)

---

<!-- SEO JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SS7 Hücumları — Mobil Rabitə Zəifliyi və Məlumatların Oğurlanması (2025)",
  "description": "SS7 zəifliyi mobil şəbəkələrdə zəng və SMS izlənməsini necə mümkün edir? SS7 hücumlarının texniki tərəfləri, riskləri və qorunma yolları.",
  "image": "https://cybershieldy.com/assets/images/ss7-attack.webp",
  "author": { "@type": "Person", "name": "CyberShieldy" },
  "publisher": {
    "@type": "Organization",
    "name": "CyberShieldy",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cybershieldy.com/assets/images/logo.png"
    }
  },
  "datePublished": "2025-11-06T14:10:00+04:00",
  "dateModified": "2025-11-06T14:10:00+04:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cybershieldy.com/posts/ss7-hucumlari"
  }
}
</script>

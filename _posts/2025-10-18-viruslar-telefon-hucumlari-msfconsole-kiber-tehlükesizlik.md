---
title: "Telefon və Kompüter Virusları: Yeni Hücum Növləri, Yoluxma Yolları və Müdafiə (2025)"
date: 2025-10-18 09:00:00 +0400
lastmod: 2025-10-18 09:00:00 +0400
categories: [kiber təhlükəsizlik, malware, mobil təhlükəsizlik, incident response]
tags: [virus, mobile malware, telefon virusu, komputer virusu, msfconsole, malware analysis, ransomware, spyware, trojan, phishing, android virus, ios security, cyber hygiene, antivirus]
description: "Telefon və kompüter viruslarının necə işlədiyini, yeni hücum növlərini, telefonun və kompüterin yoluxma yollarını, simptomları, aşkarlama və təmizləmə üsullarını və msfconsole-un etik pentest kontekstində nə olduğunu öyrənin."
image: /assets/images/virus-mobil.webp
canonical: https://cybershieldy.com/posts/viruslar-telefon-hucumlari-msfconsole
permalink: /posts/viruslar-telefon-hucumlari-msfconsole
---

# 📱💻 Telefon və Kompüter Virusları: Yeni Hücum Növləri, Yoluxma Yolları və Müdafiə (2025)

**Qısa xülasə:** Bu məqalədə mobil və masaüstü cihazlarda rast gəlinən virus və zərərli proqram tipləri (ransomware, spyware, trojan və s.), telefonun necə yoluxduğu, kompüter içində virusun necə yayılması, simptomlar, aşkarlama və təmizləmə yolları, həmçinin **msfconsole** kimi pentest alətlərinin etik istifadə perspektivi yüksək səviyyədə izah olunur. Məqsəd — məlumatlandırma və müdafiə.

---

## 🔎 Nə üçün bu mövzu vacibdir?
2025-ci ildə mobil cihazlar və IoT cihazların geniş yayılması ilə **telefon virusları** (mobile malware) və hibrid hücumlar daha çox görülür. Həm şəxsi məlumatların, həm də biznes məlumatlarının təhlükəsizliyi üçün istifadəçilər və administratorlar yoluxma vektorlarını, simptomları və müdafiə üsullarını bilməlidir.

---

## 1️⃣ Malware tipologiyası – əsas zərərli proqram növləri

- **Virus / Worm:** Özünü kopyalayaraq yayılmağa yönəlmiş proqramlar (məsələn, fayl virusları və ya şəbəkə solucuları).  
- **Trojan (Truva atı):** Faydalı görünən proqramın içində gizlənən zərərli funksiya.  
- **Spyware / Adware:** İstifadəçi məlumatlarını (sms, zənglər, brauzer tarixçəsi) oğurlayan və ya reklam göstərən proqramlar.  
- **Ransomware:** Faylları şifrələyən və pul tələb edən proqramlar.  
- **Rootkit:** Sistemə gizli yolla daxil olub aşkar edilməyi çətinləşdirən komponentlər.  
- **Bootkit:** Avadanlıq ətrafında vəya sistem başlanğıcında işləyən daha dərin səviyyəli zərərli kod.  

> **SEO açar sözlər:** telefon virusu, komputer virusu, mobile malware, ransomware, spyware, trojan.

---

## 2️⃣ Telefon necə yoluxur? (Yüksək səviyyəli vektorlar)

Mobil cihazlar üçün tipik yoluxma yolları belədir — **təfərrüatlı exploit addımları yoxdur**, yalnız istifadəçilərin bilməsi vacib olan vektorlar:

- **Zərərli tətbiq mağazaları və sideloading:** Rəsmi mağazaların xaricindən yüklənən tətbiqlər zərərli ola bilər.  
- **Fayl paylaşımı və APK sideload:** İnamlı görünən APK və ya faylın yüklənməsi.  
- **Phishing SMS / SMS spoofing (smishing):** Link klikləyərək zərərli veb və ya tətbiqə yönləndirmə.  
- **Malvertising:** Reklam şəbəkələri vasitəsilə zərərli veb-səhifələrə yönləndirmə.  
- **İcazə sui-istifadəsi (excessive permissions):** Tətbiqlər lazımsız icazə tələb edir (məs. SMS, zənglər, kamera).  
- **Public Wi-Fi və MITM:** Açıq Wi-Fi üzərindən şəbəkə hücumları və məlumat ələ keçirilməsi.  
- **Zərərli QR kodlar:** QR ilə yönləndirilən zərərli URL-lər.  
- **Köhnəlmiş əməliyyat sistemi və zəif təhlükəsizlik yamaları:** Patch olunmamış sistemlərdə məlum zəifliklərdən istifadə oluna bilər.

> **Mühüm:** iOS və Android platformalarında təhlükəsizlik mexanizmləri var; amma istifadəçinin davranışı və yardımçı paketlərin mənşəyi risk yarada bilər.

---

## 3️⃣ Kompüter içində virus yayılma yolları

- **E-mail phishing və zərərli attachment:** Ən yayğın vektor.  
- **Downloads (torrent, qeyri-rəsmi proqramlar):** Crack edilmiş proqram və yükləmələr risklidir.  
- **Malvertising və kompromit edilmiş veb-saytlar:** Drive-by download halları.  
- **USB / Removable media:** Fiziki media ilə yayılma (autorun kimi köhnəlmiş mexanizmlər).  
- **RDP zəif parametrləri və açıq xidmətlər:** Parol zəifliyi və RDP açıq portları.  
- **Lua/Script injection, macro-enabled Office faylları:** Makro vasitəsilə zərərli kod icrası.

---

## 4️⃣ Telefon və kompüter yoluxmasının simptomları (nə ilə şübhələnmək olar)

- Avtomatik açılan reklamlar və ya brauzer pop-up-lar (adware əlaməti).  
- Batereyanın sürətlə boşalması və ya cihazın aşırı istiləşməsi.  
- Nadir tətbiqlərin yüklənməsi və ya tanımadığın proseslər.  
- Gözlənilməz SMS və ya e-maillər göndərilməsi (spam göndərən cihaz).  
- Faylların şifrələnməsi və ransom mesajı (ransomware).  
- Şəbəkə trafikin artması və ya şübhəli əlaqələr.  
- Kamera və mikrofonun icazəsiz istifadəsi (spyware).  
- Sistem performansının aşağı düşməsi, tez-tez çöküşlər.

---

## 5️⃣ msfconsole nədir? (etik və yüksək səviyyəli izah)

**msfconsole** — Metasploit Framework-un əsas interaktiv konsoludur.  
- **Nə üçündür:** Etik pentesterlər və təhlükəsizlik tədqiqatçıları tərəfindən zəiflikləri tapmaq, PoC-ları (proof-of-concept) yaratmaq və müdafiə zəifliklərini test etmək üçün istifadə olunur.  
- **Həssaslıq:** Alət güclü və eyni zamanda təhlükəli ola bilər; buna görə də onu yalnız **icazəli və qanuni** mühitdə (lab, pentest müqaviləsi ilə) işlətmək lazımdır.  
- **Təlim məqsədi:** msfconsole haqqında biliklər təhlükəsizlik komandalarına zəifliklərin necə istismar edilə biləcəyini başa düşməyə və daha yaxşı müdafiə qurmağa kömək edir.

> **Vacib:** Bu məqalədə msfconsole-un necə exploit işlətmək və ya cihaz yoluxdurmaq üçün istifadə olunacağına dair addım-addım təlimat yoxdur — yalnız etik istifadəyə fokuslanır.

---

## 6️⃣ Aşkarlama və ilk tədbirlər (İncident Response — yüksək səviyyədə)

### Telefon üçün:
1. **Şübhəli tətbiqləri yoxla:** Ayarlar → Tətbiqlər bölməsindən tanımadığınları sil.  
2. **İcazələri nəzarət et:** Hər tətbiqin SMS, mikrofon, kamera və yeri istifadə icazəsini yoxla.  
3. **Antivirus / Mobile EDR istifadə et:** Məşhur və etibarlı mobil təhlükəsizlik tətbiqlərindən scan et.  
4. **Şəbəkədən ayır:** Wifi və mobil datanı söndür və şübhəli bağlantıları kəs.  
5. **Backup və reset:** Əgər təmizləmə mümkün deyilsə, məlumatları yedək et və fabrikə qaytar (factory reset).  
6. **Mənbəyi araşdır:** Zərərli tətbiqin nə vaxt yükləndiyini və hansı linkdən gəldiyini qeyd et.

### Kompüter üçün:
1. **Şəbəkəni ayır:** İnterneti kəs, artıq şəbəkə əlaqələrini blokla.  
2. **Antivirus və antimalware scan:** Tam sistem taraması apar.  
3. **Disk image və log toplama:** Forensik məqsədlə imaj və loglar topla (əgər biznes üçünsə).  
4. **İzolyasiya və remediya:** Zərərli faylları izolə et və lazım gəlsə sistem bərpası (reinstall) et.  
5. **Password dəyişdir:** Hər hansısa kompromit hesablar üçün parolları yenilə və MFA tətbiq et.  
6. **PEP və raport:** Hücumun mənbəyini və təsirini sənədləşdir.

> **Qeyd:** Hüquqi və təşkilati tələblərə uyğun olaraq insidentləri hesabatla. Korporativ mühitdə hüquq-mühafizə orqanları ilə əlaqə vacib ola bilər.

---

## 7️⃣ Təmizləmə və bərpa (saflaşma addımları — ümumi)

- **Məlumat yedəklə** (backup) — əvvəlcə vacib faylları çıxart.  
- **Sistem yenidən quraşdırma (clean install)** — ən etibarlı seçim: əməliyyat sistemini sıfırlayıb yenidən qur.  
- **Yamaqları tətbiq et** — OS və proqramları yenilə.  
- **MFA aktiv et** — hesablar üçün iki faktorlu autentifikasiya.  
- **Monitorinq qur** — şübhəli qalan davranışları izləmək üçün log və SIEM/EDR konfiqurasiya et.  
- **Təlim və maarifləndirmə** — istifadəçilərə phishing və sosial mühəndislik barədə təlim ver.

---

## 8️⃣ Qarşısını alma — uzunmüddətli strategiyalar

- **Güclü parollar və MFA** — ən əsas müdafiə.  
- **Rəsmi mağazalardan yüklə** — tətbiqləri yalnız rəsmi App Store / Play Store-dan götür.  
- **İcazələri minimal saxla** — tətbiqlərə yalnız lazım olan icazələri ver.  
- **Patch management** — cihaz və serverləri daimi yenilə.  
- **Şübhəli linklərə klikləmə** — SMS və e-maildəki linklərə diqqətlə yanaş.  
- **Backup politikası** — mühüm məlumatların offline/air-gapped yedəkləri olsun.  
- **EDR və WAF** — endpoint detection və web application firewall kimi həllər tətbiq et.  
- **Pentest və red-team** — sistemin zəif tərəflərini peşəkar komandalarla yoxla.

---

## 9️⃣ Hüquqi və etik məqamlar
- Malware və istismarların yayılması **qanuna ziddir**. Təhlükəsizlik tədqiqatlarını yalnız **qaydalar çərçivəsində**, müqavilə və ya icazə ilə aparın.  
- Belə hadisələrdə hüquq-mühafizə orqanlarına məlumat vermək vacibdir.

---

## 1️⃣0️⃣ Nəticə — nə etməliyik?
- **Məlumatlı ol:** Telefon və kompüter virusları müxtəlif vektorlar vasitəsilə yayılır — istifadəçi davranışı əsas risk faktoru ola bilər.  
- **Süni təminat yox, praktik addımlar at:** MFA, yamaqlar, etibarlı AV və ehtiyat nüsxələr əsas müdafiə qatlarıdır.  
- **Etik pentest-lərlə öyrən:** Alətlər (məs. msfconsole) müdafiəni gücləndirmək üçün istifadə edilməlidir — zərər vermək deyil.

---
## 📚 Oxşar yazılar

- [Sosial mühəndislik nədir və real nümunələr](/posts/sosial-muhəndislik)  
- [İki faktorlu identifikasiya nədir?](/posts/iki-faktorlu-identifikasiya)  
- [SIEM nədir və necə işləyir?](/posts/siem-nedir)


## 🔗 Əlavə resurslar və oxu materialı
- OWASP Mobile Security Project — mobil tətbiq təhlükəsizliyi qaynaqları.  
- CERT/US və yerli CERT-lərin təhlükəsizlik advisory-ləri.  
- Məşhur antivirus və EDR vendorlarının təlimat səhifələri.  

---

## 📲 Əlaqə və yardım
Müxtəlif hücumlarla bağlı yardım və təlim üçün bizimlə əlaqə saxlayın:  
📩 [WhatsApp ilə əlaqə](https://wa.me/994555182523?text=Salam%2C%20telefon%20və%20kompüter%20virusları%20haqqinda%20kompaniyaniza%20danismaq%20istəyirəm.)  

---

<!-- SEO JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Telefon və Kompüter Virusları: Yeni Hücum Növləri, Yoluxma Yolları və Müdafiə (2025)",
  "description": "Telefon və kompüter viruslarının necə işlədiyini, yoluxma yollarını, simptomları, aşkarlama və təmizləmə üsullarını və msfconsole-un etik pentest kontekstində nə olduğunu öyrənin.",
  "image": "https://cybershieldy.com/assets/images/virus-mobil.webp",
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
  "datePublished": "2025-10-18T12:00:00+04:00",
  "dateModified": "2025-10-18T12:00:00+04:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cybershieldy.com/posts/viruslar-telefon-hucumlari-msfconsole"
  }
}
</script>

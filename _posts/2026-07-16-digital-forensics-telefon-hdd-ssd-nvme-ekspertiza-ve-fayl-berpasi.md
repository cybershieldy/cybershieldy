---
title: "🧪 Rəqəmsal Forensika Nədir? Telefon, HDD, SSD, NVMe Ekspertizası və Fayl Bərpası"
date: 2026-07-16 08:00:00 +0400
lastmod: 2026-07-16 08:00:00 +0400

categories:
- kibertəhlükəsizlik
- digital forensics
- blue team

tags:

- digital forensics
- computer forensics
- mobile forensics
- file recovery
- data recovery
- hdd
- ssd
- nvme
- autopsy
- foremost
- photorec
- sleuthkit
- dfir
- incident response
- blue team
- cybersecurity
- digital evidence
- android forensics
- iphone forensics
- cyber lab
- kibertəhlükəsizlik
- ekspertiza
- fayl bərpası

description: "Rəqəmsal forensika nədir? Telefon ekspertizası, HDD, SSD və NVMe disklərdən fayl bərpası, risklər, sübutların qorunması və DFIR prosesləri haqqında geniş bələdçi."

image: /assets/images/forenzika.webp
canonical: https://cybershieldy.com/posts/digital-forensics
permalink: /posts/digital-forensics
---

# 🧪 Rəqəmsal Forensika Nədir?

Müasir dövrdə demək olar ki, bütün cinayət, kiberhücum və daxili araşdırmaların arxasında **rəqəmsal izlər** qalır.

Silinmiş şəkillər, mesajlar, USB tarixçəsi, brauzer məlumatları, sistem logları və hətta silinmiş fayllar belə düzgün metodlarla araşdırıldıqda vacib sübutlara çevrilə bilər.

Məhz bu proses **Digital Forensics (Rəqəmsal Forensika)** adlanır.

Forensikanın əsas məqsədi:

- Rəqəmsal sübutların toplanması
- Sübutların dəyişdirilmədən qorunması
- Faylların bərpası
- Hücumun necə baş verdiyini müəyyən etmək
- Məhkəmə və hüquqi ekspertizaya uyğun hesabat hazırlamaq

---

# 🎥 Mövzu ilə bağlı video

<iframe src="https://www.instagram.com/reel/Dax7USmMzgi/embed"
width="100%" height="700" style="border:none;overflow:hidden;border-radius:12px;"></iframe>

---

# Digital Forensics Hansı Sahələri Əhatə Edir?

Bugünkü DFIR (Digital Forensics & Incident Response) çox geniş sahəni əhatə edir.

Əsas istiqamətlər:

- 📱 Mobil telefon ekspertizası
- 💻 Kompüter ekspertizası
- 💾 HDD analizləri
- ⚡ SSD və NVMe ekspertizası
- ☁️ Cloud forensics
- 🌐 Network forensics
- 📧 Email forensics
- 🧠 Memory (RAM) forensics
- 🗂️ Log analizi
- 🦠 Malware forensics

---

# Telefon Forensikası

Telefon artıq insanın ikinci yaddaşı hesab olunur.

Ekspertiza zamanı aşağıdakı məlumatlar araşdırıla bilər:

- Kontaktlar
- SMS
- WhatsApp məlumatları
- Telegram məlumatları
- Şəkillər
- Videolar
- GPS tarixçəsi
- Wi-Fi tarixçəsi
- Bluetooth əlaqələri
- Browser məlumatları
- Tətbiq məlumatları
- SIM kart məlumatları
- IMEI
- Quraşdırılmış proqramlar
- Silinmiş fayllar

Telefon ekspertizasında əsas məqsəd istifadəçinin fəaliyyətini zaman ardıcıllığı ilə bərpa etməkdir.

---

# Android Ekspertizası

Android cihazlarında araşdırılan məlumatlardan bəziləri:

- SQLite verilənlər bazaları
- tətbiq məlumatları
- şəkillər
- cache
- log faylları
- call history
- location history
- notifications
- accounts
- downloads

Əgər cihaz şifrələnibsə və kilidlidirsə, əldə edilə bilən məlumatların həcmi modeldən və Android versiyasından asılı olaraq dəyişə bilər.

---

# iPhone Ekspertizası

iOS cihazlarında ekspertiza daha çətin ola bilər.

Araşdırılan məlumatlar:

- iMessage
- Photos
- Safari History
- Health məlumatları
- Call logs
- Contacts
- Notes
- Calendar
- tətbiq məlumatları

Apple cihazlarında Secure Enclave və güclü şifrələmə səbəbindən məlumatlara çıxış imkanları cihazın modeli, iOS versiyası və hüquqi/icazəli əldəetmə üsullarından asılıdır.

---

# HDD Forensikası

Ən klassik ekspertiza sahələrindən biridir.

HDD-də araşdırılan məlumatlar:

- NTFS
- FAT32
- exFAT
- EXT4
- silinmiş fayllar
- MFT
- partition məlumatları
- USB tarixçəsi
- Registry
- Event Logs

Mexaniki disklərdə silinmiş məlumatlar üzərinə yeni məlumat yazılmayıbsa, bəzən bərpa olunma ehtimalı yüksək ola bilər.

---

# SSD və NVMe Ekspertizası

Bir çox istifadəçi düşünür ki, SSD-də silinən məlumatlar HDD kimi bərpa olunur.

Əslində vəziyyət fərqlidir.

SSD və NVMe disklərdə:

- TRIM
- Garbage Collection
- Wear Leveling

kimi texnologiyalar istifadə olunur.

Bu mexanizmlər səbəbindən silinmiş məlumatların bərpası HDD ilə müqayisədə daha çətin və bəzən mümkün olmaya bilər.

---

# TRIM Nədir?

TRIM əmri əməliyyat sisteminə bildirir ki, müəyyən bloklar artıq istifadə olunmur.

SSD həmin blokları sonradan təmizləyə bilər.

Nəticədə:

- fayl silinir
- blok boş hesab olunur
- məlumat sonradan fiziki olaraq silinə bilər

Bu səbəbdən SSD-də vaxtında ekspertiza aparılması vacibdir.

---

# NVMe Disklərdə Risklər

NVMe disklər çox yüksək sürətə malikdir.

Lakin:

- sürətli TRIM
- controller optimizasiyası
- wear leveling

kimi xüsusiyyətlər səbəbindən məlumatların bərpası daha mürəkkəb ola bilər.

Bu səbəbdən ilk addım kimi orijinal disk üzərində işləmək əvəzinə onun məhkəmə məqsədli surətinin (forensic image) yaradılması tövsiyə olunur.

---

# Silinmiş Fayllar Necə Bərpa Olunur?

Əgər məlumatın üzərinə yeni məlumat yazılmayıbsa, müxtəlif metodlardan istifadə edilə bilər.

Məsələn:

- File Carving
- Metadata analizi
- Signature analizi
- Partition Recovery
- Journal analizi

Bu metodlar müxtəlif fayl növlərinin bərpasına kömək edə bilər.

---

# File Carving Nədir?

File Carving fayl sistemi məlumatları olmasa belə, faylın başlanğıc və son imzalarına əsasən məlumatların axtarılması üsuludur.

Məsələn:

- JPG
- PNG
- PDF
- ZIP
- DOCX
- MP4

kimi fayllar bəzən bu üsulla bərpa edilə bilər.

---

# Populyar Forensika Alətləri

Laboratoriyalarda və ekspertizalarda tez-tez istifadə olunan alətlər:

- Autopsy
- The Sleuth Kit
- FTK Imager
- PhotoRec
- TestDisk
- Foremost
- Bulk Extractor
- Volatility
- Magnet AXIOM
- Cellebrite (mobil ekspertiza)
- Oxygen Forensic Detective

Hər alətin öz üstünlükləri və istifadə sahəsi vardır.

---

# Mənim Laboratoriya Testlərim

Laboratoriya mühitimdə müxtəlif ssenarilər üzərində sınaqlar aparmışam.

Məsələn:

- Foremost ilə silinmiş şəkillərin bərpası
- Autopsy ilə disk analizləri
- Siem vasitəsilə hadisələrin monitorinqi
- Linux sistemlərində fayl bərpası testləri
- Android laboratoriya analizləri

Bu testlər yalnız mənə məxsus və icazəli laboratoriya mühitində həyata keçirilmişdir.

---

# Ekspertiza Prosesi

Peşəkar ekspertiza adətən aşağıdakı mərhələlərdən ibarət olur:

1. Sübutun qəbul edilməsi
2. Write Blocker istifadə olunması
3. Forensic Image yaradılması
4. Hash hesablanması (SHA-256 və s.)
5. Analiz
6. Fayl bərpası
7. Timeline hazırlanması
8. Hesabatın tərtib olunması

Bu yanaşma sübutların bütövlüyünün qorunmasına kömək edir.

---

# Sübutların Qorunması

Ekspertiza zamanı ən vacib qaydalardan biri:

**Orijinal sübut üzərində işləməməkdir.**

Bunun üçün:

- write blocker
- forensic image
- hash verification
- chain of custody

kimi prosedurlardan istifadə olunur.

---

# Fayl Bərpasında Risklər

İstifadəçilərin ən çox etdiyi səhvlər:

- Diskdən istifadə etməyə davam etmək
- Yeni proqram quraşdırmaq
- Faylları həmin diskin üzərinə bərpa etmək
- SSD-də gecikmək
- Diski formatlamağa çalışmaq
- SMART xəbərdarlıqlarını nəzərə almamaq

Bu addımlar məlumatların tam itirilməsinə səbəb ola bilər.

---

# Blue Team üçün Forensikanın Əhəmiyyəti

Blue Team üçün forensika:

- Hadisənin səbəbini müəyyən etməyə
- Hücumun necə başladığını anlamağa
- IOC-ləri toplamağa
- Logları əlaqələndirməyə
- Təhlükəsizlik boşluqlarını aşkarlamağa
- Gələcək hücumların qarşısını almağa

kömək edir.

---

# DFIR Nədir?

DFIR — **Digital Forensics and Incident Response** anlayışıdır.

Bu sahədə mütəxəssislər:

- hücumları araşdırırlar
- sübutları qoruyurlar
- logları analiz edirlər
- zərərli proqramları araşdırırlar
- təşkilatın normal fəaliyyətini bərpa etməyə kömək edirlər

---

# Nəticə

Rəqəmsal forensika yalnız silinmiş faylları geri qaytarmaq deyil.

Bu sahə:

- kiberhücumların araşdırılması,
- rəqəmsal sübutların qorunması,
- telefon ekspertizası,
- HDD, SSD və NVMe analizləri,
- hadisələrin zaman xəttinin qurulması,
- və peşəkar hesabat hazırlanmasını əhatə edən geniş bir elmdir.

İstər Blue Team mütəxəssisi, istər DFIR analitiki, istərsə də kibertəhlükəsizlik həvəskarı olun, forensika bilikləri real hadisələrin araşdırılmasında mühüm rol oynayır.

---

## 🔗 Oxşar Mövzular

* 📊🛡️🚨 [SIEM nədir və necə işləyir?](https://cybershieldy.com/posts/siem-nedir)
* 🔴🔵🛡️⚔️ [Red Team vs Blue Team](https://cybershieldy.com/posts/red-team-vs-blue-team)
* 🤖📡🏠🔐 [IoT Security və Smart Sistemlər](https://cybershieldy.com/posts/robotexnika-kiber-gelecek)
* ⚡🛡️ [ESP32 ilə SIEM İnteqrasiyası](https://cybershieldy.com/posts/ideaspark-esp32-siem-ssh-brute-force)
* 📶🔓⚠️ [Wi-Fi Hücumları və Public Şəbəkə Riskləri](https://cybershieldy.com/posts/wifi-hucumlari)
* 🔌💀🧠🚪 [Fiziki Hücumlar və Təhlükəsizlik Riskləri](https://cybershieldy.com/posts/fiziki-hucumlar-genis)
* 🧪📱💾🔍 [Rəqəmsal Forensika: Telefon, HDD, SSD və NVMe Ekspertizası](https://cybershieldy.com/posts/digital-forensics-nedir)

---

## 📢 CyberShieldy Academy

**Savaylov Emin**

**🛡️ Kibertəhlükəsizlik Mütəxəssisi • 🔴 Red Team • 🔵 Blue Team üzrə Təlimçi**

🌐 https://cybershieldy.com

> "Rəqəmsal sübutlar danışmır, lakin düzgün ekspertiza onları danışdırmağı bacarır."

{% include cyber-popup.html %}

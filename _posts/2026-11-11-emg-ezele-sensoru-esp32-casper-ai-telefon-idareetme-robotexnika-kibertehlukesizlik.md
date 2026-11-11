---
layout: post
title: "💪🧠 Əzələ Siqnalı ilə Telefonu İdarə Etmək: EMG Sensor, ESP32-S3, CASPER AI və Kibertəhlükəsizlik | Savaylov Emin"
date: 2026-11-11 08:00:00 +0400
lastmod: 2026-11-11 08:00:00 +0400
author: "Savaylov Emin"
categories:
  - kibertəhlükəsizlik
  - robotexnika
  - ethical hacking
  - iot security
  - embedded security
  - ai cybersecurity
  - kiber dərsləri
tags:
  - kibertəhlükəsizlik
  - kiber təhlükəsizlik
  - kibertəhlükəsizlik Azərbaycan
  - kibertəhlükəsizlik kursu
  - kiber təhlükəsizlik dərsləri
  - kiber dərs
  - kiber dərsləri
  - hacker dərsləri
  - ethical hacking
  - ethical hacking Azerbaijan
  - hacking
  - ethical hacker
  - penetration testing
  - pentest kursu
  - red team
  - blue team
  - purple team
  - SOC
  - SIEM
  - Wazuh
  - Splunk
  - robotexnika
  - robotexnika kursu
  - robototexnika
  - AI robotics
  - EMG
  - EMG sensor
  - əzələ sensoru
  - elektromioqrafiya
  - muscle sensor
  - muscle control
  - bioelektrik siqnal
  - biosignal
  - human computer interaction
  - biohacking
  - ESP32
  - ESP32-S3
  - Android
  - ADB
  - IoT security
  - embedded systems
  - CASPER AI
  - CyberShieldy
  - CyberShieldy Academy
  - Savaylov Emin
  - Emin Savaylov
description: "Savaylov Eminin CASPER AI laboratoriyasında EMG əzələ sensoru, ESP32-S3, Python və Android ADB ilə telefonun ekran kilidinin idarə edilməsi: bioelektrik siqnallar, robotexnika, IoT security, ethical hacking, Red Team, Blue Team və Azərbaycanda praktik kibertəhlükəsizlik dərsləri."
image: /assets/images/casper-emg-muscle-sensor.webp
permalink: /posts/emg-ezele-sensoru-telefon-casper-ai-kibertehlukesizlik-robotexnika
canonical: https://cybershieldy.com/posts/emg-ezele-sensoru-telefon-casper-ai-kibertehlukesizlik-robotexnika
---

# 💪🧠 Əzələ siqnalı ilə telefonu idarə etmək: EMG, ESP32-S3 və CASPER AI

### 🤖 Robotexnika × 🛡️ Kibertəhlükəsizlik × 📱 Android × 🧬 Bioelektronika × 🔴🔵 Red & Blue Team

**Müəllif: Savaylov Emin — kibertəhlükəsizlik mütəxəssisi, Red Team və Blue Team üzrə təlimçi, CyberShieldy Academy və CASPER AI praktiki laboratoriya layihələrinin inkişaf etdiricisi.**

Telefonu toxunmadan idarə etmək mümkündürmü? Əzələlərimizin yaratdığı elektrik aktivliyi rəqəmsal əmrlərə çevrilə bilərmi? Bəs belə bir sistem **robotexnika, IoT, süni intellekt və kibertəhlükəsizlik** üçün hansı yeni imkanları açır?

Bu sualları nəzəri müzakirə ilə məhdudlaşdırmadım. **CyberShieldy CASPER AI laboratoriyasında EMG (elektromioqrafiya) əzələ sensorundan alınan siqnalı ESP32 və server proqramı vasitəsilə emal edərək Android telefonunda ekranın kilidlənməsi və açılma davranışını idarə edən eksperimental demo qurduq.** Buradakı “açılma” telefonu sirrli yolla sındırmaq, PIN və ya biometrik doğrulamanı keçmək demək deyil: sınaq öz laboratoriya cihazımızda, icazəli Android idarəetmə interfeysi vasitəsilə aparılıb.

**Layihənin ideyası:** İnsan əzələsi → EMG siqnalı → mikrokontroller → proqram məntiqi → Android əmri. Kiçik bir sensor belə **həm insan–kompüter interfeysi, həm də real təhlükəsizlik laboratoriyası** yarada bilər.

> **“Gələcəyin kibertəhlükəsizlik mütəxəssisi təkcə proqramı deyil, siqnalın fiziki dünyadan rəqəmsal sistemə necə keçdiyini də anlamalıdır.” — Savaylov Emin**

---

## 🎥 Real laboratoriya videosu — EMG əzələ sensoru ilə telefonun idarə edilməsi

📲 **[Instagram Reels — Savaylov Emin | EMG Muscle Sensor + CASPER AI + Android](https://www.instagram.com/reel/DffB9eWtafb/)**

<iframe src="https://www.instagram.com/reel/DffB9eWtafb/embed" width="100%" height="700" style="border:none;overflow:hidden;border-radius:12px;max-width:540px;" loading="lazy" allowfullscreen title="Savaylov Emin — EMG əzələ sensoru, CASPER AI və Android telefon idarəetməsi"></iframe>

Bu video layihənin **praktik nümayişinə** həsr olunub. Aşağıdakı məqalədə isə həmin ideyanın mühəndislik arxitekturasını, **ethical hacking**, **IoT security**, **Blue Team**, **robotexnika**, **AI və avtomatlaşdırma** baxımından rolunu geniş izah edirəm.

---

## ⚡ EMG nədir? Əzələ siqnalı necə oxunur?

**EMG — Electromyography (elektromioqrafiya)** — əzələ aktivliyi ilə əlaqəli elektrik siqnallarının ölçülməsi üsuludur. İnsan hərəkət etməyə çalışanda və ya əzələsini gərginləşdirəndə sinir–əzələ fəaliyyəti elektrik dəyişiklikləri yaradır. Uyğun sensor və elektrodlar həmin zəif dəyişiklikləri qəbul edib ölçülə bilən siqnala çevirə bilir.

Bu, düşüncələrin oxunması deyil. **EMG beyindəki fikirləri deyil, əzələ aktivliyini ölçür.** EEG ilə EMG qarışdırılmamalıdır: EEG baş dərisindən beynin elektrik aktivliyini, EMG isə əzələ aktivliyini müşahidə etmək üçün istifadə olunur.

Laboratoriya baxımından proses belədir:

1. **Elektrodlar** əzələ aktivliyindən yaranan bioelektrik dəyişiklikləri tutur.
2. **EMG siqnal kondisioneri** siqnalı gücləndirir və uyğun formaya salır.
3. **ESP32-S3 kimi mikrokontroller** uyğun analog girişdən dəyəri ölçür.
4. **Proqram təminatı** səs-küyü süzgəcdən keçirir, aktivlik həddini və komandaları müəyyən edir.
5. **Backend** qəbul etdiyi hadisəni yoxlayır, qeydə alır və icazəli əmri həyata keçirir.
6. **Android test cihazı** uyğun sistem əmrinə cavab verir.

Beləliklə, insanın fiziki hərəkəti **rəqəmsal hadisəyə (digital event)** çevrilir. Bu proses robotexnika, əlilliyi olan şəxslər üçün köməkçi texnologiyalar, protezlərin tədqiqatı, oyun idarəetməsi və təhlükəsizlik laboratoriyaları üçün maraqlı tədris mövzusudur.

---

## 🧪 CASPER AI EMG laboratoriyasını necə qurduq?

Layihənin müxtəlif test mərhələlərində **EMG sensoru, ESP32-S3, Python serveri, Wi-Fi bağlantısı, Android telefon və ADB (Android Debug Bridge)** istifadə edildi. Məqsəd EMG siqnalındakı dəyişiklikləri izləyib onları laboratoriya şəraitində telefon idarəetmə hadisələri ilə əlaqələndirmək idi.

| Komponent | Laboratoriyadakı rolu |
|---|---|
| **EMG əzələ sensoru** | Əzələ aktivliyi ilə bağlı analoq siqnalı əldə etmək |
| **ESP32-S3** | Sensor oxunuşlarını proqramla emal etmək və ötürmək |
| **Wi-Fi / HTTP** | Hadisəni yerli şəbəkədəki serverə göndərmək |
| **Python backend** | Siqnal və əmrlər arasında qərar məntiqi qurmaq |
| **Android + ADB** | Öz test telefonumuzda icazəli ekran idarəetmə əmrləri |
| **CASPER AI konsepti** | Sensor, telemetriya, avtomatlaşdırma və gələcək ağıllı qərar mexanizmlərini birləşdirmək |

### 📡 Sistem arxitekturası

```text
       💪 İNSAN ƏZƏLƏSİ
               |
               v
      [ EMG MUSCLE SENSOR ]
               |
        ANALOG SİQNAL
               |
               v
         [ ESP32-S3 ]
       Ölçmə + filtrasiya
               |
          Wi-Fi / HTTP
               |
               v
       [ PYTHON SERVER ]
    Hadisə yoxlama + loglama
               |
       İcazəli ADB əmri
               |
               v
       [ ANDROID TELEFON ]
     Ekran/kilid demo davranışı
               |
               v
    [ CASPER AI LAB TELEMETRİYA ]
```

Burada **telefonun ekranını yandırmaq, kilidləmək və istifadəçi tərəfindən müəyyənləşdirilmiş test hərəkətini icra etmək** ayrı-ayrı anlayışlardır. ADB ilə ekranı oyatmaq Android-in PIN, parol və ya biometrik təhlükəsizlik mexanizmini avtomatik ləğv etmir. Təhlükəsiz kilid aktivdirsə, normal autentifikasiya yenə tələb olunmalıdır.

### 📊 Hadisə məntiqi

**Əzələ aktivliyi aşkarlanır → təsdiqləmə pəncərəsi → icazəli idarəetmə əmri → Android vəziyyətinin yoxlanması → hadisənin jurnala yazılması.**

Məsələn, tədris üçün uydurulmuş JSON formatında:

```json
{
  "project": "CYBERSHIELDY CASPER AI",
  "sensor": "EMG",
  "device": "ESP32-S3",
  "event_type": "muscle_activation_detected",
  "confidence": "demo_threshold_passed",
  "action_requested": "android_screen_control",
  "environment": "authorized_lab",
  "status": "reviewed"
}
```

**Qeyd:** Bu JSON real qeydiyyat faylından çıxarış deyil; məqalə üçün hazırlanmış nümunədir. Sadə threshold nəticəsi elmi mənada etibarlı biometrik “confidence score” deyil.

---

## 🧠 CASPER AI bu layihədə nə deməkdir?

**CASPER AI** mənim robotexnika, sensor sistemləri, proqramlaşdırma və kibertəhlükəsizlik üzərində qurduğum laboratoriya ekosistemidir. Onun əsas istiqaməti fiziki hadisələri rəqəmsal infrastrukturla əlaqələndirməkdir.

EMG layihəsi həmin ekosistemə yeni bir imkan əlavə edir: **bədən hərəkətinin sensor vasitəsilə əmri işə salması**. Eyni yanaşma digər layihələrdə barmaq izi, RFID, kamera, ultrasonik sensor, servo-motor, səsli komandalar və xəbərdarlıq sistemləri ilə də tətbiq oluna bilər.

Əsas məqsəd sensoru “AI” adı ilə təqdim etmək deyil. Sadə hədd yoxlaması **süni intellekt modeli deyil**. Gələcəkdə kalibrlənmiş siqnallar üzərində xüsusiyyət çıxarma, təkrarlanan jestlərin təsnifatı və səhv aktivləşmələrin azaldılması üçün maşın öyrənməsi ayrıca əlavə oluna bilər. CASPER AI burada **layihə platformasının və inteqrasiya istiqamətinin adıdır**; EMG nümayişində bütün AI imkanlarının işlək olduğu iddia edilmir.

### 🚀 Gələcək inkişaf istiqamətləri

- **Gesture recognition:** bir neçə əzələ gərginləşmə nümunəsini ayrı komandalara çevirmək.
- **Robot control:** EMG ilə servo-motoru, robot əlini və ya pan-tilt mexanizmini idarə etmək.
- **Accessibility:** fiziki düymə istifadə etməkdə çətinlik çəkənlər üçün alternativ interfeys prototipləri.
- **Security telemetry:** hər sensor əmri üçün cihaz, vaxt, mənbə və icra nəticəsi jurnalı saxlamaq.
- **Anomaly detection:** təsadüfi aktivləşmə, siqnal itkisi və qeyri-adi komanda sürətini aşkar etmək.
- **CASPER voice integration:** təsdiqlənmiş hadisənin səsli statusunu elan etmək.

---

## 🤖 Robotexnika ilə kibertəhlükəsizliyin əlaqəsi: niyə bu layihə vacibdir?

Ənənəvi **robotexnika dərsləri** çox vaxt motorlar, sensorlar, elektronika və mikrokontrollerlərlə başlayır. **Kibertəhlükəsizlik dərsləri** isə Linux, Windows, şəbəkə, zəiflik analizi və müdafiə alətləri üzərində qurulur. Halbuki müasir ağıllı robot və IoT cihazında bu sahələr ayrılmazdır.

Təsəvvür edək ki, bir robot əl EMG siqnalı ilə hərəkət edir. Sensor ölçmə aparır, ESP32 qərar verir, API komanda qəbul edir, mühərrik hərəkət edir. **Bu zəncirin istənilən hissəsində xəta və ya təhlükəsizlik boşluğu real fiziki nəticə yarada bilər.**

| Robotexnika komponenti | Kibertəhlükəsizlik sualı |
|---|---|
| EMG sensoru | Səs-küylü və ya saxta aktivləşmə necə müəyyən edilir? |
| ESP32 firmware | Proqramın bütövlüyü və yenilənməsi necə qorunur? |
| Wi-Fi şəbəkəsi | Cihazlar izolə olunubmu və rabitə qorunurmu? |
| API/server | Əmri yalnız icazəli mənbə göndərə bilir? |
| Android/robot aktuatoru | Yanlış komanda fiziki təhlükə yaradarmı? |
| Log və monitorinq | Nəyin, nə vaxt və niyə baş verdiyini sübut etmək mümkündürmü? |

Deməli, **robotexnika yalnız mexanika deyil; embedded security, IoT security, secure coding və təhlükəsiz idarəetmə məsələsidir.** Azərbaycanda robotexnika kursu və kiber təhlükəsizlik təhsili ilə maraqlananlar üçün bu cür ortaq layihələr xüsusi praktik dəyərə malikdir.

---

## 🔐 Əzələ siqnalı biometrik autentifikasiya kimi istifadə oluna bilərmi?

EMG müəyyən şərtlərdə şəxsi və ya jesti tanımaq üçün tədqiq edilə bilər. Amma bizim təqdim etdiyimiz **əzələ gərginliyini aşkar edən demo, etibarlı biometrik giriş sistemi demək deyil.** Sadə “əzələ aktiv oldu → telefon açıldı” məntiqi təhlükəsizlik üçün kifayət etmir.

Bunun səbəbləri var:

1. **False positive:** təsadüfi hərəkət və ya elektrik səs-küyü komanda kimi qəbul oluna bilər.
2. **False negative:** real jest düzgün oxunmaya bilər.
3. **Sensor yeri:** elektrodların yerləşməsi nəticələri dəyişir.
4. **Təkrarlanma və imitasiya:** sadə siqnal/komanda mexanizmi təkrar göndərilə və ya təqlid edilə bilər.
5. **Sessiya təhlükəsizliyi:** sensorun özü istifadəçinin kimliyini sübut etmir.
6. **İstismar riskləri:** ADB və idarəetmə API-si lazımsız açıq qalarsa təhlükə yarada bilər.

**Tövsiyə olunan təhlükəsizlik yanaşması:** EMG-ni əsas PIN, parol və ya passkey-in əvəzinə deyil, **əlavə idarəetmə jesti** kimi nəzərdən keçirmək; həssas əmrlərdə müstəqil təsdiq tələb etmək. Laboratoriyada ADB girişini məhdudlaşdırmaq, cihazları ayrı şəbəkədə saxlamaq, hər əmri autentifikasiya etmək, rate limiting, timeout və audit log tətbiq etmək lazımdır.

### 🛡️ Biohacking və ethical hacking arasında düzgün sərhəd

**Biohacking** termini burada bədənin ölçülə bilən siqnallarını elektronika və proqramlaşdırma ilə tədqiq etmək mənasında işlədilir. **Ethical hacking** isə yalnız əvvəlcədən icazə verilmiş sistemlərin təhlükəsizlik yoxlanışıdır. Bu laboratoriya başqasının telefonunu kiliddən çıxarmaq, gizli giriş almaq və ya autentifikasiyanı sındırmaq üçün hazırlanmayıb.

---

## ⚠️ İnsan bədəninə qoşulan elektronikanın təhlükəsizliyi

EMG layihələrində kibertəhlükəsizlik qədər **elektrik təhlükəsizliyi** də vacibdir. Bədənə qoşulan elektrodlar olan prototipi adi DIY elektronika kimi qiymətləndirmək olmaz.

**Bədənə taxılan elektrodlarla işləyərkən yalnız insanla təmas üçün nəzərdə tutulmuş, müvafiq izolyasiyalı və təhlükəsiz bio-siqnal toplama avadanlığından istifadə olunmalıdır.** Batareya ilə qidalanan modulun mövcudluğu təkbaşına təhlükəsizliyi təmin etmir. Elektrod taxılı vəziyyətdə olan qurğunu birbaşa USB, şəbəkə adapteri, kompüter, osiloskop və ya torpaqlanmış avadanlığa qoşmaq təhlükəli ola bilər; uyğun tibbi/ölçmə izolyasiyası və mütəxəssis yoxlaması tələb olunur.

ESP32-S3-ün **ADC girişi üçün dəqiq gərginlik diapazonu, seçilən GPIO və attenuation** istehsalçı sənədlərinə əsasən yoxlanmalıdır. Hər ESP32 ailəsində bütün GPIO-lar analog giriş deyil. Xüsusən **ESP32-S3-də GPIO34 ümumi təyinatlı pin olsa da ADC giriş kanalı deyil**; uyğun ADC1/ADC2 pinlərindən istifadə olunmalıdır. <https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/api-reference/peripherals/adc/index.html>

Bu məqalə bədən üzərində elektrik qoşulma sxemi deyil, layihənin **konseptual və kiber-tədris izahıdır**.

---

## 🔴 Red Team: sensor–server–telefon zəncirində nələri yoxlayırıq?

**Red Team və penetration testing** baxımından bu layihə bir neçə risk sinfini öyrənməyə imkan verir. Testlər yalnız özümüzə məxsus izolə edilmiş laboratoriyada aparılmalıdır.

- **Input validation:** sensor dəyəri gözlənilməyən formatda gəlirsə server necə davranır?
- **Authentication:** şəbəkədə başqa test cihazı eyni API-yə icazəsiz komanda göndərə bilirmi?
- **Replay protection:** köhnə hadisənin təkrar göndərilməsi yeni əmri işə salırmı?
- **Rate limiting:** tez-tez aktivləşmə sistemin stabilliyini pozurmu?
- **Command isolation:** sensor yalnız əvvəlcədən təsdiqlənmiş komanda siyahısından istifadə edirmi?
- **ADB hardening:** Android debug bağlantısı yalnız zəruri müddətdə və etibarlı hostla məhdudlaşdırılıbmı?
- **Fail-safe design:** Wi-Fi kəsilsə, server dayansa və ya sensor çıxarılsa sistem təhlükəsiz vəziyyətə keçir?

Ethical hacker üçün məqsəd sadəcə “komanda getdi” demək deyil; **zəifliyi təsvir etmək, riski ölçmək, reproduksiya edilən sübut toplamaq və düzəliş təklif etməkdir.**

---

## 🔵 Blue Team, SOC və SIEM: EMG hadisəsini təhlükəsizlik siqnalına çevirmək

**Blue Team** mövqeyindən baxanda hər sensor hadisəsi izlənilə bilən telemetriyaya çevrilməlidir. ESP32-dən gələn JSON, Python backend logu, firewall hadisələri və Android-in icazəli diaqnostika məlumatları birlikdə araşdırıla bilər.

Aşağıdakı axın layihəni daha geniş **SOC (Security Operations Center)** və **SIEM (Security Information and Event Management)** tədris ssenarisinə çevirir:

```text
EMG SENSOR / ESP32-S3
        |
        v
 PYTHON API + JSON LOG
        |
        v
   WAZUH / SPLUNK
        |
        v
  QAYDA / CORRELATION
        |
        v
 N8N / WEBHOOK / ALERT
        |
        v
  CASPER AI STATUS PANEL
        |
        v
  ANALİTİKİN QƏRARI
```

**Texniki dəqiqlik:** Bu hissə EMG nümayişindən inkişaf etdirilə bilən **SIEM inteqrasiya arxitekturasıdır**. Videoda Wazuh/Splunk/n8n zəncirinin bütövlükdə işlədiyi iddia edilmir.

### Monitorinq üçün nümunə use-case-lər

| Hadisə | Blue Team yanaşması |
|---|---|
| Bir neçə saniyədə çoxlu EMG əmri | Threshold, cooldown və rate-limit qaydalarını yoxlamaq |
| Tanınmayan cihazdan API sorğusu | Mənbənin autentifikasiyasını və şəbəkə qaydalarını araşdırmaq |
| Sensor məlumatının uzun müddət gəlməməsi | Sensorun və bağlantının vəziyyətini yoxlamaq |
| Gözlənilməyən Android əmri | Komandanın mənbəyini, icazəsini və audit logunu yoxlamaq |
| Təkrar edilən eyni event ID | Replay cəhdini və ya tətbiq xətasını araşdırmaq |

Bu, **Red Team → Blue Team → Purple Team** tədris dövrünü gücləndirir. Hücum səthini başa düşən tələbə daha yaxşı müdafiə qaydası qura bilir; log analizini öyrənən tələbə isə sensorun real davranışını daha düzgün qiymətləndirir.

---

## 🏫 Azərbaycanda kibertəhlükəsizlik və robotexnika dərslərində belə layihələr niyə lazımdır?

Azərbaycanda **kibertəhlükəsizlik kursu**, **kiber dərsləri**, **hacker dərsləri**, **ethical hacking**, **Red Team**, **Blue Team**, **SOC analitik**, **pentest**, **robotexnika kursu** və **ESP32 proqramlaşdırması** ilə maraqlanan tələbələr üçün əsas məsələ nəzəri bilikləri real sınaqla möhkəmləndirməkdir.

Bir çox mövzu ayrı-ayrılıqda tədris edilir. EMG kimi bir laboratoriya isə onları eyni zəncirdə birləşdirir:

| Tədris modulu | Bu layihədə qazanılan bacarıq |
|---|---|
| **Elektronika və robotexnika** | Sensorun siqnalını və aktuator məntiqini anlamaq |
| **ESP32 / Embedded Systems** | ADC, GPIO, firmware və mikrokontroller proqramlaşdırması |
| **Python proqramlaşdırma** | Backend API, JSON, şərt və hadisə emalı |
| **Linux / Android** | Lokal serverlər və icazəli cihaz idarəetməsi |
| **Şəbəkə təhlükəsizliyi** | Wi-Fi, HTTP, autentifikasiya və şəbəkə seqmentasiyası |
| **Ethical Hacking / Red Team** | Hücum səthi, təhlükəsizlik sınağının çərçivəsi və risk analizi |
| **Blue Team / SOC** | Log analizi, alert dizaynı və hadisə araşdırması |
| **AI / CASPER AI** | Siqnal təsnifatı və ağıllı avtomatlaşdırma konsepti |
| **Purple Team** | Tapıntıların müdafiə təkmilləşdirməsinə çevrilməsi |

**CyberShieldy Academy** yanaşmasında vacib olan cihazın bahalı olması deyil: tələbənin **öz əli ilə qurması, kodlaması, test etməsi, hadisəni müşahidə etməsi və təhlükəsizlik nəticəsini izah etməsidir**.

### 💼 Niyə iş dünyası üçün də əhəmiyyətlidir?

Ağıllı ev sistemləri, sənaye avtomatlaşdırması, wearable cihazlar, tibbi texnologiya prototipləri, robotlar və IoT infrastrukturu getdikcə daha çox **hardware + software + network + security** bacarıqlarının birlikdə tətbiqini tələb edir. EMG laboratoriyası bu inteqrasiyanı kiçik miqyasda göstərən konkret bir layihədir.

---

## ❓ Tez-tez verilən suallar — FAQ

### EMG əzələ sensoru ilə telefonu açmaq mümkündürmü?

Öz Android test cihazında **icazəli idarəetmə interfeysi** ilə sensor hadisəsini ekran idarəetmə əmrinə bağlamaq mümkündür. Lakin bu, Android PIN, parol və ya biometrik kilidinin sındırılması demək deyil.

### EMG sensoru insanın düşüncələrini oxuyur?

Xeyr. EMG əzələ elektrik aktivliyini ölçür; düşüncələri birbaşa oxumur.

### ESP32-S3 bu layihədə nə iş görür?

Sensor məlumatını oxuyur, ilkin filtrasiya və hadisə yaradılmasını həyata keçirir, lazım gəldikdə məlumatı serverə ötürür.

### CASPER AI sensoru idarə edən hazır süni intellekt modelidir?

CASPER AI laboratoriya platformasının adıdır. Sadə threshold ilə işləyən EMG demo süni intellekt sayılmır; əlavə ML modulları ayrıca hazırlanıb yoxlanıla bilər.

### Bu layihənin kibertəhlükəsizliklə əlaqəsi nədir?

Sensorun firmware-i, şəbəkə bağlantısı, API, əmrlərin icazələndirilməsi, Android idarəetməsi, hadisə qeydləri və SIEM inteqrasiyası **IoT security və embedded security** üçün real mövzulardır.

### EMG biometrik parol əvəzi ola bilərmi?

Sadə EMG aktivləşmə sensorunu müstəqil autentifikasiya vasitəsi kimi qəbul etmək olmaz. Etibarlı biometrik sistem üçün ayrıca tədqiqat, canlılıq yoxlamaları, səhv nisbətlərinin ölçülməsi və təhlükəsiz çoxfaktorlu dizayn lazımdır.

### Azərbaycanda kibertəhlükəsizlik və robotexnikanı birlikdə öyrənmək faydalıdırmı?

Bəli. Xüsusilə IoT security, hardware hacking, embedded systems, robot security və SOC avtomatlaşdırması üçün praktiki üstünlük yaradır.

### Hacker dərslərində belə cihazlar niyə göstərilir?

Məqsəd icazəsiz giriş deyil; cihazın necə işlədiyini, hücum səthini, riskləri və müdafiə mexanizmlərini **etik və icazəli laboratoriyada** öyrətməkdir.

---

## 👨‍💻 Müəllif haqqında — Savaylov Emin

**Savaylov Emin**  
🛡️ Kibertəhlükəsizlik mütəxəssisi  
🔴 Red Team və 🔵 Blue Team istiqamətləri üzrə təlimçi  
🟣 Praktiki Purple Team və SOC laboratoriya yanaşması  
🤖 Robotexnika, ESP32, sensor sistemləri və CASPER AI layihələri  
🎓 **CyberShieldy Academy**  
🌐 **[CyberShieldy.com](https://cybershieldy.com)**

Məqsədim **kiber təhlükəsizlik təhsilini real laboratoriya işi ilə birləşdirməkdir**. Linux, Windows, şəbəkə, pentest, log analizi, IoT sensorları, Android və robotexnika mənim üçün eyni texnoloji ekosistemin bir-birini tamamlayan hissələridir.

---

## 📚 Texniki mənbələr və əlavə oxu

- [Espressif — ESP32-S3 ADC sənədləri](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/api-reference/peripherals/adc/index.html)
- [Android Developers — ADB sənədləri](https://developer.android.com/tools/adb)
- [OWASP — Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Wazuh — Rəsmi sənədlər](https://documentation.wazuh.com/)
- [Splunk — Rəsmi sənədlər](https://docs.splunk.com/)

---

## 🚀 Nəticə: əzələ hərəkətindən kiber laboratoriyaya

**Bir EMG sensoru ilə başlayan layihə** bizə daha böyük bir dərs verir: gələcəyin ağıllı sistemləri insan, sensor, mikrokontroller, şəbəkə, server və təhlükəsizlik mexanizmlərinin birlikdə işləməsindən yaranır.

**CASPER AI EMG + ESP32-S3 + Android laboratoriyası** bu əlaqəni praktiki şəkildə göstərir. Eyni layihə daxilində **robotexnika**, **embedded programming**, **IoT security**, **ethical hacking**, **Red Team**, **Blue Team**, **SIEM**, **Python** və **AI automation** mövzularına keçmək mümkündür.

> **“Kibertəhlükəsizlik yalnız haker alətlərini öyrənmək deyil. Sistem yaratmaq, onu test etmək, hadisəni izləmək və təhlükəsizliyini sübut etməkdir.” — Savaylov Emin, CyberShieldy CASPER AI**

🎬 **[Instagram-da EMG + telefon idarəetmə laboratoriya videosunu izlə](https://www.instagram.com/reel/DffB9eWtafb/)**  
🌐 **[CyberShieldy — Azərbaycanda praktik kibertəhlükəsizlik və robotexnika](https://cybershieldy.com)**

---

{% include cyber-popup.html %}

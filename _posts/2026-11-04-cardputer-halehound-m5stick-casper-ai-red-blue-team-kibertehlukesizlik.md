---
layout: post
title: "🤖🛡️ Kibertəhlükəsizlikdə Mikrokontrollerlərin Rolu: Cardputer, HaleHound, M5Stick və CASPER AI | Savaylov Emin"
date: 2026-11-04 12:00:00 +0400
lastmod: 2026-11-04 12:00:00 +0400
author: "Savaylov Emin"
categories:
  - kibertəhlükəsizlik
  - kiber dərsləri
  - ethical hacking
  - red team
  - blue team
  - iot security
  - embedded security
  - ai cybersecurity
  - penetration testing
  - cybersecurity education
tags:
  - kibertəhlükəsizlik
  - kiber təhlükəsizlik
  - kibertəhlükəsizlik Azərbaycan
  - kibertəhlükəsizlik dərsləri
  - kiber dərs
  - kiber dərsləri
  - hacker dərsləri
  - hacker dərsləri Azərbaycan
  - ethical hacking dərsləri
  - ethical hacker
  - cybersecurity Azerbaijan
  - cyber security courses
  - penetration testing
  - pentest dərsləri
  - red team
  - blue team
  - purple team
  - SOC
  - SIEM
  - Wazuh
  - Splunk
  - security automation
  - threat detection
  - mikrokontroller
  - mikrokontrollerlər
  - ESP32
  - ESP32-S3
  - Cardputer
  - M5Stack Cardputer
  - M5StickC Plus2
  - M5Stick
  - HaleHound
  - IoT security
  - embedded security
  - wireless security
  - Wi-Fi security
  - Bluetooth security
  - RFID
  - NFC
  - CASPER AI
  - CyberShieldy
  - CyberShieldy Academy
  - Emin Savaylov
  - Savaylov Emin
description: "Savaylov Emin izah edir: M5Stack Cardputer, HaleHound və M5StickC Plus2 müasir kibertəhlükəsizlik, ethical hacking, IoT və Red Team/Blue Team dərslərində necə istifadə olunur? CyberShieldy CASPER AI praktiki kiber laboratoriyaları, Wazuh, Splunk və real layihələr."
permalink: /posts/mikrokontroller-kibertehlukesizlik-cardputer-halehound-m5stick-casper-ai
canonical: https://cybershieldy.com/posts/mikrokontroller-kibertehlukesizlik-cardputer-halehound-m5stick-casper-ai
---

# 🤖🛡️ Mikrokontrollerlər müasir kibertəhlükəsizlikdə niyə vacibdir?

### M5Stack Cardputer • HaleHound • M5StickC Plus2 • ESP32 • Red Team • Blue Team • CASPER AI

**Müəllif: Savaylov Emin — kibertəhlükəsizlik mütəxəssisi, Red Team və Blue Team istiqamətləri üzrə təlimçi, CyberShieldy CASPER AI layihəsinin müəllifi.**

Kibertəhlükəsizlik (**Cybersecurity**) günümüzdə yalnız kompüter qarşısında oturaraq terminal əmrləri yazmaq, şəbəkə skan etmək və ya proqram təminatındakı zəiflikləri yoxlamaq demək deyil. Rəqəmsal təhlükəsizlik artıq **Wi-Fi, Bluetooth, IoT (Əşyaların İnterneti), RFID, NFC, sensorlar, mikrokontrollerlər, fiziki giriş sistemləri, bulud infrastrukturu və süni intellekt** kimi sahələrlə birbaşa əlaqəlidir.

Mən — **Savaylov Emin** — dərslərimdə nəzəriyyənin praktikaya çevrilməsinə xüsusi önəm verirəm. Məqsədim tələbənin sadəcə bir əmri əzbərləməsi deyil; **hadisəni özü yaratdığı icazəli laboratoriyada görməsi, onun logunu analiz etməsi, təhlükəni aşkarlaması və müdafiə mexanizmini qurmasıdır**. Buna görə tədris yanaşmamda **Red Team və Blue Team paralel inkişaf etməlidir**.

Kiçik ölçülü **M5Stack Cardputer, HaleHound və M5StickC Plus2** kimi proqramlaşdırıla bilən cihazlar bu metodologiyanı real, əlçatan və vizual formada nümayiş etdirməyə imkan verir. Onlar öz-özlüyündə “hər şeyi sındıran hacker cihazları” deyil; üzərində yazılan kod, istifadə edilən firmware, əlavə modullar və sınağın məqsədi onların laboratoriyadakı rolunu müəyyən edir.

> **Mənim tədris prinsipim:** “Hücum texnikasını öyrən → yalnız icazəli mühitdə sına → yaranan izi gör → logları analiz et → aşkarlama qaydası qur → müdafiəni gücləndir.” — **Savaylov Emin**

---

## 🎥 Real video: Cardputer, HaleHound və M5Stick — kiber təhlükəsizlikdə mikrokontrollerlər

📱 **[Instagram Reels — Savaylov Emin: mikrokontrollerlər və praktik kiber layihələr](https://www.instagram.com/reel/DfPlBMCNEtq/?exln=d2w5YjVvejRlemk3)**

<iframe src="https://www.instagram.com/reel/DfPlBMCNEtq/embed" width="100%" height="700" style="border:none;overflow:hidden;border-radius:12px;max-width:540px;" allowfullscreen loading="lazy" title="Savaylov Emin — Cardputer, HaleHound, M5Stick və kibertəhlükəsizlik"></iframe>

Bu videoda söhbət **portativ mikrokontroller cihazlarının müasir kiber təhsildə rolu**, onların öyrənilməsi və mənim tədrisdə istifadə etdiyim **praktik layihə yanaşması** haqqındadır. Video cihazların bütün potensial funksiyalarının tam audit və ya pentest nümayişi kimi təqdim edilmir.

---

## 🧠 Mikrokontroller nədir və kiber mütəxəssis niyə bunu öyrənməlidir?

**Mikrokontroller (microcontroller)** prosessoru, yaddaşı və giriş-çıxış interfeyslərini bir çipdə birləşdirən, konkret vəzifələri yerinə yetirmək üçün proqramlaşdırılan kiçik hesablama sistemidir. ESP32 ailəsi Wi-Fi/Bluetooth və digər interfeyslər sayəsində IoT və embedded sistemlər üçün məşhur tədris platformasıdır.

Mikrokontrollerlə işləyən kiber mütəxəssis yalnız əməliyyat sistemlərini deyil, **fiziki dünyanın rəqəmsal sistemlərə necə qoşulduğunu** da öyrənir. Məsələn, bir düymə basılması, RFID kartının oxunması, sensorun hərəkət aşkarlaması və ya Wi-Fi cihazının şəbəkəyə qoşulması müəyyən şərtlərdə log, şəbəkə hadisəsi və təhlükəsizlik xəbərdarlığı yarada bilər.

Bu, aşağıdakı istiqamətləri birləşdirir:

- **Embedded Security:** cihaz firmware-i, GPIO, UART, SPI, I²C və təhlükəsiz konfiqurasiya.
- **IoT Security:** sensorlar, ağıllı cihazlar, identifikasiya, segmentasiya və şəbəkə müdafiəsi.
- **Wireless Security:** icazəli Wi-Fi və Bluetooth müşahidəsi, cihazların aşkarlanması və protokolların anlaşılması.
- **Physical Security:** RFID/NFC, biometrik giriş, sensor və rele sistemlərinin etibarlılığı.
- **Red Team:** zəifliklərin icazəli ssenarilərlə qiymətləndirilməsi.
- **Blue Team:** telemetriya, log, SIEM, alert, insident araşdırması və cavab tədbirləri.
- **AI & Automation:** hadisələrin təsnifatı, bildiriş, səsli köməkçi və avtomatlaşdırılmış iş axınları.

**Əsas fərq:** mikrokontroller cihazın fiziki və proqramlaşdırılan hissəsidir; **kibertəhlükəsizlik metodologiyası** isə həmin cihazla hansı problemi ölçdüyümüzü və hansı nəticəni sübut etdiyimizi müəyyən edir.

---

## ⌨️ M5Stack Cardputer — klaviaturalı portativ kiber laboratoriya

**M5Stack Cardputer**, ESP32-S3 əsaslı, klaviaturalı və ekranlı kompakt proqramlaşdırma platformasıdır. Onun klaviaturası portativ interfeys yaratmağa, sadə əmrlər daxil etməyə, menyularla işləməyə və laboratoriya servislərinə sorğu göndərməyə uyğundur. Versiyaya görə xüsusiyyətlər dəyişə bilər; konkret model istehsalçı sənədi ilə təsdiqlənməlidir.

### Cardputer ilə hansı praktik dərslər qurula bilər?

1. **Wi-Fi şəbəkə inventarlaşdırılması:** öz test şəbəkəsində SSID və siqnal göstəricilərinin müşahidəsi.
2. **Kiçik security dashboard:** SIEM və ya lokal API-dən alınan təhlükəsizlik statusunun ekranda göstərilməsi.
3. **SSH və uzaq sistem idarəetməsi:** uyğun proqram təminatı və təhlükəsiz autentifikasiya ilə laboratoriya Linux hostlarına qoşulma anlayışının öyrədilməsi.
4. **Log viewer:** API vasitəsilə icazəli mənbədən son hadisələri oxuyan portativ panel.
5. **IoT prototipləri:** düymələr, IR, sensorlar və əlavə modullarla praktik təcrübələr.
6. **CASPER AI terminalı:** hadisə bildirişi, qısa status mesajı və operator əmrləri üçün interfeys konsepti.

### Mənim tədris baxışım

Cardputer-ə yalnız “mini kompüter” kimi baxmaq kifayət deyil. Tələbə burada **proqramlaşdırma, Linux və şəbəkə protokolları, API, autentifikasiya, hadisə qeydi və təhlükəsiz uzaqdan idarəetmə** mövzularının bir-birini necə tamamladığını anlaya bilər.

**Vacib:** Cardputer standart Linux noutbuku deyil. Onun firmware və resurs məhdudiyyətləri var; klassik pentest proqramlarının hamısını birbaşa işlətməsi gözlənilməməlidir.

---

## 📡 HaleHound — wireless və embedded security üzrə eksperimental platforma

**HaleHound** kimi portativ wireless laboratoriya cihazları simsiz texnologiyaların işləmə məntiqini vizuallaşdırmaq, firmware interfeyslərini araşdırmaq və yalnız icazəli sınaqlarda radio davranışlarını müşahidə etmək üçün maraqlı ola bilər.

Mənim tədrisdə önəm verdiyim məqam **menyudakı funksiyanın adı deyil, onun texniki olaraq nə etdiyini sübut etməkdir**. Məsələn, Wi-Fi şəbəkə aşkarlanması, BLE advertisement müşahidəsi və test cihazlarının yaratdığı loglar müxtəlif təhlükəsizlik suallarına cavab verir.

### Tədris mövzuları

- **Wi-Fi discovery:** test şəbəkələri və cihazların görünürlüğü.
- **Bluetooth Low Energy (BLE):** advertising, discovery və pairing anlayışları.
- **Firmware analysis:** rəsmi və alternativ firmware imkanlarının fərqləndirilməsi.
- **Wireless anomalies:** qeyri-adi reklam və ya cihaz davranışının necə sənədləşdirilməsi.
- **Security evidence:** hadisənin vaxtı, mənbəyi, müşahidəsi və mümkün false positive səbəbləri.

**Texniki qeyd:** HaleHound adı və müxtəlif firmware menyuları əsasında cihazın konkret RF çiplərini, NFC, Sub-GHz və ya bütün əməliyyat qabiliyyətlərini təsdiq etmək olmaz. İmkanlar faktiki hardware reviziyası, qoşulmuş modullar, firmware və yerli radiotezlik qaydaları ilə müəyyənləşir.

---

## 📟 M5StickC Plus2 — cibdə daşınan IoT və təhlükəsizlik monitoru

**M5StickC Plus2** ESP32 əsaslı kiçik ekrana, düymələrə, hərəkət sensoruna (IMU), infraqırmızı ötürücüyə, mikrofona və digər daxili imkanlara malik inkişaf platformasıdır. Əlavə HAT/Unit modulları ilə genişləndirilə bilər.

### Praktik layihə ideyaları

- **Mini SOC monitor:** servisdən gələn `NORMAL`, `WARNING`, `ALERT` statuslarının ekranda göstərilməsi.
- **Sensor hadisələri:** hərəkət və düymə aktivliyini loglayan IoT layihəsi.
- **Wi-Fi laboratoriyası:** öz access point-inə qoşulma, bağlantı vəziyyəti və API monitorinqi.
- **IR əsasları:** öz infraqırmızı cihazlarının idarəetmə məntiqinin öyrənilməsi.
- **Blue Team bildirişi:** təhlükəsizlik serverindən gələn hadisəyə uyğun ekran və səsli xəbərdarlıq.

**Unutmayaq:** M5StickC Plus2 standart vəziyyətdə bütün RFID/NFC və Sub-GHz funksiyalarını təqdim etmir. Bunun üçün uyğun əlavə modullar tələb oluna bilər.

---

## ⚖️ Cardputer, HaleHound və M5Stick: fərqlər

| Cihaz | Əsas üstünlük | Praktik kiber tədrisdə rolu | Məhdudiyyət |
|---|---|---|---|
| **M5Stack Cardputer** | Klaviatura, ekran, ESP32-S3 | API terminalı, mini dashboard, portativ idarəetmə | Klassik noutbuk və tam Linux pentest sistemi deyil |
| **HaleHound** | Wireless yönümlü portativ təcrübə mühiti | Wi-Fi/BLE müşahidəsi, firmware və radio davranışının tədrisi | Konkret imkanlar hardware/firmware-dən asılıdır |
| **M5StickC Plus2** | Çox kompakt ekran, daxili sensorlar | IoT sensoru, mini SOC status paneli, bildiriş | Böyük ekran/klaviatura yoxdur; RF genişlənməsi modulla mümkündür |
| **ESP32-S3 custom layihə** | Tam fərdiləşdirilə bilən proqram və elektronika | Öz sensorunu, firmware-ini, API və CASPER inteqrasiyasını qurmaq | Elektronika, kod və test tələb edir |

**Hansı daha yaxşıdır?** Bu sualın cavabı istifadədən asılıdır. **Cardputer** interaktiv terminal üçün, **M5Stick** daşınan status/sensor layihəsi üçün, **HaleHound** uyğun wireless tədrisi üçün, **öz ESP32 layihən** isə xüsusi funksiya və inteqrasiya üçün seçilə bilər. Güc cihazın yalnız adına görə yox, **konkret laboratoriya məqsədinə** görə qiymətləndirilməlidir.

---

## 🔴 Red Team: praktik testin məqsədi nədir?

**Red Team** yanaşması sistemin müdafiə səviyyəsini yoxlamaq üçün icazəli ssenarilərdən istifadə edir. Burada əsas sual “hansı düyməni basım?” deyil. Əsas suallar bunlardır: **Hansı risk yoxlanılır? Hansı sübut əldə edilməlidir? Testin sərhədləri nədir? Müdafiə sistemi bunu görürmü?**

Məsələn, öz laboratoriyamızda test Wi-Fi cihazının qeyri-adi davranışını müşahidə edə, müvafiq şəbəkə qeydlərini yarada və bu məlumatların müdafiə sisteminə ötürülməsini yoxlaya bilərik. Bu işi başqalarının şəbəkəsində icazəsiz aparmaq düzgün deyil.

**Red Team praktikası üçün sənədləşdirmə:** məqsəd → icazə → test mühiti → müşahidə → log/sübut → nəticə → müdafiə tövsiyəsi.

---

## 🔵 Blue Team: təhlükəni görmək və ona cavab vermək

**Blue Team** eyni hadisənin müdafiə tərəfindən necə göründüyünü qiymətləndirir. Məsələn:

| Laboratoriya hadisəsi | Blue Team-in yoxladığı sübut | Nəticə |
|---|---|---|
| Test SSH uğursuz girişləri | Linux `auth.log` və SIEM hadisələri | Şübhəli cəhdləri aşkarlamaq |
| Yeni IoT cihazının qoşulması | DHCP/DNS/firewall və aktiv inventar | Naməlum cihazı müəyyənləşdirmək |
| Wireless anomaliya | Uyğun Wi-Fi/BLE radio sensorunun telemetriyası | Yanlış pozitivləri araşdırmaq |
| RFID giriş cəhdi | Giriş nəzarəti sisteminin audit qeydi | İcazə verilən və rədd edilən hadisələri ayırmaq |
| Sensor aktivliyi | MCU-nun API/JSON hadisəsi | Event pipeline və alert mexanizmini sınaqdan keçirmək |

**Vacib texniki fərq:** adi Ethernet trafikinə baxan IDS/IPS havadakı bütün Wi-Fi 802.11 management çərçivələrini avtomatik görmür. Wireless aşkarlama üçün uyğun radio sensoru və telemetriya mənbəyi tələb olunur.

---

## 🟣 Red Team + Blue Team = Purple Team düşüncə tərzi

Mən dərslərdə **Red Team və Blue Team-in paralel getməsini** xüsusilə vacib hesab edirəm. Çünki yalnız hücum texnikasını bilən tələbə müdafiə prosesini, yalnız dashboard-a baxan tələbə isə hadisənin real yaranma mexanizmini tam anlamaya bilər.

```text
RED TEAM — İCAZƏLİ LABORATORİYA SINAĞI
                 ↓
       SİMULYASİYA / HADİSƏ
                 ↓
       LOG + TELEMETRİYA + SÜBUT
                 ↓
BLUE TEAM — MONİTORİNQ VƏ AŞKARLAMA
                 ↓
       WAZUH / SPLUNK / SIEM
                 ↓
       N8N / WEBHOOK / ALERT
                 ↓
        CASPER AI BİLDİRİŞİ
                 ↓
     ANALİTİK YOXLANIŞ + MÜDAFİƏ
                 ↓
     DETECTION RULE TƏKMİLLƏŞMƏSİ
```

Bu, **Purple Team** məntiqidir: sınaq və müdafiə bir-birindən ayrılmır, hər ikisi eyni öyrənmə dövrünə xidmət edir.

---

## 🤖 CASPER AI — kibertəhlükəsizlik, IoT və avtomatlaşdırmanın birləşməsi

**CASPER AI** mənim üzərində işlədiyim, təhlükəsizlik hadisələrini fiziki və rəqəmsal interfeyslərlə birləşdirməyə yönəlmiş praktiki laboratoriya layihəsidir. Onun ideyası təkcə bir cihazın ekranda informasiya göstərməsi deyil; **sensor → şəbəkə → log → aşkarlama → xəbərdarlıq → insan qərarı** zəncirini nümayiş etdirməkdir.

CyberShieldy laboratoriya işlərimdə bu istiqamətlər üzərində işləyirəm:

- **ESP32/IoT:** RFID, barmaq izi, sensor, servo, düymə və lokallaşdırılmış idarəetmə layihələri.
- **Linux və Windows təhlükəsizliyi:** hadisə jurnalları, giriş yoxlamaları, audit və monitorinq.
- **Wazuh:** agentlər, təhlükəsizlik qaydaları, siqnallar və hadisələrin araşdırılması.
- **Splunk:** logların toplanması, axtarış, SPL, alert və hesabatlar.
- **n8n:** webhook və bildiriş iş axınları.
- **CASPER səs interfeysi:** hadisənin Android üzərindən səsli təqdim olunması kimi praktiki inteqrasiya ideyaları.

Bu komponentlərdən bəziləri ayrı laboratoriyalarda sınaqdan keçirilib. **Cardputer, HaleHound və M5Stick üçün sadalanan bütün SIEM/CASPER inteqrasiyalarının həmin Reel videosunda işlək formada göstərildiyi iddia edilmir**; bir hissəsi tətbiq oluna bilən layihə konseptləridir.

### Nümunə təhlükəsizlik hadisəsi — JSON

```json
{
  "project": "CYBERSHIELDY CASPER AI LAB",
  "event_type": "iot_lab_event",
  "device": "esp32_training_sensor",
  "severity": "informational",
  "source": "authorized_lab",
  "action": "review_event"
}
```

Bu kod bloku **tədris üçün sintetik event nümunəsidir**, real hadisə logu deyil.

---

## 🧪 Praktik kiber dərsi necə qururam? Nümunə laboratoriya ssenarisi

### Dərsin mövzusu: ESP32 hadisəsi → Linux API → SIEM → CASPER xəbərdarlığı

**Məqsəd:** tələbələrə mikrokontroller cihazından gələn sadə hadisənin təhlükəsizlik sistemində necə qeydə alındığını göstərmək.

1. **Elektronika:** ESP32 və düymə/sensor qoşulur; cihaz hadisə baş verdikdə lokal mesaj hazırlayır.
2. **Şəbəkə:** cihaz test Wi-Fi şəbəkəsinə qoşulur və yalnız öz laboratoriya serverinə event göndərir.
3. **Backend:** Linux üzərində sadə API JSON hadisəsini qəbul edib zaman nişanı ilə qeydə alır.
4. **Blue Team:** log faylı Wazuh və ya Splunk tərəfindən toplanır; hadisə axtarışda görünür.
5. **Automation:** uyğun qaydaya əsasən webhook/n8n bildirişi yaratmaq yoxlanılır.
6. **CASPER:** statusun paneldə göstərilməsi və ya səsli bildiriş konsepti nümayiş olunur.
7. **Təhlil:** tələbə real event, test event və false positive arasındakı fərqi izah edir.

**Öyrənilən bacarıqlar:** ESP32, Arduino/ESP-IDF, TCP/IP, HTTP, JSON, Linux, API, log analysis, SIEM, alert triage, təhlükəsiz proqramlaşdırma və praktiki hesabat hazırlığı.

Bu dərsin sonunda tələbə sadəcə cihazı işə salmır; **sistemin işlədiyini log, müşahidə və ölçülə bilən nəticələrlə sübut edir**.

---

## 🏫 Azərbaycanda kibertəhlükəsizlik və hacker dərsləri niyə praktik olmalıdır?

Azərbaycanda **kibertəhlükəsizlik öyrənmək**, **ethical hacking dərsləri**, **penetration testing**, **Red Team kursu**, **Blue Team təlimi** və **SOC analitik hazırlığı** mövzularına maraq göstərənlərin qarşısında vacib seçim dayanır: yalnız nəzəri materialı izləmək, yoxsa real sistemlərlə işləməyi öyrənmək?

Mənim yanaşmamda tələbə **Linux terminalını**, **Windows hadisə qeydlərini**, **şəbəkə trafikini**, **ESP32 mikrokontrollerini**, **RFID/NFC texnologiyalarının əsaslarını**, **Wi-Fi/Bluetooth təhlükəsizliyini** və **SIEM hadisə analizini** eyni təlim xəttinin fərqli mərhələləri kimi görməlidir.

**Etik hacker** yalnız bir alətin menyusunu tanıyan şəxs deyil. O, şəbəkənin necə işlədiyini, sınağın hüquqi sərhədini, zəifliyin mahiyyətini və həmin zəifliyə qarşı hansı müdafiə tədbirinin lazım olduğunu izah etməyi bacarmalıdır.

### CyberShieldy Academy üçün praktiki tədris konsepti

| Modul | Nə öyrənilir? | Praktiki nəticə |
|---|---|---|
| 1. Şəbəkə əsasları | TCP/IP, DNS, HTTP, VLAN, Wi-Fi | Şəbəkə xəritəsi və trafik izahı |
| 2. Linux/Windows | Sistem administrasiyası, loglar, icazələr | Audit qeydlərinin analizi |
| 3. Embedded & IoT | ESP32, GPIO, UART, sensorlar, firmware | İşlək sensor/API prototipi |
| 4. Wireless Security | Wi-Fi/BLE prinsipləri, risklər | İcazəli müşahidə hesabatı |
| 5. Ethical Hacking / Red Team | Scope, test metodologiyası, sübut | İcazəli sınaq hesabatı |
| 6. Blue Team / SOC | Wazuh, Splunk, alert triage | Aşkarlama qaydası və araşdırma |
| 7. Automation & AI | JSON, webhook, n8n, CASPER | Hadisədən bildirişə iş axını |
| 8. Purple Team | Red/Blue nəticələrinin müqayisəsi | Təkmilləşdirilmiş müdafiə qaydası |

Bu **tədris konseptidir**; konkret kurs proqramı, müddət və qeydiyyat şərtləri ayrıca elan edilə bilər.

---

## ❓ Tez-tez verilən suallar — FAQ

### Mikrokontroller kibertəhlükəsizlik üçün vacibdirmi?

Bütün kiber vəzifələr üçün məcburi deyil. Lakin **IoT security, embedded security, wireless və fiziki təhlükəsizlik** öyrənən mütəxəssis üçün çox faydalı praktik platformadır.

### Cardputer hacker cihazıdır?

Cardputer **proqramlaşdırıla bilən portativ inkişaf platformasıdır**. Təhlükəsizlik təlimində istifadə oluna bilər, amma “hacker” imkanları quraşdırılan proqramdan, modullardan və sınağın məqsədindən asılıdır.

### HaleHound ilə hər Wi-Fi və Bluetooth sistemini test etmək olar?

Xeyr. Cihazın real imkanları konkret radio hardware, firmware və protokol dəstəyindən asılıdır. Testlər yalnız öz və ya yazılı icazəli mühitdə aparılmalıdır.

### M5Stick ilə SIEM monitorinqi etmək mümkündürmü?

Uyğun proqram yazıldıqda M5Stick server API-sindən sadə alert statuslarını alıb ekranda göstərə bilər. **Tam SIEM sistemi isə cihazın üzərində deyil, server infrastrukturunda işləyir.**

### Red Team və Blue Team niyə birlikdə tədris edilməlidir?

Red Team hadisənin necə yarana biləcəyini, Blue Team isə onun necə görünəcəyini, araşdırılacağını və qarşısının necə alınacağını öyrədir. Birlikdə onlar daha ölçülə bilən praktiki bacarıq yaradır.

### Ethical hacking və qanunsuz hacking arasında fərq nədir?

**Ethical hacking** əvvəlcədən müəyyən olunmuş əhatə dairəsi və icazə ilə təhlükəsizliyin qiymətləndirilməsidir. İcazəsiz müdaxilə isə qanuni və etik baxımdan yolverilməz ola bilər.

### Azərbaycanda praktik kibertəhlükəsizlik dərslərində nələr öyrənilməlidir?

Linux, şəbəkə əsasları, web security, Windows logları, SIEM, Red Team və Blue Team metodologiyası, hadisə cavabı və istəyə uyğun IoT/ESP32 layihələri faydalı istiqamətlərdir.

---

## 🔐 Etik və təhlükəsiz laboratoriya qaydaları

Bu məqalədəki bütün **wireless, IoT, RFID/NFC, pentest və radio sınaqları** yalnız öz qurğularında, izolə edilmiş laboratoriyada və ya açıq yazılı icazə ilə aparılmalıdır. Başqalarının rabitəsinə müdaxilə, icazəsiz giriş, məlumat toplama və radio yayımı məqsəd deyil. RF ötürmələri tətbiq olunan yerli qaydalara uyğun olmalıdır.

**Peşəkar tədrisdə nəticə:** log, hesabat, riskin qiymətləndirilməsi və müdafiə tövsiyəsi. Sadəcə ekrandakı effekt və ya qısa video təhlükəsizlik testinin tam sübutu deyil.

---

## 👨‍💻 Müəllif haqqında — Savaylov Emin

**Savaylov Emin**  
🛡️ Kibertəhlükəsizlik mütəxəssisi  
🔴 **Red Team** və 🔵 **Blue Team** istiqamətləri üzrə təlimçi  
🟣 **Purple Team** metodologiyası və praktiki laboratoriya yanaşması  
🤖 **CyberShieldy CASPER AI** layihəsinin müəllifi və inkişaf etdiricisi  
🎓 **CyberShieldy Academy** — praktiki kibertəhlükəsizlik və IoT mövzuları  
🌐 **[cybershieldy.com](https://cybershieldy.com)**

Mənim üçün kibertəhlükəsizliyin öyrədilməsi **real layihə yaratmaq, davranışı müşahidə etmək, sübut toplamaq və müdafiəni qurmaq** deməkdir. Portativ mikrokontrollerlər bu məqsədin bir hissəsidir; əsas dəyər isə **tələbənin düşünmə və analiz bacarığında** yaranır.

**Praktik kibertəhlükəsizlik dərsləri, Red Team, Blue Team, IoT və CASPER AI mövzuları ilə maraqlananlar mənimlə [CyberShieldy](https://cybershieldy.com) vasitəsilə əlaqə saxlaya bilərlər.**

---

## 🔗 Oxşar məqalələr — CyberShieldy

Aşağıdakı keçidlər əvvəlki CyberShieldy məqalə formatındakı daxili linklərə əsaslanır; saytın cari marşrutları ilə uyğunluğunu yayımdan əvvəl yoxlayın.

- 📡 [Wi-Fi hücumları və təhlükəsizlik tövsiyələri](https://cybershieldy.com/posts/wifi-hucumlari)
- 🤖 [CASPER AI — Wi-Fi Security və Rogue AP Detection](https://cybershieldy.com/posts/casper-ai-wifi-security-rogue-ap-detection)
- 📊 [SIEM nədir?](https://cybershieldy.com/posts/siem-nedir)
- 🔴🔵 [Red Team və Blue Team fərqləri](https://cybershieldy.com/posts/red-team-vs-blue-team)
- 🤖 [CASPER AI — Pentest və Cybersecurity Robot](https://cybershieldy.com/posts/casper-ai-pentest-cybersecurity-robot)
- 🛡️ [CASPER AI Wireless Security Lab — portativ cihazlar və Wi-Fi/Bluetooth](https://cybershieldy.com/posts/casper-ai-wireless-hacking-tools-pentest)

---

## 📚 Texniki istinadlar

- [M5Stack — Cardputer məhsul və sənəd axtarışı](https://docs.m5stack.com/)
- [M5Stack — M5StickC Plus2 rəsmi sənədləri](https://docs.m5stack.com/en/core/StickC-Plus2)
- [Espressif — ESP32-S3 rəsmi sənədləri](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/)
- [Wazuh — rəsmi sənədlər](https://documentation.wazuh.com/)
- [Splunk — rəsmi sənədlər](https://docs.splunk.com/)

---

## 📢 Nəticə: gələcəyin kiber mütəxəssisi yalnız alət işlətməməli, sistemi anlamalıdır

**Cardputer, HaleHound, M5StickC Plus2 və ESP32** kimi mikrokontroller platformaları kibertəhlükəsizlik tədrisini daha canlı, praktik və ölçülə bilən edir. Onlar **ethical hacking, IoT security, wireless security, embedded systems, Red Team, Blue Team, SOC, SIEM və AI automation** arasında real əlaqəni göstərmək üçün dəyərli vasitələrdir.

**Mən — Savaylov Emin — kiber dərslərimdə Red Team və Blue Team-in paralel öyrənilməsini, hər mövzunun mümkün qədər praktik layihə və laboratoriya ilə təsdiqlənməsini vacib hesab edirəm.** Bu yanaşma **CyberShieldy və CASPER AI** istiqamətində apardığım işlərin də əsas fəlsəfəsidir.

> **“Kibertəhlükəsizlik sadəcə hücumu göstərmək deyil. Həqiqi bacarıq hadisəni anlamaq, sübut etmək, aşkarlamaq və müdafiəni gücləndirməkdir.” — Savaylov Emin, CyberShieldy CASPER AI**

📹 **[Instagram Reel — Cardputer, HaleHound və M5Stick: real tədris yanaşmam](https://www.instagram.com/reel/DfPlBMCNEtq/?exln=d2w5YjVvejRlemk3)**

🌐 **[CyberShieldy.com — kibertəhlükəsizlik və praktiki dərslər](https://cybershieldy.com)**

---

{% include cyber-popup.html %}

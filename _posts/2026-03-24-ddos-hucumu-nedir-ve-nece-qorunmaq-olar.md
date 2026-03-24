---
title: "DDoS Hücumu Nədir? Sistem Necə Çökür, Necə Baş Verir və Necə Qorunmaq Olar? (2026)"
date: 2026-03-24 06:00:00 +0400
lastmod: 2026-03-24 06:00:00 +0400
categories: [kibertəhlükəsizlik, şəbəkə təhlükəsizliyi, hücum növləri]
tags:
  - ddos hücumu
  - dos attack
  - kiber təhlükəsizlik
  - hacker dərsləri
  - etik hacking dərsləri
  - cyber security
  - kiber dərslər
  - network security
  - server təhlükəsizliyi
  - botnet
  - flood attack
  - cyber attack
description: "DDoS hücumu nədir, necə işləyir, sistemləri necə çökdürür, hansı növləri var və necə qorunmaq olar? Kibertəhlükəsizlik, etik hacking dərsləri və cyber security öyrənənlər üçün geniş bələdçi."
keywords: "ddos hücumu, kiber təhlükəsizlik, hacker dərsləri, etik hacking dərsləri, cyber security, kiber dərslər, dos attack, botnet, flood attack, server təhlükəsizliyi"
image: /assets/images/ddos.webp
canonical: https://cybershieldy.com/posts/ddos-hucumu-nedir
permalink: /posts/ddos-hucumu-nedir
---

# 🌐⚠️ DDoS Hücumu Nədir? Sistem Necə Çökür, Necə Baş Verir və Necə Qorunmaq Olar?

İnternetdə bəzən bir saytın, serverin və ya tətbiqin qəfil yavaşladığını, cavab vermədiyini və ya tamamilə dayandığını görürük. Çox vaxt bunun arxasında sadə texniki nasazlıq yox, **DDoS hücumu** dayanır.

Bu mövzu xüsusilə **kiber təhlükəsizlik dərsləri**, **etik hacking dərsləri**, **hacker dərsləri**, **şəbəkə təhlükəsizliyi**, **cyber security** və **real hücum ssenariləri** ilə maraqlananlar üçün çox vacibdir. Çünki DDoS həm texniki, həm də biznes baxımından ən dağıdıcı hücumlardan biridir.

---

## 📌 Bu yazıda nələr var?

- 🚨 DDoS nədir?
- 🔍 DoS və DDoS arasındakı fərq nədir?
- ⚙️ DDoS hücumu necə yaranır?
- 💥 Sistem necə çökür?
- 🤖 Botnet nədir?
- 🌊 DDoS hücumlarının əsas növləri hansılardır?
- 🖥️ Server və saytlar niyə cavab vermir?
- 🛡️ DDoS hücumundan necə qorunmaq olar?
- 🎯 Kibertəhlükəsizlik öyrənən biri bu mövzuda nə bilməlidir?

---

# 🧠 DoS və DDoS Nədir?

Əvvəlcə bu iki anlayışı ayıraq.

## 🔹 DoS nədir?

**DoS (Denial of Service)** — bir sistemin xidmət verməsini dayandırmağa yönəlmiş hücumdur. Məqsəd odur ki, sayt, server, tətbiq və ya şəbəkə real istifadəçilərə xidmət göstərə bilməsin.

Yəni sistem tam sındırılmasa da, **işləməz hala gətirilə bilər**.

## 🔹 DDoS nədir?

**DDoS (Distributed Denial of Service)** — eyni məqsədi daşıyan, amma bunu **bir çox cihazdan eyni anda** həyata keçirən hücum növüdür.

Buradakı əsas söz **distributed**, yəni **paylanmış** deməkdir.

### 📍 Bu nə deməkdir?

- bir hücumçu tək cihazdan gəlmir  
- çox sayda fərqli IP, cihaz və sistem eyni anda hədəfə trafik göndərir  
- nəticədə server yüklənir, resurslar tükənir və xidmət dayanır  

---

# ⚡ DDoS Hücumunun Məntiqi Nədir?

DDoS hücumunun məntiqi sadədir:

> **Hədəfə o qədər çox sorğu göndərilir ki, sistem artıq real istifadəçilərə cavab verə bilmir.**

Bunu real həyat misalı ilə belə düşün:

Bir mağazanın qapısından eyni anda 20 nəfər keçəndə problem olmur. Amma eyni anda 50 min nəfər qapıya yüklənsə:

- giriş bağlanar  
- içəridə xidmət dayanır  
- kassalar işləməz  
- real müştərilər içəri girə bilməz  

DDoS da internetdə bunun texniki versiyasıdır.

---

# ⚙️ DDoS Hücumu Necə Baş Verir?

DDoS hücumu adətən bir neçə mərhələdə formalaşır.

## 1️⃣ Hədəf seçilir

Hücumçu bir sistemi hədəf seçir:

- veb sayt  
- API  
- oyun serveri  
- bank sistemi  
- e-ticarət platforması  
- DNS xidməti  
- mail server  
- tətbiq infrastrukturu  

## 2️⃣ Hücum üçün cihazlar hazırlanır

Tək cihaz çox böyük təsir yaratmaya bilər. Ona görə hücumçu adətən çoxlu cihazdan istifadə edir.

Burada **botnet** anlayışı ortaya çıxır.

## 3️⃣ Eyni anda trafik göndərilir

Bu cihazlar eyni anda hədəfə:

- paket  
- request  
- connection  
- yarımçıq bağlantı  
- saxta sorğu  
- təkrarlanan istəklər  

göndərirlər.

## 4️⃣ Resurslar dolur

Serverin resursları məhduddur:

- CPU  
- RAM  
- bandwidth  
- connection table  
- thread pool  
- firewall session  
- database pool  
- load balancer limitləri  

Bu resurslar dolduqda sistem normal istifadəçilərə xidmət verə bilmir.

## 5️⃣ Xidmət dayanır və ya zəifləyir

Nəticə belə olur:

- sayt açılmır  
- tətbiq donur  
- server timeout verir  
- istifadəçi login ola bilmir  
- API cavab vermir  
- xidmət tam və ya qismən çökür  

---

# 🤖 Botnet Nədir və DDoS-da Niyə Vacibdir?

**Botnet** — uzaqdan idarə olunan çoxlu cihaz toplusudur.

Bu cihazlar bəzən belə olur:

- zəif qorunan kompüterlər  
- IoT cihazları  
- kameralar  
- modemlər  
- routerlər  
- zəif parollu sistemlər  
- zərərli proqram yoluxmuş cihazlar  

Hücumçu bu cihazlara komanda verir və hamısı eyni anda bir hədəfə trafik göndərir.

### 🔥 Niyə təhlükəlidir?

- trafik bir IP-dən gəlmir  
- bloklamaq çətinləşir  
- normal trafikdən ayırmaq çətin ola bilir  
- hücumun həcmi böyüyür  

Yəni DDoS-un gücü təkcə hücumun özündə deyil, onun **çox mənbədən gəlməsindədir**.

---

# 💥 Sistem DDoS Zamanı Necə Çökür?

Bu hissə çox vacibdir. Çünki çox adam düşünür ki, server sadəcə “internet dolduğuna görə” dayanır. Əslində isə bir neçə fərqli çökmə mexanizmi var.

## 1️⃣ Bandwidth dolur

Əgər serverə və ya şəbəkəyə çox böyük həcmdə trafik gəlirsə, internet xətti dolur.

Nəticə:

- normal istifadəçi paketi içəri keçə bilmir  
- router və firewall boğulur  
- xidmətə çatmaq olmur  

Bu daha çox **volumetric DDoS** ssenarisidir.

## 2️⃣ Connection limiti tükənir

Serverin eyni anda saxlaya biləcəyi bağlantı sayı məhduddur.

Hücum çoxlu connection açdıqda:

- yeni istifadəçi qoşula bilmir  
- TCP session-lar dolur  
- tətbiq növbələri şişir  

## 3️⃣ CPU və RAM yüklənir

Bəzi sorğular server üçün baha başa gəlir.

Məsələn:

- ağır HTTP request-lər  
- dinamik səhifə generation  
- database query-lər  
- axtarış sorğuları  
- login endpoint-ləri  

Əgər bunlardan minlərlə eyni anda gələrsə:

- CPU yüksəlir  
- RAM istifadə artır  
- proseslər gecikir  
- tətbiq cavabsızlaşır  

## 4️⃣ Database boğulur

DDoS birbaşa databazaya da təsir edə bilər.

Əgər tətbiq hər request-də databazaya müraciət edirsə, çoxlu sorğu:

- DB pool-u doldura bilər  
- lock yarada bilər  
- query queue-nu artıra bilər  
- ümumi performansı öldürə bilər  

## 5️⃣ App layer çökür

Bəzən şəbəkə güclü olur, server ayaqda qalır, amma tətbiqin özü sıradan çıxır.

Bu zaman:

- login sistemi işləmir  
- səbət funksiyası çökür  
- admin panel açılmır  
- API endpoint-ləri timeout verir  

Bu, xüsusilə **Layer 7 DDoS** hücumlarında olur.

---

# 🌊 DDoS Hücumlarının Əsas Növləri

DDoS hücumlarını ümumi şəkildə 3 əsas qrupa bölmək olar.

## 1️⃣ Volumetric DDoS

Bu növdə məqsəd **şəbəkə xəttini trafiklə doldurmaqdır**.

### Misallar:
- UDP flood  
- ICMP flood  
- amplification hücumları  

### Məqsəd:
- bandwidth dolsun  
- trafik normal istifadəçini sıxsın  
- upstream link boğulsun  

---

## 2️⃣ Protocol DDoS

Bu növdə şəbəkə protokollarının işləmə qaydası hədəf alınır.

### Misallar:
- SYN flood  
- fragmented packet abuse  
- connection table exhaustion  

### Məqsəd:
- firewall-u yormaq  
- load balancer-i yükləmək  
- session state-ləri doldurmaq  
- TCP stack-i zəiflətmək  

---

## 3️⃣ Application Layer DDoS

Bu ən ağıllı və ən təhlükəli növlərdən biridir.

### Misallar:
- HTTP GET flood  
- HTTP POST flood  
- login flood  
- search flood  
- cart flood  
- expensive API request flood  

Burada hücumçu adi istifadəçi kimi görünən request-lər göndərir. Ona görə bunları ayırmaq bəzən çətin olur.

### Ən təhlükəli tərəfi:
- trafik az görünə bilər  
- amma hər request baha başa gəlir  
- serverin tətbiq səviyyəsi çökür  

---

# 🚨 DDoS Hücumları Niyə Bu Qədər Təhlükəlidir?

DDoS sadəcə “saytı yıxmaq” deyil. Onun nəticələri daha böyük ola bilər.

## 💸 Biznes zərərləri

- satış dayanır  
- sifarişlər itir  
- müştəri etibarı azalır  
- reklam büdcəsi boşa gedir  
- marka imici zədələnir  

## 🧯 Texniki zərərlər

- server resursları tükənir  
- log həcmi şişir  
- monitoring sistemləri alarmla dolur  
- digər servisələr zəncirvari təsir edir  

## 🎭 Təhlükəsizlik baxımından

Bəzən DDoS əsas hücum deyil, **yayındırma hücumudur**.

Yəni hücumçu:

- bir tərəfdən DDoS yaradır  
- müdafiə komandası diqqətini ora verir  
- digər tərəfdən fərqli hücum həyata keçirilir  

---

# 📉 DDoS Hücumu Hansı Əlamətlərlə Özünü Göstərir?

Aşağıdakı hallar DDoS şübhəsi yarada bilər:

- sayt qəfil çox yavaşlayır  
- CPU və RAM yüksəlir  
- bandwidth usage kəskin artır  
- eyni endpoint-ə çoxlu request gəlir  
- çoxlu fərqli IP-lərdən eyni pattern görünür  
- firewall session-ları dolur  
- load balancer backend-ləri unhealthy olur  
- 502, 503, 504 kimi xətalar artır  
- real istifadəçi daxil ola bilmir  

SOC və Blue Team baxımından bunlar çox vacib siqnallardır.

---

# 📜 DDoS Hücumunda Loglarda Nələr Görünə Bilər?

Mühitdən asılı olaraq bu izlər görünə bilər.

## 🌐 Web server loglarında

- eyni URL-ə həddindən artıq request  
- user-agent təkrarı  
- anormal IP paylanması  
- qısa vaxtda böyük həcm  

## 🔥 Firewall loglarında

- SYN artımı  
- UDP flood pattern-ləri  
- connection spike  
- dropped packet sayı  

## 🛡️ IDS/IPS sistemlərində

- scan və flood imzaları  
- abnormal traffic signatures  
- policy violation-lar  

## 📊 SIEM-də

- traffic anomaly  
- threshold breach  
- service unavailable alert  
- correlated flood event  

Bu səbəbdən DDoS mövzusu **kiber dərslər**, **cyber security təlimləri**, **SOC analitikası**, **Blue Team dərsləri** və **etik hacking dərsləri** üçün çox vacibdir.

---

# 🛡️ DDoS-dan Necə Qorunmaq Olar?

Tam “100% heç vaxt hücum olmayacaq” yanaşması real deyil. Amma düzgün memarlıq və müdafiə ilə təsiri ciddi azaltmaq olar.

## 1️⃣ CDN və reverse proxy istifadə et

- trafiki paylayır  
- caching edir  
- origin serveri qoruyur  
- bəzi flood-ları udur  

## 2️⃣ Rate limiting tətbiq et

Bir IP və ya session üçün limit qoymaq:

- login flood  
- search abuse  
- API abuse  

kimi hücumların təsirini azalda bilər.

## 3️⃣ WAF istifadə et

Web Application Firewall:

- pattern əsaslı filtr tətbiq edir  
- bot davranışını ayırmağa kömək edir  
- bəzi Layer 7 hücumlarını bloklaya bilir  

## 4️⃣ Load balancing və autoscaling

- load balancer  
- horizontal scaling  
- redundant node-lar  
- geo-distributed xidmət  

üzərində qurulan memarlıq daha dayanıqlı olur.

## 5️⃣ Firewall və ACL optimizasiyası

- lazımsız portları bağla  
- ACL-lərlə filtr et  
- upstream provider ilə koordinasiya qur  
- connection threshold-ları tənzimlə  

## 6️⃣ DDoS protection xidməti istifadə et

Xüsusilə:

- böyük e-ticarət  
- media platformaları  
- bank sistemləri  
- kritik servisələr  

üçün bu ciddi ehtiyacdır.

## 7️⃣ Monitoring və SIEM inteqrasiyası

İzlənməli göstəricilər:

- traffic baseline  
- request per second  
- failed request ratio  
- connection count  
- CPU, RAM, bandwidth  
- endpoint pattern-ləri  

## 8️⃣ Incident response plan hazır olmalıdır

Hazır olmalıdır:

- kim xəbərdar ediləcək  
- hansı IP-lər bloklanacaq  
- hansı servis prioritetlidir  
- upstream provayderlə əlaqə necə qurulacaq  
- hansı sistemlər fallback-a keçəcək  

---

# 🎯 DDoS Mövzusu Kiber Dərslərdə Niyə Vacibdir?

Bu mövzu yalnız hücum kimi yox, **müdafiə, monitorinq və memarlıq** mövzusu kimi öyrənilməlidir.

Çünki bu sahədə çalışan biri bunları anlamalıdır:

- trafik necə işləyir  
- şəbəkə resursları necə tükənir  
- web server performansı necə düşür  
- bot ilə real istifadəçi trafiki necə ayırd edilir  
- SIEM və IDS/IPS bu hücumu necə görür  
- Blue Team necə reaksiya verir  
- Red Team bu riski necə modelləşdirir  

Yəni DDoS anlayışı **hacker dərsləri**, **kiber təhlükəsizlik dərsləri**, **etik hacking dərsləri**, **cyber security kursları**, **Red Team**, **Blue Team** və **SOC analitikası** üçün əsas mövzulardan biridir.

---

# 🏗️ DDoS Hücumuna Qarşı Güclü İnfrastruktur Necə Qurulur?

Güclü infrastruktur təkcə “güclü server” demək deyil.

Əslində dayanıqlılıq bunların birləşməsidir:

- düzgün şəbəkə memarlığı  
- cache  
- CDN  
- WAF  
- load balancing  
- failover  
- visibility  
- alerting  
- incident response  
- test və simulyasiya  

Əgər bunlar yoxdursa, ən güclü server də birdən-birə zəif görünə bilər.

---

# ❌ DDoS Haqqında Ən Böyük Yanlış Anlayışlar

## “DDoS yalnız böyük şirkətlərə edilir”
Xeyr. Kiçik saytlar, kurs platformaları, şəxsi layihələr, oyun serverləri və hətta test mühitləri də hədəf ola bilər.

## “Sadəcə internet sürəti artırsaq, həll olar”
Hər zaman yox. Bəzi hücumlar bandwidth yox, application layer və connection state-i hədəf alır.

## “Firewall varsa, problem yoxdur”
Firewall vacibdir, amma təkbaşına kifayət etmir.

## “Sayt açılırsa, deməli təhlükə keçib”
Bəzən hücum dalğalarla olur. Monitorinq davam etməlidir.

---

# 🚀 Gələcəyin Kibertəhlükəsizlik Mütəxəssisi DDoS Haqqında Nə Bilməlidir?

Gələcəyin güclü mütəxəssisi yalnız “hücum nədir?” sualını yox, bunları da bilməlidir:

- şəbəkə təməli  
- TCP/IP davranışı  
- HTTP yük profili  
- Linux server performansı  
- firewall məntiqi  
- IDS/IPS siqnalları  
- SIEM korrelyasiyası  
- alert tuning  
- incident handling  
- memarlıq dayanıqlılığı  

Bu səbəbdən **kiber təhlükəsizlik dərsləri** alan hər kəs DDoS-u həm hücum, həm də müdafiə baxımından başa düşməlidir.

---

# 🏁 Nəticə

**DDoS hücumu** — bir sistemi məlumat oğurlamadan da sıradan çıxara bilən çox ciddi kiber təhlükədir.

### Bu hücumun məqsədi:
- sistemi yükləmək  
- resursları tükətmək  
- xidməti dayandırmaq  
- real istifadəçini kənarda saxlamaq  

DDoS-un gücü onun çox mənbədən gəlməsində, sürətli yayılmasında və bəzən normal trafik kimi görünməsindədir.

Bugünkü dünyada istər sayt sahibi ol, istər sistem inzibatçısı, istər SOC analitiki, istər Blue Team üzvü, istərsə də etik hacking öyrənən biri — bu mövzunu dərindən anlamaq vacibdir.

> **Çünki kibertəhlükəsizlik yalnız sistemi qurmaq deyil, onu ayaqda saxlamaqdır.**

---

# ❓ Tez-tez verilən suallar

## DDoS ilə DoS fərqi nədir?
DoS bir mənbədən edilən xidmət dayandırma hücumudur. DDoS isə bir çox cihazdan eyni anda həyata keçirilən paylanmış hücumdur.

## DDoS sistemə necə təsir edir?
Bandwidth, CPU, RAM, connection table, web server, firewall və ya tətbiq səviyyəsində resursları tükəndirə bilər.

## DDoS zamanı sayt niyə açılmır?
Çünki server və ya şəbəkə real istifadəçilərin sorğularına cavab verə bilmir, request-lər timeout olur və xidmət sıradan çıxır.

## DDoS-dan qorunmaq üçün nə lazımdır?
CDN, WAF, rate limiting, load balancing, monitoring, anti-DDoS xidmətləri və incident response plan vacibdir.

## DDoS mövzusu kimlər üçün vacibdir?
Kiber təhlükəsizlik öyrənənlər, sistem adminləri, Blue Team, Red Team, SOC analitikləri, DevOps və server sahibləri üçün çox vacibdir.

---

# 🔗 Oxşar mövzular

# 🔗 Oxşar Mövzular

- 🔴🔵 [Kibertəhlükəsizlikdə Red Team və Blue Team nədir?](https://cybershieldy.com/posts/red-team-vs-blue-team)
- 🤖🛡️ [AI və Kibertəhlükəsizlik: Süni İntellekt Hücumları və Müdafiə Strategiyaları](https://cybershieldy.com/posts/ai-kibertelhukesizlik)
- 🕵️‍♂️🌐 [OSINT Araşdırmaları: Açıq Mənbələrdən Məlumat Toplama və Analiz](https://cybershieldy.com/posts/osint-arastirmalari)
- 🎣⚠️ [Phishing Hücumu Nədir? Canlı Nümunələr və Qorunma Yolları](https://cybershieldy.com/posts/sosial-mühəndislik)
- 📶🔐 [İctimai Wi-Fi istifadə edərkən nələrə diqqət etməli?](https://cybershieldy.com/posts/wifi-hucumlari)
- 👁️‍🗨️🛜 [MITM Hücumu Nədir? Şəbəkədəki Görünməz Düşmən](/posts/sebeke-hucumlari)
- 🛡️🔑 [İki Faktorlu Identifikasiya Nədir? Hesabları Daha Güclü Qoruma Yolu](/posts/iki-faktorlu-identifikasiya)

---

## 📢 CyberShieldy Academy

**Kiber Təhlükəsizlik • Hacker Dərsləri • Etik Hacking Dərsləri • Red Team • Blue Team • Cyber Security Təlimləri**

{% include cyber-popup.html %}
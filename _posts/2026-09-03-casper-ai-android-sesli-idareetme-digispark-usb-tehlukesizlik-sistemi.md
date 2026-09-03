---
title: "🤖🛡️ CyberShieldy Casper: Səsli Mobil İdarəetmə və USB Təhlükəsizlik Laboratoriyası"
date: 2026-09-03 08:00:00 +0400
lastmod: 2026-09-03 08:00:00 +0400
categories:
  - kibertəhlükəsizlik
  - süni intellekt
  - mobil təhlükəsizlik
  - iot
  - security automation
tags:
  - casper ai
  - artificial intelligence
  - ai cybersecurity
  - android security
  - mobile security
  - usb security
  - digispark
  - attiny85
  - esp32-s3
  - voice control
  - security automation
  - red team
  - blue team
  - purple team
  - soc
  - iot security
  - cyber lab
  - cybersecurity
  - kibertəhlükəsizlik
  - cyber education
  - kiber dərsləri
  - cybershieldy
  - savaylov emin
description: "CyberShieldy Casper layihəsində səsli əmrlərlə Android idarəetməsi, PIN autentifikasiyası, SMS əməliyyatları və Digispark əsaslı USB təhlükəsizlik skanı vahid AI kibertəhlükəsizlik laboratoriyasında birləşdirilir."
image: /assets/images/casper-aii.webp
canonical: https://cybershieldy.com/posts/casper-ai-mobile-usb-security-lab
permalink: /posts/casper-ai-mobile-usb-security-lab
---

# 🤖🛡️ CyberShieldy Casper: Səsli Mobil İdarəetmə və USB Təhlükəsizlik Laboratoriyası

Bir tərəfdə fiziki PIN paneli, süni intellekt və səsli komandalarla idarə olunan Android cihazı var.

Digər tərəfdə isə telefona qoşulan USB cihazını aşkarlayan, onu yoxlama prosesinə daxil edən və nəticəni Casper-in vizual-səsli interfeysində göstərən təhlükəsizlik modulu yerləşir.

Bu iki ssenari ayrı görünə bilər. Əslində isə hər ikisi eyni ideyanın hissəsidir: **rəqəmsal təhlükəsizlik hadisələrini fiziki dünya, mobil cihaz və süni intellekt arasında idarə olunan bir avtomatlaşdırma zəncirinə çevirmək.**

CyberShieldy Casper hazır telefon funksiyalarını sadəcə səslə işə salan köməkçi deyil. O, autentifikasiya, əmrin tanınması, server tərəfli yoxlama, mobil avtomatlaşdırma, vizual geribildirim və insan təsdiqini vahid laboratoriya platformasında birləşdirən eksperimental AI kibertəhlükəsizlik assistentidir.

> **Casper-in əsas prinsipi:** əmri eşitmək kifayət deyil; əməliyyat yoxlanmalı, icazəli mühitdə icra edilməli, nəticə göstərilməli və audit edilə bilməlidir.

---

# 🎥 Demo 1 — Səsli Əmrlə Android Telefonun İdarə Edilməsi

Aşağıdakı videoda ESP32-S3 əsaslı giriş paneli, Casper AI və Android avtomatlaşdırmasının birlikdə işləməsi nümayiş olunur:

<iframe src="https://www.instagram.com/reel/DcygQeOtZFD/embed"
width="100%" height="700" style="border:none;overflow:hidden;border-radius:12px;" allowfullscreen></iframe>

📱 **Instagram Reel:** [Casper AI səsli Android idarəetmə demosuna bax](https://www.instagram.com/reel/DcygQeOtZFD/?igsi=bmppdGUzN3FvbDlo)

Bu demoda sistem yalnız bir düyməni aktivləşdirmir. Arxa planda mərhələli təhlükəsizlik axını işləyir:

1. İstifadəçi fiziki panel üzərindən giriş məlumatını daxil edir.
2. ESP32-S3 sorğunu təhlükəsiz yoxlama qatına ötürür.
3. Daxil edilən məlumat təsdiqlənərsə mobil idarəetmə sessiyası aktivləşir.
4. Casper nəticəni səsli şəkildə bildirir və növbəti əmri gözləyir.
5. İstifadəçi Bluetooth, GPS, səs, ekran işığı və ya SMS əməliyyatını seçir.
6. Komanda normallaşdırılır, icazəli əməliyyata çevrilir və test telefonunda icra olunur.
7. Nəticə yenidən Casper-ə qaytarılır və istifadəçiyə səsləndirilir.

Beləliklə, sadə görünən bir səsli komandanın arxasında **fiziki autentifikasiya, şəbəkə rabitəsi, AI səs tanıma, mobil idarəetmə və nəticə təsdiqi** birlikdə çalışır.

---

# 🔐 PIN Autentifikasiyası Nə Üçündür?

Səsli idarəetmə rahatdır, lakin təkbaşına etibarlı təhlükəsizlik sərhədi sayılmamalıdır. Buna görə Casper-in mobil idarəetmə ssenarisində əmrlərdən əvvəl fiziki autentifikasiya mərhələsi qurulub.

PIN panelinin məqsədi:

- idarəetmə sessiyasını hər kəs üçün açıq saxlamamaq;
- düzgün və yanlış giriş cəhdlərini ayırmaq;
- icazəsiz cəhddə əməliyyatı dayandırmaq;
- təsdiqlənmiş istifadəçiyə məhdud funksiyalar təqdim etmək;
- gələcəkdə RFID və barmaq izi ilə çoxfaktorlu yoxlamaya keçməkdir.

İctimai təqdimatda real kodlar, cihaz ünvanları və daxili əlaqə parametrləri göstərilmir. Məqsəd işləyən təhlükəsizlik konseptini nümayiş etdirməkdir, infrastrukturu açmaq deyil.

---

# 🗣️ Casper Hansı Mobil Əməliyyatları İdarə Edir?

Demo mühitində Casper əvvəlcədən icazə verilmiş əmrləri qəbul edir:

- 📶 Bluetooth rejiminin dəyişdirilməsi;
- 📍 məkan xidmətinin idarə edilməsi;
- 🔊 media səsinin artırılması və azaldılması;
- 💡 ekran parlaqlığının dəyişdirilməsi;
- 🧭 sürətli idarəetmə panelinin açılması və bağlanması;
- 💬 SMS qaralamasının hazırlanması;
- ✅ istifadəçi təsdiqindən sonra mesajın göndərilməsi.

Burada vacib məqam budur: Casper sərbəst və nəzarətsiz şəkildə bütün telefonu idarə etmir. Səsli ifadələr əvvəlcədən müəyyənləşdirilmiş **icazəli komandalar siyahısı** ilə uyğunlaşdırılır. Tanınmayan və ya riskli sorğular avtomatik əməliyyata çevrilmir.

Bu yanaşma təhlükəsizlik avtomatlaşdırmasında istifadə olunan *allowlist* prinsipinə bənzəyir: sistem yalnız açıq şəkildə təsdiqlənmiş funksiyaları icra edir.

---

# 💬 SMS Əməliyyatında İnsan Təsdiqi

Mesaj göndərilməsi digər mobil əməliyyatlardan daha həssasdır. Buna görə layihədə SMS prosesi iki mərhələyə bölünüb:

1. Casper əvvəlcə alıcını və test mətnini ehtiva edən qaralama hazırlayır.
2. Mesaj yalnız ayrıca səsli təsdiqdən sonra göndərilir.

Göndərmə anında sistem düzgün tətbiqin, nəzərdə tutulan alıcının, mətn sahəsinin və göndərmə düyməsinin mövcudluğunu yoxlayır. Uyğunsuzluq aşkarlanarsa əməliyyat dayandırılır.

Bu, Casper layihəsinin əsas dizayn fəlsəfəsini göstərir: **AI təklif edə və hazırlaya bilər, lakin həssas əməliyyat insan təsdiqi ilə tamamlanmalıdır.**

---

# 🎥 Demo 2 — Digispark ilə USB Təhlükəsizlik Skanı

İkinci videoda Digispark/ATtiny85 əsaslı USB cihazının Casper tərəfindən aşkarlanması və təhlükəsizlik skanı ssenarisi göstərilir:

<iframe src="https://www.instagram.com/reel/Dcqx6lKNC2j/embed"
width="100%" height="700" style="border:none;overflow:hidden;border-radius:12px;" allowfullscreen></iframe>

📱 **Instagram Reel:** [Casper Digispark USB təhlükəsizlik demosuna bax](https://www.instagram.com/reel/Dcqx6lKNC2j/?igsi=MTk4ZTZ0cjg1ZnRoaA==)

USB cihazı telefona qoşulduqda Casper hadisəni aşkarlayır, vizual rejimini dəyişir və istifadəçiyə yeni qurğunun yoxlanmalı olduğunu bildirir. Sonra istifadəçi təsdiqi ilə laboratoriya skanı başlanır və nəticə ekranda təqdim edilir.

Bu demo real zərərli kod yaymaq üçün deyil. Məqsəd mobil sistemdə yeni USB qurğusunun qoşulmasını **təhlükəsizlik hadisəsi** kimi izləmək və nəzarətli analiz axını yaratmaqdır.

---

# 💾 USB Cihazı Niyə Təhlükəsizlik Hadisəsidir?

USB interfeysi yalnız yaddaş daşıyıcısı demək deyil. Qoşulan cihaz sistem tərəfindən fərqli siniflərdə tanına bilər və müxtəlif davranış göstərə bilər. Təhlükəsizlik baxımından əsas risklər bunlardır:

- cihazın kimliyinin və məqsədinin məlum olmaması;
- klaviatura və ya başqa periferik qurğu kimi təqdim olunması;
- icazəsiz məlumat ötürülməsi ehtimalı;
- istifadəçinin cihazı avtomatik etibarlı hesab etməsi;
- qoşulma hadisəsinin qeydə alınmaması;
- təhlükəli əməliyyatın təsdiqsiz başlaması.

Casper USB modulunun rolu cihazın bütün məzmununu kor-koranə açmaq deyil. İlk mərhələdə o, qoşulma hadisəsini görür, cihaz barədə məhdud texniki identifikasiya aparır, risk statusu yaradır və istifadəçidən qərar istəyir.

Bu yanaşma gələcəkdə USB Device Control, mobil EDR və SOC xəbərdarlıq sistemləri ilə genişləndirilə bilər.

---

# 👀 Robot Gözləri Təhlükəsizlik Statusunu Necə Göstərir?

Casper-in robot gözləri yalnız vizual effekt deyil. Onlar sistemin cari vəziyyətini istifadəçiyə dərhal göstərən interfeys rolunu oynayır:

- 🔵 **Listening:** Casper səsli komandanı dinləyir;
- 🟡 **Thinking:** məlumat yoxlanılır və qərar hazırlanır;
- 🟢 **Ready:** sistem yeni əməliyyata hazırdır;
- 🔴 **Alert:** naməlum USB və ya təhlükəsizlik hadisəsi aşkarlanıb;
- 😊 **Success:** əməliyyat uğurla tamamlanıb;
- 😴 **Standby:** aktiv tapşırıq yoxdur.

Məsələn, yeni USB cihazı aşkarlananda gözlərin xəbərdarlıq rejiminə keçməsi istifadəçiyə ekrandakı mətni oxumadan belə risk olduğunu bildirir. SMS göndərildikdə isə əməliyyatın nəticəsi qısa vizual bildirişlə göstərilir.

---

# 🧠 İki Demonun Ortaq Arxitekturası

Səsli mobil idarəetmə və USB təhlükəsizlik skanı fərqli giriş nöqtələrindən başlasa da, eyni təhlükəsizlik modelindən istifadə edir:

1. **Hadisə:** PIN daxil edilir, səsli əmr verilir və ya USB qoşulur.
2. **Aşkarlama:** ESP32-S3 və ya Android tətbiqi hadisəni tanıyır.
3. **Normallaşdırma:** məlumat sistemin anlaya biləcəyi komandaya çevrilir.
4. **Yoxlama:** icazə, vəziyyət və gözlənilən kontekst təsdiqlənir.
5. **İcra:** yalnız icazəli funksiya test cihazında başladılır.
6. **Geribildirim:** Casper nəticəni səs, animasiya və statusla təqdim edir.
7. **Audit:** əməliyyat laboratoriya jurnalında qeydə alına bilər.

Bu model gələcəkdə yalnız telefon üçün deyil, SIEM alertləri, server nəzarəti, RFID giriş sistemi, barmaq izi autentifikasiyası və robot hərəkətlərinin idarə olunması üçün də istifadə edilə bilər.

---

# ⚔️ Red Team, Blue Team və Purple Team Baxışı

## 🔴 Red Team

Red Team baxımından layihə fiziki giriş nöqtələrinin, mobil avtomatlaşdırmanın və USB cihaz davranışının necə təhlükəsizlik səthinə çevrildiyini öyrənməyə imkan verir. Təcrübələr yalnız sahibinə məxsus və ya açıq şəkildə icazə verilmiş cihazlarda aparılır.

## 🔵 Blue Team

Blue Team üçün əsas dəyər aşkarlama və cavab mexanizmidir:

- naməlum cihazın qoşulmasını qeydə almaq;
- səhv autentifikasiya cəhdini bloklamaq;
- əməliyyat nəticəsini istifadəçiyə bildirmək;
- riskli addımdan əvvəl təsdiq tələb etmək;
- gələcəkdə hadisəni SIEM sisteminə ötürmək.

## 🟣 Purple Team

Purple Team yanaşmasında hər iki tərəf bir ssenaridə birləşir: əvvəl riskli davranış nəzarətli şəkildə simulyasiya olunur, sonra aşkarlama, bloklama və hesabat mexanizmi yoxlanılır.

---

# 🔐 Təhlükəsiz Dizayn Prinsipləri

Casper kimi AI və fiziki idarəetməni birləşdirən sistemlərdə aşağıdakı qaydalar vacibdir:

- yalnız icazəli laboratoriya və şəxsi cihazlardan istifadə;
- kritik əməliyyatlardan əvvəl insan təsdiqi;
- minimum səlahiyyət prinsipi;
- komandalar üçün allowlist yanaşması;
- giriş kodları, tokenlər və şəbəkə ünvanlarının gizli saxlanması;
- hadisələrin audit jurnalına yazılması;
- yanlış kontekstdə əməliyyatın dayandırılması;
- mikrocontroller və mobil tətbiq arasında etibarlı rabitə;
- nasazlıq zamanı təhlükəsiz dayanma rejimi;
- demo məlumatlarının real şəxsi məlumatlardan ayrılması.

İctimai məqalədə sistemin daxili ünvanları, tam əmrləri, autentifikasiya məlumatları və müdafiə mexanizmlərinin keçilməsinə kömək edə biləcək detalları paylaşılmır.

---

# 🎓 Tədris və Laboratoriya Dəyəri

Bu layihə tələbəyə bir sistem daxilində bir neçə istiqamətin əlaqəsini göstərir:

- ESP32-S3 və mikrokontroller proqramlaşdırması;
- toxunma paneli və fiziki autentifikasiya;
- Android tətbiq arxitekturası;
- AI əsaslı səs tanıma;
- server və API məntiqi;
- mobil təhlükəsizlik avtomatlaşdırması;
- USB cihaz aşkarlaması;
- təhlükəsiz əməliyyat təsdiqi;
- Red Team və Blue Team ssenariləri;
- vizual və səsli geribildirim;
- audit və gələcək SIEM inteqrasiyası.

Tələbə yalnız hazır aləti işlətmir. O, hadisənin fiziki cihazdan başlayaraq tətbiqə, serverə, təhlükəsizlik qərarına və istifadəçi bildirişinə qədər necə hərəkət etdiyini görür.

---

# 🚀 Gələcək İnkişaf İstiqamətləri

Casper-in bu iki modulu gələcəkdə aşağıdakı imkanlarla genişləndirilə bilər:

- RFID və barmaq izi ilə çoxfaktorlu autentifikasiya;
- naməlum USB cihazları üçün risk balı;
- SIEM və SOAR sistemlərinə hadisə ötürülməsi;
- Telegram və PDF təhlükəsizlik hesabatları;
- lokal AI ilə internetdən asılı olmayan səsli idarəetmə;
- istifadəçinin səs profilinin tanınması;
- USB cihaz siyasətlərinin mərkəzləşdirilmiş idarəsi;
- mobil cihaz vəziyyətinin real vaxt monitorinqi;
- təhlükəsiz incident-response playbook-ları;
- robot platforması üzərində fiziki patrul və müşahidə.

Əsas məqsəd bütün idarəetməni AI-yə vermək deyil. Məqsəd insan nəzarətində işləyən, səbəbini izah edən və həssas addımlarda təsdiq istəyən ağıllı təhlükəsizlik assistenti yaratmaqdır.

---

# 🌍 Nəticə

CyberShieldy Casper layihəsinin səsli mobil idarəetmə və Digispark USB skan modulları AI, IoT və kibertəhlükəsizliyin praktik şəkildə necə birləşdirilə biləcəyini göstərir.

Bu sistemdə:

- ESP32-S3 fiziki autentifikasiya qatını yaradır;
- Casper istifadəçinin səsli əmrini anlayır;
- server əmri yoxlayır və idarəetmə axınını koordinasiya edir;
- Android cihaz yalnız icazəli funksiyanı icra edir;
- SMS kimi həssas əməliyyat insan təsdiqi gözləyir;
- Digispark qoşulması təhlükəsizlik hadisəsi kimi aşkarlanır;
- robot gözləri və səs sistemi nəticəni canlı şəkildə təqdim edir.

> **Casper sadəcə telefondakı funksiyanı işə salmır. O, fiziki girişdən təhlükəsizlik qərarına və nəticənin təqdim edilməsinə qədər bütöv bir laboratoriya prosesini idarə edir.**

🤖 **Bu, CyberShieldy Casper-dir — AI, mobil təhlükəsizlik, IoT və insan nəzarətinin birləşdiyi interaktiv kiber laboratoriya.**

---

# 🔗 Oxşar Mövzular

* 📊🛡️ [SIEM nədir və necə işləyir?](https://cybershieldy.com/posts/siem-nedir)
* 🔴🔵 [Red Team və Blue Team arasındakı fərqlər](https://cybershieldy.com/posts/red-team-vs-blue-team)
* 🤖🛡️ [SIEM və Süni İntellekt inteqrasiyası](https://cybershieldy.com/posts/ai-siem-integration)
* 🤖📡 [IoT Security və ağıllı sistemlər](https://cybershieldy.com/posts/robotexnika-kiber-gelecek)
* ⚡🛡️ [ESP32 ilə SIEM inteqrasiyası](https://cybershieldy.com/posts/ideaspark-esp32-siem-ssh-brute-force)
* 🤖⚡ [CyberShieldy Casper: AI kibertəhlükəsizlik köməkçisi](https://cybershieldy.com/posts/ai-cybersecurity-assistant)

## 📢 CyberShieldy Academy

**Savaylov Emin**

**🛡️ Kibertəhlükəsizlik mütəxəssisi • 🔴 Red Team • 🔵 Blue Team üzrə təlimçi**

🌐 [CyberShieldy.com](https://cybershieldy.com)

> **“Gələcəyin SOC analitiki süni intellektlə yarışmayacaq — onunla birlikdə işləyəcək.”**

{% include cyber-popup.html %}

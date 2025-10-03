---
title: Kibertəhlükəsizlik və Ethical Hacking Bilik Testi (30 Sual)
icon: fas fa-shield-alt
order: 4
description: 30 sualdan ibarət bu test ilə kibertəhlükəsizlik, ethical hacking, penetration testing və web təhlükəsizliyi üzrə biliklərinizi yoxlayın. OWASP, phishing, SQL injection və digər mövzuları əhatə edir.
keywords:
  - kibertəhlükəsizlik testi
  - ethical hacking sualları
  - penetration testing test
  - web təhlükəsizliyi testi
  - phishing nədir
  - SQL Injection izahı
  - OWASP Top 10
  - malware analizi
  - CEH imtahan sualları
  - OSCP hazırlıq testi
  - hacking sualları
  - kiber təhlükəsizlik imtahan
  - cyber security test azərbaycan
robots: index, follow
---

<!-- Canonical -->
<link rel="canonical" href="https://sizin-saytiniz.az/kibertəhlükəsizlik-test" />

<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Kibertəhlükəsizlik və Ethical Hacking Bilik Testi (30 Sual)" />
<meta property="og:description" content="30 suallıq testlə kibertəhlükəsizlik, OWASP, phishing, SQL injection və digər mövzulardakı biliklərinizi yoxlayın." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://sizin-saytiniz.az/kibertəhlükəsizlik-test" />
<meta property="og:image" content="https://sizin-saytiniz.az/assets/images/cyber-quiz-banner.png" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Kibertəhlükəsizlik və Ethical Hacking Bilik Testi (30 Sual)" />
<meta name="twitter:description" content="Ethical hacking, OWASP və SQLi biliklərinizi bu test ilə yoxlayın. CEH hazırlığı üçün uyğundur." />
<meta name="twitter:image" content="https://sizin-saytiniz.az/assets/images/cyber-quiz-banner.png" />

<style>
  #quiz-form {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  .question {
    margin-bottom: 25px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #f9f9f9;
  }

  .question p {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .question label {
    display: block;
    margin-left: 10px;
  }

  button {
    background: #0077cc;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  button:hover {
    background: #005fa3;
  }
</style>

# 🛡️ Kibertəhlükəsizlik və Ethical Hacking Bilik Testi (30 Sual)

Bu test vasitəsilə kibertəhlükəsizlik, ethical hacking, penetration testing və web təhlükəsizliyi üzrə biliklərinizi sınaya bilərsiniz. **30 sualdan** ibarət bu test, **OWASP**, **phishing**, **SQL injection** və digər mühüm mövzuları əhatə edir.

### Təlimat:
- Bütün suallara cavab verin.
- Doğru cavabları seçdiyiniz zaman **"Nəticəni Göstər"** düyməsini basın.
- Zəhmət olmasa bütün sualları cavablandırın, çünki seçim olmadan nəticələr göstərilmir.

---

<form id="quiz-form">

<!-- =================== SUALLAR =================== -->

<div class="question">
  <p>1. Hansi daha təhlükəsiz kompyuterler arası sistem bağlantısıdır?</p>
  <label><input type="radio" name="q1" value="correct"> a) SSH</label>
  <label><input type="radio" name="q1" value="incorrect"> b) FTP</label>
  <label><input type="radio" name="q1" value="incorrect"> c) HTTPS</label>
  <label><input type="radio" name="q1" value="incorrect"> d) SMTP</label>
</div>

<div class="question">
  <p>2. Sıralama ardıcıllıq prinsipləri pozulub?</p>
  <label><input type="radio" name="q2" value="incorrect"> a) FTP + UFW + Apache2 + 80</label>
  <label><input type="radio" name="q2" value="incorrect"> b) UFW + Apache2 + Fail2ban + 80</label>
  <label><input type="radio" name="q2" value="incorrect"> c) UFW + SMTP + Apache2 + 80</label>
  <label><input type="radio" name="q2" value="correct"> d) Hamsının da pozulub</label>
</div>

<div class="question">
  <p>3. Bir Wi-Fi hücumunda brute force olmadan DDoS deauth edib parol tapmaq olarmı?</p>
  <label><input type="radio" name="q3" value="correct"> a) Xeyir</label>
  <label><input type="radio" name="q3" value="incorrect"> b) Olar, handshake et capture tap</label>
  <label><input type="radio" name="q3" value="incorrect"> c) Evil twin et, parol əldə et</label>
  <label><input type="radio" name="q3" value="incorrect"> d) Fikirlər hamsı düzgün</label>
</div>

<div class="question">
  <p>4. Server üzərinə 22 SSH portu üzərindən hücum edirik. Serverdə fail2ban qurulub. Parolu tapmaq mümkün olacaqmı?</p>
  <label><input type="radio" name="q4" value="incorrect"> a) Brute olmaz, fail2ban ban edir</label>
  <label><input type="radio" name="q4" value="correct"> b) Limite bağlıdır, misal 4 şifrə</label>
  <label><input type="radio" name="q4" value="incorrect"> c) Serverə fail2ban yükləmək olmur</label>
  <label><input type="radio" name="q4" value="incorrect"> d) Fail2ban 80 portunu dinləyir</label>
</div>

<div class="question">
  <p>5. Aşağıdakilerden hansının <code>nc -lvp 12345</code> komandasını işlətmək və bu portu dinləmək üçün uyğun olduğunu seçin:</p>
  <label><input type="radio" name="q5" value="correct"> a) ufw allow 12345</label>
  <label><input type="radio" name="q5" value="incorrect"> b) apache2 + 80 + 192.168.1.1:12345</label>
  <label><input type="radio" name="q5" value="incorrect"> c) ssh + 80 + 192.168.1.1:12345</label>
  <label><input type="radio" name="q5" value="incorrect"> d) Hamsı səhvdir</label>
</div>

<div class="question">
  <p>6. Aşağıdakilerden hansı OSINT (Open Source Intelligence) alətlərinin ardıcıllığının göstərir?</p>
  <label><input type="radio" name="q6" value="incorrect"> a) windows-server + kali + bloodhound + SharpHound</label>
  <label><input type="radio" name="q6" value="incorrect"> b) kali + SharpHound + windows-server + bloodhound</label>
  <label><input type="radio" name="q6" value="correct"> c) kali + bloodhound + SharpHound + windows-server</label>
  <label><input type="radio" name="q6" value="incorrect"> d) Hamsı düzgün</label>
</div>

<div class="question">
  <p>7. Slowloris ilə VirtualBox-da test edirik, amma sistem niyə çökmür?</p>
  <label><input type="radio" name="q7" value="incorrect"> a) Yeterli hücum piramidası yoxdur</label>
  <label><input type="radio" name="q7" value="correct"> b) Local şəbəkə</label>
  <label><input type="radio" name="q7" value="incorrect"> c) Slowloris sadədir</label>
  <label><input type="radio" name="q7" value="incorrect"> d) Həmsi səhvdir</label>
</div>

<div class="question">
  <p>8. Ettercap DNS resolve testi arxasında ardıcıllıq prinsipləri seç</p>
  <label><input type="radio" name="q8" value="correct"> a) Ettercap + Apache2 + 443 + Dns + Qurban</label>
  <label><input type="radio" name="q8" value="incorrect"> b) DNS + Ettercap + Qurban</label>
  <label><input type="radio" name="q8" value="incorrect"> c) DNS + Qurban + Ettercap 443</label>
  <label><input type="radio" name="q8" value="incorrect"> d) Həmsi düzgün</label>
</div>
<div class="question">
  <p>9. Asterisk qurub SIP zəngi test edirik, şifrələmə varmı?</p>
  <label><input type="radio" name="q9" value="incorrect"> a) Zənglər test etmək üçün HackRF lazımdır</label>
  <label><input type="radio" name="q9" value="correct"> b) Wireshark test edir, SSL yoxdur</label>
  <label><input type="radio" name="q9" value="incorrect"> c) Zənglər təhlükəli etmək olmaz, SS7</label>
  <label><input type="radio" name="q9" value="incorrect"> d) Bütün suallar səhvdir</label>
</div>

<div class="question">
  <p>10. FTP protokolu üzrə fayllar yüklənir, qorunalıq seçimi düzgündürmü?</p>
  <label><input type="radio" name="q10" value="incorrect"> a) Səhvdir, FTP fayl yükləmir, şəkil yükləyir</label>
  <label><input type="radio" name="q10" value="incorrect"> b) FTP şəkil fayl sayt yüklənir, qorunaqlıdır</label>
  <label><input type="radio" name="q10" value="correct"> c) Hər şey yükləmək olar, exploit-də qorunaksızdır</label>
  <label><input type="radio" name="q10" value="incorrect"> d) Bütün suallar doğru</label>
</div>

<div class="question">
  <p>11. 3306 prinsipinə əsaslanmayıb?</p>
  <label><input type="radio" name="q11" value="incorrect"> a) INSERT INTO</label>
  <label><input type="radio" name="q11" value="incorrect"> b) CREATE</label>
  <label><input type="radio" name="q11" value="incorrect"> c) DROP</label>
  <label><input type="radio" name="q11" value="correct"> d) EXIT</label>
</div>

<div class="question">
  <p>12. Buffer overflow prinsipinə görə kompüterdə hansı hissə hücuma məruz qalır?</p>
  <label><input type="radio" name="q12" value="incorrect"> a) CPU</label>
  <label><input type="radio" name="q12" value="correct"> b) RAM</label>
  <label><input type="radio" name="q12" value="incorrect"> c) Disk</label>
  <label><input type="radio" name="q12" value="incorrect"> d) VGA</label>
</div>

<div class="question">
  <p>13. Bir SSH serverin üzərinə John the Ripper ilə hücum edildiyi bildirildi. Həmin vəziyyətdə nə etmək lazımdır?</p>
  <label><input type="radio" name="q13" value="incorrect"> a) IDS/IPS quraşdırmaq</label>
  <label><input type="radio" name="q13" value="correct"> b) Heç bir şey</label>
  <label><input type="radio" name="q13" value="incorrect"> c) fail2ban qurmaq</label>
  <label><input type="radio" name="q13" value="incorrect"> d) Wazuh quraşdırmaq</label>
</div>

<div class="question">
  <p>14. Bu sistemdə saytları blok etmək, trafikə limit tətbiq etmək və ümumi nəzarəti tam təmin etmək mümkün olan hansı həllərdən biridir?</p>
  <label><input type="radio" name="q14" value="incorrect"> a) GNS3</label>
  <label><input type="radio" name="q14" value="correct"> b) pfSense</label>
  <label><input type="radio" name="q14" value="incorrect"> c) Wazuh</label>
  <label><input type="radio" name="q14" value="incorrect"> d) fail2ban</label>
</div>

<div class="question">
  <p>15. Bu sistem SSH prinsipinə oxşasa da fərqli bir əlaqə vasitəsidir. Hansıdır?</p>
  <label><input type="radio" name="q15" value="correct"> a) RDP</label>
  <label><input type="radio" name="q15" value="incorrect"> b) FTP</label>
  <label><input type="radio" name="q15" value="incorrect"> c) MySQL</label>
  <label><input type="radio" name="q15" value="incorrect"> d) Nextcloud</label>
</div>

<div class="question">
  <p>16. Saytda görünməyən (gizli) fayl və qovluqları aşkar etmək üçün istifadə olunan alətlərdən hansı DEYİL?</p>
  <label><input type="radio" name="q16" value="incorrect"> a) gobuster</label>
  <label><input type="radio" name="q16" value="incorrect"> b) dirbuster</label>
  <label><input type="radio" name="q16" value="incorrect"> c) feroxbuster</label>
  <label><input type="radio" name="q16" value="correct"> d) zerobuster</label>
</div>

<div class="question">
  <p>17. Aşağıdakı JS funksional nəticəsi hansıdır?</p>
<pre>
var d = 12;
function call(d){
   var d = 100;
   alert(d);
}
call(30);
d;
</pre>
  <label><input type="radio" name="q17" value="incorrect"> a) 30,12</label>
  <label><input type="radio" name="q17" value="incorrect"> b) 100,30</label>
  <label><input type="radio" name="q17" value="incorrect"> c) 12</label>
  <label><input type="radio" name="q17" value="correct"> d) 100,12</label>
</div>


<!-- ... 9–30 eyni şablonla davam edir ... -->

<button type="button" onclick="showResult()">Nəticəni Göstər</button>
</form>

<script>
function showResult() {
    let score = 0;
    let totalQuestions = 17;
    let unanswered = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        let question = document.getElementsByName('q' + i);
        let answered = false;

        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                answered = true;
                if (question[j].value === "correct") {
                    score += 10;
                }
                break;
            }
        }

        if (!answered) {
            unanswered++;
        }
    }

    if (unanswered === 0) {
        alert("✅ Test tamamlandı! Nəticəniz: " + score + " bal (" + (score/10) + " / " + totalQuestions + ")");
    } else {
        alert("⚠️ Zəhmət olmasa, bütün sualları cavablandırın. Cavabsız qalan: " + unanswered);
    }
}
</script>

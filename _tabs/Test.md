---
title: Test
icon: fas fa-vial
order: 4
---

# Kibertəhlükəsizlik Bilik Testi

<form id="quizForm">

  <div>
    <p><strong>Sual 1:</strong> Phishing nə deməkdir?</p>
    <input type="radio" id="q1a" name="q1" value="a">
    <label for="q1a">a) Şəbəkə avadanlığının yoxlanması</label><br>
    <input type="radio" id="q1b" name="q1" value="b">
    <label for="q1b">b) İnsanları aldadaraq şəxsi məlumatlarını ələ keçirmək</label><br>
    <input type="radio" id="q1c" name="q1" value="c">
    <label for="q1c">c) Virusların analiz edilməsi</label><br>
    <input type="radio" id="q1d" name="q1" value="d">
    <label for="q1d">d) Firewall quraşdırmaq</label>
  </div>
  <hr>

  <div>
    <p><strong>Sual 2:</strong> SQL Injection hücumu nədir?</p>
    <input type="radio" id="q2a" name="q2" value="a">
    <label for="q2a">a) Verilənlər bazasına zərərli kod yerləşdirmək</label><br>
    <input type="radio" id="q2b" name="q2" value="b">
    <label for="q2b">b) Şəbəkə trafikini izləmək</label><br>
    <input type="radio" id="q2c" name="q2" value="c">
    <label for="q2c">c) Antivirus proqramını yeniləmək</label><br>
    <input type="radio" id="q2d" name="q2" value="d">
    <label for="q2d">d) Firewall konfiqurasiyası</label>
  </div>
  <hr>

  <div>
    <p><strong>Sual 3:</strong> OWASP Top 10 nədir?</p>
    <input type="radio" id="q3a" name="q3" value="a">
    <label for="q3a">a) Web tətbiqlərində ən çox rast gəlinən təhlükəsizlik zəiflikləri siyahısı</label><br>
    <input type="radio" id="q3b" name="q3" value="b">
    <label for="q3b">b) İT işçilərinin siyahısı</label><br>
    <input type="radio" id="q3c" name="q3" value="c">
    <label for="q3c">c) Yeni proqramlaşdırma dili</label><br>
    <input type="radio" id="q3d" name="q3" value="d">
    <label for="q3d">d) Şəbəkə protokolları</label>
  </div>
  <hr>

  <div>
    <p><strong>Sual 4:</strong> Sosial mühəndislik nədir?</p>
    <input type="radio" id="q4a" name="q4" value="a">
    <label for="q4a">a) İnsanları aldatmaq yolu ilə məlumat toplamaq</label><br>
    <input type="radio" id="q4b" name="q4" value="b">
    <label for="q4b">b) Şəbəkə avadanlığı</label><br>
    <input type="radio" id="q4c" name="q4" value="c">
    <label for="q4c">c) Virus proqramı</label><br>
    <input type="radio" id="q4d" name="q4" value="d">
    <label for="q4d">d) Firewall növü</label>
  </div>
  <hr>

  <div>
    <p><strong>Sual 5:</strong> Metasploit nədir?</p>
    <input type="radio" id="q5a" name="q5" value="a">
    <label for="q5a">a) Penetrasiya testləri üçün istifadə olunan alət</label><br>
    <input type="radio" id="q5b" name="q5" value="b">
    <label for="q5b">b) Antivirus proqramı</label><br>
    <input type="radio" id="q5c" name="q5" value="c">
    <label for="q5c">c) Sosial media platforması</label><br>
    <input type="radio" id="q5d" name="q5" value="d">
    <label for="q5d">d) Web server növü</label>
  </div>
  <hr>

  <button type="button" onclick="checkAnswers()">Nəticəni yoxla</button>
</form>

<script>
function checkAnswers() {
  const correctAnswers = {
    q1: 'b',
    q2: 'a',
    q3: 'a',
    q4: 'a',
    q5: 'a'
  };
  let score = 0;
  let unanswered = [];

  for (let i = 1; i <= 5; i++) {
    const qName = 'q' + i;
    const radios = document.getElementsByName(qName);
    let answered = false;
    for (const radio of radios) {
      if (radio.checked) {
        answered = true;
        if (radio.value === correctAnswers[qName]) {
          score += 5;
        }
        break;
      }
    }
    if (!answered) {
      unanswered.push(i);
    }
  }

  if (unanswered.length > 0) {
    alert("Zəhmət olmasa, bütün sualları cavablandırın! Cavablandırılmamış suallar: " + unanswered.join(", "));
    return;
  }

  alert("Test tamamlandı! Sizin nəticəniz: " + score + "/25 bal");
}
</script>

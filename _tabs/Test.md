---
title: Kiber Təhlükəsizlik Bilik Testi
layout: post
---

# Kiber Təhlükəsizlik Bilik Testi

<p>Testdə 30 sual var. Hər sual üçün düzgün cavabı seçin və "Nəticəni yoxla" düyməsini klikləyin.</p>

<form id="quizForm">

  <div class="question">
    <p><strong>1. Phishing nədir?</strong></p>
    <input type="radio" id="q1a" name="q1" value="a">
    <label for="q1a">a) Şəbəkə avadanlığının yoxlanması</label><br>
    <input type="radio" id="q1b" name="q1" value="b">
    <label for="q1b">b) İnsanları aldadaraq şəxsi məlumatlarını ələ keçirmək</label><br>
    <input type="radio" id="q1c" name="q1" value="c">
    <label for="q1c">c) Virusların analiz edilməsi</label><br>
    <input type="radio" id="q1d" name="q1" value="d">
    <label for="q1d">d) Firewall quraşdırmaq</label><br>
  </div>

  <!-- 29 daha sual buraya eyni formatda əlavə et -->

  <button type="button" onclick="checkAnswers()">Nəticəni yoxla</button>
</form>

<script>
const answers = {
  q1: "b",
  // q2: "a", q3: "d" və s. 29 sualın cavablarını bura əlavə ed
};

function checkAnswers() {
  let score = 0;
  let total = Object.keys(answers).length;
  for (let key in answers) {
    const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
    if (userAnswer && userAnswer.value === answers[key]) {
      score++;
    }
  }
  alert(`Siz ${total} sualdan ${score} düzgün cavab verdiniz!`);
}
</script>

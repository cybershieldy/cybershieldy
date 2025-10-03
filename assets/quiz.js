function showResult() {
    let score = 0;
    let totalQuestions = 17; // 30 sual üçün
    let unanswered = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        let question = document.getElementsByName('q' + i);
        let answered = false;

        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                answered = true;
                if (question[j].value === "correct") {
                    score += 10; // hər düzgün cavab 10 bal
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

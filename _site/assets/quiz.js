function showResult() {
    let score = 0;
    let totalQuestions = 10; // sual sayını burda dəyiş
    let unanswered = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        let question = document.getElementsByName('q' + i);
        let answered = false;

        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                answered = true;
                if (question[j].value === "correct") {
                    score++;
                }
                break;
            }
        }

        if (!answered) {
            unanswered++;
        }
    }

    if (unanswered === 0) {
        alert("✅ Test tamamlandı! Nəticəniz: " + score + " / " + totalQuestions);
    } else {
        alert("⚠️ Lütfən, bütün sualları cavablandırın. Cavablanmamış suallar var!");
    }
}

function playEvent(eventIndex) {
    document.getElementById("continue-btn").addEventListener('click', proceedPrompt)
    function proceedPrompt() {
        if (promptIndex + 1 != eventIndex.eventPrompt.length) {
            document.getElementById("event-prompt").textContent = "";
            promptIndex++;
            document.getElementById("event-prompt").textContent = eventIndex.eventPrompt[promptIndex];
        } else {
            document.getElementById("choice1").textContent = eventIndex.choice1.choiceText;
            document.getElementById("choice2").textContent = eventIndex.choice2.choiceText;
            document.getElementById("choice3").textContent = eventIndex.choice3.choiceText;
            document.getElementById("choice4").textContent = eventIndex.choice4.choiceText;
        }
    }
    document.getElementById("event-prompt").textContent = eventIndex.eventPrompt[0];
    promptIndex = 0;
}
// document.getElementById('test-btn').addEventListener('click', );
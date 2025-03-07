document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "SIGNAL RECEIVER"; // Default if no name
    const messages = [
    `WELCOME, ${name}.`,
    `THE SIGNAL HAS LOCKED ONTO YOUR FREQUENCY.`,
    `27.03 | BOLICHE UBUD`,
    `THE FUTURE HAS ALREADY HAPPENED. YOU ARE MERELY ARRIVING.`,
    `ALL+SIDES // NINE LIVES: THE LOOP BEGINS.`,
    `A HIDDEN TRANSMISSION. A FREQUENCY ONLY YOU WILL HEAR.`,
    `THE CODE SHIFTS. THE STATIC CLEARS. THE PATTERN REVEALS.`,
    `DESIGNATED FREQUENCY OPERATORS:`,
    `TODJON (BALI) – ARCHITECT OF RESISTANCE`,
    `MORTA MOR (BERLIN) – SONIC NAVIGATOR`,
    `OLE UKENA (BERLIN) – SEQUENCER OF THE UNSEEN`,
    `NO TOURISTS. NO OBSERVERS. NO DISTRACTIONS.`,
    `ONLY THOSE WHO FEEL IT. ONLY THOSE WHO MOVE.`,
    `YOU ARE HERE BECAUSE YOU WERE MEANT TO BE.`,
    `THE SIGNAL IS OPEN—BUT ONLY FOR THOSE WHO UNDERSTAND.`,
    `STEP THROUGH. BECOME PART OF THE FREQUENCY.`,
];

    const textContainer = document.getElementById("glitch-text");
    const stepButton = document.getElementById("step-through");
    let index = 0;

    function typeText() {
        if (index < messages.length) {
            let p = document.createElement("p");
            p.textContent = messages[index];
            p.classList.add("glitch");
            textContainer.appendChild(p);
            textContainer.style.opacity = "1"; // Ensure text is visible
            
            // Enhanced auto-scroll with a small delay to ensure rendering is complete
            setTimeout(() => {
                p.scrollIntoView({ behavior: 'smooth', block: 'end' });
                // Fallback in case scrollIntoView doesn't work well on some browsers
                textContainer.scrollTop = textContainer.scrollHeight;
            }, 50);
            
            index++;
            setTimeout(typeText, 800);
        } else {
            setTimeout(() => {
                textContainer.style.transition = "opacity 2s ease-out";
                textContainer.style.opacity = "0"; // Fade out text
                setTimeout(() => {
                    textContainer.innerHTML = ""; // Clear text
                    stepButton.style.display = "block"; // Show button
                    stepButton.style.opacity = "1";
                }, 2000);
            }, 2000);
        }
    }

    typeText();
});

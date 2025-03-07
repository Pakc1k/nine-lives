document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "SIGNAL RECEIVER"; // Default if no name

    // Approved invitees only
    const allowedNames = ["Ruben", "Alex", "Lili", "Morta", "Ole"];
    if (!allowedNames.includes(name) && name !== "SIGNAL RECEIVER") {
        document.body.innerHTML = `
            <h1 class="glitch">ACCESS DENIED</h1>
            <p class="glitch">UNAUTHORIZED TRANSMISSION ATTEMPT DETECTED.</p>
        `;
        return;
    }

    const messages = [
    `WELCOME, ${name}.`,
    `THE SIGNAL HAS LOCKED ONTO YOUR FREQUENCY.`,
    `27.03 | BOLICHE UBUD`,
    `THE FUTURE HAS ALREADY HAPPENED. YOU ARE MERELY ARRIVING.`,
    `ALL+SIDES // NINE LIVES: THE LOOP BEGINS.`,
    `A HIDDEN TRANSMISSION. A FREQUENCY ONLY FEW WILL HEAR.`,
    `THE CODE SHIFTS. THE STATIC CLEARS. THE PATTERN REVEALS ITSELF.`,
    `DESIGNATED FREQUENCY OPERATORS:`,
    `TODJON – ARCHITECT OF RESISTANCE`,
    `MORTA MOR – SONIC NAVIGATOR`,
    `OLE UKENA – SEQUENCER OF THE UNSEEN`,
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
            index++;
            setTimeout(typeText, 800);
        } else {
            setTimeout(() => {
                textContainer.style.transition = "opacity 1s ease-out";
                textContainer.style.opacity = "0"; // Fade out text
                setTimeout(() => {
                    textContainer.innerHTML = ""; // Clear text
                    stepButton.style.display = "block"; // Show button
                    stepButton.style.opacity = "1";
                }, 1000);
            }, 2000);
        }
    }

    typeText();
});

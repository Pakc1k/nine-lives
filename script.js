document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "SIGNAL RECEIVER"; // Default if no name

    // Optional: Restrict access only to approved invitees
    const allowedNames = ["Ruben", "Alex", "Lili", "Morta", "Ole"];
    if (!allowedNames.includes(name) && name !== "SIGNAL RECEIVER") {
        document.body.innerHTML = `
            <h1 class="glitch">ACCESS DENIED</h1>
            <p class="glitch">UNAUTHORIZED TRANSMISSION ATTEMPT DETECTED.</p>
        `;
        return; // Stop script execution
    }

    const messages = [
        `WELCOME, ${name}.`,
        `YOU HAVE BEEN CHOSEN.`,
        `27.03 | BOLICHE UBUD`,
        `FINAL FREQUENCY BEFORE THE WORLD GOES QUIET.`,
        `ALL+SIDES // NINE LIVES: A NEW SERIES`,
        `A HIDDEN TRANSMISSION. A FREQUENCY ONLY FEW WILL HEAR.`,
        `FREQUENCY OPERATORS:`,
        `TODJON – SYSTEM ARCHITECT`,
        `MORTA MOR – SONIC EXPLORER`,
        `OLE UKENA – GROOVE ENGINEER`,
        `NO TOURISTS. NO TRENDSETTERS. NO INTERFERENCE.`,
        `ONLY MOVEMENT. ONLY CONNECTION. ONLY THOSE WHO UNDERSTAND.`,
        `YOU ARE HERE BECAUSE YOU WERE MEANT TO BE.`,
        `THE SIGNAL IS OPEN—BUT ONLY FOR YOU.`,
        `STEP THROUGH.`,
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
            index++;
            setTimeout(typeText, 800); // Delay between messages appearing
        } else {
            setTimeout(() => {
                textContainer.style.opacity = "0"; // Fade out all text
                setTimeout(() => {
                    textContainer.innerHTML = ""; // Clear text after fade

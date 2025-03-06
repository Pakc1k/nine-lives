/* GENERAL STYLING */
body {
    background: black;
    color: #00ff00; /* Neon Green */
    font-family: 'Courier New', monospace;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 0;
    margin: 0;
}

/* CONTAINER */
.container {
    width: 90%; /* Make sure content doesn’t touch edges */
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* GLITCH TEXT */
#glitch-text {
    font-size: 20px; /* Default for desktop */
    font-weight: bold;
    white-space: pre-line;
    line-height: 1.4;
    opacity: 0;
    animation: fadeIn 2s forwards;
    text-align: center;
    max-height: 70vh; /* Prevents text overflow */
    overflow-y: auto; /* Allows scrolling if needed */
}

/* BUTTON */
#step-through {
    background: none;
    border: 2px solid #00ff00;
    color: #00ff00;
    font-size: 18px;
    padding: 12px 24px;
    margin-top: 20px;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 3s 5s forwards;
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
}

/* TEXT ANIMATIONS */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes glitch {
    0% { transform: translate(2px, -2px); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, 2px); }
    60% { transform: translate(-2px, -2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0, 0); }
}

.glitch {
    animation: glitch 0.1s infinite;
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
}

/* MOBILE FIXES */
@media (max-width: 768px) {
    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #glitch-text {
        font-size: 16px; /* Smaller for mobile */
        max-height: 60vh; /* Prevents text from taking over the screen */
        overflow-y: auto;
        padding: 10px; /* Adds spacing */
    }

    #step-through {
        font-size: 16px;
        padding: 10px 20px;
    }
}

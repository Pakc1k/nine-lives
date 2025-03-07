/* RESET EVERYTHING */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* BODY */
body {
    background: black;
    color: #00ff00;
    font-family: 'OCR A Std', 'Courier New', monospace;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 20px;
    overflow: hidden;
}

/* CONTAINER */
.container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* TEXT */
#glitch-text {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
    opacity: 1;
    text-align: center;
    max-height: 70vh;
    overflow-y: auto;
    padding: 20px;
    transition: opacity 1s ease-in-out;
}

/* BUTTON */
#step-through {
    background: none;
    border: 2px solid #00ff00;
    color: #00ff00;
    font-size: 16px;
    padding: 15px 30px;
    margin-top: 20px;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
}

#step-through:hover {
    background: rgba(0, 255, 0, 0.1);
    text-shadow: 0 0 5px #00ff00;
    box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
    transform: scale(1.05);
}

#step-through:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px #00ff00;
}

/* FADE IN */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* GLITCH EFFECT */
@keyframes glitch {
    0% { transform: translate(1px, -1px); }
    25% { transform: translate(-1px, 1px); }
    50% { transform: translate(1px, 1px); }
    75% { transform: translate(-1px, -1px); }
    100% { transform: translate(0, 0); }
}

.glitch {
    animation: glitch 0.3s infinite;
    margin-bottom: 10px;
    letter-spacing: 2px;
    line-height: 1.5;
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
}

.glitch:hover {
    animation: none;
    color: #ff0000;
    text-shadow: 4px 4px 0px rgba(255, 0, 0, 0.75);
}

/* MOBILE FIX */
@media (max-width: 500px) {
    #glitch-text {
        font-size: 14px;
        max-height: 60vh;
        overflow-y: auto;
        padding: 5px;
    }

    #step-through {
        font-size: 12px;
        padding: 12px 20px;
        margin: 15px auto;
        width: 80%;
        max-width: 250px;
        clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
    }

    .container {
        padding: 0 10px;
    }
}

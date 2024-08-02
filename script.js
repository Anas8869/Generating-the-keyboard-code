const promptElement = document.getElementById('prompt');
const resultElement = document.getElementById('result');
const keyNameElement = document.getElementById('keyName');
const keyCodeElement = document.getElementById('keyCode');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const code = event.keyCode;

    // Display the pressed key and key code
    keyNameElement.textContent = key;
    keyCodeElement.textContent = code;

    // Hide the prompt and show the result
    promptElement.classList.add('hidden');
    resultElement.classList.remove('hidden');
});

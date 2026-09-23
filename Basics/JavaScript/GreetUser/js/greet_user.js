function greetUser() {
    // 1. Get the input element and message element
    const nameInput = document.getElementById("userName");
    const greetingText = document.getElementById("greetingText");

    // 2. Get what the user typed and remove extra spaces
    const enteredName = nameInput.value.trim();

    // 3. Check if they left it empty
    if (enteredName === "") {
        alert("Please enter your name.");
        return;
    }

    // 4. Show the greeting on screen
    greetingText.innerText = `Hello, ${enteredName}! Welcome to our website.`;
}
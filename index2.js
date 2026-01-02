function decrypt() {
    let text = document.getElementById("text1").value;

    if (text === "") {
        alert("Please! Enter your encrypted text.");
        return;
    }

    // Run 3 times in reverse (because encryption ran 3 times forward)
    for (let i = 0; i < 3; i++) {
        // The last character is key1 (position marker)
        let key1 = text.charAt(text.length - 1);
        text = text.slice(0, -1);

        // Find where key was inserted
        let n2 = key1.charCodeAt(0) - 65;

        // The character at n2 is key (shift marker)
        let key = text.charAt(n2);
        let n1 = key.charCodeAt(0) - 65;

        // Remove the key from text
        text = text.slice(0, n2) + text.slice(n2 + 1);

        // Shift characters back by n1
        let dec = "";
        for (let j = 0; j < text.length; j++) {
            dec += String.fromCharCode(text.charCodeAt(j) - n1);
        }

        text = dec;
    }

    document.getElementById("text2").value = text;
}
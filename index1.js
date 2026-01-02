function encrypt() {
    let text = document.getElementById("text1").value;

    if (text === "") {
        alert("Please! Enter your text.");
        return;
    }

    if (text.length > 500) {
        alert("Maximum limit reached");
        return;
    }

    for (let i = 0; i < 3; i++) {
        // Random shift between 5 and 10
        let n1 = Math.floor(Math.random() * 6) + 5;

        // Random insertion index
        let n2 = Math.floor(Math.random() * text.length);

        let enc = "";

        // Shift each character
        for (let j = 0; j < text.length; j++) {
            enc += String.fromCharCode(text.charCodeAt(j) + n1);
        }

        // Generate key characters
        let key = String.fromCharCode(65 + (n1 % 26));
        let key1 = String.fromCharCode(65 + (n2 % 26));

        // Insert keys
        enc = enc.slice(0, n2) + key + enc.slice(n2) + key1;

        text = enc;
    }

    document.getElementById("text2").value = text;
}
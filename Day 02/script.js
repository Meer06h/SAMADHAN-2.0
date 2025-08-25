function findHighest() {
    let userInput = document.getElementById("userInput").value;
    
    if (userInput.trim() === "") {
        document.getElementById("output").innerText = "⚠️ Please enter some numbers!";
        return;
    }

    let numbers = userInput.split(",").map(x => parseInt(x.trim())).filter(n => !isNaN(n));

    if (numbers.length === 0) {
        document.getElementById("output").innerText = "⚠️ Invalid input!";
        return;
    }

    let maxValue = Math.max(...numbers);

    document.getElementById("output").innerText = "🏆 The highest value is: " + maxValue;
}

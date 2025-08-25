function findHighest() {
    
    let marks = [85, 92, 76, 98, 89, 91];
    let highest = Math.max(...marks);
    document.getElementById("result").innerText = 
        "The highest marks are: " + highest;
}

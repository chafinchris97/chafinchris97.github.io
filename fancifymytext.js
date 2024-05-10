function showAlert() {
    alert("Hello, world!");
}

function makeBigger() {
    document.getElementById("textArea").style.fontSize = "24pt"
}

function makeBold() {
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}

function makeNormal() {
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
}

function addMoo() {
    var text = document.getElementById("textArea").value;
    var sentences = text.split(".");
    var mooText = sentences.join("-Moo");
    document.getElementById("textArea").value = mooText;
}
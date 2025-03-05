const colors = ["AliceBlue", "BlanchedAlmond", "FloralWhite", "GhostWhite", "White", "PaleGreen", "Cornsilk"];

const pContent = document.getElementById('currentColor');

const contentClass = document.getElementsByClassName('content')[0];

document.getElementById('changeColorButton').addEventListener('click', function () {
    let random = Math.floor(Math.random() * colors.length);
    let newColor = colors[random];
    contentClass.style.backgroundColor = newColor;

    pContent.innerHTML = "Bakgrundsfärg: \"" + newColor + "\"";
});


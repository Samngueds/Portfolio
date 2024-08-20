function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTextColor() {
    const texto = document.getElementById('text');
    texto.style.color = getRandomColor();
}

// Mudar a cor do texto a cada 1 segundo
setInterval(changeTextColor, 1000);

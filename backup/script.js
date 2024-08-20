const eye = document.querySelector('.pupil'); // A pupila
const eyeContainer = document.querySelector('.eye'); // O contêiner da pupila

// Fator de suavização para o movimento da pupila
const smoothFactor = 0.3; // Ajuste este valor para alterar a suavidade
const maxDistance = 35; // Ajuste o alcance máximo para o movimento da pupila

// Posições iniciais da pupila
let pupilX = eye.clientWidth / 2;
let pupilY = eye.clientHeight / 2;

document.addEventListener('mousemove', (event) => {
    const rect = eyeContainer.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calcular a diferença em relação ao centro do contêiner
    const deltaX = mouseX - eyeX;
    const deltaY = mouseY - eyeY;
    
    // Calcular a distância e garantir que não ultrapasse o limite
    const distance = Math.min(maxDistance, Math.hypot(deltaX, deltaY));

    // Calcular o novo destino para a pupila
    const targetX = (deltaX / Math.hypot(deltaX, deltaY)) * distance;
    const targetY = (deltaY / Math.hypot(deltaX, deltaY)) * distance;

    // Atualizar a posição da pupila com suavização
    pupilX += (targetX - pupilX) * smoothFactor;
    pupilY += (targetY - pupilY) * smoothFactor;

    // Restringir a posição da pupila aos limites do contêiner
    const eyeRect = eyeContainer.getBoundingClientRect();
    const maxX = eyeRect.width / 2 - eye.clientWidth / 2;
    const maxY = eyeRect.height / 2 - eye.clientHeight / 2;

    // Garantir que a pupila permaneça dentro dos limites do contêiner
    pupilX = Math.max(-maxX, Math.min(pupilX, maxX));
    pupilY = Math.max(-maxY, Math.min(pupilY, maxY));

    // Ajustar a posição da pupila para que seu centro fique no local calculado
    eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});

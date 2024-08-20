const eye = document.querySelector('.pupil'); // A pupila
const eyeContainer = document.querySelector('.eye'); // O contêiner da pupila
let isAnimationActive = true; // Flag para verificar se a animação está ativa
const smoothFactor = 0.3; // Ajuste este valor para alterar a suavidade
const maxDistance = 35; // Ajuste o alcance máximo para o movimento da pupila
let trackingMouse = false; // Flag para verificar se o movimento do mouse está ativo

// Posições iniciais da pupila
let pupilX = eye.clientWidth / 2;
let pupilY = eye.clientHeight / 2;

// Função para ativar o movimento do mouse
function activateMouseMovement() {
    document.addEventListener('mousemove', (event) => {
        if (!isAnimationActive) { // Somente ativa o movimento se a animação tiver parado
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
        }
    });
}

// Função para recentralizar a pupila
function centerPupil() {
    eye.style.transform = 'translate(0, 0)';
}

// Desativa a animação e ativa o controle pelo mouse após 10 segundos
setTimeout(() => {
    isAnimationActive = false; // Desativa a animação
    eye.classList.add('mouse-active'); // Adiciona a classe para controlar com o mouse
    activateMouseMovement(); // Ativa o movimento do mouse
    trackingMouse = true; // Ativa o rastreamento do mouse
}, 10000); // 10 segundos

// Alternar entre rastrear o mouse e recentralizar a pupila a cada 10 segundos
setInterval(() => {
    if (trackingMouse) {
        trackingMouse = false;
        eye.classList.remove('mouse-active'); // Remove a classe para parar o movimento do mouse
        eye.classList.add('lookAround'); // Adiciona a classe para iniciar a animação
        centerPupil(); // Recentraliza a pupila
    } else {
        trackingMouse = true;
        eye.classList.remove('lookAround'); // Remove a classe para parar a animação
        eye.classList.add('mouse-active'); // Adiciona a classe para controlar com o mouse
        activateMouseMovement(); // Ativa o movimento do mouse
    }
}, 10000);

function startRedirect() {
    // Redireciona após 6 segundos (6000 milissegundos) de hover
    redirectTimeout = setTimeout(() => {
        window.location.href = "./index.html";
    }, 3000);
}

function stopRedirect() {
    // Cancela o redirecionamento se o mouse sair antes do tempo
    clearTimeout(redirectTimeout);
}

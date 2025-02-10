const face = document.getElementById("face");

face.addEventListener('animationiteration', () => {
    // Trigger dive animation after a certain number of bounces
    if (face.style.animation.includes('bounce')) {
        face.style.animation = 'bounce 2s infinite, dive 3s forwards';
    }
});
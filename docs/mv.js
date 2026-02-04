const imageAssets = [
    'assets/images/f_team_7_member_group_25d_1770178582006.png',
    'assets/images/oh_hye_sung_no_neon_1770178896137.png',
    'assets/images/oh_hye_sung_pose_25d_1770178320556.png',
    'assets/images/umji_25d_1770177205903.png',
    'assets/images/ma_dong_tak_25d_1770177231808.png',
    'assets/images/ma_dong_tak_pose_25d_1770178340313.png',
    'assets/images/baek_du_san_25d_1770177248468.png',
    'assets/images/baek_du_san_pose_25d_1770178356656.png',
    'assets/images/ha_guk_sang_25d_1770177297246.png',
    'assets/images/ha_guk_sang_pose_25d_1770178382190.png',
    'assets/images/jo_sang_gu_25d_1770177321161.png',
    'assets/images/jo_sang_gu_pose_25d_1770178399881.png',
    'assets/images/choi_gwan_25d_1770177345305.png',
    'assets/images/choi_gwan_pose_25d_1770178424846.png',
    'assets/images/lee_do_ha_no_neon_1770180076332.png',
    'assets/images/lee_do_ha_pose_25d_1770178443725.png'
];

const lyrics = [
    { time: 0, text: "F-TEAM 2050" },
    { time: 5, text: "HELL IS EMPTY" },
    { time: 10, text: "ALL THE DEVILS ARE HERE" },
    { time: 15, text: "지옥의 외인구단" },
    { time: 20, text: "오혜성" },
    { time: 25, text: "난 네가 기뻐하는 일라면" },
    { time: 30, text: "뭐든지 할 수 있어" },
    { time: 40, text: "LEGEND RETURNS" },
    { time: 50, text: "THE ALIEN BASEBALL TEAM" },
    { time: 60, text: "NO MERCY" },
    { time: 70, text: "ONLY VICTORY" }
];

const audio = document.getElementById('mv-audio');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const imageLayer = document.getElementById('image-layer');
const lyricText = document.getElementById('lyric-text');
const glitchOverlay = document.getElementById('glitch-overlay');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const loadingScreen = document.getElementById('loading-screen');

let audioContext, analyser, dataArray;
let isPlaying = false;
let currentImageIndex = -1;
let animationInterval;

// Preload Images
let loadedImages = 0;
imageAssets.forEach(src => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        loadedImages++;
        if (loadedImages === imageAssets.length) {
            loadingScreen.style.opacity = 0;
            setTimeout(() => loadingScreen.style.display = 'none', 500);
        }
    };
});

// Setup Audio Context (Must be triggered by user interaction)
function setupAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaElementSource(audio);
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        drawVisualizer();
    }
}

// Visualizer Loop
function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    if (!isPlaying) return;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / dataArray.length) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
        barHeight = dataArray[i] / 2;

        // Dynamic Color based on height
        const r = barHeight + 25 * (i / dataArray.length);
        const g = 250 * (i / dataArray.length);
        const b = 50;

        ctx.fillStyle = `rgb(${r},${0},${b})`; // Neon Pink/Purple vibes
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}

// Image Sequencer
function startImageSequence() {
    // Show first image immediately
    showNextImage();
    // Schedule beat detection or simple timer
    // For now, change image every 4 seconds (approx 1 bar at 60bpm, adjust as needed)
    if (animationInterval) clearInterval(animationInterval);
    animationInterval = setInterval(() => {
        showNextImage();
        triggerGlitch();
    }, 4000);
}

function showNextImage() {
    // Clean up old images
    // const oldImages = document.querySelectorAll('.mv-image');
    // if (oldImages.length > 2) {
    //     imageLayer.removeChild(oldImages[0]);
    // }

    // Logic: Create new div, append, animate in, remove old ones later
    // Actually, let's keep it simple: 2 buffers.

    currentImageIndex = (currentImageIndex + 1) % imageAssets.length;

    const div = document.createElement('div');
    div.className = 'mv-image';
    div.style.backgroundImage = `url('${imageAssets[currentImageIndex]}')`;

    // Random Ken Burns Effect
    const effects = ['fx-pan-right', 'fx-zoom-in', 'fx-zoom-out'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    div.classList.add(randomEffect);
    div.classList.add('active'); // Fade in

    imageLayer.appendChild(div);

    // Remove older siblings
    const siblings = Array.from(imageLayer.querySelectorAll('.mv-image'));
    if (siblings.length > 2) {
        // Keep the new one and the one fading out
        // Remove the oldest
        imageLayer.removeChild(siblings[0]);
    }
}

function triggerGlitch() {
    glitchOverlay.classList.add('glitch-anim');
    setTimeout(() => {
        glitchOverlay.classList.remove('glitch-anim');
    }, 500);
}

// Lyric Sequencer
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const progress = (currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;

    // Find current lyric
    // This is simple; for production, use index tracking to avoid loop
    const currentLyric = lyrics.slice().reverse().find(l => l.time <= currentTime);
    if (currentLyric) {
        if (lyricText.innerText !== currentLyric.text) {
            lyricText.style.opacity = 0;
            setTimeout(() => {
                lyricText.innerText = currentLyric.text;
                lyricText.style.opacity = 1;
            }, 200);
        }
    }
});

// Controls
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        setupAudio(); // Resume AudioContext if suspended
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
        audio.play();
        playBtn.innerText = 'PAUSE';
        isPlaying = true;
        startImageSequence();
    } else {
        audio.pause();
        playBtn.innerText = 'PLAY MV';
        isPlaying = false;
        clearInterval(animationInterval);
    }
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

// Resize Canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 200;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

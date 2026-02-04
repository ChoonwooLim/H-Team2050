/* =========================================
   F-TEAM 2050 - PRO MUSIC VIDEO PLAYER
   JavaScript Engine with Storyboard Sync
   ========================================= */

// ===== ASSET CONFIGURATION =====
const ASSETS = {
    backgrounds: [
        { id: 'rooftop', src: 'assets/images/bg_neo_seoul_rooftop.png' },
        { id: 'tunnel', src: 'assets/images/bg_stadium_tunnel.png' },
        { id: 'stadium', src: 'assets/images/bg_hologram_stadium.png' },
        { id: 'rivalry', src: 'assets/images/bg_rivalry_clash.png' },
        { id: 'night_sky', src: 'assets/images/bg_night_sky.png' },
        { id: 'sunrise', src: 'assets/images/bg_neo_seoul_sunrise.png' },
        // NEW STADIUM SCENES
        { id: 'homerun', src: 'assets/images/bg_stadium_homerun.png' },
        { id: 'pitcher', src: 'assets/images/bg_stadium_pitcher.png' },
        { id: 'scoreboard', src: 'assets/images/bg_stadium_scoreboard.png' },
        { id: 'diamond', src: 'assets/images/bg_stadium_diamond.png' },
        { id: 'dugout', src: 'assets/images/bg_stadium_dugout.png' }
    ],
    characters: [
        { id: 'hye_sung', src: 'assets/images/oh_hye_sung_no_neon_1770178896137.png' },
        { id: 'hye_sung_pose', src: 'assets/images/oh_hye_sung_pose_25d_1770178320556.png' },
        { id: 'umji', src: 'assets/images/umji_25d_1770177205903.png' },
        { id: 'dong_tak', src: 'assets/images/ma_dong_tak_25d_1770177231808.png' },
        { id: 'dong_tak_pose', src: 'assets/images/ma_dong_tak_pose_25d_1770178340313.png' },
        { id: 'du_san', src: 'assets/images/baek_du_san_25d_1770177248468.png' },
        { id: 'du_san_pose', src: 'assets/images/baek_du_san_pose_25d_1770178356656.png' },
        { id: 'guk_sang', src: 'assets/images/ha_guk_sang_25d_1770177297246.png' },
        { id: 'guk_sang_pose', src: 'assets/images/ha_guk_sang_pose_25d_1770178382190.png' },
        { id: 'sang_gu', src: 'assets/images/jo_sang_gu_25d_1770177321161.png' },
        { id: 'sang_gu_pose', src: 'assets/images/jo_sang_gu_pose_25d_1770178399881.png' },
        { id: 'gwan', src: 'assets/images/choi_gwan_25d_1770177345305.png' },
        { id: 'gwan_pose', src: 'assets/images/choi_gwan_pose_25d_1770178424846.png' },
        { id: 'do_ha', src: 'assets/images/lee_do_ha_no_neon_1770180076332.png' },
        { id: 'do_ha_pose', src: 'assets/images/lee_do_ha_pose_25d_1770178443725.png' },
        { id: 'group', src: 'assets/images/f_team_7_member_group_25d_1770178582006.png' }
    ],
    videos: [
        { id: 'vid1', src: 'assets/videos/grok-video-33419844-0b70-4637-800b-dd92ad9e9875.mp4' },
        { id: 'vid2', src: 'assets/videos/grok-video-488e430b-da3a-49ba-85e9-f7bcfa1369e4.mp4' },
        { id: 'vid3', src: 'assets/videos/grok-video-4cf2b268-b659-4abd-a1a5-c469425e54e9.mp4' },
        { id: 'vid4', src: 'assets/videos/grok-video-571cc656-ab04-4702-b1a6-cfe13eeff0a4.mp4' },
        { id: 'vid5', src: 'assets/videos/grok-video-6d91df41-010d-4ef3-97f5-6491cd4ff134.mp4' },
        { id: 'vid6', src: 'assets/videos/grok-video-ac1c269f-bc01-4052-9bce-9227137b521c.mp4' },
        { id: 'vid7', src: 'assets/videos/grok-video-aca3ad70-c768-490b-aa0a-83622106da29.mp4' },
        { id: 'vid8', src: 'assets/videos/grok-video-b5133ecb-1bb1-4e8c-b7c5-245d2681a35c.mp4' },
        { id: 'vid9', src: 'assets/videos/grok-video-cbea9c6e-2f14-4ffb-9611-2457ac2d5f9d.mp4' },
        { id: 'vid10', src: 'assets/videos/grok-video-cc3f708f-6da8-4906-8939-5b5f84e56f25.mp4' },
        { id: 'vid11', src: 'assets/videos/grok-video-d89b5083-937e-4a12-8236-8d248700d71d.mp4' },
        { id: 'vid12', src: 'assets/videos/grok-video-da28838b-06ec-4886-a9e2-b847978cadda.mp4' },
        { id: 'vid13', src: 'assets/videos/grok-video-dcdc1c97-2546-42ef-917a-5d7dc2dd1128.mp4' },
        { id: 'vid14', src: 'assets/videos/grok-video-ee02feea-a264-44c5-b285-6f1d3967ae41.mp4' },
        { id: 'vid15', src: 'assets/videos/grok-video-488e430b-da3a-49ba-85e9-f7bcfa1369e4 (2).mp4' }
    ]
};

// ===== STORYBOARD TIMELINE - DYNAMIC RHYTHM SYNC =====
const TIMELINE = [
    // SCENE 1: AWAKENING (0:00 - 0:15)
    { time: 0, scene: 'AWAKENING', bg: 'rooftop', char: null, title: 'F-TEAM 2050', subtitle: '', kb: 'kb-zoom-in', rain: true, glitch: true },
    { time: 1.5, glitch: true },
    { time: 2, char: 'hye_sung', kb: 'kb-pan-up' },
    { time: 3.5, glitch: true },
    { time: 5, title: 'HELL IS EMPTY', subtitle: '' },
    { time: 6.5, glitch: true },
    { time: 8, title: 'ALL THE DEVILS ARE HERE', subtitle: '지옥은 비었다' },
    { time: 10, bg: 'dugout', glitch: true },
    { time: 12, title: '', subtitle: '', bg: 'rooftop' },
    { time: 13.5, glitch: true },

    // SCENE 2: HERO INTRO (0:15 - 0:45) - FASTER CUTS
    { time: 15, scene: 'HERO INTRO', char: 'hye_sung_pose', kb: 'kb-zoom-out', title: '오혜성', subtitle: 'THE LEADER', rain: false },
    { time: 17, glitch: true },
    { time: 18, char: 'umji', kb: 'kb-pan-left', title: '최엄지', subtitle: 'THE MYSTIC' },
    { time: 20, glitch: true },
    { time: 21, char: 'dong_tak', kb: 'kb-zoom-in', title: '마동탁', subtitle: 'THE RIVAL' },
    { time: 23, glitch: true },
    { time: 24, char: 'du_san_pose', kb: 'kb-pan-right', title: '백두산', subtitle: 'THE WALL' },
    { time: 26, glitch: true },
    { time: 27, char: 'guk_sang_pose', kb: 'kb-zoom-out', title: '하국상', subtitle: 'THE WIND' },
    { time: 29, glitch: true },
    { time: 30, char: 'sang_gu', kb: 'kb-pan-up', title: '조상구', subtitle: 'THE SHADOW' },
    { time: 32, glitch: true },
    { time: 33, char: 'gwan_pose', kb: 'kb-zoom-in', title: '최관', subtitle: 'THE BLADE' },
    { time: 35, glitch: true },
    { time: 36, char: 'do_ha_pose', kb: 'kb-pan-left', title: '이도하', subtitle: 'THE FLASH' },
    { time: 38, glitch: true },
    { time: 40, char: 'group', kb: 'kb-zoom-out', title: 'F-TEAM', subtitle: '7인의 전설' },
    { time: 43, title: '', subtitle: '' },

    // SCENE 3: ASSEMBLY (0:45 - 1:00) - STADIUM INTRO
    { time: 45, scene: 'ASSEMBLY', bg: 'tunnel', char: null, kb: 'kb-zoom-in', title: '', subtitle: '', glitch: true },
    { time: 47, char: 'group', glitch: true },
    { time: 49, bg: 'pitcher', kb: 'kb-pan-up' },
    { time: 51, bg: 'diamond', glitch: true },
    { time: 53, bg: 'scoreboard', title: 'GAME TIME', subtitle: '경기 시작' },
    { time: 55, bg: 'stadium', glitch: true, title: '', subtitle: '' },
    { time: 57, glitch: true },
    { time: 59, bg: 'homerun', glitch: true },

    // SCENE 4: BATTLE (1:00 - 1:30) - RAPID FIRE CUTS
    { time: 60, scene: 'BATTLE', bg: 'stadium', char: 'hye_sung_pose', kb: 'kb-zoom-out', glitch: true, rain: true },
    { time: 61, glitch: true },
    { time: 62, char: 'du_san_pose', kb: 'kb-pan-right' },
    { time: 63, bg: 'homerun', glitch: true },
    { time: 64, char: 'guk_sang_pose', kb: 'kb-zoom-in' },
    { time: 65, glitch: true },
    { time: 66, char: 'sang_gu_pose', kb: 'kb-pan-left', bg: 'diamond' },
    { time: 67, glitch: true },
    { time: 68, char: 'gwan_pose', kb: 'kb-zoom-out', bg: 'pitcher' },
    { time: 69, glitch: true },
    { time: 70, char: 'do_ha_pose', kb: 'kb-pan-up', bg: 'stadium' },
    { time: 71, glitch: true },
    { time: 72, char: 'dong_tak_pose', kb: 'kb-zoom-in', bg: 'scoreboard' },
    { time: 73, glitch: true },
    { time: 74, char: 'hye_sung_pose', kb: 'kb-zoom-out', title: 'NO MERCY', subtitle: '', bg: 'homerun' },
    { time: 76, glitch: true },
    { time: 78, char: 'group', kb: 'kb-pan-right', bg: 'stadium' },
    { time: 80, glitch: true },
    { time: 82, bg: 'diamond', glitch: true },
    { time: 85, title: '', subtitle: '', rain: false },

    // SCENE 5: RIVALRY (1:30 - 2:00) - INTENSE DUEL
    { time: 90, scene: 'RIVALRY', bg: 'rivalry', char: 'hye_sung', kb: 'kb-pan-left', glitch: true },
    { time: 92, glitch: true },
    { time: 95, char: 'dong_tak', kb: 'kb-pan-right' },
    { time: 97, glitch: true },
    { time: 100, char: 'hye_sung_pose', kb: 'kb-zoom-in', bg: 'homerun' },
    { time: 102, glitch: true },
    { time: 105, char: 'dong_tak_pose', kb: 'kb-zoom-out', bg: 'rivalry' },
    { time: 107, glitch: true },
    { time: 110, char: 'group', kb: 'kb-pan-up', bg: 'stadium' },
    { time: 112, glitch: true },
    { time: 115, title: 'ONLY VICTORY', subtitle: '오직 승리', bg: 'scoreboard' },
    { time: 118, glitch: true },

    // SCENE 6: CLIMAX (2:00 - 2:30) - MAX INTENSITY
    { time: 120, scene: 'CLIMAX', bg: 'stadium', char: 'group', kb: 'kb-zoom-in', glitch: true, title: '', subtitle: '' },
    { time: 121.5, glitch: true },
    { time: 123, bg: 'homerun', char: 'hye_sung_pose', kb: 'kb-zoom-out' },
    { time: 124.5, glitch: true },
    { time: 126, bg: 'diamond', char: 'dong_tak_pose', kb: 'kb-pan-left' },
    { time: 127.5, glitch: true },
    { time: 129, bg: 'pitcher', char: 'du_san_pose', kb: 'kb-pan-right' },
    { time: 130.5, glitch: true },
    { time: 132, bg: 'stadium', char: 'guk_sang_pose', kb: 'kb-zoom-in' },
    { time: 133.5, glitch: true },
    { time: 135, bg: 'scoreboard', char: 'sang_gu_pose', kb: 'kb-zoom-out' },
    { time: 136.5, glitch: true },
    { time: 138, bg: 'homerun', char: 'gwan_pose' },
    { time: 139.5, glitch: true },
    { time: 141, bg: 'stadium', char: 'do_ha_pose' },
    { time: 142.5, glitch: true },
    { time: 144, char: 'group', kb: 'kb-pan-up', bg: 'diamond' },
    { time: 146, glitch: true },
    { time: 148, bg: 'homerun', glitch: true },

    // SCENE 7: BRIDGE (2:30 - 2:50) - EMOTIONAL
    { time: 150, scene: 'BRIDGE', bg: 'night_sky', char: 'hye_sung', kb: 'kb-zoom-in', title: '', subtitle: '', rain: false },
    { time: 154, char: 'umji', kb: 'kb-pan-left' },
    { time: 158, char: 'hye_sung', kb: 'kb-zoom-out', title: '난 너에게', subtitle: '모든 걸 다 줄게' },
    { time: 162, char: 'group', title: '', subtitle: '' },
    { time: 166, glitch: true },

    // SCENE 8: FINAL DROP (2:50 - 3:10) - VICTORY
    { time: 170, scene: 'FINAL DROP', bg: 'sunrise', char: 'group', kb: 'kb-zoom-in', glitch: true, title: '', subtitle: '' },
    { time: 172, glitch: true },
    { time: 174, bg: 'homerun', glitch: true },
    { time: 176, char: 'hye_sung_pose', kb: 'kb-zoom-out', title: 'F-TEAM 2050', subtitle: '', bg: 'scoreboard' },
    { time: 178, glitch: true },
    { time: 180, bg: 'stadium', char: 'group', kb: 'kb-pan-up' },
    { time: 182, glitch: true },
    { time: 184, bg: 'diamond' },
    { time: 186, bg: 'sunrise', glitch: true },
    { time: 188, char: 'group', kb: 'kb-pan-right' },

    // SCENE 9: OUTRO (3:10 - 3:30) - LEGEND
    { time: 190, scene: 'OUTRO', bg: 'sunrise', char: 'group', kb: 'kb-zoom-out' },
    { time: 193, glitch: true },
    { time: 195, char: 'hye_sung', kb: 'kb-pan-up', title: 'THE LEGEND RETURNS', subtitle: '' },
    { time: 198, bg: 'night_sky', glitch: true },
    { time: 200, title: 'F-TEAM 2050', subtitle: '외인구단', bg: 'sunrise' },
    { time: 203, glitch: true },
    { time: 205, title: '', subtitle: '' },
    { time: 208, bg: 'rooftop', glitch: true }
];

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loading-screen');
const loadProgress = document.getElementById('load-progress');
const bgLayer = document.getElementById('bg-layer');
const charLayer = document.getElementById('char-layer');
const glitchOverlay = document.getElementById('glitch-overlay');
const chromaticOverlay = document.getElementById('chromatic-overlay');
const flashOverlay = document.getElementById('flash-overlay');
const rainOverlay = document.getElementById('rain-overlay');
const particles = document.getElementById('particles');
const energyLines = document.getElementById('energy-lines');
const mvPlayer = document.getElementById('mv-player');
const videoLayer = document.getElementById('video-layer');
const videoBg = document.getElementById('video-bg');
const mainTitle = document.getElementById('main-title');
const subtitle = document.getElementById('subtitle');
const sceneName = document.getElementById('scene-name');
const playBtn = document.getElementById('play-btn');
const timeline = document.getElementById('timeline');
const timelineProgress = document.getElementById('timeline-progress');
const timelineHandle = document.getElementById('timeline-handle');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('audio');

// ===== STATE =====
let isPlaying = false;
let audioContext, analyser, dataArray;
let loadedAssets = 0;
let totalAssets = ASSETS.backgrounds.length + ASSETS.characters.length;
let assetMap = {};
let lastTimelineIndex = -1;

// ===== PRELOAD ASSETS =====
function preloadAssets() {
    const allAssets = [...ASSETS.backgrounds, ...ASSETS.characters];

    allAssets.forEach(asset => {
        const img = new Image();
        img.onload = () => {
            loadedAssets++;
            assetMap[asset.id] = asset.src;
            const percent = Math.round((loadedAssets / totalAssets) * 100);
            loadProgress.textContent = `LOADING ASSETS... ${percent}%`;

            if (loadedAssets === totalAssets) {
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    initPlayer();
                }, 500);
            }
        };
        img.onerror = () => {
            console.warn(`Failed to load: ${asset.src}`);
            loadedAssets++;
        };
        img.src = asset.src;
    });

    // Register video assets (no preload needed, they stream)
    ASSETS.videos.forEach(vid => {
        assetMap[vid.id] = vid.src;
    });
}

// ===== INIT PLAYER =====
function initPlayer() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Set initial state from timeline
    applyTimelineState(TIMELINE[0]);

    // Audio events
    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onAudioEnded);

    // Controls
    playBtn.addEventListener('click', togglePlay);
    timeline.addEventListener('click', seekTo);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        }
    });
}

// ===== PLAYBACK CONTROLS =====
function togglePlay() {
    if (audio.paused) {
        setupAudioContext();
        audio.play();
        isPlaying = true;
        playBtn.querySelector('.btn-icon').textContent = '⏸';
        playBtn.querySelector('.btn-text').textContent = 'PAUSE';
        requestAnimationFrame(drawVisualizer);
    } else {
        audio.pause();
        isPlaying = false;
        playBtn.querySelector('.btn-icon').textContent = '▶';
        playBtn.querySelector('.btn-text').textContent = 'PLAY';
    }
}

function seekTo(e) {
    const rect = timeline.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
}

function toggleFullscreen() {
    const player = document.getElementById('mv-player');
    if (!document.fullscreenElement) {
        player.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function onTimeUpdate() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percent = (currentTime / duration) * 100;

    timelineProgress.style.width = `${percent}%`;
    timelineHandle.style.left = `${percent}%`;
    currentTimeEl.textContent = formatTime(currentTime);

    // Find current timeline state
    for (let i = TIMELINE.length - 1; i >= 0; i--) {
        if (currentTime >= TIMELINE[i].time) {
            if (i !== lastTimelineIndex) {
                lastTimelineIndex = i;
                applyTimelineState(TIMELINE[i]);
            }
            break;
        }
    }
}

function onAudioEnded() {
    isPlaying = false;
    playBtn.querySelector('.btn-icon').textContent = '▶';
    playBtn.querySelector('.btn-text').textContent = 'REPLAY';
    lastTimelineIndex = -1;
}

// ===== TIMELINE STATE APPLICATION =====
function applyTimelineState(state) {
    // Scene name
    if (state.scene) {
        sceneName.textContent = state.scene;
    }

    // Background
    if (state.bg) {
        showLayer(bgLayer, assetMap[state.bg], state.kb);
    }

    // Character
    if (state.char !== undefined) {
        if (state.char === null) {
            clearLayer(charLayer);
        } else {
            showLayer(charLayer, assetMap[state.char], state.kb);
        }
    }

    // Text
    if (state.title !== undefined) {
        if (state.title) {
            mainTitle.textContent = state.title;
            mainTitle.classList.add('show');
        } else {
            mainTitle.classList.remove('show');
        }
    }

    if (state.subtitle !== undefined) {
        if (state.subtitle) {
            subtitle.textContent = state.subtitle;
            subtitle.classList.add('show');
        } else {
            subtitle.classList.remove('show');
        }
    }

    // VFX
    if (state.glitch) {
        triggerGlitch();
    }

    if (state.rain !== undefined) {
        rainOverlay.classList.toggle('active', state.rain);
    }

    // Scene-based intensity effects
    if (state.scene) {
        const highIntensityScenes = ['BATTLE', 'CLIMAX', 'FINAL DROP'];
        const mediumIntensityScenes = ['RIVALRY', 'ASSEMBLY'];

        if (highIntensityScenes.includes(state.scene)) {
            setIntensityEffects('high');
        } else if (mediumIntensityScenes.includes(state.scene)) {
            setIntensityEffects('medium');
        } else {
            setIntensityEffects('low');
        }
    }

    // Video layer handling
    if (state.video !== undefined) {
        if (state.video) {
            playVideo(assetMap[state.video]);
        } else {
            hideVideo();
        }
    }
}

// ===== VIDEO LAYER CONTROL =====
function playVideo(src) {
    if (!src) return;
    videoBg.src = src;
    videoBg.play();
    videoLayer.classList.add('active');
    bgLayer.style.opacity = '0.3'; // Dim background
}

function hideVideo() {
    videoBg.pause();
    videoLayer.classList.remove('active');
    bgLayer.style.opacity = '1';
}

function showLayer(layer, src, kbClass) {
    if (!src) return;

    // Create new image div
    const div = document.createElement('div');
    div.className = 'layer-image';
    div.style.backgroundImage = `url('${src}')`;

    if (kbClass) {
        div.classList.add(kbClass);
        div.style.setProperty('--kb-duration', '4s');
    }

    layer.appendChild(div);

    // Trigger reflow and activate
    requestAnimationFrame(() => {
        div.classList.add('active');
    });

    // Remove old images
    const images = layer.querySelectorAll('.layer-image');
    if (images.length > 2) {
        images[0].remove();
    }
}

function clearLayer(layer) {
    const images = layer.querySelectorAll('.layer-image');
    images.forEach(img => img.classList.remove('active'));
}

function triggerGlitch() {
    // Random VFX combo for variety
    const effects = ['glitch', 'chromatic', 'flash', 'shake'];
    const numEffects = Math.floor(Math.random() * 2) + 1; // 1-2 effects

    // Always trigger glitch
    glitchOverlay.classList.add('active');
    setTimeout(() => glitchOverlay.classList.remove('active'), 300);

    // Random additional effects
    for (let i = 0; i < numEffects; i++) {
        const effect = effects[Math.floor(Math.random() * effects.length)];
        triggerEffect(effect);
    }
}

function triggerEffect(type) {
    switch (type) {
        case 'chromatic':
            chromaticOverlay.classList.add('active');
            setTimeout(() => chromaticOverlay.classList.remove('active'), 300);
            break;
        case 'flash':
            flashOverlay.classList.add('active');
            setTimeout(() => flashOverlay.classList.remove('active'), 200);
            break;
        case 'shake':
            mvPlayer.classList.add('shake');
            setTimeout(() => mvPlayer.classList.remove('shake'), 150);
            break;
        case 'pulse':
            mvPlayer.classList.add('beat-pulse');
            setTimeout(() => mvPlayer.classList.remove('beat-pulse'), 150);
            break;
    }
}

// Enable particles and energy lines during intense scenes
function setIntensityEffects(intensity) {
    if (intensity === 'high') {
        particles.classList.add('active');
        energyLines.classList.add('active');
    } else if (intensity === 'medium') {
        particles.classList.add('active');
        energyLines.classList.remove('active');
    } else {
        particles.classList.remove('active');
        energyLines.classList.remove('active');
    }
}

// ===== AUDIO VISUALIZER =====
function setupAudioContext() {
    if (audioContext) return;

    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaElementSource(audio);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    dataArray = new Uint8Array(analyser.frequencyBinCount);
}

function drawVisualizer() {
    if (!isPlaying) return;
    requestAnimationFrame(drawVisualizer);

    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barCount = dataArray.length;
    const barWidth = canvas.width / barCount;
    const centerY = canvas.height;

    for (let i = 0; i < barCount; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
        const x = i * barWidth;

        // Gradient color
        const hue = 180 + (i / barCount) * 60; // Cyan to Magenta
        ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.8)`;

        // Draw bar from bottom
        ctx.fillRect(x, centerY - barHeight, barWidth - 1, barHeight);
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 120;
}

// ===== UTILITIES =====
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===== START =====
preloadAssets();

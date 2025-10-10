const audio = document.getElementById('audioPlayer');
const audioVolume = document.getElementById('audioVolume');
const audioPlayPause = document.getElementById('audioPlayPause');
const audioMute = document.getElementById('audioMute');
const video = document.getElementById('videoPlayer');
const videoVolume = document.getElementById('videoVolume');
const videoPlayPause = document.getElementById('videoPlayPause');
const toggleCaptions = document.getElementById('toggleCaptions');


// Audio controls
audioVolume.addEventListener('input', e => audio.volume = parseFloat(e.target.value));
audioPlayPause.addEventListener('click', () => audio.paused ? audio.play() : audio.pause());
audioMute.addEventListener('click', () => audio.muted = !audio.muted);


audio.addEventListener('play', () => audioPlayPause.textContent = 'Pause');
audio.addEventListener('pause', () => audioPlayPause.textContent = 'Play');
audio.addEventListener('volumechange', () => audioMute.textContent = audio.muted ? 'Unmute' : 'Mute');


// Video controls
videoVolume.addEventListener('input', e => video.volume = parseFloat(e.target.value));
videoPlayPause.addEventListener('click', () => video.paused ? video.play() : video.pause());
video.addEventListener('play', () => videoPlayPause.textContent = 'Pause');
video.addEventListener('pause', () => videoPlayPause.textContent = 'Play');


// Captions toggle
toggleCaptions.addEventListener('click', () => {
const tracks = video.textTracks;
for (let i = 0; i < tracks.length; i++) {
const t = tracks[i];
t.mode = (t.mode === 'showing') ? 'hidden' : 'showing';
}
const anyShowing = Array.from(tracks).some(t => t.mode === 'showing');
toggleCaptions.textContent = anyShowing ? 'Hide Captions' : 'Show Captions';
});
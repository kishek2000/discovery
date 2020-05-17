export function PauseSong(classN, src) {
  const player = document.getElementById(`${classN}BgMusic`);
  if (player !== null) {
    player.autoplay = false;
    player.pause();
    player.src = src;
  }
}

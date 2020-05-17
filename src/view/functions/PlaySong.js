export function PlaySong(classN, src) {
  const player = document.getElementById(`${classN}BgMusic`);
  player.play();
}

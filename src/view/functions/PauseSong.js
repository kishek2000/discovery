export function PauseSong(src) {
  console.log("pause call triggered");
  const player = document.getElementById(`bgMusic`);
  if (player !== null) {
    player.autoplay = false;
    player.pause();
    player.src = src;
  }
}

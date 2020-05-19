import mp3 from "../../static/music/mainBg.mp3";

import React from "react";
export function BgJingle() {
  return (
    <audio
      autoPlay="autoplay"
      controls="controls"
      loop="loop"
      id={`bgMusic`}
      style={{ display: "none" }}
    >
      <source src={mp3} type="audio/mp3" />
    </audio>
  );
}

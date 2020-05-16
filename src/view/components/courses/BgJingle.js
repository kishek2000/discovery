import React from "react";
export function BgJingle(props) {
  return (
    <audio
      autoPlay="autoplay"
      controls="controls"
      loop="loop"
      id={`${props.class}BgMusic`}
    >
      <source src={props.mp3} type="audio/mp3" />
    </audio>
  );
}

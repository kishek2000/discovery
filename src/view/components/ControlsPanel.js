import React from "react";
import { PauseSong } from "../functions/PauseSong";
import { PlaySong } from "../functions/PlaySong";

export function ControlsPanel({
  setSubject,
  setHome,
  setPlaying,
  playing,
  play,
  pause,
  mp3,
  classN,
}) {
  return (
    <div className="App-experience-controls-header">
      <img
        className="App-home-button"
        src="https://img.icons8.com/material-sharp/96/000000/home.png"
        alt="home"
        onClick={() => {
          setSubject(false);
          setHome(true);
          setPlaying(true);
        }}
      />
      <div
        className="music-pause"
        onClick={() => {
          setPlaying(!playing);
          !playing === false ? PauseSong(classN, mp3) : PlaySong(classN, mp3);
        }}
      >
        {playing === true ? (
          <img src={play} className="play-img" alt="PLAY" />
        ) : (
          <img src={pause} className="pause-img" alt="PAUSE" />
        )}
      </div>
    </div>
  );
}

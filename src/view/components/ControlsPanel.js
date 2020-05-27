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
}) {
  console.log("in this panel, song is currently ", playing);
  return (
    <div className="App-experience-controls-header">
      {setHome && (
        <div className="App-home-button-wrapper">
          <img
            className="App-home-button"
            src="https://img.icons8.com/material-sharp/96/000000/home.png"
            alt="home"
            onClick={() => {
              setSubject(false);
              setHome(true);
            }}
          />
        </div>
      )}
      <div
        className="music-pause"
        onClick={() => {
          setPlaying(!playing);
          !playing === false ? PauseSong(mp3) : PlaySong();
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

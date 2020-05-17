import React from "react";
import { PlaySong } from "../functions/PlaySong";

export function ExperienceOverlay({
  setOverlayVideo,
  mp3,
  classN,
  setPlaying,
  video,
}) {
  return (
    video !== "" && (
      <div
        className="App-experience-overlay"
        onClick={() => {
          setOverlayVideo("");
          PlaySong(classN, mp3);
          setPlaying(true);
        }}
      >
        <iframe
          className="App-experience-overlay-video"
          src={video.link}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope;"
          allowFullScreen="allowfullscreen"
          title="Enlarged Video"
        ></iframe>
        />
      </div>
    )
  );
}

import React from "react";
import { PauseSong } from "../functions/PauseSong";

export function RenderListVideos({
  classN,
  mp3,
  list,
  setOverlayVideo,
  num,
  setPlaying,
}) {
  return (
    <div className="App-experience-list-videos" index={num}>
      {list["videos"].map((item, index) => (
        <div className="App-experience-media-item" key={index}>
          <img
            className="App-experience-media-thumbnail"
            src={`https://img.youtube.com/vi/${item["id"]}/hqdefault.jpg`}
            alt="video-thumbnail"
            onClick={() => {
              setOverlayVideo({
                link: `https://www.youtube.com/embed/${item["id"]}`,
                list: list,
                title: item["title"],
              });
              PauseSong(classN, mp3);
              setPlaying(false);
            }}
          />
          <div className="App-experience-media-title">{item["title"]}</div>
          {/* <div className="App-experience-media-description">
            {item["description"]}
          </div> */}
        </div>
      ))}
    </div>
  );
}

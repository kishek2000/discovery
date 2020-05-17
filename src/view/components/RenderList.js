import React from "react";
import { ListNav } from "./ListNav";
import { RenderListVideos } from "./RenderListVideos";

export function RenderList({
  num,
  list,
  setOverlayVideo,
  classN,
  mp3,
  setPlaying,
}) {
  const videosProps = {
    classN,
    mp3,
    list,
    setOverlayVideo,
    num,
    setPlaying,
  };
  return (
    <div className="list-container">
      <ListNav index={num} list={list} />
      <div className="App-experience-list" index={num}>
        <div className="App-experience-list-meta">
          <div className="App-experience-list-title">{list["title"]}</div>
          <div className="App-experience-list-background">
            {list["background"]}
          </div>
        </div>
        <RenderListVideos {...videosProps} />
      </div>
    </div>
  );
}

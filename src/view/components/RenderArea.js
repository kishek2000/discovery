import React from "react";
import { RenderList } from "./RenderList";

export function RenderArea({
  list,
  classN,
  mp3,
  setPlaying,
  setOverlayVideo,
  index,
}) {
  const listProps = {
    setOverlayVideo,
    classN,
    mp3,
    setPlaying,
  };
  return (
    <div className="App-experience-area" key={index}>
      <div className="App-experience-list-meta">
        <div className="App-experience-list-title">{list["title"]}</div>
        <div className="App-experience-list-background">
          {list["background"]}
        </div>
      </div>
      {list.lists.map((nest) => (
        <RenderList
          num={nest["index"]}
          list={nest}
          {...listProps}
          index={index}
        />
      ))}
    </div>
  );
}

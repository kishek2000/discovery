import React from "react";
import pause from "../../static/images/pause.png";
import play from "../../static/images/play.png";
import mp3 from "../../static/music/mainBg.mp3";
import { RenderList } from "./RenderList";
import { ControlsPanel } from "./ControlsPanel";
import { RenderArea } from "./RenderArea";

export function ExperienceContent({
  classN,
  items,
  setSubject,
  setOverlayVideo,
  setHome,
  playing,
  setPlaying,
}) {
  if (items !== []) {
    const data = items;
    const controlProps = {
      setSubject,
      setHome,
      setPlaying,
      playing,
      play,
      pause,
      mp3,
      classN,
    };
    const listProps = {
      setOverlayVideo,
      classN,
      mp3,
      setPlaying,
    };
    return (
      <>
        <ControlsPanel {...controlProps} />
        <div className={`App-${classN}-experience-media`}>
          {data.map((list, index) =>
            list.type === "list" ? (
              <RenderList
                num={list["index"]}
                list={list}
                {...listProps}
                key={index}
              />
            ) : (
              <RenderArea
                list={list}
                {...listProps}
                key={index}
                index={index}
              />
            )
          )}
        </div>
      </>
    );
  }
}

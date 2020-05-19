import React from "react";
import { allMedia } from "../../data";
import { ExperienceContent } from "./ExperienceContent";

export function RenderExperiencePage({
  classN,
  setSubject,
  setOverlayVideo,
  setHome,
  playing,
  setPlaying,
}) {
  const storage = new allMedia();
  const items = storage.getAll()[`${classN}`];
  const contentProps = {
    classN,
    items: items["data"],
    setSubject,
    setOverlayVideo,
    setHome,
    playing,
    setPlaying,
  };
  return (
    <>
      <div className="App-experience-title">{items["title"]}</div>
      <div className={`App-experience-usp`}>{items["usp"]}</div>
      <div className={`App-experience-content`}>
        <div className={`App-experience-body`}>
          <div>
            <div className={`App-experience-media`}>
              <ExperienceContent {...contentProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

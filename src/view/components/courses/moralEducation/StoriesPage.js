import React from "react";
import { allMedia } from "../../../../data/index";
import { MediaGroup } from "../MediaGroup";
import mp3 from "../../../../data/courses/moralEducation/stories.mp3";

export function StoriesPage(props) {
  const storage = new allMedia();
  const data = storage.getMoralEducation();
  return (
    <>
      {props.class === "stories" && (
        <>
          <audio
            autoPlay="autoplay"
            controls="controls"
            loop="loop"
            id="storiesBgMusic"
          >
            <source src={mp3} type="audio/mp3" />
          </audio>
          <>
            <div className="App-experience-title">STORIES</div>
            <div className="App-stories-experience-usp">
              Welcome to a world of stories and fun! Click on any picture to
              play!
            </div>
          </>
          <div className="App-stories-experience-content">
            <div className="App-stories-experience-body">
              <div className="App-stories-experience-media">
                <MediaGroup
                  class={props.class}
                  items={data}
                  setOverlayVideo={props.setOverlayVideo}
                  src={mp3}
                  setSubject={props.setSubject}
                  setHome={props.setHome}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

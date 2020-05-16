import React from "react";
import { MediaGroup } from "../MediaGroup";
import { allMedia } from "../../../../data/index";
import mp3 from "../../../../data/courses/mainbg.mp3";
import { BgJingle } from "../BgJingle";

export function CreativePage(props) {
  const storage = new allMedia();
  const data = storage.getCreative();
  return (
    <>
      {props.class === "creative" && (
        <>
          <BgJingle class={props.class} mp3={mp3} />
          <>
            <div className="App-experience-title">CREATIVE</div>
            <div className="App-creative-experience-usp">
              Let's have some fun and explore the world of imagination and
              curiosity!
            </div>
          </>
          <div className="App-creative-experience-content">
            <div className="App-creative-experience-body">
              <div>
                <div className="App-creative-experience-media">
                  <MediaGroup
                    class={props.class}
                    items={data}
                    setSubject={props.setSubject}
                    setHome={props.setHome}
                    setOverlayVideo={props.setOverlayVideo}
                    src={mp3}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

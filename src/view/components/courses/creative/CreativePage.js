import React from "react";
import { MediaGroup } from "../MediaGroup";
import { allMedia } from "../../../../data/index";

export function CreativePage(props) {
  const storage = new allMedia();
  const data = storage.getCreative();
  return (
    <>
      {props.class === "creative" && (
        <>
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

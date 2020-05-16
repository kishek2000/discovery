import React from "react";
import { MediaGroup } from "../MediaGroup";
import { allMedia } from "../../../../data/index";
import mp3 from "../../../../data/courses/mainbg.mp3";
import { BgJingle } from "../BgJingle";

export function SpacePage(props) {
  const storage = new allMedia();
  const data = storage.getSpace();
  return (
    <>
      {props.class === "space" && (
        <>
          <BgJingle class={props.class} mp3={mp3} />
          <>
            <div className="App-experience-title">SPACE</div>
            <div className="App-space-experience-usp">
              Ever looked at the sky and wondered where it all came from?
            </div>
          </>
          <div className="App-space-experience-content">
            <div className="App-space-experience-body">
              <div>
                <div className="App-space-experience-media">
                  <MediaGroup
                    class={props.class}
                    items={data}
                    setSubject={props.setSubject}
                    setOverlayVideo={props.setOverlayVideo}
                    setHome={props.setHome}
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

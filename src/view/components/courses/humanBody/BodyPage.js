import React from "react";
import { MediaGroup } from "../MediaGroup";
import { allMedia } from "../../../../data/index";
import mp3 from "../../../../data/courses/mainbg.mp3";
import { BgJingle } from "../BgJingle";

export function BodyPage(props) {
  const storage = new allMedia();
  const data = storage.getBody();
  return (
    <>
      {props.class === "body" && (
        <>
          <BgJingle class={props.class} mp3={mp3} />
          <>
            <div className="App-experience-title">HEALTH</div>
            <div className="App-body-experience-usp">
              There is so much we can wonder and learn about health, and our
              bodies. Let's dive right into it!
            </div>
          </>
          <div className="App-body-experience-content">
            <div className="App-body-experience-body">
              <div>
                <div className="App-body-experience-media">
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

import React from "react";
import { MediaGroup } from "../MediaGroup";
import { allMedia } from "../../../../data/index";

export function BodyPage(props) {
  const storage = new allMedia();
  const data = storage.getBody();
  return (
    <>
      {props.class === "body" && (
        <>
          <>
            <div className="App-experience-title">BODY</div>
            <div className="App-body-experience-usp">
              There is so much we can wonder and learn about our bodies. Let's
              dive right into it!
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

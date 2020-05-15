import React from "react";
import { MediaGroup } from "../MediaGroup";
import { allMedia } from "../../../../data/index";

export function SpacePage(props) {
  const storage = new allMedia();
  const data = storage.getSpace();
  return (
    <>
      {props.class === "space" && (
        <>
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

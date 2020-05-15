import React from "react";
import { allMedia } from "../../../../data";
import { MediaGroup } from "../MediaGroup";

export function EarthPage(props) {
  const storage = new allMedia();
  const data = storage.getEarth();
  return (
    <>
      {props.class === "earth" && (
        <>
          <>
            <div className="App-experience-title">EARTH</div>
            <div className="App-earth-experience-usp">
              The world around us is so beautiful and vast. Let's learn about
              it!
            </div>
          </>
          <div className="App-earth-experience-content">
            <div className="App-earth-experience-body">
              <div>
                <div className="App-earth-experience-media">
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

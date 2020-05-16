import React from "react";
import { MediaGroup } from "../MediaGroup";
import { allMedia } from "../../../../data/index";
import mp3 from "../../../../data/courses/mainbg.mp3";
import { BgJingle } from "../BgJingle";

export function LanguagePage(props) {
  const storage = new allMedia();
  const data = storage.getLanguage();
  return (
    <>
      {props.class === "language" && (
        <>
          <BgJingle class={props.class} mp3={mp3} />
          <>
            <div className="App-experience-title">LANGUAGE</div>
            <div className="App-language-experience-usp">
              Language is so important for us to be able to work with others.
              Let's get better together!
            </div>
          </>
          <div className="App-language-experience-content">
            <div className="App-language-experience-body">
              <div>
                <div className="App-language-experience-media">
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

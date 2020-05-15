import React, { useState } from "react";
import { SpacePage } from "./oceanEverything/SpacePage";
import { StoriesPage } from "./moralEducation/StoriesPage";
import { MediaOverlay } from "./MediaOverlay";
import { EarthPage } from "./oceanEverything/EarthPage";
import { BodyPage } from "./humanBody/BodyPage";
import { LanguagePage } from "./language/LanguagePage";
import { CreativePage } from "./creative/CreativePage";

export function CoursePage(props) {
  const [overlayVideo, setOverlayVideo] = useState("");
  return (
    props.showPage && (
      <>
        <MediaOverlay video={overlayVideo} setOverlayVideo={setOverlayVideo} />
        <div className={`App-${props.class}-experience`}>
          <SpacePage
            class={props.class}
            setOverlayVideo={setOverlayVideo}
            setSubject={props.setSubject}
            setHome={props.setHome}
          />
          <StoriesPage
            class={props.class}
            setOverlayVideo={setOverlayVideo}
            setSubject={props.setSubject}
            setHome={props.setHome}
          />
          <EarthPage
            class={props.class}
            setOverlayVideo={setOverlayVideo}
            setSubject={props.setSubject}
            setHome={props.setHome}
          />
          <BodyPage
            class={props.class}
            setOverlayVideo={setOverlayVideo}
            setSubject={props.setSubject}
            setHome={props.setHome}
          />
          <LanguagePage
            class={props.class}
            setOverlayVideo={setOverlayVideo}
            setSubject={props.setSubject}
            setHome={props.setHome}
          />
          <CreativePage
            class={props.class}
            setOverlayVideo={setOverlayVideo}
            setSubject={props.setSubject}
            setHome={props.setHome}
          />
        </div>
      </>
    )
  );
}

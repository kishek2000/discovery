import React, { useState } from "react";
import { ExperienceOverlay } from "./ExperienceOverlay";
import mp3 from "../../static/music/mainBg.mp3";
import { RenderExperiencePage } from "./RenderExperiencePage";

export function RenderExperience({
  classN,
  setSubject,
  setHome,
  showPage,
  currentPage,
  playing,
  setPlaying,
}) {
  const [overlayVideo, setOverlayVideo] = useState("");

  const pageProps = {
    classN,
    setOverlayVideo,
    setSubject,
    setHome,
    playing,
    setPlaying,
  };

  const overlayProps = {
    setOverlayVideo,
    mp3,
    classN,
    setPlaying,
  };

  if (currentPage !== "home") {
    return (
      showPage && (
        <>
          <ExperienceOverlay video={overlayVideo} {...overlayProps} />
          <div className={`App-experience ${classN}`}>
            <RenderExperiencePage {...pageProps} />
          </div>
        </>
      )
    );
  } else {
    return <div></div>;
  }
}

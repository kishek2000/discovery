import React from "react";

export function MediaOverlay(props) {
  return (
    props.video !== "" && (
      <div
        className="App-experience-overlay"
        onClick={() => {
          props.setOverlayVideo("");
        }}
      >
        <iframe
          className="App-experience-overlay-video"
          src={props.video.link}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope;"
          allowFullScreen="allowfullscreen"
          title="Enlarged Video"
        ></iframe>
        />
      </div>
    )
  );
}

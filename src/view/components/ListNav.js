import React from "react";
import prev from "../../static/images/prev.png";
import next from "../../static/images/next.png";

export function ListNav({ list, index }) {
  return (
    <>
      {list.videos.length >= 3 && (
        <>
          <img
            src={prev}
            className="App-experience-list-prev"
            alt="prev"
            onClick={() => {
              document.getElementsByClassName("App-experience-list-videos")[
                index
              ].scrollLeft -= 0.6 * window.innerWidth;
            }}
          />
          <img
            src={next}
            className="App-experience-list-next"
            alt="next"
            onClick={() => {
              document.getElementsByClassName("App-experience-list-videos")[
                index
              ].scrollLeft += 0.6 * window.innerWidth;
            }}
          />
        </>
      )}
    </>
  );
}

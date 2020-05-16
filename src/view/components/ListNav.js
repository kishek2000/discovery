import React from "react";
import prev from "../../static/images/prev.png";
import next from "../../static/images/next.png";

export function ListNav(props) {
  return (
    <div>
      {props.list.videos.length > 3 && (
        <img
          src={prev}
          className="App-experience-list-prev"
          alt="prev"
          onClick={() => {
            document.getElementsByClassName("App-experience-list-videos")[
              props.index
            ].scrollLeft -= 0.6 * window.innerWidth;
          }}
        />
      )}
      {props.list.videos.length > 3 && (
        <img
          src={next}
          className="App-experience-list-next"
          alt="next"
          onClick={() => {
            document.getElementsByClassName("App-experience-list-videos")[
              props.index
            ].scrollLeft += 0.6 * window.innerWidth;
          }}
        />
      )}
    </div>
  );
}

import React, { useState } from "react";
import { ListNav } from "../ListNav";
import pause from "../../../static/images/pause.png";
import play from "../../../static/images/play.png";

function pauseSong(classN, src) {
  console.log("pause");
  console.log(classN, src);
  const player = document.getElementById(`${classN}BgMusic`);
  if (player !== null) {
    player.autoplay = false;
    console.log(player.autoplay);
    player.pause();
    player.src = src;
  }
}

function playSong(classN, src) {
  console.log("play");
  const player = document.getElementById(`${classN}BgMusic`);
  player.play();
}

export function MediaGroup(props) {
  const [song, setSong] = useState(false);
  if (props.items !== []) {
    const data = props.items;
    return (
      <>
        <div className="App-experience-controls-header">
          <img
            className="App-home-button"
            src="https://img.icons8.com/material-sharp/96/000000/home.png"
            alt="home"
            onClick={() => {
              props.setSubject(false);
              props.setHome(true);
            }}
          />
          <div
            className="music-pause"
            onClick={() => {
              setSong(!song);
              song === false
                ? pauseSong(props.class, props.src)
                : playSong(props.class, props.src);
            }}
          >
            {song === true ? (
              <img src={play} className="play-img" alt="PLAY" />
            ) : (
              <img src={pause} className="pause-img" alt="PAUSE" />
            )}
          </div>
        </div>
        <div className={`App-${props.class}-experience-media`}>
          {data.map((list) =>
            list.type === "list" ? (
              <RenderLists
                num={list["index"]}
                list={list}
                setOverlayVideo={props.setOverlayVideo}
                class={props.class}
                src={props.src}
              />
            ) : (
              <div className="App-experience-area">
                <div className="App-experience-list-meta">
                  <div className="App-experience-list-title">{list.title}</div>
                  <div className="App-experience-list-background">
                    {list.background}
                  </div>
                </div>
                {list.lists.map((nest) => (
                  <RenderLists
                    num={nest["index"]}
                    list={nest}
                    setOverlayVideo={props.setOverlayVideo}
                    class={props.class}
                    src={props.src}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

function RenderLists(props) {
  return (
    <div className="list-container">
      <ListNav index={props.num} list={props.list} />
      <div className="App-experience-list" index={props.num}>
        <div className="App-experience-list-meta">
          <div className="App-experience-list-title">{props.list["title"]}</div>
          <div className="App-experience-list-background">
            {props.list["background"]}
          </div>
        </div>
        <RenderListVideos
          class={props.class}
          src={props.src}
          list={props.list}
          setOverlayVideo={props.setOverlayVideo}
          pauseSong={pauseSong}
          index={props.num}
        />
      </div>
    </div>
  );
}

function RenderListVideos(props) {
  return (
    <div className="App-experience-list-videos" index={props.inde}>
      {props.list["videos"].map((item, index) => (
        <div className="App-experience-media-item" key={index}>
          <img
            className="App-experience-media-thumbnail"
            src={`https://img.youtube.com/vi/${item["id"]}/hqdefault.jpg`}
            alt="video-thumbnail"
            onClick={() => {
              props.setOverlayVideo({
                link: `https://www.youtube.com/embed/${item["id"]}`,
                src: props.src,
                class: props.class,
              });
              pauseSong(props.class, props.src);
            }}
          />
          <div className="App-experience-media-title">{item["title"]}</div>
          <div className="App-experience-media-description">
            {item["description"]}
          </div>
        </div>
      ))}
    </div>
  );
}

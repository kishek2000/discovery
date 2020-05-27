import React, { useState } from "react";
import { allMedia } from "../data";
import { RenderExperience } from "./components/index";
import { SubjectItem } from "./components/SubjectItem";
import { BgJingle } from "./components/BgJingle";
import { ControlsPanel } from "./components/ControlsPanel";
import pause from "../static/images/pause.png";
import play from "../static/images/play.png";
import mp3 from "../static/music/mainBg.mp3";
import UseWindowDimensions from "./components/Dimensions";

export function RenderApp({
  setHome,
  setCurrentPage,
  pageStates,
  currentPage,
  home,
}) {
  const store = new allMedia();
  const [showPage, classN, setSubject] = store.getPageMeta(
    pageStates,
    currentPage
  );

  const [playing, setPlaying] = useState(true);

  const experienceProps = {
    showPage,
    classN,
    setHome,
    setSubject,
    currentPage,
  };

  const controlProps = {
    play,
    pause,
    mp3,
  };
  const [mobileAlert, setMobileAlert] = useState(true);
  const { height, width } = UseWindowDimensions();
  return (
    <div className={`App alert-${mobileAlert}`}>
      <BgJingle />
      {width < 1440 && width < height && mobileAlert && (
        <div className="App-mobile-alert-screen">
          <div className="App-mobile-alert">
            <span className="App-mobile-alert-title">
              {"Welcome to Discovery".toUpperCase()}
            </span>
            <span className="App-mobile-alert-text">
              Please <strong>rotate your screen</strong> for the best
              experience,
              <br />
              or use a laptop/desktop! :D
            </span>
            <div
              className="App-mobile-alert-button"
              onClick={() => setMobileAlert(false)}
            >
              Gotcha!
            </div>
          </div>
        </div>
      )}
      {home && (
        <ControlsPanel
          {...controlProps}
          setPlaying={setPlaying}
          playing={playing}
        />
      )}
      {home && (
        <header id="App-header">
          <div className="App-header-title">DISCOVERY</div>
          {pageStates.map((item, index) => (
            <SubjectItem
              key={index}
              index={index}
              setHome={setHome}
              setSubject={item["setState"]}
              classN={item["class"]}
              setPage={setCurrentPage}
              subjectTitle={item["title"]}
            />
          ))}
        </header>
      )}
      <RenderExperience
        {...experienceProps}
        setPlaying={setPlaying}
        playing={playing}
      />
    </div>
  );
}

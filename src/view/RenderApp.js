import React, { useState } from "react";
import { allMedia } from "../data";
import { RenderExperience } from "./components/index";
import { SubjectItem } from "./components/SubjectItem";
import { BgJingle } from "./components/BgJingle";
import { ControlsPanel } from "./components/ControlsPanel";
import pause from "../static/images/pause.png";
import play from "../static/images/play.png";
import mp3 from "../static/music/mainBg.mp3";

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

  return (
    <div className="App">
      <BgJingle />
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

import React from "react";
import { allMedia } from "../data";
import { RenderExperience } from "./components/index";
import { SubjectItem } from "./components/SubjectItem";

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
  const experienceProps = {
    showPage,
    classN,
    setHome,
    setSubject,
    currentPage,
  };

  return (
    <div className="App">
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
      <RenderExperience {...experienceProps} />
    </div>
  );
}

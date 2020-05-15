import React from "react";
import { GetPageMeta } from "../constants/index";
import { CoursePage } from "./components/courses/index";
import { SubjectItem } from "./components/SubjectItem";
import "../static/styles/experiences/index.css";
import "../static/styles/experiences/Space.css";
import "../static/styles/experiences/Stories.css";
import "../static/styles/experiences/Earth.css";
import "../static/styles/experiences/Language.css";
import "../static/styles/experiences/Body.css";
import "../static/styles/experiences/Creative.css";
import "../static/styles/animation/index.css";
import "../static/styles/Header.css";
import "../static/styles/App.css";

export function HomePage(props) {
  return (
    <div className="App">
      {props.home && (
        <header id="App-header">
          <div className="App-header-title">DISCOVERY</div>
          {props.pageStates.map((item, index) => (
            <SubjectItem
              key={index}
              setHome={props.setHome}
              setSubject={item["setState"]}
              class={item["class"]}
              setPage={props.setCurrentPage}
              subjectTitle={item["title"]}
              imgUrl={item["icon"]}
            />
          ))}
        </header>
      )}
      {props.currentPage !== "home" && (
        <CoursePage
          showPage={GetPageMeta(props.pageStates, props.currentPage, "state")}
          class={GetPageMeta(props.pageStates, props.currentPage, "class")}
          setHome={props.setHome}
          setSubject={GetPageMeta(
            props.pageStates,
            props.currentPage,
            "setState"
          )}
          currentPage={props.currentPage}
        />
      )}
    </div>
  );
}

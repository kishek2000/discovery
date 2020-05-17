import React, { useState } from "react";
import { RenderApp } from "./RenderApp";

export default function AppContainer() {
  const [home, setHome] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [space, setSpace] = useState(false);
  const [earth, setEarth] = useState(false);
  const [language, setLanguage] = useState(false);
  const [stories, setStories] = useState(false);
  const [creative, setCreative] = useState(false);
  const [humanBody, setHumanBody] = useState(false);

  const pageStates = [
    {
      state: space,
      setState: setSpace,
      class: "space",
      title: "Space",
    },
    {
      state: earth,
      setState: setEarth,
      class: "earth",
      title: "Earth",
    },
    {
      state: language,
      setState: setLanguage,
      class: "language",
      title: "Language",
    },
    {
      state: stories,
      setState: setStories,
      class: "stories",
      title: "Stories",
    },
    {
      state: creative,
      setState: setCreative,
      class: "creative",
      title: "Creative",
    },
    {
      state: humanBody,
      setState: setHumanBody,
      class: "body",
      title: "Our Body",
    },
  ];

  return (
    <RenderApp
      pageStates={pageStates}
      home={home}
      currentPage={currentPage}
      setHome={setHome}
      setCurrentPage={setCurrentPage}
    />
  );
}

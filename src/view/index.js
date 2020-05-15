import React, { useState } from "react";
import { HomePage } from "./HomePage";

export default function App() {
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
      icon: "https://img.icons8.com/color/100/000000/shooting-stars.png",
    },
    {
      state: earth,
      setState: setEarth,
      class: "earth",
      title: "Earth",
      icon: "https://img.icons8.com/dusk/64/000000/globe-earth.png",
    },
    {
      state: language,
      setState: setLanguage,
      class: "language",
      title: "Language",
      icon: "https://img.icons8.com/color/48/000000/abc.png",
    },
    {
      state: stories,
      setState: setStories,
      class: "stories",
      title: "Stories",
      icon: "https://img.icons8.com/color/96/000000/open-book.png",
    },
    {
      state: creative,
      setState: setCreative,
      class: "creative",
      title: "Creative",
      icon: "https://img.icons8.com/color/96/000000/paint-palette.png",
    },
    {
      state: humanBody,
      setState: setHumanBody,
      class: "body",
      title: "Our Body",
      icon: "https://img.icons8.com/color/96/000000/body.png",
    },
  ];

  return (
    <HomePage
      pageStates={pageStates}
      home={home}
      currentPage={currentPage}
      setHome={setHome}
      setCurrentPage={setCurrentPage}
    />
  );
}

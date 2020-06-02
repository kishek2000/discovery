import React from "react";
// import LottieControl from "./LottieControl";

export function SubjectItem({
  classN,
  setHome,
  setSubject,
  setPage,
  subjectTitle,
  index,
}) {
  return (
    <>
      <div
        className={`App-header-item ${classN}`}
        onClick={() => {
          setHome(false);
          setSubject(true);
          setPage(subjectTitle);
        }}
        key={index}
      >
        <div className={`App-header-item-label`}>{subjectTitle}</div>
        {/* {classN === "space" && (
          <>
            <div className="App-header-item-lottie">
              <LottieControl />
            </div>
          </>
        )} */}
      </div>
      <div></div>
    </>
  );
}

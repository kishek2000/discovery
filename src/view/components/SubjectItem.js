import React from "react";
export function SubjectItem({
  classN,
  setHome,
  setSubject,
  setPage,
  subjectTitle,
  index,
}) {
  return (
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
    </div>
  );
}

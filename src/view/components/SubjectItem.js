import React from "react";
export function SubjectItem(props) {
  return (
    <div
      className={`App-header-item ${props.class}`}
      onClick={() => {
        props.setHome(false);
        props.setSubject(true);
        props.setPage(props.subjectTitle);
      }}
    >
      <img className={`App-header-item-img`} src={props.imgUrl} alt="icon" />
      <div className={`App-header-item-label`}>{props.subjectTitle}</div>
    </div>
  );
}

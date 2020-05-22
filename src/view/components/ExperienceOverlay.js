import React from "react";

export function ExperienceOverlay({ setOverlayVideo, video }) {
  console.table(video.title);
  return (
    video !== "" && (
      <div
        className="App-experience-overlay"
        // onClick={() => {
        //   setOverlayVideo("");
        // }}
      >
        <>
          <div className="App-experience-overlay-header">
            <div className="App-experience-overlay-video-title">
              {video.title}
            </div>
            <div
              className="App-experience-overlay-close"
              onClick={() => {
                setOverlayVideo("");
              }}
            >
              CLOSE
            </div>
          </div>
          <div className="App-experience-overlay-content">
            <iframe
              className="App-experience-overlay-video"
              src={video.link}
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope;"
              allowFullScreen="allowfullscreen"
              title="Enlarged Video"
            ></iframe>
            <div className="App-experience-overlay-list">
              <>
                <div className="App-experience-overlay-list-title">
                  OTHER VIDEOS:
                </div>
                {video &&
                  video.list.videos.map((content, key) => (
                    <div className="App-experience-overlay-list-item">
                      <div className="App-experience-overlay-list-thumbnail">
                        <img
                          src={`https://img.youtube.com/vi/${content["id"]}/hqdefault.jpg`}
                          alt="video-thumbnail"
                          className="App-experience-overlay-list-thumbnail"
                          onClick={() => {
                            setOverlayVideo({
                              link: `https://www.youtube.com/embed/${content["id"]}`,
                              list: video.list,
                              title: content["title"],
                            });
                          }}
                        />
                      </div>
                      <div className="App-experience-overlay-list-label">
                        {content["title"]}
                      </div>
                    </div>
                  ))}
              </>
            </div>
          </div>
        </>
      </div>
    )
  );
}

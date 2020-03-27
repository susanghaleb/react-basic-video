import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const videoRef = useRef(null);

  const handlePlayOrPause = () => {
    const video = videoRef.current;
    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <div className="App">
      <h1>React video</h1>
      <h2>Basic example</h2>
      <div id="video_container">
        <video
          ref={videoRef}
          poster="http://media.w3.org/2010/05/sintel/poster.png"
          preload="none"
          controls
          controlsList="play, pause"
          id="video"
          tabIndex="0"
        >
          <source
            type="video/mp4"
            src="http://media.w3.org/2010/05/sintel/trailer.mp4"
            id="mp4"
          />
          <source
            type="video/webm"
            src="http://media.w3.org/2010/05/sintel/trailer.webm"
            id="webm"
          />
          <source
            type="video/ogg"
            src="http://media.w3.org/2010/05/sintel/trailer.ogv"
            id="ogv"
          />
          <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
        <button onClick={handlePlayOrPause}>Play/Pause</button>
      </div>
    </div>
  );
}

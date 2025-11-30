import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const HlsPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    const video = videoRef.current;

    // If HLS.js is supported (Chrome, Firefox, Edge)
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, function (event, data) {
        console.error("HLS error:", data);
      });

      return () => {
        hls.destroy();
      };
    }

    // For Safari (built-in HLS support)
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay={false}
      style={{ width: "100%", maxWidth: "800px", borderRadius: "10px" }}
    ></video>
  );
};

export default HlsPlayer;

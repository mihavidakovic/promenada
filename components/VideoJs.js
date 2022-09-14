import { useRef, useEffect } from 'react'
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = ( props ) => {

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { onReady } = props;
  const options = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: props.videoUrl,
      type: 'application/x-mpegURL'
    }]
  }


  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    return () => {
      if (playerRef.current) {

      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} poster={props.posterUrl} className="video-js vjs-big-play-centered my-12 md:my-12 px-4 md:px-0  overflow-hidden relative shadow-xl" />
    </div>
  );
}

export default VideoJS;
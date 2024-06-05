import React from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import styles from "../../stylesheets/Video.module.css";

interface VideoLink {
  source: string;
}

const VideoCard = ({ source }: VideoLink) => {
  return (
    <div>
      <ReactPlayer
        className={styles.video}
        id="video-player"
        url={source}
        onPlay={() => {
          // const player = document.getElementById("video-player");
          // if (player) {
          //   screenfull.request(player);
          // }
        }}
        light
        controls
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default VideoCard;

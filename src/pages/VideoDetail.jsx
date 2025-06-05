import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "./ChannelInfo";
import RelatedVideos from "./RelatedVideos";

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          title={title}
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          style={{ border: "none" }}></iframe>

        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <div>
        <RelatedVideos id={video.id} />
      </div>
    </section>
  );
};

export default VideoDetail;

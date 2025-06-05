import React from "react";
import { getRelativeTime } from "../util/date";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { channelTitle, title, thumbnails, publishedAt } = video.snippet;
  const nav = useNavigate();
  return (
    <li onClick={() => nav(`videos/watch/${video.id}`, { state: { video } })}>
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{getRelativeTime(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;

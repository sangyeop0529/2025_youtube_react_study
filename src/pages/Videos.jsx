import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import Youtube from "../api/youtube";
import { useYoutubeApi } from "../context/youtubeApiContext";

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos, // data를 videos로 변경해서 사용
  } = useQuery({
    queryKey: ["videos", keyword], // /videos/{keyword}.json
    queryFn: () => youtube.search(keyword),
  });

  return (
    <>
      <div>비디오 {keyword ? "키워드 있음" : "키워드 없음"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;

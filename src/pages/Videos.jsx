import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import FakeYoutube from "../api/fakeYoutube";
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
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;

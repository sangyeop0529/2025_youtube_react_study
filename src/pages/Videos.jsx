import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import axios from "axios";

const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos, // data를 videos로 변경해서 사용
  } = useQuery({
    queryKey: ["videos", keyword], // /videos/{keyword}.json
    queryFn: async () => {
      return axios // axios : 더 많은 기능과 자동화된 응답 처리, 오류 처리 덕분에 더 간편하게 사용
        .get(`/videos/${keyword ? "search" : "popular"}.json`)
        .then((res) => res.data.items);
    },
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

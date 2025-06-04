import axios from "axios";

export async function search(keyword) {
  return axios // axios : 더 많은 기능과 자동화된 응답 처리, 오류 처리 덕분에 더 간편하게 사용
    .get(`/videos/${keyword ? "search" : "popular"}.json`)
    .then((res) => res.data.items);
}

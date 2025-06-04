import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const SearchHeader = () => {
  const nav = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]); 

  return (
    <header className="w-full flex text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <FaYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4 cursor-pointer">
          <IoSearchOutline />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;

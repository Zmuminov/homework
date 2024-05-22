import home from "../assets/home.svg";
import search from "../assets/search.svg";
import liblary from "../assets/liblary.svg";
import pilus from "../assets/pilus.svg";
import like from "../assets/like.svg";
import { Link } from "react-router-dom";
function LeftSidebar() {
  return (
    <div className="w-[20%] min-h-[100vh] text-[#B2B2B2]  bg-black ">
      <div className="pt-20 pl-10 mr-[100px]">
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img width={32} height={32} src={home} alt="" />
          <Link to={"/"}>Home</Link>
        </p>
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img src={search} alt="" />
          <span>Search</span>
        </p>
        <p className="flex gap-5  mb-9 items-center transition duration-400 text-[#B2B2B2] hover:text-white ">
          <img src={liblary} alt="" />
          <p className="w-20 flex gap-1">
            Your <span> </span> Library
          </p>
        </p>
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img src={pilus} alt="" />
          <p className="flex gap-1">
            Create <span> </span> Playlist
          </p>
        </p>
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img src={like} alt="" />
          <p className="flex gap-1">
            Liked <span> </span> Songs
          </p>
        </p>
      </div>
    </div>
  );
}

export default LeftSidebar;

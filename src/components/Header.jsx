import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiTelevisionLight } from "react-icons/pi";
import { MdOutlineLocalMovies, MdOutlineBookmarkAdded } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

export const Header = () => {
  return (
    <nav className="container flex flex-wrap items-center my-6">
      <div className="flex flex-wrap items-center gap-4 text-gray-400 font-medium w-full">
        <div className="me-8 flex-shrink-0 font-mono text-lg font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-transparent bg-clip-text">
          DC Streaming
        </div>
        <Link href="/" className="link-btn hover:text-white">
          <BiHomeAlt2 />
          Home
        </Link>
        <Link href="/" className="link-btn hover:text-white">
          <PiTelevisionLight />
          TV Shows
        </Link>
        <Link href="/" className="link-btn hover:text-white">
          <MdOutlineLocalMovies />
          Movies
        </Link>
        <Link href="/" className="link-btn hover:text-white">
          <MdOutlineBookmarkAdded />
          Recently Added
        </Link>
        <Link href="/" className="link-btn hover:text-white">
          <CiCircleList />
          My List
        </Link>
        <div className="flex items-center gap-10 ms-auto">
          <IoMdSearch className="text-2xl text-white" />
          <button
            type="button"
            className="bg-primary hover:bg-rose-900 text-white px-8 rounded text-sm py-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

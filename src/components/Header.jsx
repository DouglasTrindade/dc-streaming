import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiTelevisionLight } from "react-icons/pi";
import { MdOutlineLocalMovies, MdOutlineBookmarkAdded } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Header = () => {
  return (
    <nav className="container flex items-center my-6">
      <div className="flex items-center gap-4 text-gray-400 font-medium grow">
        <div className="md:me-8 font-mono sm:text-lg font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-transparent bg-clip-text">
          DC STRAMING
        </div>
        <div className="flex-wrap gap-6 hidden md:inline-flex">
          <Link
            href="/"
            className="link-btn flex items-center gap-2 hover:text-white"
          >
            <BiHomeAlt2 />
            Home
          </Link>
          <Link
            href="/"
            className="link-btn flex items-center gap-2 hover:text-white"
          >
            <PiTelevisionLight />
            TV Shows
          </Link>
          <Link
            href="/"
            className="link-btn flex items-center gap-2 hover:text-white"
          >
            <MdOutlineLocalMovies />
            Movies
          </Link>
          <Link
            href="/"
            className="link-btn flex items-center gap-2 hover:text-white"
          >
            <MdOutlineBookmarkAdded />
            Recently Added
          </Link>
          <Link
            href="/"
            className="link-btn flex items-center gap-2 hover:text-white"
          >
            <CiCircleList />
            My List
          </Link>
        </div>
        <div className="flex items-center ms-auto">
          <IoMdSearch className="text-2xl text-white me-4" />
          <button
            type="button"
            className="bg-rose-600 hover:bg-primary text-white px-8 rounded text-sm py-2"
          >
            Sign In
          </button>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <RxHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/" className="link-btn hover:text-white">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="link-btn hover:text-white">
                  TV Shows
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="link-btn hover:text-white">
                  Movies
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="link-btn hover:text-white">
                  Recently Added
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="link-btn hover:text-white">
                  My List
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  MenuIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex bg-white px-4 py-2 items-center shadow-sm sticky top-0 z-50">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="data:image/png;base64,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"
            layout="fill"
            alt="Image"
          />
        </Link>
      </div>

      <div className="mx-7 flex items-center x1:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 hidden ml-2 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1 ">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 items-center text-gray-500 space-x-2 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* Sign in / Sign out button */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-7 w-7 border-nonne flex-shrink-0">
            <Image
              src="data:image/png;base64,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"
              layout="fill"
              className=""
              alt=""
            />
          </div>
          <div className="flex-1 text-xs ">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">Sign Out</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400 " />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-7 w-7 border-nonne flex-shrink-0">
            <Image
              src="data:image/png;base64,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"
              layout="fill"
              className=""
              alt=""
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;

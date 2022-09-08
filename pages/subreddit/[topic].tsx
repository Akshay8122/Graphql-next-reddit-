import { useRouter } from "next/router";
import React from "react";
import Avtar from "../../components/Avtar";
import Feed from "../../components/Feed";
import Postbox from "../../components/Postbox";

function Subreddit() {
  const {
    query: { topic },
  } = useRouter();

  return (
    <div className={` h-24  bg-red-400 p-10`}>
      <div className=" mt-10  bg-white">
        <div className="flex mx-auto max-w-5xl items-center space-x-4 pb-2">
          <div className="mt-5">
            <Avtar seed={topic as string} large />
          </div>

          <div className="py-2">
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{topic}subreddit
            </h1>
            <p className="text-sm text-gray-400">r/{topic}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-8 pb-10">
        <Postbox subreddit={topic as string} />
        <Feed topic={topic as string} />
      </div>
    </div>
  );
}

export default Subreddit;
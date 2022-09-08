import React from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import Avtar from "./Avtar";
import Link from "next/link";

type Props = {
  topic: string;
  index: number;
};

function SubredditRow({ index, topic }: Props) {
  return (
    <div className="flex items-center space-x-2 border-t bg-white px-4 py-2 last:rounded-b">
      <p>{index + 1}</p>
      <ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green=400" />
      <Avtar seed={`/subreddit/${topic}`} />
      <p className="flex-1 truncate">r/{topic}</p>
      <Link href={`/subreddit/${topic}`}>
        <div className="cursor-pointer rounded-full px-3  bg-blue-500 text-white">
          View
        </div>
      </Link>
    </div>
  );
}

export default SubredditRow;

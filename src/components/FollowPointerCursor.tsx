import React from "react";

import Image from "next/image";
import stringToColor from "../lib/stringToColor";
import { FollowPointer } from "./ui/following-pointer";

function FollowPointerCursor({
  x,
  y,
  info,
}: {
  x: number;
  y: number;
  info: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  console.log(x, ",", y);
  return (
    <FollowPointer
      title={<TitleComponent title={info.name} avatar={info.avatar} />}
      x={x}
      y={y}
      color={stringToColor(info.email)}
    ></FollowPointer>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
export default FollowPointerCursor;

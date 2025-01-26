import { auth } from "@clerk/nextjs/server";
import React from "react";
import RoomProvider from "../../../../components/RoomProvider";

function DocLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  const { id } = params;
  auth.protect();
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;

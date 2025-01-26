"use client";
import React from "react";
import { LiveblocksProvider } from "@liveblocks/react/suspense";

export default function LiveBlocksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY)
    throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not set!!!");
  return (
    <>
      <LiveblocksProvider authEndpoint={"/auth-endpoint"} throttle={16}>
        {children}
      </LiveblocksProvider>
    </>
  );
}

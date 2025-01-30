"use client";
import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react";
import SpinnerComp from "./ui/SpinnerComp";
import LiveCursorProvider from "./LiveCursorProvider";

function RoomProvider({
  children,
  roomId,
}: Readonly<{
  children: React.ReactNode;
  roomId: string;
}>) {
  return (
    <div className="w-full h-full flex justify-center overflow-hidden max-w-full">
      <RoomProviderWrapper id={roomId} initialPresence={{ cursor: null }}>
        <ClientSideSuspense fallback={<SpinnerComp twclasses="!w-12 !h-12" />}>
          <LiveCursorProvider>{children}</LiveCursorProvider>
        </ClientSideSuspense>
      </RoomProviderWrapper>
    </div>
  );
}

export default RoomProvider;

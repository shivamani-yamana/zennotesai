"use client";
import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import React from "react";
import FollowPointerCursor from "./FollowPointerCursor";

function LiveCursorProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [, updateMyPresence] = useMyPresence();

  const others = useOthers();

  return (
    <div
      className="flex-1 w-full h-full cursor-provider relative"
      onPointerMove={(event) => {
        // Update the user cursor position on every pointer move
        const rect = event.currentTarget.getBoundingClientRect();
        updateMyPresence({
          cursor: {
            x: Math.round(event.pageX - rect.left),
            y: Math.round(event.pageY - rect.top),
          },
        });
      }}
      onPointerLeave={() =>
        // When the pointer goes out, set cursor to null
        updateMyPresence({
          cursor: null,
        })
      }
    >
      {others.map(({ connectionId, info, presence }) => {
        if (presence.cursor === null) {
          return null;
        }

        return (
          // <Cursor

          //   key={`cursor-${connectionId}`}
          //   // connectionId is an integer that is incremented at every new connections
          //   // Assigning a color with a modulo makes sure that a specific user has the same colors on every clients
          //   color={stringToColor(connectionId.toString.name)}
          //   x={presence.cursor.x ?? 0}
          //   y={presence.cursor.y ?? 0}
          // />

          <FollowPointerCursor
            key={connectionId}
            info={info}
            x={presence.cursor.x ?? 0}
            y={presence.cursor.y ?? 0}
          />
        );
      })}
      {children}
    </div>
  );
}

export default LiveCursorProvider;

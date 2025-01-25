"use client";

import React from "react";
import { useRoom, useSelf } from "@liveblocks/react";
import { useEffect, useState } from "react";
import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import {
  BlockConfig,
  BlockNoteEditor,
  InlineContentSchema,
  StyleSchema,
} from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/shadcn/style.css";
import stringToColor from "../lib/stringToColor";

function Editor() {
  const room = useRoom();
  const [doc, setDoc] = useState<Y.Doc>();
  const [provider, setProvider] = useState<LiveblocksYjsProvider>();

  useEffect(() => {
    const yDoc = new Y.Doc();
    const yDocProvider = new LiveblocksYjsProvider(room, yDoc);
    setDoc(yDoc);
    setProvider(yDocProvider);

    return () => {
      yDoc?.destroy();
      yDocProvider?.destroy();
    };
  }, [room]);

  if (!doc || !provider) {
    return null;
  }

  return (
    <div className="max-w-6xl w-full h-full flex-1 max-h-screen bg-white">
      <div>
        {/* Chat to AI */}
        {/* Translate Document */}
      </div>

      {/* Block editor */}
      <BlockNote doc={doc} provider={provider} />
    </div>
  );
}

type EditorProps = {
  doc: Y.Doc;
  provider: LiveblocksYjsProvider;
};

function BlockNote({ doc, provider }: EditorProps) {
  const userInfo = useSelf((me) => me.info);
  const editor: BlockNoteEditor<
    Record<string, BlockConfig>,
    InlineContentSchema,
    StyleSchema
  > = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: userInfo?.name ?? "Anonymous",
        color: stringToColor(userInfo?.email ?? ""),
      },
    },
  });

  // Explicitly type the props passed to BlockNoteView
  const blockNoteProps = {
    editor: editor,
    theme: "light" as const, // You can adjust the theme
    editable: true, // Adjust editable state if needed
  };

  return <BlockNoteView {...blockNoteProps} />;
}

export default Editor;

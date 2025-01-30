import { useState } from "react";
import { useTransition } from "react";
import { FormEvent } from "react";
import { doc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase";
import { useEffect } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Smile } from "lucide-react";
import { Input } from "./ui/input";
import SpinnerComp from "./ui/SpinnerComp";
import useOwner from "../lib/useOwner";
import { toast } from "sonner";
import DeleteDocumentButton from "./DeleteDocumentButton";
import InviteUserButton from "./InviteUserButton";

function DocumentTopbar({ id }: { id: string }) {
  const [isUpdating, startTransition] = useTransition();

  const [input, setInput] = useState("");
  const [data, ,] = useDocumentData(doc(db, "documents", id));
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const isOwner = useOwner();

  // For Renaming Doc
  useEffect(() => {
    if (data) setInput(data.title);
  }, [data]);
  const handleUpdateTitle = (e: FormEvent) => {
    e.preventDefault();
    if (isEmojiPickerOpen) setIsEmojiPickerOpen(false);
    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
        toast.success("Document renamed successfully");
      });
    }
  };

  // For emoji Open Close
  const handleEmojiOpenClick = (e: FormEvent) => {
    e.preventDefault();
    setIsEmojiPickerOpen((prev) => !prev);
  };

  const handleEmojiClick = (Emojidata: EmojiClickData) => {
    setInput((prev) => prev + Emojidata.emoji);
  };

  return (
    <div className="w-full max-w-full sm:max-w-4xl flex space-x-6 justify-center relative">
      {/* Form for Updating Doc Name */}
      <form onSubmit={handleUpdateTitle} className="flex-1 flex space-x-6">
        <div className="flex gap-2 items-center flex-1">
          <button onClick={handleEmojiOpenClick} className="md:block hidden">
            <Smile className="rounded-full" />
          </button>
          {isEmojiPickerOpen && (
            <div className="absolute top-12 z-[1000]">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <Input
            type="text"
            placeholder="title cannot be empty!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-neutral-100"
          />
        </div>

        {/* Update Button */}
        <div className="p-[1px] relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-full`}
          />
          <button
            disabled={isUpdating}
            type="submit"
            className="px-8 py-2 w-32 bg-white dark:bg-black rounded-[6px] relative group transition duration-200 text-gray-900 dark:text-white hover:text-white hover:bg-transparent flex items-center justify-center"
          >
            {isUpdating ? <SpinnerComp twclasses="!w-6 !h-6" /> : "Update"}
          </button>
        </div>
      </form>
      {isOwner && (
        <>
          {/* Invite Button */}
          <InviteUserButton />
          {/* Delete Document Button */}
          <DeleteDocumentButton />
        </>
      )}
    </div>
  );
}

export default DocumentTopbar;

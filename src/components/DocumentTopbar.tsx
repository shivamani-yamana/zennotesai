import { useState } from "react";
import { useTransition } from "react";
import { FormEvent } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { deleteDocument } from "../../actions/actions";
import { db } from "../../firebase";
import { useEffect } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Smile } from "lucide-react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../components/ui/dialog";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import SpinnerComp from "./ui/SpinnerComp";
import useOwner from "../lib/useOwner";
import { toast } from "sonner";

function DocumentTopbar({ id }: { id: string }) {
  const [isUpdating, startTransition] = useTransition();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, startDeleteTransition] = useTransition();
  const [input, setInput] = useState("");
  const [data, ,] = useDocumentData(doc(db, "documents", id));
  const router = useRouter();
  const pathname = usePathname();
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const isOwner = useOwner();

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

  const handleDeleteClick = async () => {
    const roomId = pathname.split("/").pop();
    if (!roomId) return;
    startDeleteTransition(async () => {
      setShowDeleteDialog(false);
      const { success } = await deleteDocument(roomId);
      if (success) {
        router.replace("/dashboard");
        toast.success("Document deleted successfully");
      } else {
        toast.error("An error occurred while deleting the document");
      }
    });
  };

  const handleEmojiOpenClick = (e: FormEvent) => {
    e.preventDefault();
    setIsEmojiPickerOpen((prev) => !prev);
  };

  const handleEmojiClick = (Emojidata: EmojiClickData) => {
    setInput((prev) => prev + Emojidata.emoji);
  };

  return (
    <form
      className="w-full max-w-4xl flex space-x-6 justify-center relative"
      onSubmit={handleUpdateTitle}
    >
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

      {/* Delete Section */}
      {isOwner && (
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogTrigger asChild>
            <div className="p-[1px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg" />
              <button
                type="button"
                className="px-8 py-2 bg-white dark:bg-black rounded-[6px] relative group transition duration-200 text-gray-900 dark:text-white hover:text-white hover:bg-transparent w-full"
              >
                Delete
              </button>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete Document</DialogTitle>
              <DialogDescription>
                This will permanently delete the document. Are you sure you want
                to delete it?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                type="button"
                disabled={isDeleting}
                className="bg-red-500 hover:bg-red-700"
                onClick={handleDeleteClick}
                variant="destructive"
              >
                {isDeleting ? "Deleting..." : "Yes, Delete it"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        // Share button here
      )}
    </form>
  );
}

export default DocumentTopbar;

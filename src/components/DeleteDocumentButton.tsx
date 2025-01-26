import React, { useState } from "react";
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
import { deleteDocument } from "../../actions/actions";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";

function DeleteDocumentButton() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, startDeleteTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  // For deleting Doc
  const handleDeleteClick = async () => {
    const roomId = pathname?.split("/").pop();
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

  return (
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
            This will permanently delete the document. Are you sure you want to
            delete it?
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
  );
}

export default DeleteDocumentButton;

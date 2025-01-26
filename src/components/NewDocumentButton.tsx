"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import SpinnerComp from "./ui/SpinnerComp";
import { createNewDocument } from "../../actions/actions";
import React from "react";
import { toast } from "sonner";

const NewDocumentButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateDocument = () => {
    startTransition(async () => {
      const docId = await createNewDocument();
      router.push(`/dashboard/doc/${docId}`);
      toast.success("Document created successfully");
    });
  };

  return (
    <div className="p-[1px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <button
        onClick={handleCreateDocument}
        disabled={isPending}
        className="px-8 py-2 bg-white dark:bg-black rounded-[6px] relative group transition duration-200 text-gray-900 dark:text-white hover:text-white hover:bg-transparent w-full"
      >
        {isPending ? (
          <SpinnerComp twclasses="!w-4 !h-4" />
        ) : (
          <span>New Document</span>
        )}
      </button>
    </div>
  );
};

export default NewDocumentButton;

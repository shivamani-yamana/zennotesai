"use client";

import DocumentUpdate from "./DocumentUpdate";
import { Editor } from "./DynamicEditor";

function Document({ id }: { id: string }) {
  return (
    <div
      className="w-full h-full flex-1 overflow-scroll flex flex-col items-center [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-track]:bg-slate-100
  [&::-webkit-scrollbar-thumb]:bg-slate-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-700
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
    >
      <DocumentUpdate id={id} />
      {/* If owner Invite Collaborators and delete */}
      <hr className="w-full h-px my-4 bg-slate-300 border-0 dark:bg-slate-700"></hr>

      {/* Collaborative Editor */}
      <Editor />
    </div>
  );
}

export default Document;

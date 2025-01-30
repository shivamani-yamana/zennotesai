"use client";

import DocumentTopbar from "./DocumentTopbar";
import { Editor } from "./DynamicEditor";

function Document({ id }: { id: string }) {
  return (
    <div
      className="max-w-full h-full flex-1 overflow-hidden flex flex-col items-center
      sm:px-4 lg:px-8"
    >
      <DocumentTopbar id={id} />
      {/* If owner Invite Collaborators and delete */}
      <hr className="w-full h-px my-4 bg-slate-300 border-0 dark:bg-slate-700" />

      {/* Collaborative Editor */}
      <div
        className="flex-1 w-full h-full max-h-full overflow-y-auto max-w-full flex items-start justify-center [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-track]:bg-slate-100
      [&::-webkit-scrollbar-thumb]:bg-slate-300
      dark:[&::-webkit-scrollbar-track]:bg-slate-700
      dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
      >
        <Editor />
      </div>
    </div>
  );
}

export default Document;

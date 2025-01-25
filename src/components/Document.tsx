"use client";

import DocumentUpdate from "./DocumentUpdate";
import { Editor } from "./DynamicEditor";

function Document({ id }: { id: string }) {
  return (
    <div className="w-full h-full flex-1 overflow-scroll flex flex-col justify-center items-center">
      <DocumentUpdate id={id} />
      {/* If owner Invite Collaborators and delete */}
      <hr className="w-full h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>

      {/* Collaborative Editor */}
      <Editor />
    </div>
  );
}

export default Document;

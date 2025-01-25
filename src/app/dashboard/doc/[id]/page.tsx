"use client";

import React, { useEffect, useState } from "react";
import Document from "../../../../components/Document"; // Adjust the import path as necessary

const DocumentPage = ({ params }: { params: { id: string } }) => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setId(params.id);
  }, [params]);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-full flex-1 flex bg-white">
      <Document id={id} />
    </div>
  );
};

export default DocumentPage;

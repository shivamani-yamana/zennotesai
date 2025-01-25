import Header from "@/components/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen max-h-screen max-w-screen flex flex-col">
      <Header />
      <div className="flex-1 flex bg-neutral-200 dark:bg-neutral-900 relative">
        {/* <Drawer /> */}
        <div className="md:ml-0 ml-14 w-full p-4 bg-white">{children}</div>
      </div>
    </div>
  );
}

export default layout;

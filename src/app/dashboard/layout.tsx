import { Drawer } from "./../../components/Drawer";
import Header from "./../../components/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen max-h-screen w-screen flex flex-col">
      <Header />
      <Drawer>{children}</Drawer>
    </div>
  );
}

export default layout;

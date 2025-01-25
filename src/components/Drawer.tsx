"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import { Plus } from "lucide-react";
import { cn } from "./../lib/utils";
import NewDocumentButton from "./NewDocumentButton";

export function Drawer({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-slate-800 w-full flex-1 border border-slate-200 dark:border-slate-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="my-4 flex flex-col gap-2">
              {/* New Documentation Button */}
              {open ? <NewDocumentButton /> : <Plus />}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="w-full bg-white">{children}</div>
    </div>
  );
}

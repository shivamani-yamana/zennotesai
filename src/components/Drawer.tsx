"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { Plus } from "lucide-react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewDocumentButton from "./NewDocumentButton";
import { useUser } from "@clerk/nextjs";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { DocumentData } from "firebase-admin/firestore";
import { CiFileOn } from "react-icons/ci";
import { cn } from "../lib/utils";

interface RoomDocument extends DocumentData {
  userId: string;
  role: "Owner" | "Editor";
  createdAt: string;
  roomId: string;
}

export function Drawer({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({ owner: [], editor: [] });
  const [data, loading] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
  );

  // Chanegs everytime Data gets updated
  useEffect(() => {
    if (!data) return;
    const grouped = data?.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;
        if (roomData.role === "Owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }
        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);
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

              {/* Loading State Check */}
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {/* My Documents Section */}
                  <div>
                    {groupedData.owner.length === 0 ? (
                      <h4 className="w-full hover:dark:bg-neutral-700 hover:bg-neutral-200 text-xs px-2 py-1 my-3 rounded-md duration-500 transition-all ease-in-out cursor-pointer">
                        No Documents found!
                      </h4>
                    ) : (
                      <div>
                        <h4 className="w-full hover:dark:bg-neutral-700 hover:bg-neutral-200 text-xs px-2 py-1 my-1 rounded-md duration-500 transition-all ease-in-out cursor-pointer">
                          My Documents
                        </h4>
                        <div className="flex flex-col gap-1">
                          {groupedData.owner.map((doc) => (
                            <div key={doc.roomId}>
                              <SidebarLink
                                link={{
                                  label: doc.roomId,
                                  href: `/dashboard/doc/${doc.roomId}`,
                                  icon: (
                                    <CiFileOn className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                  ),
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* My Shared Section */}
                  <div>
                    {groupedData.editor.length === 0 ? (
                      <h4 className="w-full hover:dark:bg-neutral-700 hover:bg-neutral-200 text-xs px-2 py-1 my-3 rounded-md duration-500 transition-all ease-in-out cursor-pointer">
                        No Shared Documents found!
                      </h4>
                    ) : (
                      <div>
                        <h4 className="w-full hover:dark:bg-neutral-700 hover:bg-neutral-200 text-xs px-2 py-1 my-1 rounded-md duration-500 transition-all ease-in-out cursor-pointer">
                          Shared Documents
                        </h4>

                        <div className="flex flex-col gap-1">
                          {groupedData.editor.map((doc, idx) => (
                            <div key={doc.roomId}>
                              <SidebarLink
                                key={idx}
                                link={{
                                  label: doc.roomId,
                                  href: `/dashboard/doc/${doc.roomId}`,
                                  icon: (
                                    <CiFileOn className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                  ),
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="w-full pt-4 bg-white">{children}</div>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

const Breadcrumbs = () => {
  const path = usePathname();
  const segments = path?.split("/");
  // console.log(segments);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments && segments[1] === "dashboard" && (
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {segments && segments[2] === "doc" && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">doc</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{segments[3]}</BreadcrumbPage>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;

import React from "react";
import LiveBlocksProvider from "../../../components/LiveBlocksProvider";

function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LiveBlocksProvider>{children}</LiveBlocksProvider>
    </>
  );
}

export default PageLayout;

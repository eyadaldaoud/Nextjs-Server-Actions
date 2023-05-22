"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Analytics />
    </ThemeProvider>
  );
};

export default Wrapper;

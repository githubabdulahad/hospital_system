"use client";
import React from "react";
import { UserProvider } from "./UserContext";
import { SearchProvider } from "./SearchContext";

export default function Providers({ children }) {
  return (
    <UserProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </UserProvider>
  );
}

'use client';
import { useState } from "react";

export const NavSearch = () => {
  console.log("NavSearch Rendered");

  const [search, setSearch] = useState(""); 

  return (
    <div>
      <h1>Nav Search</h1>
    </div>
  );
};


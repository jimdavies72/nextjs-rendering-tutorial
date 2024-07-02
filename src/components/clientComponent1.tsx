'use client';
import { useState } from "react";
import { ClientComponent2 } from "./clientComponent2";

export const ClientComponent1 = ({ 
  children 
  }: {
    children: React.ReactNode
  }) => {
  console.log("Client Component 1 Rendered");

  const [name, setName] = useState("batman");
  return (
    <>
      <div>
        <h1>Client Component 1</h1>
      </div>
      {children}
    </>
  );
};

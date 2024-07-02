'use client';
import { useState } from "react";

export const ClientComponent2 = () => {
  console.log("Client Component 2 Rendered");

  const [name, setName] = useState("robin");
  return (
    <div>
      <h1>Client Component 2</h1>
    </div>
  );
};

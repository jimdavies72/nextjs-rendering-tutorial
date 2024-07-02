'use client';

import { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("")

  console.log("Dashboard client component")
  //rendered once on the server then once on the client

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input 
        placeholder="enter text"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Hello, { name }</p>
    </div>
  );
};


export default DashboardPage;

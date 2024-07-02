'use client';

import { serverSideFunction } from "@/utils/serverUtils";

const ClientRoute = () => {

  const result = serverSideFunction();
  console.log('')
  return (
    <div>
      <h1>Client Route</h1>
      <p>{result}</p>
    </div>
  );
};

export default ClientRoute;
import  fs from 'fs';
import { ServerComponent2 } from "./serverComponent2";
import { ClientComponent1 } from './clientComponent1';

export const ServerComponent1 = () => {
  console.log("Server Component 1 Rendered");

  fs.readFileSync("src/components/serverComponent1.tsx", "utf-8")

  return (
    <>
      <div>
        <h1>Server Component 1</h1>
      </div>
    </>
  );
};

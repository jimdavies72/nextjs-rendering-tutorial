import  fs from 'fs';

export const ServerComponent2 = () => {
  console.log("Server Component 2 Rendered");

  fs.readFileSync("src/components/serverComponent2.tsx", "utf-8")

  return (
    <div>
      <h1>Server Component 2</h1>
    </div>
  );
};

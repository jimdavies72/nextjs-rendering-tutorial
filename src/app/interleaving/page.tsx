import { ServerComponent1 } from "@/components/serverComponent1";
import { ClientComponent1 } from "@/components/clientComponent1";

const InterleavingPage = () => {
  return (
    <>
      <div>
        <h1>Interleaving Page</h1>
      </div>
      <ClientComponent1>
        <ServerComponent1 />
      </ClientComponent1>
    </>
  );
};

export default InterleavingPage;
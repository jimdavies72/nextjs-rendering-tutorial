import { serverSideFunction } from "@/utils/serverUtils";
import { clientSideFunction } from "@/utils/clientUtils";
import ImageSlider from "@/components/imageSlider";

const ServerRoute = () => {
  console.log('Server Route Rendered')
  const result = serverSideFunction();
  // clientResult will cause error as the fucntion is using 'client-only'
  //const clientResult = clientSideFunction();
  return (
    <div>
      <h1>Server Route</h1>
      <p>Server Result: {result}</p>
      <ImageSlider />
    </div>
  );
};

export default ServerRoute;


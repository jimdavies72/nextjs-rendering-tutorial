import { cookies } from "next/headers";

const AboutPage = () => {

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme)

  console.log("About server component")
  //rendered once on the server only
  
  return (
    <div>
      <h1>About Page {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default AboutPage

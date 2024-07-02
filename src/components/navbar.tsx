
import { NavLinks} from "./navLinks";
import { NavSearch } from "./navSearch";

export const NavBar = () => {
  console.log("Navbar Rendered");

  return (
    <>
      <div>
        <h1>Navbar</h1>
      </div>
      <NavLinks />
      <NavSearch />
    </>
  );
};


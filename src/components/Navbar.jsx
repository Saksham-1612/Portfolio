import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 bg-white rounded-lg items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/dev"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500  "
              : "text-white-500 border p-1 px-2 font-semibold text-center -my-1 rounded-lg"
          }
        >
          Ctrl + /
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

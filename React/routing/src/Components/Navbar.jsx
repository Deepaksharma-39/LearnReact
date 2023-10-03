import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  const paths = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/user",
      title: "Users",
    },
  ];

  return (
    <div>
      {paths.map((link) => (
        <NavLink
          //   style={({isActive}) => (isActive ? activeColor : defaultColor)}
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          to={link.path}
          key={link.path}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;

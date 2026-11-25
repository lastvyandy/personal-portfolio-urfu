import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="header">
      <div className="nav-container">
        <NavLink to="/" end className="brand">Jorge M.</NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

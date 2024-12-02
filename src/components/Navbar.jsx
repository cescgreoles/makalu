import Link from "next/link";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link href="/nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link href="/servicios">SERVICIOS</Link>
        </li>
        <li>
          <Link href="/">
            <h1>M A K A L U</h1>
          </Link>
        </li>
        <li>
          <Link href="/precios">PRECIOS</Link>
        </li>
        <li>
          <Link href="/contacto">CONTACTO</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

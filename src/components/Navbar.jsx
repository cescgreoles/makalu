import Image from "next/image";
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
          <Image
            src="/logo_makalu.avif"
            alt="Logo Makalu"
            width={150}
            height={100}
            className="logo"
          />
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

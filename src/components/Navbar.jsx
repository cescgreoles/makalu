"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("");

  const handleSelectChange = (e) => {
    setSelectedPage(e.target.value);
    if (e.target.value) {
      window.location.href = e.target.value;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="mobile-select">
          <Link href="/">
            <h1>M A K A L U</h1>
          </Link>

          <select
            value={selectedPage}
            onChange={handleSelectChange}
            className="page-selector"
          >
            <option value="">Seleccione una página</option>
            <option value="/nosotros">NOSOTROS</option>
            <option value="/servicios">SERVICIOS</option>
            <option value="/precios">PRECIOS</option>
            <option value="/contacto">CONTACTO</option>
          </select>
        </div>

        <ul className="nav-links">
          <li>
            <Link href="/nosotros">
              <p>NOSOTROS</p>
            </Link>
          </li>
          <li>
            <Link href="/servicios">
              <p>SERVICIOS</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h1>M A K A L U</h1>
            </Link>
          </li>
          <li>
            <Link href="/precios">
              <p>PRECIOS</p>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              <p>CONTACTO</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

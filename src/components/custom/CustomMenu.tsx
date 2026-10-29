import { Plus, Swords } from "lucide-react";
import { Link, useLocation } from "react-router";

export const CustomMenu = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">
          <Swords size={18} />
        </span>
        <span>
          THE <b>VANGUARD</b>
        </span>
      </div>
      <nav className="topnav" aria-label="Main navigation">
        <Link to="/" className={isActive("/") ? "nav-active" : ""}>
          Inicio
        </Link>

        <Link to="/search" className={isActive("/search") ? "nav-active" : ""}>
          Buscar Personaje
        </Link>
      </nav>
      {/* <button className="add-button">
        <Plus size={17} /> Add hero
      </button> */}
    </header>
  );
};

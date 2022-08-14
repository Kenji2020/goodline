import { useContext } from "react";
import { context } from "../context/context";

const Header = () => {
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");

  return (
    <div className="edrea_tm_header">
      <div className="header_inner">
        <div className="logo">
      
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className={activeNav("home")}>
              <a href="#home" onClick={() => changeNav("home")}>
                Inicio
              </a>
            </li>
            <li className={activeNav("about")}>
              <a href="#about" onClick={() => changeNav("about")}>
                Sobre nosotros
                
              </a>
            </li>
            <li className={activeNav("portfolio")}>
              <a href="#portfolio" onClick={() => changeNav("portfolio")}>
                Proyectos
              </a>
            </li>
            <li className={activeNav("contact")}>
              <a href="#contact" onClick={() => changeNav("contact")}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;

import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="main-nav" aria-label="Menu principal">
      <ul role="list">
        <li>
          <NavLink to="/produtos" end className={({ isActive }) => isActive ? "active" : ""}>Produtos</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink>
        </li>
        <li>
          <NavLink className="enlaceCadastro" to= "/cadastro">Cadastro</NavLink> 
        </li>
         <li>
          <NavLink className="enlaceLogin"  to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
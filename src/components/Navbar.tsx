import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="home">
        SPA
      </Link>
      {/* no pondremos htmlfor ,porque sino ira a donde sea y rompera los beneficios de una pagina spa */}

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to="/home">
              {/* isActive es una propiedad de e:event, al hacer {isActive} se desactrura y se queda solo con ese valor */}
              Inicio
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to="/paises">
              Países
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to="/abaut">
              Abaut
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import { Context } from "../../Context/AuthContext";

function SideBar(props) {
  const { sideBar } = useContext(Context);

  return (
    <nav id="sidebar" className={sideBar ? "" : "active"}>
      <div className="sidebar-header">
        <h5>Meu Consultório</h5>
      </div>

      <ul className="list-unstyled components">
        <li>
          <Link to="/patient" className="nav-link">
            Pacientes <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="nav-link">
            Exame Optométrico
          </Link>
        </li>

        <li className="active">
          <a
            href="#tables"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Tabelas
          </a>
          <ul className="collapse list-unstyled" id="tables">
            <li>
              <Link to="/tables/companys" className="nav-link">
                Usuários
              </Link>
            </li>
            <li>
              <Link to="/tables/companys" className="nav-link">
                Empresas
              </Link>
            </li>
          </ul>
        </li>

        <li className="active">
          <a
            href="#report"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Relatórios
          </a>
          <ul className="collapse list-unstyled" id="report">
            <li>
              <Link to="/tables/companys" className="nav-link">
                Pacientes
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;

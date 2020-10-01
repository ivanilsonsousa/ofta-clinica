import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Modal from "../../components/Modal";
import logo from "../../assets/optometrista.svg";

import { Context } from "../../Context/AuthContext";

function Header(props) {
  const { authenticated, handleLogout } = useContext(Context);
  const [modalLogout, setModalLogout] = useState(false);

  function logout() {
    handleLogout();
    setModalLogout(false);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg py-0">
        <Link to="/home" className="nav-link">
          <img src={logo} style={{ height: "40px" }} alt="logo" />
          <span className="ml-3"> MEU CONSULTÓRIO</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/patient" className="nav-link">
                Pacientes <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Exame Optométrico
              </Link>
            </li>
          </ul>
        </div>

        <div className="getout mr-5">
          <button onClick={() => setModalLogout(true)}>
            Sair <i className="fas fa-sign-out-alt text-light ml-1" />
          </button>
        </div>
      </nav>

      <Modal
        title={"Deseja realmente sair do sistema?"}
        show={modalLogout}
        onDisable={setModalLogout}
        confirm={handleLogout}
      />
    </>
  );
}

export default Header;

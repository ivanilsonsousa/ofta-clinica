import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Modal from "../../components/Modal";
import logo from "../../assets/optometrista.svg";

import { Context } from "../../Context/AuthContext";

import "./styles.css";

function Header(props) {
  const { handleLogout, sideBar, setSideBar } = useContext(Context);
  const [modalLogout, setModalLogout] = useState(false);

  return (
    <>
      <nav className={`navbar-custom ${sideBar ? "collapsed" : ""} px-2`}>
        <button onClick={() => setSideBar(!sideBar)}>
          <i
            className={`fas ${
              !sideBar ? "fa-align-left" : "fa-arrow-left rotate"
            }`}
          ></i>
          {/* <i class="fas fa-arrow-left"></i> */}
        </button>
        <Link to="/home" className="nav-link">
          <img src={logo} style={{ height: "35px" }} alt="logo" />
        </Link>

        <div className={`getout ${sideBar ? "ml-auto" : ""}`}>
          <button onClick={() => setModalLogout(true)} title="Sair">
            <i className="fas fa-sign-out-alt text-light ml-1" />
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

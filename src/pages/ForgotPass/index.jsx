import React from "react";
import { useHistory, Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.css";

import logo from "../../assets/cadeado.svg";

function Login() {
  const history = useHistory();

  function handleLogin() {
    history.push("/home");
  }

  return (
    <>
      <div className="container d-flex flex-column content-body align-items-center justify-content-center">
        <div className="box-login">
          <div className="box-left pt-5">
            <img
              src={logo}
              style={{ height: "120px" }}
              className="mt-5 mb-4"
              alt="logo"
            />
            <h4>Esqueceu a senha?</h4>
            <span>Nós te ajudaremos!</span>
          </div>
          <div className="box-right">
            <h4 className="text-center">Recuperar a Senha</h4>
            <span className="justify-text">
              Um email de será enviado para você em instantes
            </span>
            <div className="mt-2">
              <Input
                label="Seu email"
                placeholder="Seu email"
                className="px-0"
              />
            </div>
            <Button
              text="Recuperar a senha"
              className="btn-login mb-2"
              onClick={() => handleLogin()}
            />
            <div className="content-forgotpass">
              <Link to="/">
                <i className="fas fa-arrow-left mr-1" /> Voltar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

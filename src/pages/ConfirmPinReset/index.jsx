import React, { useState, useLayoutEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.css";

import logo from "../../assets/cadeado.svg";
import api from "../../services/api";

function RecoveryPass(props) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(
    "E-mail não cadastrado na base de dados"
  );

  const location = useLocation();
  const history = useHistory();

  useLayoutEffect(() => {
    console.log(location.state);
    if (!location.state?.email) return history.push("/begin_password_reset");

    setEmail(location.state.email);
  }, []);

  function handleForgotPass(e) {
    e.preventDefault();

    api
      .post("/confirm-pin-reset", { email, code })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.msg);

        history.push({
          pathname: "/reset_password",
          state: { email },
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
            <h4 className="text-center">Verifique seu e-mail</h4>
            <span className="justify-text">
              Enviamos um e-mail com um código de confirmação. Informe o código
              abaixo para redefinir sua senha.
            </span>
            <form onSubmit={handleForgotPass}>
              <div className="mt-2">
                <Input
                  label="Validar identidade"
                  placeholder="Digite o código"
                  className="px-0"
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <Button text="Recuperar a senha" className="btn-login mb-2" />
            </form>
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

export default RecoveryPass;

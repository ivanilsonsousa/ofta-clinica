import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.css";

import logo from "../../assets/cadeado.svg";
import btn_close from "../../assets/cancel.svg";
import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [close, setClose] = useState(true);
  const [message, setMessage] = useState(
    "E-mail não cadastrado na base de dados"
  );

  const history = useHistory();

  function handleForgotPass(e) {
    e.preventDefault();

    api
      .post("/begin-pass-reset", { email })
      .then((response) => {
        const { code, email } = response.data;

        console.log(code, email);

        if (code !== 200) {
          setMessage(response.data.msg);
          setClose(false);
        } else {
          history.push({
            pathname: "/confirm_pin_reset",
            state: { email },
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleClose() {
    setClose(true);
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
            <h4 className="text-center">Recuperar a senha</h4>
            <span className="justify-text">
              Nos informe o seu e-mail para a recuperação da sua senha
            </span>
            <form onSubmit={handleForgotPass}>
              <div className="mt-2">
                <Input
                  label="Seu email"
                  placeholder="Seu email"
                  className="px-0"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button text="Recuperar a senha" className="btn-login mb-2" />
            </form>
            <div className="content-forgotpass">
              <Link to="/">
                <i className="fas fa-arrow-left mr-1" /> Voltar
              </Link>
            </div>
            {!close && (
              <div className="msg-forgot">
                {message}
                <div className="btn-close-msg">
                  <img
                    src={btn_close}
                    onClick={() => handleClose()}
                    style={{ height: "10px" }}
                    alt="logo"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

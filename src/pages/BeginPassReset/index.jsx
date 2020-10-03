import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Notification from "../../components/Notification";

import "./styles.css";

import logo from "../../assets/cadeado.svg";
import btn_close from "../../assets/cancel.svg";
import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [not, setNot] = useState({});
  const [load, setLoad] = useState(false);
  const history = useHistory();

  function handleForgotPass(e) {
    e.preventDefault();
    if (!email || load) return;
    setLoad(true);

    api
      .post("/begin-pass-reset", { email })
      .then((response) => {
        const { code, email } = response.data;

        if (code !== 200) {
          setNot({
            description: response.data.msg,
            type: response.data.type,
            open: true,
          });

          setLoad(false);
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
              <Button
                load={load}
                text="Recuperar a senha"
                className="btn-login mb-2"
              />
            </form>
            <div className="content-forgotpass">
              <Link to="" onClick={() => history.goBack()}>
                <i className="fas fa-arrow-left mr-1" /> Voltar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Notification
        description={not.description}
        type={not.type}
        open={not.open}
        exit={setNot}
      />
    </>
  );
}

export default Login;

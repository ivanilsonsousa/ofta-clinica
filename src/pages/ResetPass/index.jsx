import React, { useState, useLayoutEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Notification from "../../components/Notification";

import "./styles.css";

import logo from "../../assets/cadeado.svg";
import btn_close from "../../assets/cancel.svg";
import api from "../../services/api";

function Login() {
  const [not, setNot] = useState({});
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [load, setLoad] = useState(false);
  const [close, setClose] = useState(true);
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

  function handleResetPass() {
    if (!email || !pass || !passConfirm || load) return;

    api
      .post("/reset-pass", { pass, passConfirm, email })
      .then((response) => {
        setLoad(false);
        const { code } = response.data;
        console.log(response.data);

        if (code !== 200) {
          setNot({
            description: response.data.msg,
            type: response.data.type,
            open: true,
          });

          setLoad(false);
        } else {
          history.push({
            pathname: "/",
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
            <h4 className="text-center">Redefinir sua senha</h4>
            <span className="justify-text">
              Enirmação. Informe o código abaixo para redefinir sua senha.
            </span>
            <div className="mt-2">
              <Input
                type="password"
                label="Digite sua nova senha"
                placeholder="Digite..."
                className="px-0"
                onChange={(e) => setPass(e.target.value)}
                onClick={handleResetPass}
              />
            </div>
            <div className="mt-2">
              <Input
                type="password"
                label="Digite sua nova senha novamente"
                placeholder="Digite"
                className="px-0"
                onChange={(e) => setPassConfirm(e.target.value)}
              />
            </div>
            <Button
              load={load}
              text="Redefinir senha"
              className="btn-login mb-2"
              onClick={handleResetPass}
            />
            <div className="content-forgotpass">
              <Link to="" onClick={() => history.goBack()}>
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

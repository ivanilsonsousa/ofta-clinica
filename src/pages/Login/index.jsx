import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Context } from "../../Context/AuthContext";

import logo from "../../assets/logo-login.png";
import "./styles.css";

function Login() {
  const { handleLogin } = useContext(Context);
  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const [load, setLoad] = useState(false);

  async function handleSubmitLogin(e) {
    e.preventDefault();

    if (!user || !password) return;
    setLoad(true);

    await handleLogin({ user, password });
    setLoad(false);
  }

  return (
    <>
      <div className="container d-flex flex-column content-body align-items-center justify-content-center">
        <div className="box-login">
          <div className="box-left">
            <img
              src={logo}
              style={{ height: "120px" }}
              className="my-5"
              alt="logo"
            />
            <h4>Seja Bem-vindo!</h4>
            <span>Consultório de oftamologia</span>
          </div>
          <div className="box-right">
            <h4 className="text-center">Faça seu login aqui</h4>
            <form onSubmit={handleSubmitLogin}>
              <div>
                <Input
                  label="Usuário"
                  placeholder="Seu usuário"
                  className="px-0"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="Senha"
                  type="password"
                  placeholder="Sua senha"
                  className="px-0"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <Button load={load} text="Confirmar" className="btn-login mb-2" />
            </form>
            <div className="content-forgotpass">
              <span className="forgot-password">
                <Link to="/begin_password_reset">
                  Esqueceu a senha? clique aqui
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

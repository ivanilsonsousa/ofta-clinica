import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.css'

import logo from '../../assets/logo-login.png'

function Login() {
  const history = useHistory()

  function handleLogin() {
    history.push('/home')
  }

  return (
    <>
      <div className="container d-flex flex-column content-body align-items-center justify-content-center">
        <div className="box-login">
          <div className="box-left">
            <img src={logo} style={{ height: "120px" }} className="my-5" alt="logo" />
            <h4>Seja Bem-vindo!</h4>
            <span>Consultório de oftamologia</span>
          </div>
          <div className="box-right">
            <h4 className="text-center">Faça seu login aqui</h4>
            <div>
              <Input label="Usuário" placeholder="Seu usuário" className="px-0" />
            </div>
            <div>
              <Input label="Senha" type="password" placeholder="Sua senha" className="px-0" />
            </div>
            <Button text="Confirmar" className="btn-login mb-2" onClick={() => handleLogin()} />
            <div className="content-forgotpass">
              <span className="forgot-password"><Link to="/forgot-pass">Esqueceu a senha? clique aqui</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

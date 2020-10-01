import { useState, useEffect } from 'react';

import api from '../../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem('token')}`;

    (async () => {
      const isAuthenticate = await checkIsAutenticate();

      if (isAuthenticate) {
        api.defaults.headers.Authorization = token;
        setAuthenticated(true);
      }

      setLoading(false);
    })()

  }, []);

  async function handleLogin(login) {

    try {
      console.log("mao")
      const { data } = await api.post('/login', login);
      console.log(data)
      const token = data.token;

      if (!token)
        return { message: data.message };

      localStorage.setItem('token', token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);

      return true;

    } catch {
      return { message: "Erro inesperado" };
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }

  async function checkIsAutenticate() {
    const token = localStorage.getItem('token');

    if (!token) {
      handleLogout()
      return false;
    }

    try {
      const response = await api.get("/authenticate", { headers: { Authorization: `Bearer ${token}` } });

      setAuthenticated(response.data.status === 'ok' ? true : false);
    } catch { }
  }

  return { authenticated, loading, handleLogin, handleLogout };
}

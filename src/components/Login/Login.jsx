import { AuthForm } from '../AuthForm/AuthForm';
import { login } from '../../utils/mainApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userData);
    setCurrentUser(userData);
    navigate('/', { replace: true });
  };
  return (
    <AuthForm
      title="Вход в пещеру"
      buttonText="Войти"
      linkText="Регистрация"
      id="2"
      name="Log"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleInputChange}
        placeholder="email"
        className="auth__input"
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        placeholder="password"
        className="auth__input"
      />
    </AuthForm>
  );
};

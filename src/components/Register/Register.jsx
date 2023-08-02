import { AuthForm } from '../AuthForm/AuthForm';
import { register } from '../../utils/mainApi';
import { useState } from 'react';

export const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    avatar: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userData);
  };

  return (
    <AuthForm
      title="Регистрация"
      buttonText="Зарегистрироваться"
      linkText="Войти"
      id="1"
      name="Reg"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleInputChange}
        placeholder="name"
        className="auth__input"
      />
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
        placeholder="username"
        className="auth__input"
      />
      <input
        type="text"
        name="avatar"
        value={userData.avatar}
        onChange={handleInputChange}
        placeholder="avatar"
        className="auth__input"
      />
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

import './Header.sass';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <Link to="/" className="logo"></Link>
      <div className="header__navigation">
        <Link
          to="calendar"
          className={`header__links ${
            location.pathname === '/calendar' && 'header__links_active'
          }`}
        >
          Календарь
        </Link>
        <Link
          to="community"
          className={`header__links ${
            location.pathname === '/community' && 'header__links_active'
          }`}
        >
          Сообщество
        </Link>
        <Link
          to="about-project"
          className={`header__links ${
            location.pathname === '/about-project' && 'header__links_active'
          }`}
        >
          О проекте
        </Link>
        <Link
          to="signin"
          className={`header__links ${
            location.pathname === '/about-project' && 'header__links_active'
          }`}
        >
          Войти
        </Link>
        <Link
          to="signup"
          className={`header__links ${
            location.pathname === '/about-project' && 'header__links_active'
          }`}
        >
          Регистрация
        </Link>
      </div>
      <Link to="/profile" className="header__auth">
        <div className="header__account-icon"></div>
        <p className="header__user-name">Аккаунт</p>
      </Link>
    </header>
  );
};

export default Header;

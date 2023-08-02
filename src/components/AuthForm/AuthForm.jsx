import { Link } from 'react-router-dom';

export const AuthForm = ({
  children,
  title,
  buttonText,
  linkText,
  name,
  id,
  onSubmit,
}) => {
  return (
    <section className="auth">
      <div className="logo"></div>
      <h2 className="auth__title">{title}</h2>
      <form
        action="auth"
        className="auth__form"
        name={name}
        id={id}
        onSubmit={onSubmit}
      >
        {children}
        <button className="auth__bth">{buttonText}</button>
      </form>
      <div className="auth__box">
        <button className="auth__back">Назад</button>
        <Link className="auth__link">{linkText}</Link>
      </div>
    </section>
  );
};

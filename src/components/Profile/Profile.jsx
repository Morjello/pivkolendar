import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContest';
import { useNavigate } from 'react-router-dom';

export const Profile = ({
  isEditPopupOpened,
  setEditPopupOpened,
  setLoggedIn,
  setCurrentUser,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const openEditPopup = () => {
    setEditPopupOpened(true);
    console.log(isEditPopupOpened);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser([]);
    navigate('/', { replace: true });
  };
  return (
    <section className="profile">
      <div className="profile__container">
        <img
          className="profile__avatar"
          alt="avatar"
          src={currentUser.avatar}
        />
        <ul className="profile__info">
          <li className="profile__text">{currentUser.name}</li>
          <li className="profile__text">{currentUser.username}</li>
          <li className="profile__text">{currentUser.email}</li>
        </ul>
        <button className="profile__edit" onClick={openEditPopup}>
          Редактировать
        </button>
        <button className="profile__logout-button" onClick={handleLogout}>
          Выйти из акка
        </button>
      </div>
      <div className="profile__statistic"></div>
    </section>
  );
};

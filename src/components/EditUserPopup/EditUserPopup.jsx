import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContest';
import { updateUserData } from '../../utils/mainApi';
import { useState } from 'react';

export const EditUserPopup = ({
  setCurrentUser,
  isEditPopupOpened,
  setEditPopupOpened,
}) => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    avatar: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserData(userData);
    setCurrentUser(userData);
    handlePopupClose();
  };

  const handleClickOverlay = (e) => {
    // закрытие попапов по клику на фон
    if (e.currentTarget === e.target) {
      setEditPopupOpened(false);
    }
  };

  const handleKeyEscape = (e) => {
    if (e.key === 'Escape') {
      setEditPopupOpened(false);
    }
  };

  useEffect(() => {
    // закрытие попапов клавишей esc
    if (isEditPopupOpened) {
      document.addEventListener('keydown', handleKeyEscape);
    } else {
      document.removeEventListener('keydown', handleKeyEscape);
    }
  }, [isEditPopupOpened]);
  const handlePopupClose = () => {
    setEditPopupOpened(false);
  };
  return (
    <div
      className={`edit ${isEditPopupOpened ? 'edit__opened' : ''}`}
      onClick={handleClickOverlay}
    >
      <div className="edit__popup">
        <h2 className="edit__title">Измени себя</h2>
        <form action="edit-user" className="edit__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="edit__input"
            placeholder="name"
          />
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className="edit__input"
            placeholder="username"
          />
          <input
            type="text"
            name="avatar"
            value={userData.avatar}
            onChange={handleInputChange}
            className="edit__input"
            placeholder="avatar"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="edit__input"
            placeholder="email"
          />
          <button className="edit__button">Сохранить изменения</button>
        </form>
        <button className="edit__button-close" onClick={handlePopupClose}>
          закрыть
        </button>
      </div>
    </div>
  );
};

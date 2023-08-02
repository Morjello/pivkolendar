import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Welcome } from '../Welcome/Welcome';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { getUserData } from '../../utils/mainApi';
import { useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContest';
import { EditUserPopup } from '../EditUserPopup/EditUserPopup';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const allPaths =
    location.pathname === '/' ||
    location.pathname === '/calendar' ||
    location.pathname === '/community' ||
    location.pathname === '/about-project' ||
    location.pathname === '/profile' ||
    location.pathname === '/signup' ||
    location.pathname === '/signin';

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [isEditPopupOpened, setEditPopupOpened] = useState(false);

  const setUserLoggedIn = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await getUserData(token);
        if (userData) {
          setCurrentUser(userData);
          setLoggedIn(true);
          navigate('/calendar', { replace: true });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUserLoggedIn();
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        {allPaths && <Header />}
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/calendar" element={<Main />}></Route>
          <Route path="/community"></Route>
          <Route path="/about-project"></Route>
          <Route
            path="/profile"
            element={
              <Profile
                isEditPopupOpened={isEditPopupOpened}
                setEditPopupOpened={setEditPopupOpened}
                setLoggedIn={setLoggedIn}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={<Login setCurrentUser={setCurrentUser} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
        {isEditPopupOpened && (
          <EditUserPopup
            setCurrentUser={setCurrentUser}
            isEditPopupOpened={isEditPopupOpened}
            setEditPopupOpened={setEditPopupOpened}
          />
        )}
        {allPaths && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

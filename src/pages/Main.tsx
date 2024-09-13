import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils';
import Lobby from './Lobby';

const Main = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie('__cb__token');

    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    document.cookie = '__cb__token=; path=/';
    window.location.reload();
  };

  const layoutToShow = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (isLoggedIn) {
      return (
        <>
          <Lobby />
          <button onClick={handleLogout}>Logout</button>
        </>
      );
    } else {
      return <button onClick={handleGoToLogin}>Start Board</button>;
    }
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Cheddar Board</h1>

      {layoutToShow()}
    </div>
  );
};
export default Main;

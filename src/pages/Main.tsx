import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Cheddar Board</h1>
      <button onClick={handleGoToLogin}>Start Board</button>
      <button
        onClick={() => {
          window.location.href = '/asdf';
        }}
      >
        asdf
      </button>
    </div>
  );
};
export default Main;

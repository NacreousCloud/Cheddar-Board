import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.warn('need to implement login');
    document.cookie = '__cb__token=1234567890; path=/';
    navigate('/');
  };

  return (
    <>
      <h1>test login page</h1>
      <div>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PW" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;

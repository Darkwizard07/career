import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err) {
      setError('Failed to login: ' + err.message);
    }
  };

  return (
    <div className='centered-container'>
    <div className="auth-form">
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      {error && <div className="error">{error}</div>}
    </div>
    </div>
  );
}

export default Login;

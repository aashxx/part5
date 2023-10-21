import React from 'react';
import PropTypes from 'prop-types';

const Login = ({handleLogin, username, password, setPassword, setUsername}) => {
  return (
    <div>
      <h1>Login to Application</h1>
      <form method='post' onSubmit={handleLogin}>
        <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default Login;

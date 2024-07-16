import React from 'react';


const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url('Fundo de luxo festivo com balões infláveis dourados confete fundo desfocado com efeito bokeh Ai gerado _ Foto Premium.jpeg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const redirectToLogin = () => {
    window.location.href = "/login"; // assuming your login page is at /login
  };
}

export default Login; 
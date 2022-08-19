import React from 'react'; //react todas las etiquetas se cierran "/" y tambien se usa className (class)  
import '../styles/login.scss';

const Login = () => {
	return (
	 <div className="login">
     <div className="form-container" >
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new password for yue account</p>
      <form action="/" className="form">
        <label for="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password" />
        <label for="new-password" className="label">Password</label>
        <input type="password" id="new-password" placeholder="*********" className="input input-password" />
        <input type="submit" value="Confirm" className="primary-button login-button" />
      </form>
      </div>
      </div>
	);
}

export default Login;
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './store/actions';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const doSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <form name="loginForm" onSubmit={doSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label className="purple-text">Email:</label>
            <input type="email" name="email" onChange={emailChange} value={email} />
          </div>
        </div>
        <div className="form-group">
          <label className="purple-text">Password:</label>
          <input type="password" name="password" onChange={passwordChange} value={password} />
        </div>
        <input type="submit" value="Login" />
        <div className="message">
          {state.isLoginPending && <div className="purple-text">Pending...</div>}
          {state.isLoginSuccess && <div className="purple-text">Success.</div>}
          {state.loginError && <div className="purple-text">{state.loginError.message}</div>}
        </div>
      </form>
      <div className="footer-text">Made By Henz (Muhamad Hendy Saputra)</div>
    </div>
  );
}

export default App;

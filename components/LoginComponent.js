
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

// Define the LoginComponent
const LoginComponent = () => {
  // Initialize useRouter
  const router = useRouter();

  // Initialize state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Define handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const response = await axios.post('/api/login', { username, password });
      console.log(response.data);
      // Redirect to ChatPage on successful login
      router.push('/ChatPage');
    } catch (error) {
      // Handle login error
      setError(error.response.data.message);
    }
  };

  // Render LoginComponent
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
};
export default LoginComponent;




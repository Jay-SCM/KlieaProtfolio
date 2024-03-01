
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/signup.module.css'; 

const SignupComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', { username, password });
      console.log(response.data);
      // Handle successful signup
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>Signup</button>
      </form>
    </div>
  );
};

export default SignupComponent;


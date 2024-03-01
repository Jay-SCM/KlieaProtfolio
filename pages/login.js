// pages/login.js
import Link from 'next/link';

import LoginComponent from '../components/LoginComponent';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginComponent />
      <Link href="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};

export default LoginPage;


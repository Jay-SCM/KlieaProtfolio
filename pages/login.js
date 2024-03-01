
import LoginComponent from '../components/LoginComponent';
import ColorGrad from '../components/ColorGrad'; 
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <ColorGrad />   
      
      <LoginComponent />
      <Link href="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};
export default LoginPage;



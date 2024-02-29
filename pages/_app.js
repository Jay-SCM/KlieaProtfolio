
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
    return (
        // Main container for the entire application
        <div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
export default MyApp;

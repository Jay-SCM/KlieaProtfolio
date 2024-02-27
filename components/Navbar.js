
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Logo with link to home page */}
            <Link href="/">
                <div className={styles.logo}>
                    <img src="/prof2.jpg" alt="Your Logo" style={{ maxWidth: '50px', maxHeight: '50px', borderRadius: '50%' }} />
                </div>
            </Link>

            <ul className={styles.navList}>
                {/* External links with PNG icons */}
                <li className={styles.navItem}>
                    <a href="https://github.com/Jay-SCM" target="_blank" rel="noopener noreferrer">
                        <img src="/gitwhite.png" alt="GitHub Icon" style={{ width: '20px', height: '20px' }} />
                        GitHub
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://github.com/Jay-SCM" target="_blank" rel="noopener noreferrer">
                        <img src="/go.png" alt="Discord" style={{ width: '20px', height: '20px' }} />
                        Discord
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/google.png" alt="YouTube Icon" style={{ width: '20px', height: '20px' }} />
                        YouTube
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/next.png" alt="Link" style={{ width: '20px', height: '20px' }} />
                        LinkedIn
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;








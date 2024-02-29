

// Import React library and motion module from framer-motion library
import React from 'react';
import { motion } from 'framer-motion';
// Import styles from the Home module CSS file
import styles from '../styles/Home.module.css';
import TextCard from './TextCard'; 

// Define the ContentCard functional component that takes 'children' as a prop
const ContentCard = ({ children }) => {
    // Return JSX structure for the ContentCard component
    return (
        // Render a div with the specified CSS class from the Home module
        <div className={styles.ContentCard}>
            {/*TextCard component containint header text*/}
      
    
            {/* Render the children components passed to ContentCard */}
            {children}
            {/* Render an animated image (JavaScript Icon) using framer-motion */}
            <motion.img
    src="/js.png"
    alt="JavaScript Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }}
    animate={{ opacity: 1, x: '-800%', y: '-70%' }}
    transition={{ duration: 1, delay: 1 }}
/>

{/* TypeScript Icon */}
<motion.img
    src="/ts.png"
    alt="TypeScript Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }}
    animate={{ opacity: 1, x: '-650%', y: '-170%' }}
    transition={{ duration: 1, delay: 1 }}
/>

{/* MySQL Icon */}
<motion.img
    src="/mysql.png"
    alt="MySQL Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }}
    animate={{ opacity: 1, x: '-520%', y: '-260%' }}
    transition={{ duration: 1, delay: 1 }}
/>

{/* Figma Icon */}
<motion.img
    src="/figma.png"
    alt="Figma Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }}
    animate={{ opacity: 1, x: '-390%', y: '-365%' }}
    transition={{ duration: 1, delay: 1 }}
/>

{/* MUI Icon */}
<motion.img
    src="/mui.png"
    alt="MUI Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }}
    animate={{ opacity: 1, x: '-230%', y: '-480%' }}
    transition={{ duration: 1, delay: 1 }}
/>

{/* Framer Icon */}
<motion.img
    src="/framer.png"
    alt="Framer Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }}
    animate={{ opacity: 1, x: '800%', y: '-560%' }}
    transition={{ duration: 1, delay: 1 }}
/>

{/* HTML Icon */}
<motion.img
    src="/html.png"
    alt="HTML Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }}
    animate={{ opacity: 1, x: '700%', y: '-660%' }}
    transition={{ duration: 1, delay: 1 }}
/>
            {/* Render an animated image (MySQL Icon) using framer-motion */}
            <motion.img
    src="/mongodb.png"
    alt="mongodb Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }} // Initial position and opacity
    animate={{ opacity: 1, x: '600%', y: '-760%' }} // Fade in the image and move into position
    transition={{ duration: 1, delay: 1 }} // Transition duration and delay
    whileHover={{ scale: 1.2 }} // Scale up the image when hovered
/>

            {/* Render an animated image (Figma Icon) using framer-motion */}
            <motion.img
    src="/next.png"
    alt="nextjs Icon"
    className="animatedIcon"
    style={{ width: '60px', height: '60px' }}
    initial={{ opacity: 0, x: '-100%', y: '-100%' }} // Initial position and opacity
    animate={{ opacity: 1, x: '480%', y: '-860%' }} // Fade in the image and move into position
    transition={{ duration: 1, delay: 1 }} // Transition duration and delay
    whileHover={{ scale: 1.2 }} // Scale up the image when hovered
/>

            {/* Render an animated image (MUI Icon) using framer-motion */}
            {/* <motion.img
                src="/node-js.png"
                alt="node-js Icon"
                className="animatedIcon"
                style={{ width: '60px', height: '60px' }}
                animate={{ x: '350%', y: '-960%', repeat: Infinity, duration: 12000, delay: 2000 }}
            /> */}

            <motion.img
                src="/node-js.png"
                alt="node-js Icon"
                className="animatedIcon"
                style={{ width: '60px', height: '60px' }}
                initial={{ opacity: 0, x: '0%', y: '0%' }} // Initial position and opacity
                animate={{ opacity: 1, x: '350%', y: '-960%' }} // Final position and opacity
                transition={{ duration: 1 }} // Transition duration in seconds
            />



            {/* Add more animated image elements for other icons */}
        </div>
    );
};

// Export the ContentCard component as the default export
export default ContentCard;
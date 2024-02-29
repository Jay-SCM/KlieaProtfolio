// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from '../styles/Home.module.css';
// import TextCard from './TextCard'; 

// const ContentCard = ({ children }) => {
//     return (
//         <div className={styles.ContentCard}>
//             {children}

//             {/* Container for icons */}
//             <motion.div
//                 className="iconsContainer"
//                 style={{
//                     display: 'flex',
//                     position: 'fixed',
//                     top: '680px', // Adjust as needed to position the icons vertically
//                     left: '0',
//                     width: '100%',
//                     justifyContent: 'center',
//                     alignItems: 'flex-start' // Align icons to the top of the container
//                 }}
//             >
//                 {/* JavaScript Icon */}
//                 <motion.img
//                     src="/js.png"
//                     alt="JavaScript Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '-40px' }} // Slide into place from the left
//                     transition={{ duration: 0.5, delay: 0.1 }} // Quick transition
//                 />

//                 {/* TypeScript Icon */}
//                 <motion.img
//                     src="/ts.png"
//                     alt="TypeScript Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '40px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.2 }} // Quick transition with a slight delay
//                 />

//                 {/* MySQL Icon */}
//                 <motion.img
//                     src="/mysql.png"
//                     alt="MySQL Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '120px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.3 }} // Quick transition with a slight delay
//                 />

//                 {/* Figma Icon */}
//                 <motion.img
//                     src="/figma.png"
//                     alt="Figma Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '200px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.4 }} // Quick transition with a slight delay
//                 />

//                 {/* MUI Icon */}
//                 <motion.img
//                     src="/mui.png"
//                     alt="MUI Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '280px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.5 }} // Quick transition with a slight delay
//                 />

//                 {/* Framer Icon */}
//                 <motion.img
//                     src="/framer.png"
//                     alt="Framer Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '360px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.6 }} // Quick transition with a slight delay
//                 />

//                 {/* HTML Icon */}
//                 <motion.img
//                     src="/html.png"
//                     alt="HTML Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '440px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.7 }} // Quick transition with a slight delay
//                 />

//                 {/* MongoDB Icon */}
//                 <motion.img
//                     src="/mongodb.png"
//                     alt="MongoDB Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '520px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.8 }} // Quick transition with a slight delay
//                 />

//                 {/* Next.js Icon */}
//                 <motion.img
//                     src="/next.png"
//                     alt="Next.js Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '600px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 0.9 }} // Quick transition with a slight delay
//                 />

//                 {/* Node.js Icon */}
//                 <motion.img
//                     src="/node-js.png"
//                     alt="Node.js Icon"
//                     className="animatedIcon"
//                     style={{ width: '60px', height: '60px' }}
//                     initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
//                     animate={{ opacity: 1, x: '680px' }} // Slide into place from the left, adjusted to create space between icons
//                     transition={{ duration: 0.5, delay: 1.0 }} // Quick transition with a slight delay
//                 />

//                 {/* Add more icons following the same pattern */}
//             </motion.div>

//             {/* Container for project cards */}
//             <div className="projectCardContainer" style={{ marginTop: '200px' }}>
//                 {/* Add project cards here */}
//             </div>
//         </div>
//     );
// };

// export default ContentCard;

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import TextCard from './TextCard'; 

const ContentCard = ({ children }) => {
    // Define an array of objects representing each icon
    const icons = [
        { src: "/js.png", alt: "JavaScript Icon", x: 0 },
        { src: "/ts.png", alt: "TypeScript Icon", x: 80 },
        { src: "/mysql.png", alt: "MySQL Icon", x: 160 },
        { src: "/figma.png", alt: "Figma Icon", x: 240 },
        { src: "/mui.png", alt: "MUI Icon", x: 320 },
        { src: "/framer.png", alt: "Framer Icon", x: 400 },
        { src: "/html.png", alt: "HTML Icon", x: 480 },
        { src: "/mongodb.png", alt: "MongoDB Icon", x: 560 },
        { src: "/next.png", alt: "Next.js Icon", x: 640 },
        { src: "/node-js.png", alt: "Node.js Icon", x: 720 }
    ];

    return (
        <div className={styles.ContentCard}>
            {children}

            {/* Container for icons */}
            <motion.div
                className="iconsContainer"
                style={{
                    position: 'fixed',
                    top: '440px', // Adjust as needed to position the icons vertically
                    left: '0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start' // Align icons to the top of the container
                }}
            >
                {/* Map through the icons array and render each icon */}
                {icons.map((icon, index) => (
                    <motion.img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        className="animatedIcon"
                        style={{ width: '60px', height: '60px' }}
                        initial={{ opacity: 0, y: '-50px' }} // Start off the screen above the cards
                        animate={{ opacity: 1, x: `${icon.x}px` }} // Slide into place from the left
                        transition={{ duration: 0.5, delay: 0.1 * index }} // Quick transition with a slight delay
                    />
                ))}
            </motion.div>

            {/* Container for project cards */}
            <div className="projectCardContainer" style={{ marginTop: '200px', position: 'fixed', top: '300px' }}>
                {/* Add project cards here */}
            </div>
        </div>
    );
};

export default ContentCard;




import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import TextCard from './TextCard'; 

const ContentCard = ({ children }) => {
    // array of icon and properties
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
                    top: '440px', // verticality
                    left: '0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start' // align icons horizontaly at the the continainer
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
            </div>
        </div>
    );
};

export default ContentCard;




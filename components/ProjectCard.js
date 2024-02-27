
import React from 'react';
import Link from 'next/link'; 
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, imageUrl, href }) => {
    return (
        <Link href={href}>
            <div className={styles.projectCard}>
                <img src={imageUrl} alt={title} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </Link>
    );
}

export default ProjectCard;






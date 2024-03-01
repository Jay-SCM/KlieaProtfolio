import React, { useState } from 'react';
import Header from '../components/Header';  
import ContentCard from '../components/ContentCard';  
import ProjectCard from '../components/ProjectCard';  
import ColorGrad from '../components/ColorGrad';  
import styles from '../styles/Home.module.css';  

const Home = () => {
    // Array containing project data
    const allProjects = [
        { title: "Project 1", description: "Hero Selector BIO", imageUrl: "/ahri.jpg", href: "/heroCard" },
        { title: "Project 2", description: "Weather Application", imageUrl: "/ahri.jpg", href: "/weather" },
        { title: "Project 3", description: "CodeSnippets", imageUrl: "/ahri.jpg", href: "/codecard" },
        { title: "Project 4", description: "Chat Application", imageUrl: "/ahri.jpg", href: "/ChatApp" },
        { title: "Project 5", description: "PLACEHOLDER 1", imageUrl: "/ahri.jpg", href: "PLACEHOLDER 1" },
        { title: "Project 6", description: "PLACEHOLDER 2", imageUrl: "/ahri.jpg", href: "PLACEHOLDER 2" },
        // more projects as needed
    ];

    // State for tracking the index of the currently displayed set of projects
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    // Slice the array to get the subset of projects to display
    const projectsToShow = allProjects.slice(currentSetIndex, currentSetIndex + 3);

    // Handler function for the "Next" button click
    const handleNextClick = () => {
        setCurrentSetIndex((prevIndex) => prevIndex + 3);
    };

    // Handler function for the "Prev" button click
    const handlePrevClick = () => {
        setCurrentSetIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    };

    // Return the JSX structure for the Home component
    return (
        <div className={styles.container}>
            {/* Render the ColorGrad component */}
            <ColorGrad />
            
            {/* Render the Header component */}
            <Header />
    
            {/* Render the ContentCard component with its styles and properties */}
            <ContentCard className={styles.ContentCard}>
                {/* Content inside ContentCard goes here */}
            </ContentCard>
    
            {/* Wrap each set of cards and navigation buttons in a container */}
            <div className={styles.cardSetContainer}>
                {/* Navigation buttons for switching project sets with PNG arrow icons */}
                <div className={styles.navigationButtons}>
                    <button className={`${styles.leftButton}`} onClick={handlePrevClick} disabled={currentSetIndex === 0}>
                        {/* Include the PNG arrow icon for "Prev" */}
                        <img src="/scroll left.png" alt="Previous" className={styles.arrowIcon} />
                    </button>
                    <button className={`${styles.rightButton}`} onClick={handleNextClick} disabled={currentSetIndex + 3 >= allProjects.length}>
                        {/* Include the PNG arrow icon for "Next" */}
                        <img src="/scroll right.png" alt="Next" className={styles.arrowIcon} />
                    </button>
                </div>

                {/* Render the project cards */}
                <div className={styles.cardContainer}>
                    {/* Map through the projectsToShow array and render ProjectCard components */}
                    {projectsToShow.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;



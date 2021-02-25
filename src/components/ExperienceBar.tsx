import styles from '../styles/components/ExperienceBar.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel, oldExperience } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience *100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>{oldExperience} px</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`,transition: 'width 3s ease-in-out'}}/>
                <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`,transition: 'left 3s ease-in-out'}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}
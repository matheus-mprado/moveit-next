import { GetServerSideProps } from "next";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import styles from '../styles/pages/Award.module.css';

interface HomeProps{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    oldExperience:number;
}

export default function Award(props:HomeProps){


    return(
    <ChallengesProvider
        level={props.level} 
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
        oldExperience={props.oldExperience}
    >
        <div className={styles.sidebarContainer}>

                <Sidebar/>

            <div className={styles.container}>

                <Head>
                    <title>Awards | move.it</title>
                </Head>
            </div>
        </div>
    </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const {level, currentExperience, challengesCompleted,oldExperience} = ctx.req.cookies;
  
    return {
      props:{
        level: Number(level),
        currentExperience:Number(currentExperience),
        challengesCompleted:Number(challengesCompleted),
        oldExperience:Number(oldExperience)
      }
    };
  }
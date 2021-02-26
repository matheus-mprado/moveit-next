import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
 
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from '../components/CompletedChallenger';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useEffect } from 'react';

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  oldExperience:number;
}


const useUser = () => ({user:null,loading:false})

export default function Home(props:HomeProps) {

  const {user,loading} = useUser();
  const router = useRouter();

  useEffect(()=>{
    if(!(user || loading)){
      router.push('./');
    }
  },[user,loading])

  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      oldExperience={props.oldExperience}
    >
      <div className={styles.container}>

        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar/>

        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>

            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
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
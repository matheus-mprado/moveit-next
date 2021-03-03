import { signIn, signOut, useSession } from "next-auth/client";

import styles from '../styles/pages/Login.module.css';
import {RiArrowRightLine as RightArrow} from 'react-icons/ri';
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Login(){

  const [session,loading] = useSession()
  const router = useRouter();

  if(loading){
    return ''
  }

  useEffect(() => {
    if(session){
      router.push('/home');
    }
  }, [])

  return(
      <div className={styles.loginContainer}>
        <img src="/logo-icon.svg" style={{fill:"#fff"}} alt="logo moveit"/>

        <div className={styles.loginArea}>
          <img src="/logo-fullWhite.svg" alt="logo white moveit"/>
          <h2>Bem-vindo</h2>
          <div>
            <img src="/icons/github.svg" alt="logo github"/>
            <p>Faça login com seu Github<br/> para começar</p>
          </div>
          
          {!session && (
            <div className={styles.buttonLogin}>
              <div>
                <span>Entrar com Github</span>
              </div>
              <button onClick={() => signIn('github')} ><RightArrow/></button>
            </div>
          )}

          {session && (
            <div className={styles.buttonLogin}>
              <div>
                <span>Sair</span>
              </div>
              <button onClick={() => signOut} ><RightArrow/></button>
            </div>
          )}

          
        </div>
      </div>
  );
}
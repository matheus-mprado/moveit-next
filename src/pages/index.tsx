import styles from '../styles/pages/Login.module.css';
import {RiArrowRightLine as RightArrow} from 'react-icons/ri';


export default function Login(){
  

  

  function linkAuthGit(){
   window.open(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
  }

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
          
          <div className={styles.buttonLogin}>
            <div>
              <span>Entrar com Github</span>
            </div>
            <button onClick={linkAuthGit}><RightArrow/></button>
          </div>
        </div>
      </div>
  );
}
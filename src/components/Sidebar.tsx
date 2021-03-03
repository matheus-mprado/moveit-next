
import styles from '../styles/components/Sidebar.module.css';

import {FiHome as Home, FiAward as Award, FiLogOut as Logout} from 'react-icons/fi';
import { useRouter } from 'next/router';



export function Sidebar(){

    const router = useRouter();
    const pathName = router.pathname;

    function handleGoHome(){
        router.push('/home');
    }

    function handleGoAward(){
        router.push('/award');
    }

    return(
        <div className={styles.sidebarContainer}>      
           
            <img src="/logo-icon.svg" alt="logotipo move-it"/>

            <div className={styles.menu}>
                {pathName == '/home' ?
                    <button 
                        className={styles.menuActive}
                        onClick={handleGoHome}
                    >
                            <Home/>
                    </button> :

                    <button
                        onClick={handleGoHome}
                    >
                        <Home/>
                    </button>
                }

                {pathName == '/award' ?
                    <button 
                        className={styles.menuActive}
                        onClick={handleGoAward}
                    >
                        <Award/>
                    </button> :

                    <button onClick={handleGoAward}>
                        <Award/>
                    </button>
                }

                
            </div>

            <div className={styles.logout}>
                <button><Logout/></button>
            </div>
            
        </div>
    );
}
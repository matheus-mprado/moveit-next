import { request } from 'https';
import { ReactNode } from 'react';

interface AuthData{
    request:ReactNode;
    response:ReactNode;
}

export default function Auth(){


    const getAuth = async () => {
        const res = await fetch(`/auth`);

        const json = res.json();

        console.log(json);
        
    }

    return(
        <h1>123</h1>

        
    );
}
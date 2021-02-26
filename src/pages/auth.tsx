import { request } from 'https';
import { ReactNode } from 'react';

interface AuthData{
    request:ReactNode;
    response:ReactNode;
}

export default function Auth(){


    async function getAuth ({request,response}:AuthData) {
        await fetch(`/auth`)
        .then((response)=>{
          return response.json();
        })
      }

    return(
        <h1>123</h1>

        
    );
}
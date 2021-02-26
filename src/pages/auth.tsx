import React from 'react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface AuthData{
    request:ReactNode;
    response:ReactNode;
}

export default function Auth(){

    async function getCode(){
        const router  =  useRouter();
        
        const  code  =  router.query.code;
        const clientId = 'f48e3c48965bbf6160e4';
        const client_secret = 'e7e1bb896eab1207fa2ee3e98f06d7980c568602 '

        const body = {
            client_id:clientId,
            client_secret:client_secret,
            code: code,
        }

        const req = await fetch(`http://github.com/login/oauth/authorize`,{
            method:'POST',
            headers:{
                Accept: 'application/json',
            },
            body: JSON.stringify(body)
        }).
        then(()=>{
            console.log(req);
        })
    }
    
    getCode();

    return(
        <div>
            
        </div>
    );
}
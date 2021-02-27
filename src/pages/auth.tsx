import React from 'react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import axios from 'axios';

export default function Auth(){

    interface MapData{
        item:ReactNode;
        key:Number;
    }

        const router  =  useRouter();
        const  code  =  router.query.code;
    
        const clientId = 'f48e3c48965bbf6160e4';
        const client_secret = 'e7e1bb896eab1207fa2ee3e98f06d7980c568602 '

        const body = {
            client_id:clientId,
            client_secret:client_secret,
            code: code,
        }
        const headers = {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }

        async function teste(){
            const response = await axios.post('https://github.com/login/oauth/access_token',body,{headers});
        }
        
       

    return(
        <div>
            {body.code}
        </div>
    );
}
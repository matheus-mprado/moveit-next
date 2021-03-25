import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.GitHub({
            clientId: 'f48e3c48965bbf6160e4',
            clientSecret: 'e7e1bb896eab1207fa2ee3e98f06d7980c568602'
        }),
    ],
    callbacks:{
        redirect: async(url,_) =>{
            if(url === '/api/auth/signin'){
                return Promise.resolve('/home')
            }
            return Promise.resolve('/')
        },
    },
   
}

export default (req, res) => NextAuth(req, res, options)
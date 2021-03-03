import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
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
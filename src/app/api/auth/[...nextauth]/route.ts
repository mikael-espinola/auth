import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = nextAuth({
    pages: {
        signIn: '/'
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Username", type: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials) {
                return null
            }
            if(credentials.email === "mikael@email.com" && credentials.password === "123"){
                return {
                    id: "1",
                    email: `${credentials.email}`,
                    name: "Mikael Espínola"
                }
            }
            console.log(credentials)
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST}
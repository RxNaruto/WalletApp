import { prismaClient } from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcrypt"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "9898989898" },
                password: { label: "Password", type: "password" }
            },
 
            async authorize(credentials: any) {
                const{phone,password} = credentials
                const hashedPassword = await bcrypt.hash(password, 10);
                const existingUser = await prismaClient.user.findFirst({
                    where: {
                        phone: phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null;
                }
                try {
                    const user = await prismaClient.user.create({
                        data: {
                            phone: phone,
                            password: hashedPassword
    
                        }
                    });
                    return {
    
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
    
                    }
                } catch (error) {
                    console.log(error);
                }
                return null;
            }
        }),
        GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""

    })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session({token,session}:any){
            session.user.id = token.sub
            return session
        }
    },
    pages: {
    signIn: "/auth/signin"
  }
}
import { NextResponse } from "next/server";
import { prismaClient } from "@repo/db/client";

export const GET = async ()=>{

    try {
        const user = await prismaClient.user.create({
            data: {
                email: "a@mail.com",
                name: "adfa"
            }
        })
        if(user){
            return NextResponse.json({
                message: "user created"
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
                message: "error"
            })
    }
    
}
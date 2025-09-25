"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prismaClient } from "@repo/db/client";
export async function createOnRampTxn(amount: number,provider: string){
    const session = await getServerSession(authOptions);
    const token = Math.random().toString();
    const userId = session.user.id
    if(!userId){
        return{
            message: "you are not logged in"
        }
    }
    try {
        const data = await prismaClient.onRampTransaction.create({
            data:{
                status: "Processing",
                token: token,
                provider: provider,
                amount: amount,
                startTime: new Date(),
                userId: Number(userId)
            }
        })
        return {
            message: "On Ramp Transaction Added"
        }
    } catch (error) {
        return {
            message: "Internal Server error"
        }
    }


}
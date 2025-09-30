import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { prismaClient } from "@repo/db/client";
import { OnRampTransaction } from "../../../components/OnRampTransactions";
import { redirect } from "next/navigation";
async function getOnRampTransactions(){
    const session = await getServerSession(authOptions);
    if(!session){
            redirect("/auth/signin")
        }
    const txns = await prismaClient.onRampTransaction.findMany({
        where:{
            userId: Number(session.user.id)
        }
    })
    return txns.map(t=>({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}
export default async function transaction(){
    const transactions = await getOnRampTransactions();
    return <div>
        <OnRampTransaction transaction={transactions} />
        
    </div>
}
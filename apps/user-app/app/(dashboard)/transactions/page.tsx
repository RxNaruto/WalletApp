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
        },
        orderBy: {startTime: "desc"}
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
    return <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Transaction History</h1>
                <p className="text-gray-400">View all your recent transactions and their status</p>
            </div>
         <OnRampTransaction transaction={transactions} />
         </div>
     </div>
}
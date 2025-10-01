import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { prismaClient } from "@repo/db/client";
import { P2PTransactions } from "../../../components/OnP2PTransaction";
import { redirect } from "next/navigation";

async function getP2PTransactions(){
    const session = await getServerSession(authOptions);
    if(!session){
            redirect("/auth/signin")
        }
    const txns = await prismaClient.p2pTransfer.findMany({
        where: {
            OR: [
                {fromUserId: Number(session.user.id)},
                {toUserId: Number(session.user.id)}
            ]
        }
    })
    return txns.map(t=>({
        timestamp: t.timestamp,
        amount: t.amount,
        fromUserId: t.fromUserId,
        toUserId: t.toUserId
    }))
    
}
export default async function transaction(){
    const transactions = await getP2PTransactions();
    return <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">P2P Transaction History</h1>
                <p className="text-gray-400">View all your peer-to-peer transfers and payments</p>
            </div>
         <P2PTransactions transaction={transactions} />
        </div>
    </div>
}
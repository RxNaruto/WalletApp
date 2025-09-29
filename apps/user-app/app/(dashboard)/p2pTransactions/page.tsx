import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { prismaClient } from "@repo/db/client";
import { P2PTransactions } from "../../../components/OnP2PTransaction";

async function getP2PTransactions(){
    const session = await getServerSession(authOptions);
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
    return <div>
        <P2PTransactions transaction={transactions} />
        
    </div>
}
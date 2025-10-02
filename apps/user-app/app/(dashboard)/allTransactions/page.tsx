import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { prismaClient } from "@repo/db/client";
import { AllTransactionsList } from "../../../components/AllTransactionList";
import { redirect } from "next/navigation";
async function getAllTransactions() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin")
    }

    const onRampTxns = await prismaClient.onRampTransaction.findMany({
        where: {
            userId: Number(session.user.id),
            status: "Success"
        },
        select: {
            amount: true,
            status: true,
            provider: true,
            startTime: true,
        }
    })
    const sentTxn = await prismaClient.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session.user.id)
        },
        select: {
            amount: true,
            timestamp: true,
            toUserId: true
        }
    })
    const receivedTxn = await prismaClient.p2pTransfer.findMany({
        where: {
            toUserId: Number(session.user.id)
        },
        select: {
            amount: true,
            timestamp: true,
            fromUserId: true
        }
    })
    const allTransactions = [
        ...onRampTxns.map(t => ({
            type: "RECEIVED",
            amount: t.amount,
            status: t.status,
            provider: t.provider,
            datetime: t.startTime,

        })),
        ...sentTxn.map(t => ({
            type: "SENT",
            amount: t.amount,
            datetime: t.timestamp,
            toUserId: t.toUserId

        })),
        ...receivedTxn.map(t => ({
            type: "RECEIVED",
            amount: t.amount,
            datetime: t.timestamp,
            fromUserId: t.fromUserId

        })),
    ]
    allTransactions.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
    return allTransactions.map(t => ({
        timestamp: t.datetime,
        amount: t.amount,
        type: t.type
    }))
}
export default async function AllTransactions() {
    const txn = await getAllTransactions();
    return <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">All Transactions</h1>
               <p className="text-gray-400">Complete history of all your transactions and transfers</p>
            </div>
         <AllTransactionsList transaction={txn} />
        </div>
     </div>
}
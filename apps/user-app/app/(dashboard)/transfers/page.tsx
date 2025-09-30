import { getServerSession } from "next-auth"
import { AddMoneyCard } from "../../../components/AddMoneyCard"
import { BalanceCard } from "../../../components/BalanceCard"
import { authOptions } from "../../lib/auth"
import { prismaClient } from "@repo/db/client";
import { redirect } from "next/navigation";
async function getBalance() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/auth/signin")
    }
    const balance = await prismaClient.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

export default async function transfers() {
    const balance = await getBalance();
   
            return <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Transfer Money</h1>
                        <p className="text-gray-400">Add money to your wallet or check your balance</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <AddMoneyCard />
                        <BalanceCard amount={balance.amount} locked={balance.locked} />

                    </div>
                </div>

            </div>
}
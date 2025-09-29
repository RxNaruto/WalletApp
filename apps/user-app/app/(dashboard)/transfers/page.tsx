import { getServerSession } from "next-auth"
import { AddMoneyCard } from "../../../components/AddMoneyCard"
import {BalanceCard} from "../../../components/BalanceCard"
import { authOptions } from "../../lib/auth"
import { prismaClient } from "@repo/db/client";

async function getBalance(){
    const session = await getServerSession(authOptions);
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

export default async function transfers(){
    const balance = await getBalance();
    return <div>
        transfer
        <div className="flex">
            <AddMoneyCard />
            <BalanceCard amount={balance.amount} locked={balance.locked} />
        </div>
    
    </div>
}
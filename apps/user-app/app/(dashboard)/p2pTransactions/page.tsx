import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { prismaClient } from "@repo/db/client";
import { P2PTransactions } from "../../../components/OnP2PTransaction";
import { redirect } from "next/navigation";

async function getP2PTransactions() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/auth/signin");
    }

    const userId = Number(session.user.id);

    // Include phone numbers for both users
    const txns = await prismaClient.p2pTransfer.findMany({
        where: {
            OR: [
                { fromUserId: userId },
                { toUserId: userId }
            ]
        },
        include: {
            fromUser: { select: { phone: true } },
            toUser: { select: { phone: true } }
        },
        orderBy: { timestamp: "desc" }
    });

    // Determine if SENT or RECEIVED
    return txns.map(t => ({
        timestamp: t.timestamp,
        amount: t.amount,
        type: t.fromUserId === userId ? "SENT" : "RECEIVED",
        fromPhone: t.fromUser.phone,
        toPhone: t.toUser.phone
    }));
}

export default async function Transaction() {
    const transactions = await getP2PTransactions();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">P2P Transaction History</h1>
                    <p className="text-gray-400">
                        View all your peer-to-peer transfers and payments
                    </p>
                </div>
                <P2PTransactions transaction={transactions} />
            </div>
        </div>
    );
}

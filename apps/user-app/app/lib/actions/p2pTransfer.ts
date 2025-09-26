"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prismaClient } from "@repo/db/client";

export async function p2pTransfer(to: number, amount: number) {
    const session = await getServerSession(authOptions);
    const from = session.user.id;
    console.log(from)
    if (!from) {
        return {
            message: "Error while sending"
        }

    }
    const toUser = await prismaClient.user.findFirst({
        where: {
            phone: String(to)
        }

    });
    if (!toUser) {
        return {
            message: "User not Found"
        }
    }
    await prismaClient.$transaction(async (tx) => {
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId"= ${Number(from)} FOR UPDATE`;
        const fromBalance = await tx.balance.findUnique({

            where: {
                userId: Number(from)
            }
        });
        if (!fromBalance) {
            throw new Error('not found');
        }
        if (fromBalance.amount < amount) {
            throw new Error('insufficient');
        }
        await tx.balance.update({
            where: {
                userId: Number(from)
            },
            data: {
                amount: {
                    decrement: amount
                }
            }
        })
        await tx.balance.upsert({
            where: {
                userId: toUser.id
            },
            update: {
                amount: { increment: amount }
            },
            create: {
                userId: toUser.id,
                amount: amount,
                locker: 0
            }
        })
    })
}
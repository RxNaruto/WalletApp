import express from "express"
import { prismaClient } from "@repo/db/client";
const app = express();
app.use(express.json())

app.post("/hdfcwebhook", async (req, res) => {
    const paymentInfo: {
        token: string
        userId: string
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }

    try {
        await prismaClient.$transaction([
            prismaClient.balance.upsert({
                where: {
                    userId: Number(paymentInfo.userId)
                },
                update :{
                    amount: {
                        increment: Number(paymentInfo.amount)
                    }
                },
                create: {
                    userId: Number(paymentInfo.userId),
                    amount: Number(paymentInfo.amount),
                    locked: 1000

                }
            }),
            prismaClient.onRampTransaction.updateMany({
                where: {
                    token: paymentInfo.token
                },
                data: {
                    status: "Success"
                }
            })
        ])
        res.status(200).json({
            message: "Captured"
        })
    } catch (error) {
      console.log(error);
      res.status(411).json({
        message: "Error while Processing Webhooks"
      })
    }
})
app.post("/axiswebhook", async (req, res) => {
    const paymentInfo: {
        token: string
        userId: string
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }

    try {
        await prismaClient.$transaction([
            prismaClient.balance.upsert({
                where: {
                    userId: Number(paymentInfo.userId)
                },
                update :{
                    amount: {
                        increment: Number(paymentInfo.amount)
                    }
                },
                create: {
                    userId: Number(paymentInfo.userId),
                    amount: Number(paymentInfo.amount),
                    locked: 1000

                }
            }),
            prismaClient.onRampTransaction.updateMany({
                where: {
                    token: paymentInfo.token
                },
                data: {
                    status: "Success"
                }
            })
        ])
        res.status(200).json({
            message: "Captured"
        })
    } catch (error) {
      console.log(error);
      res.status(411).json({
        message: "Error while Processing Webhooks"
      })
    }
})

app.get("/allT", async (req, res) => {
  const userId = Number(req.body.userId);

  // 1. Fetch on-ramp transactions
  const onRamp = await prismaClient.onRampTransaction.findMany({
    where: { userId },
    select: {
      id: true,
      amount: true,
      status: true,
      provider: true,
      startTime: true,
    },
  });

  // 2. Fetch sent transfers
  const sent = await prismaClient.p2pTransfer.findMany({
    where: { fromUserId: userId },
    select: {
      id: true,
      amount: true,
      timestamp: true,
      toUserId: true,
    },
  });

  // 3. Fetch received transfers
  const received = await prismaClient.p2pTransfer.findMany({
    where: { toUserId: userId },
    select: {
      id: true,
      amount: true,
      timestamp: true,
      fromUserId: true,
    },
  });

  // 4. Normalize into one array
  const allTransactions = [
    ...onRamp.map(t => ({
      type: "ONRAMP",
      id: t.id,
      amount: t.amount,
      status: t.status,
      provider: t.provider,
      datetime: t.startTime,
    })),
    ...sent.map(t => ({
      type: "P2P_SENT",
      id: t.id,
      amount: t.amount,
      toUserId: t.toUserId,
      datetime: t.timestamp,
    })),
    ...received.map(t => ({
      type: "P2P_RECEIVED",
      id: t.id,
      amount: t.amount,
      fromUserId: t.fromUserId,
      datetime: t.timestamp,
    })),
  ];

  // 5. Sort by datetime DESC (latest first)
  allTransactions.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());

  return res.json({ data: allTransactions });
});

app.listen(3003);
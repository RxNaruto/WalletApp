import express from "express"
import { prismaClient } from "@repo/db/client";
import { amountValidTypes, signupTypes } from "@repo/zod-schema/types";
import { phoneTypes } from "@repo/zod-schema/types";
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
        update: {
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
        update: {
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

app.post("/test", (req, res) => {
  const body = req.body;
  const parsedData = amountValidTypes.safeParse(body.amount);
  if(parsedData.success){
    return res.json({
      message: "valid"
    })
  }
  return res.json({
    message: "not valid"
  })

})

app.listen(3003);
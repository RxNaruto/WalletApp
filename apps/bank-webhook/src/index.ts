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
            prismaClient.balance.updateMany({
                where: {
                    userId: Number(paymentInfo.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInfo.amount)
                    }
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
app.post("/test",async(req,res)=>{
 const body = req.body;
 const {userId,amount,locker} = body;
  try {
    const bal = await prismaClient.balance.create({
      data: {
          userId: userId,
          amount: amount,
          locker: locker
      }
    })
    if(bal){
        return res.json({
            message: "Balance added",
            userId: userId
        })

    }
  } catch (error) {
    return res.json({
        message: "Error"
    })
  }
})

app.listen(3003);
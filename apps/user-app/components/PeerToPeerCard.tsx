"use client"
import { AddMoneyButton } from "@repo/ui/AddMoneyButton"
import { InputBox } from "@repo/ui/InputBox"
import { useState } from "react"
import { p2pTransfer } from "../app/lib/actions/p2pTransfer"
import { amountValidTypes, phoneTypes } from "@repo/zod-schema/types"
import { toast } from "react-toastify"
export const PeerToPeerCard = () => {
    const [number, setNumber] = useState(0);
    const [amount, setAmount] = useState(0);

    const handleP2PTransfer = async () => {
        if (!number || !amount) {
            toast.warn("Please fill in both fields!");
            return;
        }
        const parsedAmountData = amountValidTypes.safeParse(amount);
        const parsedPhoneData = phoneTypes.safeParse(number);
        if (!parsedAmountData.success && !parsedPhoneData.success) {
            toast.error("Invalid Details")
            throw new Error("Invalid Details");
        }
        toast.success("Transaction Complete");
        await p2pTransfer(number, Number(amount * 100));
    }
    return <div>
        <div>Send</div>
        <InputBox label={"Number"} placeholder={"Number"} onChange={(e) => {
            setNumber(Number(e.target.value));
        }} />
        <InputBox label={"Amount"} placeholder={"5000"} onChange={(e) => {
            setAmount(Number(e.target.value));
        }} />
        <div>
            <AddMoneyButton label={"Send"} onClick={handleP2PTransfer} />
        </div>
    </div>
}
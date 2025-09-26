"use client"
import { AddMoneyButton } from "@repo/ui/AddMoneyButton"
import { InputBox } from "@repo/ui/InputBox"
import { useState } from "react"
import { p2pTransfer } from "../app/lib/actions/p2pTransfer"
export const PeerToPeerCard=()=>{
    const [number,setNumber]=useState(0);
    const [amount,setAmount]=useState(0);
    return <div>
        <div>Send</div>
        <InputBox label={"Number"} placeholder={"Number"} onChange={(e)=>{
            setNumber(Number(e.target.value));
        }}/>
        <InputBox label={"Amount"} placeholder={"5000"} onChange={(e)=>{
            setAmount(Number(e.target.value));
        }}/>
        <div>
            <AddMoneyButton label={"Send"} onClick={async()=>{
             await p2pTransfer(number,Number(amount*100));
            }}/>
        </div>
    </div>
}
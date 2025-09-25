"use client"
import { InputBox } from "@repo/ui/InputBox"
import { Select } from "@repo/ui/Select"
import { AddMoneyButton } from "@repo/ui/AddMoneyButton"
import { useState } from "react"
import { createOnRampTxn } from "../app/lib/actions/createOnRampTxn"

const Supported_Banks=[{
    name: "hdfcBank",
    redirectUrl: "https://netbanking.hdfcbank.com"
},{
    name: "axisBank",
    redirectUrl: "https://www.axisbank.com/"
}]

export const AddMoneyCard=()=>{

    const[redirectUrl,setRedirectUrl] = useState(Supported_Banks[0]?.redirectUrl);
    const[amount,setAmount]=useState(0);
    const[provider,setProvider]=useState(Supported_Banks[0]?.name ||"")

    function red(){
    window.location.href= redirectUrl || ""
}

    return <div className="bg-blue-200">
        <div className="text-3xl text-red-400">AddMoney</div>
        <div><InputBox label={"Amount"} placeholder={"Amount"} onChange={(e)=>setAmount(Number(e.target.value))}/></div>
        <div>
            <Select onSelect={(value)=>{
                setRedirectUrl(Supported_Banks.find(x=>x.name===value)?.redirectUrl || "")
                setProvider(Supported_Banks.find(x=>x.name===value)?.name || "")
            }} options={
                Supported_Banks.map(x=>({
                    key: x.name,
                    value: x.name
                }))
            }
            />

        </div>
        <div><AddMoneyButton label={"Add Money"} onClick={async()=>{
            await createOnRampTxn(amount*100,provider);
              window.location.href= redirectUrl || ""
        }}/></div>
        
    </div>
}
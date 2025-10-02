"use client"
import { InputBox } from "@repo/ui/InputBox"
import { AddMoneyButton } from "@repo/ui/AddMoneyButton"
import { useState } from "react"
import { createOnRampTxn } from "../app/lib/actions/createOnRampTxn"
import { Select } from "@repo/ui/Select"
import { amountValidTypes } from "@repo/zod-schema/types"
const Supported_Banks = [{
    name: "hdfcBank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "axisBank",
    redirectUrl: "https://www.axisbank.com/"
}]

export const AddMoneyCard = () => {
    const [redirectUrl, setRedirectUrl] = useState(Supported_Banks[0]?.redirectUrl);
    const [amount, setAmount] = useState(0);
    const [provider, setProvider] = useState(Supported_Banks[0]?.name || "")
    const [error,setError] = useState("");

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Add Money</h2>
                <p className="text-gray-400">Add funds to your wallet securely</p>
            </div>
            <div className="space-y-6">
                <div>
                    <InputBox 
                        label={"Amount"} 
                        placeholder={"Enter amount"} 
                        onChange={(e) => setAmount(Number(e.target.value))} 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Select Bank</label>
                    <Select 
                        options={Supported_Banks.map(bank => ({
                            key: bank.name,
                            value: bank.name
                        }))}
                        onSelect={(value) => {
                            setRedirectUrl(Supported_Banks.find(x => x.name === value)?.redirectUrl || "")
                            setProvider(Supported_Banks.find(x => x.name === value)?.name || "")
                        }}
                    />
                </div>
                <div className="pt-4">
                    <AddMoneyButton 
                        label={"Add Money"} 
                        onClick={async () => {
                            const parsedData = amountValidTypes.safeParse(amount);
                            if(!parsedData.success){
                                throw new Error("Invalid amount")
                            }
                            
                            await createOnRampTxn(amount * 100, provider);
                            window.location.href = redirectUrl || ""
                        }} 
                    />
                </div>
            </div>
        </div>
    )
}

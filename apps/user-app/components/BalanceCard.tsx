import Databox from "@repo/ui/DataBox"
interface BalanceCardProps{
    amount: number,
    locked: number
}
export const BalanceCard=({amount,locked}: BalanceCardProps)=>{
    return <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8"> 
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Balance</h2>
            <p className="text-gray-400">Your current wallet balance</p>
        </div>
        <div>
             <Databox label={"Total Balance"} amount={amount/100} locked={locked} label2={"Locked Amount"}/>
         </div>
     </div>
}
import Databox from "@repo/ui/DataBox"
interface BalanceCardProps{
    amount: number,
    locked: number
}
export const BalanceCard=({amount,locked}: BalanceCardProps)=>{
    return <div className="bg-orange-200 text-black"> 
        <div className="text-2xl">Balance</div>
        <div>
            <Databox label={"Total Balance"} amount={amount/100} locked={locked} label2={"Locked Amount"}/>
        </div>
    </div>
}
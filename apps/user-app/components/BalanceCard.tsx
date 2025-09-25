import Databox from "@repo/ui/DataBox"
export default function BalanceCard(){
    return <div className="bg-orange-200 text-black"> 
        <div className="text-2xl">Balance</div>
        <div>
            <Databox label={"Total Balance"} data={"2000"}/>
        </div>
    </div>
}
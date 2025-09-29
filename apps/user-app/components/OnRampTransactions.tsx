import OnRampCard from "../../../packages/ui/src/OnRampCard"
export const OnRampTransaction=({transaction}:{
    transaction: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
})=>{
    if(!transaction.length){
       return <div>
        No recent transactions
       </div>
    }
    return <div>
        {transaction.map((txn,index)=>(
            <OnRampCard 
            key={index}
            time={txn.time.toDateString() ?? ""}
            amount={txn.amount/100}
            status={txn.status}
            provider={txn.provider}
            />
        ))}
    </div>
}
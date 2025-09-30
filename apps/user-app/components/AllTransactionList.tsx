import AllTransactionCard from "../../../packages/ui/src/AllTransactionCard"
export const AllTransactionsList=({transaction}:{
    transaction: {
        timestamp: Date,
        amount: number,
        type: string
    }[]
})=>{
    if(!transaction.length){
       return <div>
        No recent transactions
       </div>
    }
    return <div>
        {transaction.map((txn,index)=>(
            <AllTransactionCard
            key={index}
            timestamp={txn.timestamp.toDateString() ?? ""}
            amount={txn.amount/100}
            type = {txn.type}
            />
        ))}
    </div>
}
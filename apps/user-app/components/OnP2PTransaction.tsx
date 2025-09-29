import P2PCard from "../../../packages/ui/src/P2PCard"
export const P2PTransactions=({transaction}:{
    transaction: {
        timestamp: Date,
        amount: number,
        toUserId: number,
        fromUserId: number
    }[]
})=>{
    if(!transaction.length){
       return <div>
        No recent transactions
       </div>
    }
    return <div>
        {transaction.map((txn,index)=>(
            <P2PCard
            key={index}
            timestamp={txn.timestamp.toDateString() ?? ""}
            amount={txn.amount/100}
            fromUserId={txn.fromUserId}
            toUserId={txn.toUserId}
            />
        ))}
    </div>
}
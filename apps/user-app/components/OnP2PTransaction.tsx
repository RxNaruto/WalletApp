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
       return <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-12 text-center">
            <div className="text-gray-400 text-lg mb-2">No P2P Transactions</div>
            <div className="text-gray-500">Your peer-to-peer transaction history will appear here once you start sending or receiving money</div>
       </div>
    }
    return <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Recent P2P Transfers</h2>
            <p className="text-gray-400">Track your peer-to-peer money transfers</p>
        </div>
        <div className="space-y-4">
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
    </div>
}
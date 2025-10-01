import AllTransactionCard from "../../../packages/ui/src/AllTransactionCard"
export const AllTransactionsList=({transaction}:{
    transaction: {
        timestamp: Date,
        amount: number,
        type: string
    }[]
})=>{
    if(!transaction.length){
       return <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-12 text-center">
            <div className="text-gray-400 text-lg mb-2">No Transactions Found</div>
            <div className="text-gray-500">Your complete transaction history will appear here once you start using MyWallet</div>
       </div>
    }
    return <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Transaction History</h2>
            <p className="text-gray-400">All your money transfers, deposits, and payments</p>
        </div>
        <div className="space-y-4">
        {transaction.map((txn,index)=>(
            <AllTransactionCard
            key={index}
            timestamp={txn.timestamp.toDateString() ?? ""}
            amount={txn.amount/100}
            type = {txn.type}
            />
        ))}
        </div>
    </div>
}
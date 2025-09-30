import OnRampCard from "@repo/ui/OnRampCard"
export const OnRampTransaction=({transaction}:{
    transaction: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
})=>{
    if(!transaction.length){
       return <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-12 text-center">
            <div className="text-gray-400 text-lg mb-2">No Recent Transactions</div>
            <div className="text-gray-500">Your transaction history will appear here once you start using MyWallet</div>
       </div>
    }
    return <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Recent Transactions</h2>
            <p className="text-gray-400">Track your money transfers and deposits</p>
        </div>
        <div className="space-y-4">
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
    </div>
}
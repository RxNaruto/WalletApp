interface DataProps{
    timestamp: string;
    amount: number;
    fromUserId: number;
    toUserId: number;
}
export default function P2PCard({timestamp,amount,toUserId,fromUserId}:DataProps){
    return <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200 hover:shadow-lg">
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-white">₹{amount.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">{timestamp}</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-300">
                        <span className="text-gray-400">From:</span> User #{fromUserId}
                    </div>
                    <div className="text-gray-300">
                        <span className="text-gray-400">To:</span> User #{toUserId}
                    </div>
                </div>
            </div>
        </div>
     </div>
}
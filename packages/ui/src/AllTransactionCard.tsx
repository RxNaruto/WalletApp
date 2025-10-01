interface DataProps{
    timestamp: string;
    amount: number;
    type: string;
}
export default function AllTransactionCard({timestamp,amount,type}:DataProps){
    const getTypeColor = (type: string) => {
        return type === 'RECEIVED' ? 'text-green-400' : 'text-red-400';
    };

    const getTypeIcon = (type: string) => {
        return type === 'RECEIVED' ? '+' : '-';
    };

    return <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200 hover:shadow-lg">
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                    <div className={`text-lg font-semibold ${getTypeColor(type)}`}>
                        {getTypeIcon(type)}₹{amount.toLocaleString()}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${type === 'RECEIVED' ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {type}
                    </div>
                </div>
                <div className="text-sm text-gray-400">{timestamp}</div>
            </div>
        </div>
    </div>
}
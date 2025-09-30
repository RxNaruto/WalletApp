interface DataProps{
    time: string;
    amount: number;
    status: string;
    provider: string;
}
 export default function OnRampCard({time,amount,status,provider}:DataProps){
    const getStatusColor = (status: string) => {
        switch(status.toLowerCase()) {
            case 'success': return 'text-green-400 bg-green-500/20';
            case 'processing': return 'text-yellow-400 bg-yellow-500/20';
            case 'failed': return 'text-red-400 bg-red-500/20';
            default: return 'text-gray-400 bg-gray-500/20';
        }
    };

    return <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200 hover:shadow-lg">
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-white">₹{amount.toLocaleString()}</div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
                        {status}
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-400">{time}</div>
                    <div className="text-gray-300 font-medium">{provider}</div>
                </div>
            </div>
        </div>
    </div>
}
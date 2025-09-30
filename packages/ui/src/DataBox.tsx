interface DataProps{
    label: string;
    label2: string;
    amount: number;
    locked: number;
}
export default function Databox({label,label2,amount,locked}:DataProps){
    return <div className="space-y-6">
       <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
           <div className="text-sm font-medium text-gray-400 mb-2">{label}</div>
           <div className="text-3xl font-bold text-white">₹{amount.toLocaleString()}</div>
       </div>
      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
           <div className="text-sm font-medium text-gray-400 mb-2">{label2}</div>
           <div className="text-3xl font-bold text-orange-400">₹{locked.toLocaleString()}</div>
       </div>
     </div>
}
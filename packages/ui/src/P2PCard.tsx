interface DataProps{
    timestamp: string;
    amount: number;
    fromUserId: number;
    toUserId: number;
}
export default function P2PCard({timestamp,amount,toUserId,fromUserId}:DataProps){
    return <div className="flex-col">
       <div>{timestamp}</div>
       <div>{amount}</div>
       <div>{fromUserId}</div>
       <div>{toUserId}</div>
    </div>
}
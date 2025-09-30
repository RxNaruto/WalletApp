interface DataProps{
    timestamp: string;
    amount: number;
    type: string;
}
export default function P2PCard({timestamp,amount,type}:DataProps){
    return <div className="flex-col">
       <div>{timestamp}</div>
       <div>{amount}</div>
       <div>{type}</div>
     
    </div>
}
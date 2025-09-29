interface DataProps{
    time: string;
    amount: number;
    status: string;
    provider: string;
}
export default function OnRampCard({time,amount,status,provider}:DataProps){
    return <div className="flex-col">
       <div>{time}</div>
       <div>{amount}</div>
       <div>{status}</div>
       <div>{provider}</div>
    </div>
}
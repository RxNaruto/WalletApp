interface DataProps{
    label: string;
    label2: string;
    amount: number;
    locked: number;
}
export default function Databox({label,label2,amount,locked}:DataProps){
    return <div className="flex-col">
       <div>{label}</div>
       <div>{amount}</div>
       <div>{label2}</div>
       <div>{locked}</div>
    </div>
}
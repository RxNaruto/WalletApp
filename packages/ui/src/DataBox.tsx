interface DataProps{
    label: string;
    data: string;
}
export default function Databox({label,data}:DataProps){
    return <div className="flex-col">
       <div>{label}</div>
       <div>{data}</div>
    </div>
}
"use client"
interface ButtonProps{
    label: string;
    onClick: ()=>void
}

export const AddMoneyButton=({label,onClick}:ButtonProps)=>{
    return <div>
        <button onClick={onClick}>{label}</button>
    </div>
}
"use client"
interface ButtonProps{
    label: string;
}

export const AddMoneyButton=({label}:ButtonProps)=>{
    return <div>
        <button>{label}</button>
    </div>
}
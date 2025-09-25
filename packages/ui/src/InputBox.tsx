"use client"

interface InputProps{
    placeholder: string;
    // onChange: (value: string)=>void;
    label: string;
}

export const InputBox=({placeholder,label}: InputProps)=>{
   return <div>
    <div className="text-2xl text-black">{label}</div>
    <input placeholder={placeholder} className="w-56 bg-amber-600"/>
   </div>

    
}
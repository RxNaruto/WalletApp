"use client"

interface InputProps{
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
    label: string;
}

export const InputBox=({placeholder,label,onChange}: InputProps)=>{
   return <div>
    <div className="text-2xl text-black">{label}</div>
    <input placeholder={placeholder} className="w-56 bg-amber-600" onChange={onChange}/>
   </div>

    
}
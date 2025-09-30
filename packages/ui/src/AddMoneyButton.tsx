"use client"
interface ButtonProps{
    label: string;
    onClick: ()=>void
}

export const AddMoneyButton=({label,onClick}:ButtonProps)=>{
    return <button 
        onClick={onClick}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg transform hover:scale-105 border border-blue-500/30"
    >
        {label}
    </button>
}
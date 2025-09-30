"use client"

interface InputProps {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export const InputBox = ({ placeholder, label, onChange }: InputProps) => {
        return <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
            <input
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
                onChange={onChange}
            />
        </div>

    
}
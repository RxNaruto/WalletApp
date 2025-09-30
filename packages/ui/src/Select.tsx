export const Select = ({options,onSelect}:{
    options: {
        key: string,
        value: string
    }[],
    onSelect : (value:string)=>void;
})=>{
    return (
        <select 
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white 
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
            onChange={(e)=> onSelect(e.target.value)}
        >
            {options.map(option => (
                <option 
                    key={option.key} 
                    value={option.key} 
                    className="bg-gray-800 text-white"
                >
                    {option.value}
                </option>
            ))}
        </select>
    )
}
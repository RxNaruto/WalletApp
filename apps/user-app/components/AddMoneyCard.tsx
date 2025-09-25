import { InputBox } from "@repo/ui/InputBox"
import DropDown from "@repo/ui/DropDown"
import { AddMoneyButton } from "@repo/ui/AddMoneyButton"
export const AddMoneyCard=()=>{
    return <div className="bg-blue-200">
        <div className="text-3xl text-red-400">AddMoney</div>
        <div><InputBox label={"Amount"} placeholder={"Amount"}/></div>
        <div><DropDown /></div>
        <div><AddMoneyButton label={"Add Money"} /></div>
        
    </div>
}
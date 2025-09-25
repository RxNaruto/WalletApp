import { AddMoneyCard } from "../../../components/AddMoneyCard"
import BalanceCard from "../../../components/BalanceCard"
export default function transfers(){
    return <div>
        transfer
        <div className="flex">
            <AddMoneyCard />
            <BalanceCard />
        </div>
    
    </div>
}
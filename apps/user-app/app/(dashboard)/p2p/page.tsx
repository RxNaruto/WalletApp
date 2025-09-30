import { getServerSession } from "next-auth"
import { PeerToPeerCard } from "../../../components/PeerToPeerCard"
import { redirect } from "next/navigation"
import { authOptions } from "../../lib/auth"
export default async function(){
    const session = await getServerSession(authOptions);
    if(!session){
        redirect("/auth/signin")
    }
    return <div>
        <PeerToPeerCard />
    </div>
}
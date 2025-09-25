import { JSX } from "react"
import { SidebarItem } from "../../components/SideBarItems"

export default function Layout({ children }: {
    children: React.ReactNode
}): JSX.Element {
    return (
        <div className="flex">
            <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
                <div>
                    <SidebarItem href={"/dashboard"} title={"Dashboard"} />
                    <SidebarItem href={"/transfers"} title={"Transfers"} />
                    <SidebarItem href={"/transactions"} title={"Transaction"} />
                    <SidebarItem href={"/p2p"} title={"PeerToPeer"} />
                </div>
            </div>
                {children}
        </div>
    )
}
import { JSX } from "react"
import { SidebarItem } from "../../components/SideBarItems"
import { Appbar } from "../../components/Appbar"

export default function Layout({ children }: {
children: React.ReactNode
}): JSX.Element {
return (
<div className="min-h-screen bg-gray-950">
<Appbar />
<div className="flex">
<div className="w-72 bg-gray-900/50 backdrop-blur-sm border-r border-gray-700/50 min-h-screen shadow-2xl">
<div className="pt-6">
<div className="px-4 mb-4">
<h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Navigation</h2>
</div>
<nav>
<SidebarItem href={"/dashboard"} title={"Dashboard"} />
<SidebarItem href={"/transfers"} title={"Transfers"} />
<SidebarItem href={"/transactions"} title={"Transaction"} />
<SidebarItem href={"/p2p"} title={"PeerToPeer"} />
<SidebarItem href={"/p2pTransactions"} title={"P2P Transaction"} />
<SidebarItem href={"/allTransactions"} title={"All Transactions"} />
</nav>
</div>
</div>
<div className="flex-1 p-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
{children}
</div>
</div>
</div>
)
}
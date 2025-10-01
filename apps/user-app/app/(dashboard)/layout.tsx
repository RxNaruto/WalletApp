import { JSX } from "react"
import { SidebarItem } from "../../components/SideBarItems"
import { Appbar } from "../../components/Appbar"

export default function Layout({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Appbar />
      <div className="flex">
        <div className="w-72 bg-gray-900/60 backdrop-blur-md border-r border-gray-700/50 min-h-screen shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-cyan-950/10 pointer-events-none"></div>
          <div className="pt-6 relative z-10">
            <div className="px-6 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Navigation</h2>
              </div>
              <div className="h-px bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-transparent mt-3"></div>
            </div>
            <nav className="space-y-1">
              <SidebarItem href={"/dashboard"} title={"Dashboard"} />
              <SidebarItem href={"/transfers"} title={"Transfers"} />
              <SidebarItem href={"/transactions"} title={"Transaction"} />
              <SidebarItem href={"/p2p"} title={"PeerToPeer"} />
              <SidebarItem href={"/p2pTransactions"} title={"P2P Transaction"} />
              <SidebarItem href={"/allTransactions"} title={"All Transactions"} />
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
        </div>
        <div className="flex-1 p-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-cyan-900/5 pointer-events-none"></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

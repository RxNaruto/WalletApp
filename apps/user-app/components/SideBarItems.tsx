"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { LayoutDashboard, ArrowLeftRight, Receipt, Users, History, List } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  "Dashboard": <LayoutDashboard className="w-5 h-5" />,
  "Transfers": <ArrowLeftRight className="w-5 h-5" />,
  "Transaction": <Receipt className="w-5 h-5" />,
  "PeerToPeer": <Users className="w-5 h-5" />,
  "P2P Transaction": <History className="w-5 h-5" />,
  "All Transactions": <List className="w-5 h-5" />,
};

export const SidebarItem = ({
  href,
  title
}: {
  href: string;
  title: string;
}) => {
  const router = useRouter();
  const icon = iconMap[title];

  return (
    <div
      onClick={() => {
        router.push(href);
      }}
      className="group flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/10 hover:text-blue-300 cursor-pointer transition-all duration-200 rounded-xl mx-3 mb-2 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 border border-transparent backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/50 group-hover:bg-blue-600/20 border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-200 group-hover:shadow-md group-hover:shadow-blue-500/20">
        {icon || <LayoutDashboard className="w-5 h-5" />}
      </div>
      <div className="relative z-10 font-medium text-sm group-hover:translate-x-0.5 transition-transform duration-200">
        {title}
      </div>
    </div>
  );
};

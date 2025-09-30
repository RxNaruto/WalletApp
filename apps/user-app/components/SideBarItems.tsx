"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
href,
title
}: {
href: string;
title: string;
}) => {
const router = useRouter();
return (
<div
onClick={() => {
router.push(href);
}}
className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 cursor-pointer transition-all duration-200 rounded-lg mx-2 mb-1 hover:shadow-lg hover:border-blue-500/30 border border-transparent backdrop-blur-sm"
>
<div className="font-medium">
{title}
</div>
</div>
);
};
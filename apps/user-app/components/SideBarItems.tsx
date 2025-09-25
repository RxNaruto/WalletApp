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
        >
            <div>
                {title}                 
            </div>
        </div>
    );
};

"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { User, Settings, CreditCard, LogOut, LogIn } from 'lucide-react';

export const Appbar = () => {
const session = useSession();
const { status } = session;


if (status === 'loading') {
    return (
        <header className="bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-gray-700/50">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl font-semibold text-white">MyWallet</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-400">Loading...</div>
                </div>
            </div>
        </header>
    );
}

if (status === 'authenticated') {
    return (
        <header className="bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-gray-700/50">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl font-semibold text-white">MyWallet</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => {
                            signOut();
                        }}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 border border-gray-700/50 hover:border-gray-600/50"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                    </button>
                    <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200">
                        <Settings className="w-5 h-5" />
                    </button>
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg border border-gray-600/50">
                        <User className="w-5 h-5 text-gray-200" />
                    </div>
                </div>
                {/* Session data for debugging - you can remove this */}
                <div className="hidden">
                    {JSON.stringify(session)}
                </div>
            </div>
        </header>
    );
}
else {
    return (
        <header className="bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-gray-700/50">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl font-semibold text-white">MyWallet</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => {
                            signIn();
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg transform hover:scale-105"
                    >
                        <LogIn className="w-4 h-4" />
                        <span>Sign In</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
}
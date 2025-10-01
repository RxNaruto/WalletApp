"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { CreditCard, Phone, Lock, ArrowRight } from 'lucide-react'

export default function Signin(){
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to your MyWallet account</p>
                </div>

                {/* Sign In Form */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
                    <div className="space-y-6">
                        {/* Phone Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="w-5 h-5 text-gray-400" />
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="9898989898" 
                                    name="Phone Number"
                                    value={phone}
                                    onChange={(e)=>{
                                        setPhone(e.target.value);
                                    }}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="w-5 h-5 text-gray-400" />
                                </div>
                                <input 
                                    type="password" 
                                    name="Password" 
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <button 
                            onClick={async()=>{
                                const res = await signIn("credentials",{
                                    phone: phone,
                                    password: password,
                                    callbackUrl: "/dashboard"
                                })
                            }}
                            className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 text-white py-3 px-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2 border border-blue-500/30"
                        >
                            <span>Sign In</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Secure login with end-to-end encryption
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Protected by industry-leading security measures
                    </p>
                </div>
            </div>
        </div>
    )
}
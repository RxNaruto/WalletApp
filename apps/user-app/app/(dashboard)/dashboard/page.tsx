import { ArrowRight, Shield, Zap, Users, Star, Award, CircleCheck as CheckCircle, Globe, Lock, Smartphone } from 'lucide-react';

export default async function Dashboard() {
    const features = [
        {
            icon: Shield,
            title: 'Bank-Level Security',
            description: 'Your money is protected with military-grade 256-bit encryption and multi-factor authentication'
        },
        {
            icon: Zap,
            title: 'Lightning Fast Transfers',
            description: 'Send money anywhere in the world in seconds, not days. Experience the future of payments'
        },
        {
            icon: Users,
            title: 'Trusted by Millions',
            description: 'Join over 10 million satisfied users who have made MyWallet their go-to financial companion'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Send and receive money in 150+ countries with competitive exchange rates'
        },
        {
            icon: Lock,
            title: 'Privacy First',
            description: 'Your financial data stays private. We never sell your information to third parties'
        },
        {
            icon: Smartphone,
            title: 'Mobile Optimized',
            description: 'Seamless experience across all devices with our award-winning mobile app'
        },
    ];

    const achievements = [
        { icon: Award, title: 'Best Wallet App 2024', subtitle: 'FinTech Innovation Awards', color: 'text-yellow-400 bg-yellow-500/20' },
        { icon: Star, title: '4.9/5 Rating', subtitle: 'Over 500K reviews on App Store', color: 'text-blue-400 bg-blue-500/20' },
        { icon: CheckCircle, title: '99.9% Uptime', subtitle: 'Always available when you need it', color: 'text-green-400 bg-green-500/20' },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Small Business Owner",
            content: "MyWallet has revolutionized how I handle my business payments. Fast, secure, and incredibly user-friendly!",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Freelancer",
            content: "I've tried many wallet apps, but MyWallet is by far the best. The instant transfers are a game-changer.",
            rating: 5
        },
        {
            name: "Emma Davis",
            role: "Student",
            content: "Perfect for splitting bills with friends and managing my budget. The interface is so intuitive!",
            rating: 5
        }
    ];

    return (
        <div className="space-y-12">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl border border-blue-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        The World's Most
                        <span className="block bg-gradient-to-r from-cyan-200 via-blue-100 to-cyan-300 bg-clip-text text-transparent mt-2">
                            Trusted Wallet App
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
                        Experience the future of digital payments with unmatched security,
                        lightning-fast transfers, and a user experience that millions love.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-blue-900/30">
                            Get Started Today
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all shadow-lg shadow-blue-900/20">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why MyWallet is Simply the Best
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We've built the most advanced, secure, and user-friendly wallet app that sets the standard for digital payments worldwide.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/30 group-hover:border-blue-400/50 transition-all backdrop-blur-sm">
                                <feature.icon className="w-10 h-10 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/90 to-blue-600/90 backdrop-blur-sm rounded-xl p-8 text-white text-center shadow-2xl border border-cyan-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10"></div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <Shield className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
                    <h2 className="text-3xl font-bold mb-4">Your Security is Our Promise</h2>
                    <p className="text-xl text-cyan-50 mb-6">
                        We use the same security standards as major banks, with 256-bit encryption,
                        biometric authentication, and real-time fraud monitoring to keep your money safe.
                    </p>
                    <div className="text-lg text-cyan-100">
                        ✓ FDIC Insured • ✓ SOC 2 Certified • ✓ PCI DSS Compliant
                    </div>
                </div>
            </div>
        </div>
    );
}

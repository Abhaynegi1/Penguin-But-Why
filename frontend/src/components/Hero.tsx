
import { motion } from "framer-motion";
import { Thermometer, Activity, Users, ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax-like feel via fixed position if needed, keeping simple cover for now */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=2500&auto=format&fit=crop"
                    alt="Antarctic Landscape"
                    className="w-full h-full object-cover scale-105"
                />
                {/* Advanced Gradient Overlay: Darker at bottom/left for text readability, lighter top/right */}
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue/80 via-ocean-blue/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-blue/90 via-transparent to-transparent" />
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 pt-20 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mb-6 text-glacier-blue text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glacier-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-glacier-blue"></span>
                        </span>
                        Live Tracking Active
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight mb-6 text-white drop-shadow-sm">
                        Protecting the <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-glacier-blue via-white to-glacier-blue animate-pulse-slow">
                            Frozen Frontier
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl font-body text-blue-100/90 max-w-lg mb-8 leading-relaxed">
                        Join our mission to safeguard the Gentoo Penguin and the delicate Antarctic ecosystem.
                        Data-driven conservation powered by real-time AI tracking.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group px-8 py-4 bg-white text-ocean-blue font-bold rounded-xl hover:bg-glacier-blue hover:text-ocean-blue transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                            Explore Map
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                            Our Mission
                        </button>
                    </div>
                </motion.div>

                {/* Glassmorphism Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex items-center justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-md">
                        {/* Decorative glow behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-glacier-blue to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>

                        <div className="relative p-8 rounded-2xl bg-ocean-blue/40 backdrop-blur-xl border border-white/20 shadow-2xl">
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <div>
                                    <h3 className="text-white font-heading font-bold text-xl">Station Alpha</h3>
                                    <p className="text-blue-200 text-sm">Antarctic Peninsula</p>
                                </div>
                                <Activity className="text-glacier-blue w-6 h-6" />
                            </div>

                            <div className="grid gap-6">
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 rounded-xl text-glacier-blue group-hover:scale-110 transition-transform">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-blue-200 font-medium">Population</p>
                                            <p className="text-2xl font-bold text-white">12,450</p>
                                        </div>
                                    </div>
                                    <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                                        +2.4%
                                    </span>
                                </div>

                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 rounded-xl text-glacier-blue group-hover:scale-110 transition-transform">
                                            <Thermometer size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-blue-200 font-medium">Air Temp</p>
                                            <p className="text-2xl font-bold text-white">-12.4°C</p>
                                        </div>
                                    </div>
                                    <span className="text-blue-300 text-sm font-medium">
                                        Falling
                                    </span>
                                </div>
                            </div>

                            {/* Mini chart visual */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex justify-between items-end h-16 gap-2">
                                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                        <div
                                            key={i}
                                            className="w-full bg-glacier-blue/20 rounded-t-sm hover:bg-glacier-blue/60 transition-colors"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                                <p className="text-center text-xs text-blue-300 mt-2">Daily Activity Levels</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

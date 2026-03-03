import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import heroImage from "../assets/hero-penguin.png";

export const Hero = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <section className={`relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center transition-colors duration-700 ${isDarkMode ? 'bg-slate-900' : 'bg-[#f0f9ff]'}`}>
            {/* Theme Toggle Button */}
            <div className="absolute top-10 right-10 z-[100]">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="btn-pixel bg-white p-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    {isDarkMode ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-slate-700" />}
                    <span className="font-pixel text-[8px]">{isDarkMode ? 'DAY_MODE' : 'NIGHT_MODE'}</span>
                </button>
            </div>

            {/* Stars & Base Background (Deepest Layer) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className={`absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t transition-colors duration-700 ${isDarkMode ? 'from-slate-800' : 'from-white'} to-transparent`} />

                {/* Night Sky Elements */}
                <AnimatePresence>
                    {isDarkMode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0"
                        >
                            {/* Stars */}
                            {[...Array(50)].map((_, i) => (
                                <div
                                    key={`star-${i}`}
                                    className="absolute bg-white rounded-full animate-pulse"
                                    style={{
                                        width: Math.random() * 2 + 1 + 'px',
                                        height: Math.random() * 2 + 1 + 'px',
                                        top: Math.random() * 60 + '%',
                                        left: Math.random() * 100 + '%',
                                        opacity: Math.random() * 0.7 + 0.3,
                                        animationDelay: Math.random() * 5 + 's'
                                    }}
                                />
                            ))}

                            {/* Moon */}
                            <motion.div
                                initial={{ y: -100, x: 100, opacity: 0 }}
                                animate={{ y: 0, x: 0, opacity: 1 }}
                                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                className="absolute top-20 right-[15%] w-24 h-24 bg-yellow-50 rounded-full shadow-[0_0_50px_rgba(254,252,232,0.4)] flex items-center justify-center overflow-hidden"
                            >
                                <div className="absolute top-4 left-4 w-6 h-6 bg-yellow-100/50 rounded-full" />
                                <div className="absolute bottom-6 right-8 w-4 h-4 bg-yellow-100/50 rounded-full" />
                                <div className="absolute top-12 left-10 w-3 h-3 bg-yellow-100/50 rounded-full" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Day Sky Sun Glow */}
                {!isDarkMode && (
                    <div className="absolute -top-20 right-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                )}
            </div>

            {/* Atmosphere Overlays */}
            <div className={`absolute inset-0 z-[1] transition-opacity duration-700 pointer-events-none ${isDarkMode ? 'opacity-40' : 'opacity-0'} bg-gradient-to-b from-slate-900 via-transparent to-transparent`} />
            <div className={`absolute inset-0 z-[1] transition-opacity duration-700 pointer-events-none ${isDarkMode ? 'opacity-20' : 'opacity-0'} bg-indigo-950/20 backdrop-brightness-[0.9]`} />

            {/* Enhanced Pixel Snowfall (Foreground Layer) */}
            <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
                {[...Array(60)].map((_, i) => {
                    const size = Math.random() * 5 + 3;
                    const duration = 12 + Math.random() * 8;
                    const delay = Math.random() * 10;
                    const startX = Math.random() * 100;
                    const drift = (Math.random() - 0.5) * 40;

                    return (
                        <motion.div
                            key={i}
                            initial={{
                                y: -20,
                                x: `${startX}vw`,
                                opacity: 0,
                            }}
                            animate={{
                                y: ['-5vh', '105vh'],
                                x: [`${startX}vw`, `${startX + drift}vw`],
                                opacity: [0, 0.9, 0.9, 0],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                ease: "linear",
                                delay: delay
                            }}
                            className="absolute"
                        >
                            <div
                                className={`rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)] ${isDarkMode ? 'bg-white' : 'bg-white/90'}`}
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>

            <div className="container px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left pt-10"
                >
                    <div className="inline-block px-3 py-1 bg-primary rounded-full mb-6 border-[3px] border-black font-pixel text-[8px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
                        EXISTENTIAL_FEED_V2.6
                    </div>

                    <h1 className={`text-3xl md:text-5xl font-black leading-[1.1] mb-6 transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        Walking <span className="text-ice-blue">Towards</span> <br className="hidden md:block" />
                        The <br className="hidden md:block" />
                        <span className="relative">
                            Mountains?
                            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 8" preserveAspectRatio="none">
                                <path d="M0 4 C20 4, 30 7, 50 4 C70 1, 80 4, 100 4" stroke={isDarkMode ? "white" : "black"} strokeWidth="6" fill="transparent" />
                            </svg>
                        </span>
                    </h1>

                    <p className={`text-base md:text-lg font-medium max-w-md mb-8 leading-relaxed mx-auto lg:mx-0 transition-colors duration-700 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        "For why does the penguin walk toward the vast interior of the continent? He is a pioneer of the soul, a traveler into the void."
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button className="btn-pixel bg-accent py-2.5 px-6 text-sm">
                            Get Started
                        </button>
                        <Link to="/wiki" className={`btn-pixel py-2.5 px-6 text-sm transition-colors duration-700 ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-black'}`}>
                            Wiki
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side: Visual Scene */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative px-4"
                >
                    <div className="relative z-10 w-full max-w-sm mx-auto aspect-square bg-white rounded-[2rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden group">
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            src={heroImage}
                            alt="Cute Penguin"
                            className="w-full h-full object-cover"
                        />

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-10 right-10 bg-white border-4 border-black p-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <span className="font-pixel text-[10px]">LONE WALKER</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            className="absolute bottom-10 left-10 bg-white border-4 border-black p-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <span className="font-pixel text-[10px]">INTO THE VOID</span>
                        </motion.div>
                    </div>

                    {/* Background Blobs */}
                    <div className={`absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-10 animate-pulse transition-colors duration-700 ${isDarkMode ? 'bg-blue-900/40' : 'bg-primary/30'}`} />
                    <div className={`absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl -z-10 animate-pulse transition-colors duration-700 ${isDarkMode ? 'bg-indigo-900/30' : 'bg-accent/20'}`} />
                </motion.div>
            </div>
        </section>
    );
};

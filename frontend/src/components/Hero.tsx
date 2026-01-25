import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-penguin.png";

export const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
            {/* Arctic Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent" />

                {/* Random Pixel Snowflakes (using Lucide but styled blocky) */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{
                            y: ['0vh', '110vh'],
                            x: [Math.random() * 20, Math.random() * -20],
                            opacity: [0, 0.8, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        className="absolute text-primary"
                        style={{ left: `${Math.random() * 100}%`, fontSize: `${Math.random() * 20 + 10}px` }}
                    >
                        <Snowflake size={12} strokeWidth={3} />
                    </motion.div>
                ))}
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

                    <h1 className="text-3xl md:text-5xl font-black text-black leading-[1.1] mb-6">
                        Walking <span className="text-ice-blue">Towards</span> <br className="hidden md:block" />
                        The <br className="hidden md:block" />
                        <span className="relative">
                            Mountains?
                            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 8" preserveAspectRatio="none">
                                <path d="M0 4 C20 4, 30 7, 50 4 C70 1, 80 4, 100 4" stroke="black" strokeWidth="6" fill="transparent" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-base md:text-lg font-medium text-slate-600 max-w-md mb-8 leading-relaxed mx-auto lg:mx-0">
                        "For why does the penguin walk toward the vast interior of the continent? He is a pioneer of the soul, a traveler into the void."
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button className="btn-pixel bg-accent py-2.5 px-6 text-sm">
                            Get Started
                        </button>
                        <Link to="/wiki" className="btn-pixel bg-white py-2.5 px-6 text-sm">
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
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10 animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
};

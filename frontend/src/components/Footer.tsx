import { Twitter, Facebook, Instagram, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-12 overflow-hidden">
            <div className="container px-6">
                <div className="bg-black text-white rounded-[3rem] p-12 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white bg-white p-1">
                                    <img src={logo} alt="P-Track Logo" className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <span className="text-xl font-pixel uppercase tracking-tighter">P.B.W</span>
                            </div>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                Penguin but why? Tracking the coolest birds on the planet with real-time NOAA data. For penguins, by fans.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-pixel text-xs text-primary mb-6">EXPLORE</h4>
                            <ul className="space-y-4 font-bold text-slate-300">
                                <li><Link to="/" className="hover:text-white transition-colors">Ice Maps</Link></li>
                                <li><Link to="/wiki" className="hover:text-white transition-colors">Species Wiki</Link></li>
                                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-pixel text-xs text-accent mb-6">ABOUT</h4>
                            <ul className="space-y-4 font-bold text-slate-300">
                                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Team Ice</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-pixel text-xs text-white mb-6">SOCIALS</h4>
                            <div className="flex gap-4">
                                {[Twitter, Facebook, Instagram].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all border-2 border-white/20 hover:border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-bold">
                        <div className="flex items-center gap-2">
                            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Iceberg Devs
                        </div>
                        <div>© 2024 PENGUIN BUT WHY. Frozen in time.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

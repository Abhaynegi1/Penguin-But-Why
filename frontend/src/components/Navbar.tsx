import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
            <div className="bg-white/70 backdrop-blur-xl border-[3px] border-black rounded-2xl p-2 flex items-center justify-between shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                {/* Logo & Brand */}
                <Link to="/" className="flex items-center gap-3 pl-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-[3px] border-black bg-white">
                        <img src={logo} alt="Penguin Logo" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-[14px] font-pixel uppercase tracking-tighter leading-none m-0">P.B.W</h3>
                </Link>

                {/* Navigation Pills */}
                <div className="flex items-center gap-1 bg-black/5 p-1 rounded-xl">
                    <Link
                        to="/"
                        className="px-3 sm:px-5 py-1.5 rounded-lg text-[13px] font-bold hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all border-2 border-transparent hover:border-black"
                    >
                        Map
                    </Link>
                    <Link
                        to="/wiki"
                        className="px-3 sm:px-5 py-1.5 rounded-lg text-[13px] font-bold hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all border-2 border-transparent hover:border-black"
                    >
                        Wiki
                    </Link>
                </div>

                {/* Action Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mr-1 px-4 py-1.5 bg-accent text-black font-bold rounded-xl border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-[8px] font-pixel"
                >
                    LIVE
                </motion.button>
            </div>
        </nav>
    );
};

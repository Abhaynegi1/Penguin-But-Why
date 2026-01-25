
import { Bird, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-arctic-white/80 backdrop-blur-md border-b border-white/20">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-ocean-blue rounded-full flex items-center justify-center text-white">
                    <Bird size={20} />
                </div>
                <span className="text-xl font-heading font-bold text-ocean-blue">P-Track</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                {["Map", "Species", "Conservation", "About"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-soft-slate hover:text-ocean-blue font-body font-medium transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glacier-blue transition-all group-hover:w-full" />
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-ocean-blue text-white font-body font-semibold rounded-lg shadow-lg hover:bg-ocean-blue/90 transition-colors flex items-center gap-2"
            >
                Live Tracking
                <ExternalLink size={16} />
            </motion.button>
        </nav>
    );
};

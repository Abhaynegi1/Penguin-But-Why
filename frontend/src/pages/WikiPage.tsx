
import { Wiki } from "../components/Wiki";
import { motion } from "framer-motion";

export const WikiPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-24 min-h-screen"
        >
            <div className="container px-6 mx-auto mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-black mb-4">The Nihilist Archive</h1>
                <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                    "Is it possible that there is such a thing as insanity among penguins?" — Explore the archives of those who chose to walk their own path.
                </p>
            </div>
            <Wiki />
        </motion.div>
    );
};

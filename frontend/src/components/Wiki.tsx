
import { motion } from "framer-motion";
import { Info, BookOpen, Anchor, Map, Waves } from "lucide-react";

export const Wiki = () => {
    const species = [
        {
            name: "Adélie Penguin",
            latin: "Pygoscelis adeliae",
            desc: "The classic 'tuxedo' penguin. Tiny but fierce, they are known for their stone-stealing nesting habits.",
            fact: "They can dive up to 175 meters deep to find krill."
        },
        {
            name: "Chinstrap Penguin",
            latin: "Pygoscelis antarcticus",
            desc: "Recognizable by the narrow black band under their heads. Often described as the boldest penguin species.",
            fact: "They often nest on rocky, ice-free slopes of the South Shetland Islands."
        },
        {
            name: "Gentoo Penguin",
            latin: "Pygoscelis papua",
            desc: "Distinguished by a white stripe across their head. They are the fastest underwater swimmers among penguins.",
            fact: "Gentoos can reach speeds of 36 km/h (22 mph) underwater."
        }
    ];

    const facts = [
        { icon: <Anchor />, text: "Observed by Werner Herzog in 2007." },
        { icon: <Waves />, text: "Choosing the icy interior over the sea." },
        { icon: <Map />, text: "Marching toward certain doom (or peace)." },
        { icon: <BookOpen />, text: "Relatable 'burnout' life energy content." }
    ];

    return (
        <section id="wiki" className="py-16 bg-arctic-blue/30 overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left side: Species list */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="font-pixel text-[8px] text-accent bg-black px-3 py-1.5 rounded-lg mb-3 inline-block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
                                EXISTENTIAL_MANUAL
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-black leading-none">
                                Why they <br /> Walk
                            </h2>
                        </div>

                        <div className="grid gap-6">
                            {species.map((s, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="bg-white border-[3px] border-black rounded-2xl p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                                >
                                    <h3 className="text-lg font-black flex items-center justify-between">
                                        {s.name}
                                        <span className="text-[10px] font-pixel text-slate-400 uppercase">{s.latin}</span>
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-2 font-medium">{s.desc}</p>
                                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary">
                                        <Info size={14} />
                                        <span>FACT: {s.fact}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Field Notes & Stats */}
                    <div className="w-full md:w-80 space-y-6">
                        <div className="bg-black text-white rounded-3xl p-6 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(79,70,229,0.3)]">
                            <h3 className="font-pixel text-xs mb-6 text-primary border-b border-primary/30 pb-2">FIELD_NOTES_V1.0</h3>
                            <div className="space-y-6">
                                {facts.map((f, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="text-primary mt-1">
                                            {f.icon}
                                        </div>
                                        <p className="text-sm font-medium leading-tight text-slate-300">
                                            {f.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-accent border-[3px] border-black rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="font-black text-xl mb-2">Fisheries Data</h4>
                            <p className="text-xs font-bold leading-relaxed">
                                Our platform syncs directly with data from <span className="underline">fisheries.noaa.gov</span>, allowing us to visualize real tracking telemetry for brush-tailed penguins.
                            </p>
                            <button className="mt-4 w-full py-2 bg-black text-white font-pixel text-[8px] rounded-xl hover:bg-slate-800 transition-colors">
                                VIEW_RAW_DATA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

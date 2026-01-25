


export const MapSection = () => {
    return (
        <section id="map" className="py-16 bg-white/20">
            <div className="container px-6">
                <div className="mb-10 text-center">
                    <span className="font-pixel text-[8px] text-primary bg-black px-3 py-1.5 rounded-lg mb-3 inline-block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        RADAR_FEED
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-black mt-2">Antarctic Radar</h2>
                    <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mt-3 font-medium">
                        Live satellite downlink tracking penguin movements in sectors A-9 through D-4.
                        Updated every 256 clock cycles.
                    </p>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-[350px] md:h-[450px] bg-sky-100 rounded-[2rem] border-[6px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    {/* Simulated Pixel Grid */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

                    {/* Simulated Map Landmasses (Pixelated) */}
                    <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white rounded-lg border-[3px] border-black group cursor-pointer hover:scale-110 transition-transform">
                        <div className="absolute inset-0 flex items-center justify-center font-pixel text-[6px] text-slate-300">ICE_01</div>
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 w-40 h-20 bg-white rounded-lg border-[3px] border-black group cursor-pointer hover:scale-110 transition-transform">
                        <div className="absolute inset-0 flex items-center justify-center font-pixel text-[6px] text-slate-300">MAINLAND</div>
                    </div>

                    {/* Radar Markers */}
                    {[
                        { top: '30%', left: '40%', label: 'ADÉLIE_COLONY', color: 'bg-primary' },
                        { top: '60%', left: '70%', label: 'GENTOO_SITE', color: 'bg-accent' },
                        { top: '45%', left: '55%', label: 'E_KING_TRACKING', color: 'bg-red-400' }
                    ].map((marker, i) => (
                        <div
                            key={i}
                            className="absolute group cursor-pointer"
                            style={{ top: marker.top, left: marker.left }}
                        >
                            <div className="relative">
                                <div className={`w-6 h-6 ${marker.color} border-[3px] border-black rounded-lg animate-pulse relative z-10 flex items-center justify-center`}>
                                    <div className="w-1 h-1 bg-white rounded-full" />
                                </div>
                                <div className={`absolute inset-[-3px] ${marker.color} opacity-40 blur-md animate-ping`} />
                            </div>

                            {/* Marker Info Popup */}
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 pointer-events-none">
                                <div className="bg-black text-white px-3 py-1.5 rounded-xl text-[7px] font-pixel whitespace-nowrap shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
                                    {marker.label}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Radar Sweep Effect */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="w-full h-1 bg-primary/20 absolute animate-[radar-sweep_4s_linear_infinite]" />
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                        <button className="w-10 h-10 bg-white border-[3px] border-black rounded-xl flex items-center justify-center font-black text-lg hover:bg-primary transition-colors active:translate-y-0.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">+</button>
                        <button className="w-10 h-10 bg-white border-[3px] border-black rounded-xl flex items-center justify-center font-black text-lg hover:bg-primary transition-colors active:translate-y-0.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">-</button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes radar-sweep {
                    0% { top: 0; }
                    100% { top: 100%; }
                }
            `}</style>
        </section>
    );
};

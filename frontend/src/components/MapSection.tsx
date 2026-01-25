
import { } from "lucide-react";

export const MapSection = () => {
    return (
        <section id="map" className="py-20 bg-arctic-white">
            <div className="container px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-heading font-bold text-ocean-blue mb-4">Live Tracking Map</h2>
                    <p className="text-soft-slate max-w-2xl mx-auto">
                        Track movement patterns of tracked colonies in real-time. Data is updated every 4 hours via satellite uplink.
                    </p>
                </div>

                {/* Map Placeholder */}
                <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-[#E2E8F0] border-4 border-white shadow-2xl">
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 bg-[#cbd5e1] opacity-50">
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    </div>

                    {/* Markers */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-12 -translate-y-24 group cursor-pointer">
                        <div className="relative">
                            <div className="w-4 h-4 bg-glacier-blue rounded-full animate-ping absolute inset-0"></div>
                            <div className="w-4 h-4 bg-glacier-blue rounded-full border-2 border-white relative z-10"></div>
                        </div>
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <p className="text-xs font-bold text-ocean-blue">Colony Alpha</p>
                        </div>
                    </div>

                    <div className="absolute top-2/3 left-1/3 group cursor-pointer">
                        <div className="relative">
                            <div className="w-4 h-4 bg-glacier-blue rounded-full animate-ping absolute inset-0 animation-delay-500"></div>
                            <div className="w-4 h-4 bg-glacier-blue rounded-full border-2 border-white relative z-10"></div>
                        </div>
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <p className="text-xs font-bold text-ocean-blue">Specimen #892</p>
                        </div>
                    </div>

                    {/* Map Controls Overlay */}
                    <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-ocean-blue hover:bg-gray-50 transition-colors">+</button>
                        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-ocean-blue hover:bg-gray-50 transition-colors">-</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

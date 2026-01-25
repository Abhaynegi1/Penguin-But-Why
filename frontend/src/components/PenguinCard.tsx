import { MapPin, Heart, Edit2, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface PenguinCardProps {
    name: string;
    species: string;
    location: string;
    health: "Healthy" | "Concerns" | "Critical";
    imageUrl: string;
}

export const PenguinCard = ({ name: initialName, species, location, health, imageUrl }: PenguinCardProps) => {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const healthData = {
        Healthy: { color: "bg-green-400", label: "HAPPY" },
        Concerns: { color: "bg-orange-400", label: "CHILL" },
        Critical: { color: "bg-red-400", label: "HELP" },
    }[health];

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-white border-[3px] border-black rounded-[1.5rem] p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
            <div className="aspect-square overflow-hidden rounded-[1rem] bg-arctic-blue border-[3px] border-black mb-3 relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full border-2 border-black font-pixel text-[7px] flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${healthData.color}`}>
                    <Heart size={6} className="fill-black" />
                    {healthData.label}
                </div>
            </div>

            <div className="px-1 space-y-1.5">
                <div className="flex items-center justify-between">
                    {isEditing ? (
                        <div className="flex gap-2 w-full">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="text-sm font-black border-b-2 border-black outline-none w-full"
                                autoFocus
                            />
                            <button onClick={() => setIsEditing(false)} className="text-green-600">
                                <Check size={16} strokeWidth={3} />
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-lg font-black text-black flex items-center gap-2">
                                {name}
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-black"
                                >
                                    <Edit2 size={14} />
                                </button>
                            </h3>
                            <span className="text-[8px] font-pixel text-slate-400">#{name.substring(0, 2).toUpperCase()}</span>
                        </>
                    )}
                </div>

                <p className="text-xs font-medium text-slate-500">{species}</p>

                <div className="flex items-center gap-2 pt-1 text-xs font-bold text-black border-t-2 border-slate-50 mt-1">
                    <div className="p-1 bg-secondary rounded-lg border-2 border-black">
                        <MapPin size={12} />
                    </div>
                    <span>{location}</span>
                </div>
            </div>
        </motion.div>
    );
};

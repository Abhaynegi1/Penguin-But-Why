
import { MapPin, Heart } from "lucide-react";

interface PenguinCardProps {
    name: string;
    species: string;
    location: string;
    health: "Healthy" | "Concerns" | "Critical";
    imageUrl: string;
}

export const PenguinCard = ({ name, species, location, health, imageUrl }: PenguinCardProps) => {
    const healthColor = {
        Healthy: "bg-green-500",
        Concerns: "bg-yellow-500",
        Critical: "bg-red-500",
    }[health];

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl border border-border">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="mt-4 space-y-3">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-heading text-lg font-bold text-ocean-blue">{name}</h3>
                        <p className="text-sm text-soft-slate">{species}</p>
                    </div>
                    <div className={`flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ${healthColor}`}>
                        <Heart size={12} className="fill-current" />
                        {health}
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-soft-slate">
                    <MapPin size={16} className="text-glacier-blue" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};

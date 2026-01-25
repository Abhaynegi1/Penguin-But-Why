
import { Hero } from "../components/Hero"
import { MapSection } from "../components/MapSection"
import { PenguinCard } from "../components/PenguinCard"
import { motion } from "framer-motion"

export const Home = () => {
    const penguins = [
        {
            name: "Lone Walker #01",
            species: "The Nihilist",
            location: "Heading Inland",
            health: "Concerns" as const,
            imageUrl: "https://images.unsplash.com/photo-1551633539-bd241604f325?q=80&w=800&auto=format&fit=crop"
        },
        {
            name: "Burnout",
            species: "Adélie Explorer",
            location: "The Vast Interior",
            health: "Healthy" as const,
            imageUrl: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=800&auto=format&fit=crop"
        },
        {
            name: "Detached",
            species: "Chinstrap Nomad",
            location: "Distant Mountains",
            health: "Healthy" as const,
            imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <>
            <Hero />

            {/* Featured Section */}
            <section id="mission" className="py-16 container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-black text-black mb-3">Departed Souls</h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-medium">
                        Each specimen here has chosen a path away from the colony. We track their silence as they march toward the great interior.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {penguins.map((penguin, index) => (
                        <motion.div
                            key={penguin.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <PenguinCard {...penguin} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <MapSection />
        </>
    );
};

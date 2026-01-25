
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { MapSection } from "./components/MapSection"
import { PenguinCard } from "./components/PenguinCard"
import { Footer } from "./components/Footer"
import { motion } from "framer-motion"

function App() {
  const penguins = [
    {
      name: "Gentoo Alpha",
      species: "Gentoo Penguin",
      location: "Port Lockroy",
      health: "Healthy" as const,
      imageUrl: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Adélie #402",
      species: "Adélie Penguin",
      location: "Hope Bay",
      health: "Concerns" as const,
      imageUrl: "https://images.unsplash.com/photo-1551633539-bd241604f325?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Emperor King",
      species: "Emperor Penguin",
      location: "Snow Hill Island",
      health: "Healthy" as const,
      imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-arctic-white min-h-screen text-ocean-blue font-body selection:bg-glacier-blue selection:text-ocean-blue">
      <Navbar />

      <main>
        <Hero />

        {/* Featured Section */}
        <section id="species" className="py-24 container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Tracked Specimens</h2>
            <p className="text-soft-slate max-w-2xl mx-auto">
              Monitor individual penguins in real-time. Our tags collect vital data including location, diving depth, and body temperature.
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
      </main>

      <Footer />
    </div>
  )
}

export default App

Design Document: Penguin Tracker (Northsea Inspired)
1. Design Philosophy
The goal is to create a high-trust, educational, and interactive platform. The design uses Atmospheric Minimalism—utilizing vast white space (representative of the Arctic/Antarctic), high-quality nature photography, and "frosted" UI elements to give a cold, clean, and modern feel.

2. Visual Identity
Color Palette
Arctic White (#F9FAFB): Primary background color to maintain a clean, airy feel.

Deep Ocean Blue (#0A2540): Primary text and navigation color for high contrast.

Glacier Blue (#A5D8FF): Accent color for buttons, active states, and tracking lines.

Soft Slate (#64748B): Secondary text for metadata and captions.

Translucent Frost (rgba(255, 255, 255, 0.7)): Used for glassmorphism effects on cards and overlays.

Typography
Headings: Inter or Montserrat (Bold/Semi-bold). Clean, geometric sans-serif to feel modern and scientific.

Body: Public Sans or Outfit. Highly legible at small sizes for data points.

Monospace (Optional): JetBrains Mono for GPS coordinates and ID tags to give a "technical" feel.

3. Layout Structure (Based on Header)
Navigation Bar
Left: Minimalist Logo (Simple penguin silhouette + "P-Track").

Center: Navigation links (Map, Species, Conservation, About).

Right: Call to Action (CTA) button with a subtle shadow: "Live Tracking."

Hero Section (The "Dribbble" Look)
The Focus: A high-resolution, full-width image of a penguin in its natural habitat.

Text Overlay: Left-aligned bold heading (e.g., "Protecting the Gentoo Penguin") with a sub-header explaining the current mission.

Interactive Card: A floating "Glassmorphism" card on the right side showing live stats (e.g., "Current Population," "Water Temp," "Active Tags").

4. Key Website Features
Live Tracking Map
Style: A custom Mapbox or Leaflet theme using "Cold Grey" or "Dark Navy" tones.

Markers: Small, pulsing Glacial Blue dots representing individual penguins.

Sidebar: A list of "Featured Penguins" with names, distances traveled, and recent photos.

Penguin Profile Cards
Visuals: Each penguin gets a card with a "Frosted Glass" background.

Data Points: Name, Species, Last Seen (Location), and "Health Status" (Green/Yellow/Red indicator).

5. Technical Specifications
Frontend Framework: React or Next.js for smooth transitions between tracking data.

Animations: Use Framer Motion for subtle "drifting" animations (imitating ice floes) and smooth fades when switching between penguin profiles.

Icons: Use Lucide-React for thin, clean iconography (e.g., wind icons, temperature icons, GPS pins).

6. UI Elements & Components
Buttons: Rounded corners (8px–12px). Use a subtle blur background for buttons placed over images.

Imagery: Use images with cool color temperatures (blue/white/grey) to match the Northsea aesthetic.

Grid: A 12-column grid with generous margins (80px+) to prevent the data from feeling cluttered.
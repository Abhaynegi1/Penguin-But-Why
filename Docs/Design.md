Design Document: Penguin but why (The Nihilist Edition)

## 1. Design Philosophy
The goal is to create a delightful, nostalgic, yet deeply philosophical platform inspired by the **"Nihilist Penguin"** viral phenomenon (originally from Werner Herzog's *Encounters at the End of the World*). The design blends **"Cute Retro Minimalism"** with existential undertones. It tracks those who have chosen to depart from the colony and march into the vast, silent interior of the Antarctic. It celebrates walking one's own path, detachment, and the beautiful absurdity of existence.

## 2. Visual Identity

### Color Palette
*   **Primary (Indigo-600):** `#4f46e5` - Used for primary branding and headers.
*   **Secondary (Rose-500):** `#f43f5e` - Used for urgency, health status (Help), and radar markers.
*   **Accent (Amber-400):** `#fbbf24` - Used for call-to-action buttons ("LIVE" status).
*   **Background (Blue-50):** `#eff6ff` - A soft, cold background to represent the arctic snow.
*   **Foreground (Black):** `#000000` - Used for thick borders, shadows, and high-contrast text.
*   **Arctic Blue:** `#dbeafe` - Used for card backgrounds and secondary containers.

### Typography
*   **Headings & Accents:** `Pixelify Sans`. A pixelated font used for brand names, section labels, and "8-bit" badges to reinforce the retro vibe.
*   **Body:** `Outfit`. A clean, rounded sans-serif that balances the pixelated elements with high readability.
*   **Sizing Strategy:** Pixel fonts are kept small (8px-12px) for density, while body text uses standard readable scales (14px-18px).

### UI Style: Neo-Retro / Pixel-Brutalism
*   **Borders:** Consistent `3px` or `4px` solid black borders on all interactive elements.
*   **Shadows:** Hard, non-blurred shadows (`shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]`) to create a pop-out "sticker" effect.
*   **Roundedness:** Large rounded corners (`2rem` or `1.5rem`) to maintain the "cute" and "soft" feel despite the hard edges.

## 3. Layout Structure

### Navigation Bar
*   **Floating Bar:** A glassmorphism container (`bg-white/70 backdrop-blur`) floating at the top of the screen.
*   **Responsive Pill:** A central pill containing navigation links (Map, Wiki, Mission) that adapts to mobile by reducing padding.
*   **Brand Icon:** A circular penguin avatar with a thick black border.

### Hero Section
*   **Visual Scene:** A central or split layout featuring the "Specimen" image inside a stylized, bordered container.
*   **Floating Badges:** Interactive "sticker" labels like "99% CUTE" and "0% FLIGHT" that use micro-animations to float around the main visual.
*   **Wavy Heading:** "Stay Cool With Penguins" with a custom-drawn underline to add personality.

## 4. Key Website Features

### Antarctic Radar (Map)
*   **Aesthetic:** A "tactical HUD" look with a pixel grid overlay and scanning sweep animations.
*   **Markers:** Pulsing, bordered squares representing different penguin species (Adélie, Gentoo, King).
*   **Controls:** Chunky `+` and `-` buttons for zoom, following the neo-brutalism shadow style.

### Specimen Tracking (Cards)
*   **Visuals:** Square aspect-ratio images with zoom-on-hover effects.
*   **Status Badges:** Color-coded pixel badges (HAPPY, CHILL, HELP) showing health.
*   **Metadata:** Compact tags for location and species using Lucide-React icons for clarity.

## 5. Technical Specifications
*   **Frontend:** React + Vite with Tailwind CSS for utility-first styling.
*   **Animations:** Framer Motion for spring-based interactions, floating loops, and entry reveals.
*   **Icons:** Lucide-React for clean line art that contrasts with the chunky pixel elements.
*   **Grid:** Standard container-based grid with responsive breakpoints (`sm`, `md`, `lg`) adjusting font sizes and spacing dynamically.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { WikiPage } from "./pages/WikiPage";

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-foreground font-body selection:bg-primary/30 selection:text-black">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wiki" element={<WikiPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

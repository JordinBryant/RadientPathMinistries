import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HairCarePage from "./pages/HairCarePage";
import DietPage from "./pages/DietPage";
import WealthPage from "./pages/WealthPage"; // Make sure to create or import this
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Merchandise from "./pages/Merchandise";
import Donate from "./pages/DonatePage";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hair-care" element={<HairCarePage />} />
              <Route path="/biblical-diet" element={<DietPage />} />
              <Route path="/biblical-wealth" element={<WealthPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/donate" element={<Donate />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import ButtonSample3 from "./Components/Buttons/ButtonFormTailwind";
import Dashboard from "./Components/DashboardTemplate";
import HeroSection from "./Components/HeroSection";
import SliderToggle from "./Components/SliderToggle";
import { Nav } from "./Components/Nav";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarPage from "./pages/NavbarPage";
import ButtonsPage from "./pages/ButtonsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CardPage from "./pages/CardPage";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/navbar" element={<NavbarPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/cards" element={<CardPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

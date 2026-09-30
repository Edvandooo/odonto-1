import React, { useState, useEffect } from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../constants/clinicData";
import { ToothLogo } from "./ToothLogo";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(80,60,40,0.06)] py-3.5 border-b border-[#ECE5DA]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* LOGO (Zona 1) */}
        <a
          href="#hero"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Dra. Laís Ribeiro - Início"
        >
          <div className="p-1 rounded-lg transition-transform group-hover:scale-105 duration-300">
            <ToothLogo className="w-8 h-8 text-[#9E8268]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-[22px] font-bold tracking-tight text-[#2C2724] leading-tight">
              {CLINIC_CONFIG.brandName}
            </span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-[#9E8268] uppercase -mt-0.5">
              {CLINIC_CONFIG.title}
            </span>
            <span className="text-[8.5px] tracking-wider text-[#8A8177] font-light">
              {CLINIC_CONFIG.cro}
            </span>
          </div>
        </a>

        {/* NAVEGAÇÃO CENTRAL (Zona 2 - Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-medium text-[#5A5048] hover:text-[#9E8268] transition-colors tracking-wide relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9E8268] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* BOTÃO WHATSAPP (Zona 3 - Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Olá, Dra. Laís! Gostaria de informações para agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#8E755D] text-white text-[13px] font-medium tracking-wide shadow-sm hover:bg-[#7B644E] transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-3.5 h-3.5 text-[#F7F2EB]" />
            <span>{CLINIC_CONFIG.whatsappNumber}</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2C2724] hover:bg-[#F0EAE0] transition-colors focus:outline-none"
          aria-label="Alternar menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E6DFD4] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-[#3D352F] hover:text-[#9E8268] py-1 border-b border-[#F0EAE0]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#8E755D] text-white text-sm font-medium shadow-sm hover:bg-[#7B644E] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar pelo WhatsApp {CLINIC_CONFIG.whatsappNumber}</span>
          </a>
        </div>
      )}
    </header>
  );
};

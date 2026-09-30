import React, { useState, useEffect } from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../constants/clinicData";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o botão flutuante após rolar 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip elegante */}
      {showTooltip && (
        <div className="hidden sm:block px-4 py-2 rounded-xl bg-[#2C2319] text-[#FAF7F2] text-xs font-medium shadow-xl border border-[#4B3B2B] animate-in fade-in duration-200">
          <span>Agende sua consulta online</span>
        </div>
      )}

      {/* Botão flutuante em formato pill arredondado */}
      <a
        href={getWhatsAppUrl("Olá, Dra. Laís! Gostaria de tirar uma dúvida e agendar uma consulta.")}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#8E755D] text-white shadow-[0_8px_25px_-5px_rgba(80,60,40,0.35)] hover:bg-[#7D6650] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#FAF7F2]"
        aria-label="Falar com a Dra. Laís no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        {/* Ponto indicador de status ativo */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#4ADE80] border-2 border-white rounded-full" />
      </a>
    </div>
  );
};

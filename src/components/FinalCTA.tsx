import React from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../constants/clinicData";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ToothLogo } from "./ToothLogo";

export const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="relative py-20 lg:py-28 overflow-hidden bg-[#261E16]">
      {/* Background Fotográfico da Clínica com Overlay Quente e Sutil */}
      <div className="absolute inset-0 z-0">
        <img
          src={CLINIC_CONFIG.images.clinicCtaBg}
          alt="Clínica odontológica Dra. Laís Ribeiro"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201811]/95 via-[#2C2117]/85 to-[#201811]/95" />
      </div>

      {/* Ícone de Dente Iluminado Gigante em Marca d'Água Sutil no Fundo */}
      <div className="absolute left-8 lg:left-24 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
        <ToothLogo size={180} className="text-[#E2B280]" neon={true} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          
          {/* Textos de Chamada */}
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#D8BFA3] uppercase block mb-3">
              Vamos cuidar do seu sorriso?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F2] tracking-tight mb-3">
              Agende sua consulta agora mesmo!
            </h2>
            <p className="text-[#C4B3A1] text-base font-light">
              Será um prazer te atender com todo o carinho e dedicação!
            </p>
          </div>

          {/* Botão de Conversão Direta */}
          <div className="shrink-0">
            <a
              href={getWhatsAppUrl("Olá, Dra. Laís! Gostaria de agendar minha consulta agora.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9E8268] text-[#FAF7F2] text-sm font-semibold tracking-wider uppercase shadow-xl hover:bg-[#8A6F56] hover:shadow-2xl hover:scale-105 active:scale-98 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Agendar pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

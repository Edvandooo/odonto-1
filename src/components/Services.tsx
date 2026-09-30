import React, { useState } from "react";
import { SERVICES_DATA, ServiceItem, getWhatsAppUrl } from "../constants/clinicData";
import {
  DentalGeneralIcon,
  DentalAestheticIcon,
  DentalImplantIcon,
  DentalOrthoIcon,
  DentalEndoIcon,
  DentalProsthesisIcon,
} from "./DentalIcons";
import { ArrowRight, CheckCircle2, MessageCircle, X } from "lucide-react";

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "general":
        return <DentalGeneralIcon className="w-8 h-8 text-[#9E8268]" />;
      case "aesthetic":
        return <DentalAestheticIcon className="w-8 h-8 text-[#9E8268]" />;
      case "implant":
        return <DentalImplantIcon className="w-8 h-8 text-[#9E8268]" />;
      case "ortho":
        return <DentalOrthoIcon className="w-8 h-8 text-[#9E8268]" />;
      case "endo":
        return <DentalEndoIcon className="w-8 h-8 text-[#9E8268]" />;
      case "prosthesis":
        return <DentalProsthesisIcon className="w-8 h-8 text-[#9E8268]" />;
      default:
        return <DentalGeneralIcon className="w-8 h-8 text-[#9E8268]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LADO ESQUERDO: COPY EDITORIAL */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-start sticky top-28">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#9E8268]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#9E8268] uppercase">
                Nossos Serviços
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#2C2724] leading-[1.18] tracking-tight mb-5 text-balance">
              Tudo o que você precisa <br className="hidden sm:inline" />
              para um sorriso saudável
            </h2>

            <p className="text-[#685E56] text-sm sm:text-base leading-relaxed mb-8">
              Tratamentos modernos, seguros e personalizados para todas as fases da sua vida.
            </p>

            <div>
              <a
                href={getWhatsAppUrl("Olá, Dra. Laís! Gostaria de consultar os tratamentos e agendar uma avaliação.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#9E8268]/60 text-[#7D6650] hover:text-white hover:bg-[#8E755D] text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-sm"
              >
                <span>Conheça todos os serviços</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* LADO DIREITO: GRID 2x3 DE CARDS LUXUOSOS */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {SERVICES_DATA.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group relative bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] border border-[#EFE8DD] hover:border-[#DFD2C0] rounded-2xl p-7 sm:p-8 card-luxury-shadow card-luxury-hover cursor-pointer transition-all duration-300"
                >
                  {/* Ícone com moldura sutil */}
                  <div className="w-14 h-14 rounded-xl bg-[#FAF5ED] group-hover:bg-[#F4ECE0] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105">
                    {renderIcon(service.iconType)}
                  </div>

                  {/* Título do Serviço */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-[#2C2724] mb-2 tracking-tight group-hover:text-[#9E8268] transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline Descritiva */}
                  <p className="text-xs sm:text-[13px] text-[#786E66] leading-relaxed mb-4">
                    {service.tagline}
                  </p>

                  {/* Micro-link de Ação */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9E8268] opacity-75 group-hover:opacity-100 transition-opacity">
                    <span>Saber mais</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL EDITORIAL DE DETALHES DO SERVIÇO */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2319]/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] border border-[#E8E0D4] rounded-3xl max-w-lg w-full p-7 sm:p-9 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#786E66] hover:text-[#2C2724] hover:bg-[#EFE7DC] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-[#EFE6D8] flex items-center justify-center mb-5">
              {renderIcon(selectedService.iconType)}
            </div>

            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#9E8268] mb-1">
              Tratamento Odontológico
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2724] mb-2">
              {selectedService.title}
            </h3>

            <p className="text-sm font-medium text-[#7D6650] mb-4">
              {selectedService.tagline}
            </p>

            <p className="text-sm text-[#5C524A] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-2.5 mb-8">
              <span className="block text-xs font-semibold text-[#3D352F] uppercase tracking-wider mb-2">
                Diferenciais do Procedimento:
              </span>
              {selectedService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#524942]">
                  <CheckCircle2 className="w-4 h-4 text-[#9E8268] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(`Olá, Dra. Laís! Gostaria de agendar uma consulta para o tratamento de ${selectedService.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#8E755D] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#7D6650] transition-colors flex-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Este Tratamento</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-5 rounded-full border border-[#DCD2C4] text-[#6B6056] text-xs font-medium hover:bg-[#EFE8DD] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../constants/clinicData";
import { GraduationCap, Sparkles, Heart, ArrowRight } from "lucide-react";
import { ClinicImage } from "./ClinicImage";

export const AboutDoctor: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Luz ambiente suave */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#ECE1D2]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: IMAGEM REAL DA CLÍNICA FORNECIDA PELO CLIENTE */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_40px_-10px_rgba(80,60,40,0.12)] border border-[#ECE2D5] bg-[#E8DDD0]">
              <ClinicImage
                src={CLINIC_CONFIG.officialImages.consultorio}
                secondarySrc={CLINIC_CONFIG.officialImages.recepcao}
                alt="Consultório Odontológico Dra. Laís Ribeiro"
                placeholderLabel="Foto Oficial: Consultório Odontológico"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Vinheta suave e letreiro sutil de acolhimento */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2319]/50 via-transparent to-transparent pointer-events-none" />

              {/* Selo decorativo na foto como na referência */}
              <div className="absolute top-6 right-6 p-3 rounded-2xl bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E0D5C5] shadow-sm text-right">
                <span className="font-script text-xl sm:text-2xl text-[#8E755D] block leading-none">
                  Sorrir também é saúde
                </span>
                <span className="text-[10px] text-[#A69788] block text-center font-serif italic mt-0.5">
                  cuidado que acolhe ♡
                </span>
              </div>

              {/* Tarja com CRO oficial no canto inferior */}
              <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-[#2C2319]/80 backdrop-blur-md text-[11px] text-[#FAF7F2] font-medium tracking-wider">
                {CLINIC_CONFIG.cro}
              </div>
            </div>
          </div>

          {/* LADO DIREITO: TEXTO EDITORIAL */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#9E8268]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#9E8268] uppercase">
                Sobre a Dra. Laís Ribeiro
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#2C2724] leading-[1.15] tracking-tight mb-6 text-balance">
              Experiência, técnica <br />
              e um olhar humano
            </h2>

            <p className="text-[#685E56] text-base leading-relaxed mb-8 font-normal">
              Sou a Dra. Laís Ribeiro, cirurgiã-dentista, e acredito que cada sorriso tem uma história. Meu propósito é cuidar da sua saúde bucal com responsabilidade, acolhimento e um atendimento totalmente personalizado.
            </p>

            {/* 3 Destaques com Ícones Lineares */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pt-4 border-t border-[#EAE2D5]">
              <div className="flex items-center gap-3 sm:flex-col sm:items-start p-3 rounded-xl bg-white/60 border border-[#F0E8DD]">
                <div className="p-2 rounded-lg bg-[#F3ECE1] text-[#9E8268] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#2C2724] leading-snug">
                    Formação
                  </span>
                  <span className="block text-[11px] text-[#786E66]">
                    de excelência
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:flex-col sm:items-start p-3 rounded-xl bg-white/60 border border-[#F0E8DD]">
                <div className="p-2 rounded-lg bg-[#F3ECE1] text-[#9E8268] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#2C2724] leading-snug">
                    Atualização
                  </span>
                  <span className="block text-[11px] text-[#786E66]">
                    constante
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:flex-col sm:items-start p-3 rounded-xl bg-white/60 border border-[#F0E8DD]">
                <div className="p-2 rounded-lg bg-[#F3ECE1] text-[#9E8268] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#2C2724] leading-snug">
                    Atendimento
                  </span>
                  <span className="block text-[11px] text-[#786E66]">
                    humanizado
                  </span>
                </div>
              </div>
            </div>

            {/* Elemento Manuscrito Decorativo: "Seu sorriso em boas mãos ♡" */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Olá, Dra. Laís! Gostaria de agendar uma consulta e conversar sobre meu tratamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8E755D] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#7D6650] transition-all duration-300 hover:shadow-md"
              >
                <span>Conversar com a Dra. Laís</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Assinatura manuscrita editorial */}
              <div className="text-right">
                <p className="font-script text-3xl sm:text-4xl text-[#9E8268] leading-tight select-none">
                  Seu sorriso em boas mãos
                </p>
                <span className="text-[#B59C82] text-sm -mt-2 inline-block">♡</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

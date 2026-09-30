import React, { useState } from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../constants/clinicData";
import { ShieldCheck, Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";

export const ClinicExperience: React.FC = () => {
  const [receptionImg, setReceptionImg] = useState(CLINIC_CONFIG.images.clinicReception);
  const [facadeImg, setFacadeImg] = useState(CLINIC_CONFIG.images.clinicFacade);

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-[#F6F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#9E8268]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#9E8268] uppercase">
              Estrutura &amp; Experiência
            </span>
            <span className="w-5 h-[1.5px] bg-[#9E8268]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#2C2724] leading-[1.18] tracking-tight mb-4">
            Um ambiente pensado para o seu bem-estar
          </h2>

          <p className="text-[#685E56] text-sm sm:text-base leading-relaxed">
            Aqui, cada detalhe é planejado para proporcionar tranquilidade, pontualidade e a máxima segurança clínica em cada procedimento.
          </p>
        </div>

        {/* Composição Visual Rica com Fotos Reais e Cards Sobrepostos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Card Principal: Sala de Espera / Recepção */}
          <div className="lg:col-span-7 relative group">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E8DFD3] bg-[#E3D7C6] h-[360px] sm:h-[420px] lg:h-[460px] relative">
              <img
                src={receptionImg}
                alt="Recepção acolhedora da clínica Dra. Laís Ribeiro"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (receptionImg !== CLINIC_CONFIG.images.clinicReceptionFallback) {
                    setReceptionImg(CLINIC_CONFIG.images.clinicReceptionFallback);
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201912]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#9E8268]/90 text-[10px] uppercase tracking-wider font-semibold mb-2">
                  Recepção &amp; Conforto
                </span>
                <h3 className="font-serif text-2xl font-medium tracking-tight">
                  Espaço Acolhedor e Climatizado
                </h3>
                <p className="text-xs text-[#EAE2D8] mt-1 max-w-md">
                  Painel ripado em madeira nobre, iluminação cênica suave e assentos confortáveis para você se sentir em casa desde o primeiro instante.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Foto Sobreposta da Clínica & Destaques de Confiança */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Foto da Fachada / Identidade Real */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#E8DFD3] bg-[#E3D7C6] h-[220px] relative group">
              <img
                src={facadeImg}
                alt="Fachada oficial da clínica odontológica"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (facadeImg !== CLINIC_CONFIG.images.clinicReceptionFallback) {
                    setFacadeImg(CLINIC_CONFIG.images.clinicReceptionFallback);
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201912]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D8C7B5] block">
                    Atendimento Presencial
                  </span>
                  <span className="font-serif text-lg font-medium text-[#FAF7F2]">
                    Fácil Acesso &amp; Estacionamento
                  </span>
                </div>
                <div className="p-2 rounded-full bg-[#FAF7F2]/20 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Grid de 3 Pilares de Conforto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#ECE2D5] shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#9E8268] mb-2" />
                <h4 className="text-xs font-semibold text-[#2C2724] mb-1">Biossegurança</h4>
                <p className="text-[11px] text-[#786E66]">Esterilização hospitalar e materiais descartáveis.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#ECE2D5] shadow-xs">
                <Clock className="w-5 h-5 text-[#9E8268] mb-2" />
                <h4 className="text-xs font-semibold text-[#2C2724] mb-1">Pontualidade</h4>
                <p className="text-[11px] text-[#786E66]">Horários reservados com exclusividade para você.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#ECE2D5] shadow-xs">
                <Sparkles className="w-5 h-5 text-[#9E8268] mb-2" />
                <h4 className="text-xs font-semibold text-[#2C2724] mb-1">Tecnologia</h4>
                <p className="text-[11px] text-[#786E66]">Fotografia intraoral e planejamento estético digital.</p>
              </div>
            </div>

          </div>

        </div>

        {/* CTA Intermediário Sutil */}
        <div className="flex justify-center">
          <a
            href={getWhatsAppUrl("Olá, Dra. Laís! Gostaria de agendar uma visita e conhecer a clínica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white border border-[#DFD3C2] text-[#6B5742] hover:text-white hover:bg-[#8E755D] text-xs font-semibold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-300"
          >
            <span>Conheça Nosso Espaço de Perto</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

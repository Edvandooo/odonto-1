import React, { useState } from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../constants/clinicData";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { ToothLogo } from "./ToothLogo";

export const Hero: React.FC = () => {
  // Graceful fallback para a foto da Dra. Laís
  const [doctorImgSrc, setDoctorImgSrc] = useState(CLINIC_CONFIG.images.doctorHero);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#F9F6F0] via-[#FAF7F2] to-[#F5F0E6]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#EADCCB]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-[#E8DDD0]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUNA ESQUERDA: COPY E CTA */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#9E8268]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#9E8268] uppercase">
                Sorrisos mais saudáveis, mais confiança para você
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-semibold text-[#2C2724] leading-[1.12] tracking-tight mb-6 text-balance">
              Cuidar do seu sorriso <br className="hidden sm:inline" />
              é a minha{" "}
              <span className="italic font-serif text-[#9E8268] font-normal underline decoration-[#D8C7B5] decoration-wavy decoration-1 underline-offset-8">
                especialidade.
              </span>
            </h1>

            {/* Subtítulo / Texto */}
            <p className="text-[#685E56] text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal">
              Aqui, você encontra atendimento humanizado, tecnologia de ponta e um plano de cuidado feito especialmente para você.
            </p>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-14">
              <a
                href={getWhatsAppUrl("Olá, Dra. Laís! Gostaria de agendar uma consulta para cuidar do meu sorriso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#8E755D] text-white text-[15px] font-medium tracking-wide shadow-md hover:bg-[#7D6650] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-[#F7F2EB] group-hover:scale-110 transition-transform" />
                <span>Agende sua consulta</span>
                <ArrowRight className="w-4 h-4 text-[#F7F2EB] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Três Pilares Discretos do Hero */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E8E1D5]">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-full bg-[#F2ECE1] text-[#9E8268] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-[#3A332D] leading-tight">
                    Atendimento
                  </span>
                  <span className="block text-[11px] text-[#7A7067] leading-tight">
                    humanizado
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-full bg-[#F2ECE1] text-[#9E8268] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-[#3A332D] leading-tight">
                    Tecnologia
                  </span>
                  <span className="block text-[11px] text-[#7A7067] leading-tight">
                    de ponta
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-full bg-[#F2ECE1] text-[#9E8268] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-[#3A332D] leading-tight">
                    Ambiente
                  </span>
                  <span className="block text-[11px] text-[#7A7067] leading-tight">
                    seguro e acolhedor
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: COMPOSIÇÃO 3D REALISTA (CLÍNICA + DRA. LAÍS) */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-end lg:justify-end">
            
            {/* Moldura de Fundo: O Consultório Odontológico Sofisticado */}
            <div className="relative w-full max-w-[560px] lg:max-w-none h-[420px] sm:h-[480px] lg:h-[580px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(80,60,40,0.12)] border border-[#ECE4D8]/80 bg-[#E8DDD0]">
              
              {/* Foto Realista do Consultório Odontológico */}
              <img
                src={CLINIC_CONFIG.images.clinicHeroBg}
                alt="Consultório odontológico premium Dra. Laís Ribeiro"
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[0.95]"
                referrerPolicy="no-referrer"
              />

              {/* Camada Intermediária: Iluminação, Vinheta Quente e Profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2319]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/50 via-transparent to-[#2C2319]/25 pointer-events-none" />

             

              {/* Assinatura Manuscrita Elegante no Canto Inferior Direito da Imagem */}
              <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-30 pointer-events-none text-right">
                <div className="font-script text-2xl sm:text-3xl text-[#FAF7F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] tracking-wide">
                  Laís Ribeiro
                </div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#EFE7DC] font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                  Cirurgiã Dentista
                </div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-[#E5D7C5]/90 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] flex items-center justify-end gap-1">
                  <span>&amp; CEO do Consultório</span>
                  <span className="text-[#F2C59B]">♡</span>
                </div>
              </div>
            </div>

            {/* Primeiro Plano: Dra. Laís Ribeiro em Destaque */}
            {/* O recorte da Dra. Laís fica NA FRENTE, ultrapassando a base e criando sensação de profundidade 3D */}
            <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 right-2 sm:right-6 lg:right-8 w-[280px] sm:w-[350px] lg:w-[440px] xl:w-[480px] z-20 pointer-events-none transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={doctorImgSrc}
                alt="Dra. Laís Ribeiro - Cirurgiã Dentista"
                className="w-full h-auto max-h-[460px] sm:max-h-[530px] lg:max-h-[620px] object-contain drop-shadow-[0_20px_25px_rgba(40,30,20,0.3)] filter contrast-[1.02]"
                referrerPolicy="no-referrer"
                onError={() => {
                  // Se o arquivo PNG do usuário não estiver na raiz do servidor web, usa o asset com a mesma estética
                  if (doctorImgSrc !== CLINIC_CONFIG.images.doctorHeroFallback) {
                    setDoctorImgSrc(CLINIC_CONFIG.images.doctorHeroFallback);
                  }
                }}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

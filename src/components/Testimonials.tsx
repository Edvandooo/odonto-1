import React from "react";
import { TESTIMONIALS_DATA, getWhatsAppUrl } from "../constants/clinicData";
import { Star, ArrowRight, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Cabeçalho com link no topo à direita como no design de referência */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#9E8268]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#9E8268] uppercase">
                Depoimentos
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#2C2724] leading-[1.18] tracking-tight text-balance">
              O que dizem nossos pacientes
            </h2>
          </div>

          <a
            href={getWhatsAppUrl("Olá, Dra. Laís! Vi os depoimentos no site e gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E8268] hover:text-[#7D6650] transition-colors"
          >
            <span>Ver mais avaliações</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid de 3 Cards com Bastante Espaço Interno */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white/90 border border-[#EFE8DD] rounded-2xl p-8 sm:p-9 shadow-xs hover:shadow-md card-luxury-hover flex flex-col justify-between"
            >
              <div>
                {/* Header do Card: Avatar com Iniciais + Nome + Estrelas */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar Circular Elegante em Tom Areia */}
                  <div className="w-12 h-12 rounded-full bg-[#EFE6D8] border border-[#DFD3C2] flex items-center justify-center text-[#78614B] font-serif text-lg font-semibold shrink-0">
                    {t.avatarText}
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2C2724] leading-tight">
                      {t.name}
                    </h3>
                    {/* 5 Estrelas Douradas Sutis */}
                    <div className="flex items-center gap-1 mt-1 text-[#C49A58]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C49A58]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Depoimento Real */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-[#E8DFD3] absolute -top-3 -left-2 opacity-50 pointer-events-none" />
                  <p className="text-[#594E46] text-[13.5px] leading-relaxed relative z-10 pl-2 italic">
                    "{t.comment}"
                  </p>
                </div>
              </div>

              {/* Tag Discreta do Tratamento Realizado */}
              <div className="pt-6 mt-6 border-t border-[#F4EFE6] text-[11px] text-[#A69788] font-medium tracking-wide">
                {t.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

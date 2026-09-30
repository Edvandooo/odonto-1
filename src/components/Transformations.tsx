import React, { useState } from "react";
import { getWhatsAppUrl, CLINIC_CONFIG } from "../constants/clinicData";
import { Sparkles, Check, ArrowRight } from "lucide-react";

interface CaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  croTag: string;
}

const CASES: CaseItem[] = [
  {
    id: "facetas",
    title: "Facetas de Resina Composta",
    category: "Estética & Harmonia Dental",
    description: "Planejamento personalizado para devolver formato, proporção, luminosidade e alinhamento anatômico aos dentes, preservando ao máximo a estrutura biológica natural.",
    benefits: [
      "Procedimento realizado em poucas sessões",
      "Textura, cor e translucidez personalizadas",
      "Mínimo ou nenhum desgaste do dente natural"
    ],
    croTag: "Dra. Laís Ribeiro | CROSP 124.947"
  },
  {
    id: "endodontia",
    title: "Tratamento Endodôntico Especializado",
    category: "Saúde & Preservação da Raiz",
    description: "Tecnologia mecanizada moderna para tratamento de canal seguro, confortável e sem dor, eliminando focos inflamatórios e preservando o elemento dental na boca.",
    benefits: [
      "Instrumentação rotatória rápida e indolor",
      "Localizador apical eletrônico de alta precisão",
      "Controle radiográfico rigoroso"
    ],
    croTag: "Dra. Laís Ribeiro | CROSP 124.947"
  },
  {
    id: "reabilitacao",
    title: "Reabilitação & Implantes Dentários",
    category: "Função Mastigatória & Autoestima",
    description: "Substituição definitiva de ausências dentárias com implantes biocompatíveis de titânio, devolvendo a liberdade de sorrir e mastigar qualquer alimento com firmeza.",
    benefits: [
      "Planejamento 3D seguro e guiado",
      "Estabilidade protética de longa durabilidade",
      "Harmonia estética com o arco dental"
    ],
    croTag: "Dra. Laís Ribeiro | CROSP 124.947"
  }
];

export const Transformations: React.FC = () => {
  const [activeCase, setActiveCase] = useState(CASES[0]);

  return (
    <section className="py-20 lg:py-28 bg-[#F6F1E9] relative border-y border-[#ECE2D5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#9E8268]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#9E8268] uppercase">
              Excelência Comprovada
            </span>
            <span className="w-5 h-[1.5px] bg-[#9E8268]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2C2724] leading-[1.18] tracking-tight mb-4">
            A arte de transformar sorrisos com naturalidade
          </h2>

          <p className="text-[#6B6158] text-sm sm:text-base leading-relaxed">
            Cada paciente recebe um plano clínico único, unindo arte, biologia e tecnologia odontológica de última geração.
          </p>
        </div>

        {/* Abas Interativas de Casos */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCase(item)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCase.id === item.id
                  ? "bg-[#8E755D] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#6B6056] border border-[#E4DACD] hover:bg-white hover:text-[#2C2724]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Card de Destaque do Caso Selecionado */}
        <div className="bg-white/95 rounded-3xl border border-[#E9DFD2] p-8 sm:p-12 shadow-sm card-luxury-shadow max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9E8268] block mb-1">
                {activeCase.category}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2724] mb-4">
                {activeCase.title}
              </h3>

              <p className="text-sm text-[#5C524A] leading-relaxed mb-6 font-normal">
                {activeCase.description}
              </p>

              <div className="space-y-2.5 mb-8">
                {activeCase.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#453D37]">
                    <div className="w-4 h-4 rounded-full bg-[#F3ECE1] text-[#9E8268] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppUrl(`Olá, Dra. Laís! Gostaria de uma avaliação para ${activeCase.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#8E755D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#7D6650] transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <span>Quero Uma Avaliação Personalizada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Selo Técnico Lateral */}
            <div className="md:col-span-5 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-[#FAF7F2] border border-[#ECE3D7]">
              <div className="w-12 h-12 rounded-full bg-[#EFE7DC] flex items-center justify-center text-[#9E8268] mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-serif text-lg font-semibold text-[#2C2724] block mb-1">
                Protocolo Seguro &amp; Personalizado
              </span>
              <p className="text-xs text-[#7A7067] leading-relaxed mb-4">
                Avaliação detalhada, escaneamento e acompanhamento direto com a Dra. Laís Ribeiro.
              </p>
              <span className="text-[10px] font-semibold text-[#9E8268] uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF5EE] border border-[#E6DCCF]">
                {activeCase.croTag}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

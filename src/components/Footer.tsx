import React from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../constants/clinicData";
import { ToothLogo } from "./ToothLogo";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EAE2D5] pt-16 pb-12 text-[#2C2724]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Bloco Superior: Logo + Navegação + Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#ECE3D7]">
          
          {/* Logo & Marca (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-4">
              <ToothLogo className="w-8 h-8 text-[#9E8268]" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#2C2724]">
                  {CLINIC_CONFIG.brandName}
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#9E8268] uppercase -mt-0.5">
                  {CLINIC_CONFIG.title}
                </span>
                <span className="text-[9px] tracking-wider text-[#8A8177]">
                  {CLINIC_CONFIG.cro}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#786E66] leading-relaxed max-w-sm mb-6">
              Odontologia estética e clínica humanizada. Cuidado personalizado, segurança e excelência em cada detalhe do seu sorriso.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3">
              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#EFE8DC] hover:bg-[#9E8268] text-[#5C5147] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram da Dra. Laís Ribeiro"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#EFE8DC] hover:bg-[#9E8268] text-[#5C5147] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp da Dra. Laís Ribeiro"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navegação Central (3 colunas) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-serif text-base font-semibold text-[#2C2724] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B6159]">
              <li>
                <a href="#hero" className="hover:text-[#9E8268] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#9E8268] transition-colors">Sobre a Dra. Laís</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#9E8268] transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-[#9E8268] transition-colors">Clínica &amp; Estrutura</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#9E8268] transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#9E8268] transition-colors">Agendamento</a>
              </li>
            </ul>
          </div>

          {/* Informações de Atendimento e Localização (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col">
            <h4 className="font-serif text-base font-semibold text-[#2C2724] mb-4">
              Contato &amp; Localização
            </h4>
            <div className="space-y-3.5 text-xs text-[#6B6159]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#9E8268] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#2C2724] hover:text-[#9E8268] transition-colors"
                  >
                    {CLINIC_CONFIG.whatsappNumber}
                  </a>
                  <span className="block text-[11px] text-[#8C8278]">Atendimento e dúvidas via WhatsApp</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9E8268] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#2C2724] font-medium block">
                    {CLINIC_CONFIG.addressDisplay}
                  </span>
                  <span className="text-[11px] text-[#8C8278]">Atendimento com hora marcada</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9E8268] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#2C2724]">{CLINIC_CONFIG.openingHours.weekdays}</span>
                  <span className="block text-[#8C8278]">{CLINIC_CONFIG.openingHours.saturday}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Linha Inferior com Copyright e Menção Afetuosa */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#8A8177]">
          <div>
            <span>Dra. Laís Ribeiro | Cirurgiã Dentista | {CLINIC_CONFIG.cro}</span>
          </div>

          <div className="text-[11.5px] italic font-serif text-[#9E8268]">
            Seu sorriso é o nosso maior cuidado. ♡
          </div>

          <div>
            <span>&copy; 2026 Laís Ribeiro. Todos os direitos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

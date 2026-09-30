/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Transformations } from "./components/Transformations";
import { AboutDoctor } from "./components/AboutDoctor";
import { ClinicExperience } from "./components/ClinicExperience";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2C2724] font-sans selection:bg-[#EAE0D3] selection:text-[#3B2F23]">
      {/* 1. Header Fixo com Efeito de Vidro e WhatsApp */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        {/* 2. Hero — Composição 3D com a Dra. Laís Ribeiro em Destaque */}
        <Hero />

        {/* 3. Nossos Serviços — Grid 2x3 de Cards Elegantes */}
        <Services />

        {/* 4. Casos Clínicos & Transformações Reais */}
        <Transformations />

        {/* 5. Sobre a Dra. Laís Ribeiro — Layout Editorial com Foto do Consultório e Assinatura */}
        <AboutDoctor />

        {/* 6. Estrutura & Experiência da Clínica — Fotos da Recepção, Fachada e Biossegurança */}
        <ClinicExperience />

        {/* 7. Depoimentos — Avaliações Reais com 5 Estrelas e Depoimentos */}
        <Testimonials />

        {/* 8. CTA Final — Faixa Elegante com Fundo do Consultório e Botão Direto */}
        <FinalCTA />
      </main>

      {/* 9. Footer Minimalista com Dados Oficiais, CRO e Redes Sociais */}
      <Footer />

      {/* Botão Flutuante Discreto de WhatsApp */}
      <WhatsAppFloatingButton />
    </div>
  );
}

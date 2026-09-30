import doutoraLaisPortrait from "../assets/images/doutora_lais_portrait_1790739138596.jpg";
import heroClinicInterior from "../assets/images/hero_clinic_interior_1790739125494.jpg";
import clinicAboutImg from "../assets/images/regenerated_image_1790742529132.png";
import clinicReceptionImg from "../assets/images/regenerated_image_1790742530158.png";
import clinicFacadeImg from "../assets/images/regenerated_image_1790742531362.png";
import clinicCtaBgImg from "../assets/images/regenerated_image_1790742532692.png";

/**
 * Dados e Configurações Centrais da Clínica Dra. Laís Ribeiro
 * Todos os links e números de WhatsApp são centralizados aqui para fácil alteração.
 */

export const CLINIC_CONFIG = {
  doctorName: "Dra. Laís Ribeiro",
  brandName: "Laís Ribeiro",
  title: "Cirurgiã Dentista",
  cro: "CRO-SP 124.947",
  whatsappNumber: "(11) 94933-9117",
  whatsappRaw: "5511949339117",
  defaultMessage: "Olá, Dra. Laís! Gostaria de agendar uma consulta.",
  instagramHandle: "@dralaisribeiro_",
  instagramUrl: "https://www.instagram.com/dralaisribeiro_/",
  addressDisplay: "Rua 238B, Clínica Dra. Referência — São Paulo, SP",
  addressShort: "São Paulo — SP",
  openingHours: {
    weekdays: "Seg a Sex: 08h às 18h",
    saturday: "Sáb: 08h às 12h",
    sunday: "Domingo: Fechado"
  },
  
  // Imagens fornecidas pelo usuário com fallbacks de altíssima definição
  images: {
    doctorHero: doutoraLaisPortrait,
    doctorHeroFallback: doutoraLaisPortrait,
    clinicHeroBg: heroClinicInterior,
    clinicAbout: clinicAboutImg,
    clinicAboutFallback: clinicAboutImg,
    clinicReception: clinicReceptionImg,
    clinicReceptionFallback: clinicReceptionImg,
    clinicFacade: clinicFacadeImg,
    clinicCtaBg: clinicCtaBgImg,
    clinicTreatment: "/unnamed (1).jpg",
  }
};

/**
 * Gera a URL oficial de redirecionamento do WhatsApp com mensagem customizada
 */
export function getWhatsAppUrl(message: string = CLINIC_CONFIG.defaultMessage): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CLINIC_CONFIG.whatsappRaw}?text=${encoded}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  iconType: "general" | "aesthetic" | "implant" | "ortho" | "endo" | "prosthesis";
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "clinica-geral",
    title: "Clínica Geral",
    tagline: "Prevenção e cuidado para o seu dia a dia",
    description: "Check-up preventivo, profilaxia avançada, raspagem, restaurações estéticas e orientações para manter a saúde bucal em dia com conforto total.",
    benefits: [
      "Diagnóstico precoce com câmera intraoral",
      "Limpeza profunda sem dor ou sensibilidade",
      "Restaurações no tom exato dos seus dentes"
    ],
    iconType: "general"
  },
  {
    id: "estetica-dental",
    title: "Estética Dental",
    tagline: "Mais harmonia e autoestima",
    description: "Facetas e lentes de contato em resina composta e porcelana, clareamento dental a laser e reabilitação estética para transformar o seu sorriso.",
    benefits: [
      "Facetas diretas em resina de alto brilho",
      "Planejamento estético proporcional e natural",
      "Clareamento supervisionado e duradouro"
    ],
    iconType: "aesthetic"
  },
  {
    id: "implantes",
    title: "Implantes",
    tagline: "Sorriso completo e funcional",
    description: "Tecnologia de ponta para reposição de dentes perdidos, devolvendo a capacidade de mastigação com segurança, estabilidade e naturalidade.",
    benefits: [
      "Implantes com titânio de grau biocompatível",
      "Recuperação rápida e protocolo seguro",
      "Sensação e visual idênticos ao dente natural"
    ],
    iconType: "implant"
  },
  {
    id: "ortodontia",
    title: "Ortodontia",
    tagline: "Alinhamento e mais confiança",
    description: "Alinhadores transparentes e aparelhos modernos para corrigir o posicionamento dos dentes, proporcionando oclusão perfeita e sorriso harmônico.",
    benefits: [
      "Opções com alinhadores discretos e confortáveis",
      "Correção de mordida e prevenção de desgastes",
      "Acompanhamento próximo em cada etapa"
    ],
    iconType: "ortho"
  },
  {
    id: "endodontia",
    title: "Endodontia",
    tagline: "Tratamento de canal com segurança",
    description: "Procedimento preciso com tecnologia mecanizada e localizador apical, eliminando a dor e salvando o dente natural de forma rápida e segura.",
    benefits: [
      "Tecnologia rotatória moderna sem dor",
      "Preservação da raiz e estrutura do dente",
      "Resultados com radiografia de controle precisa"
    ],
    iconType: "endo"
  },
  {
    id: "proteses",
    title: "Próteses",
    tagline: "Recupere a função e a estética",
    description: "Próteses fixas, sobre implantes e removíveis confeccionadas com materiais nobres para devolver a harmonia mastigatória e o prazer de sorrir.",
    benefits: [
      "Ajuste anatômico sob medida para sua face",
      "Materiais resistentes e com translucidez natural",
      "Máximo conforto no falar e no mastigar"
    ],
    iconType: "prosthesis"
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatarText: string;
  initial: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Juliana Costa",
    role: "Paciente de Estética Dental",
    rating: 5,
    comment: "Dra. Laís é incrível! Atendimento atencioso, explica tudo com calma e o resultado foi muito além do que eu esperava. Recomendo de olhos fechados!",
    avatarText: "JC",
    initial: "J"
  },
  {
    id: "2",
    name: "Rafael Mendes",
    role: "Paciente de Implante & Clínica",
    rating: 5,
    comment: "Profissional excelente! Ambiente muito agradável e todo o processo foi tranquilo. Já indiquei para toda a minha família!",
    avatarText: "RM",
    initial: "R"
  },
  {
    id: "3",
    name: "Camila Ferreira",
    role: "Paciente de Facetas em Resina",
    rating: 5,
    comment: "Sou muito grata pelo cuidado e dedicação. Meu sorriso nunca esteve tão bonito! A Dra. Laís é uma profissional completa e humana!",
    avatarText: "CF",
    initial: "C"
  }
];

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const DentalGeneralIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#9E8268]", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M14 3.5C10 3.5 6 5.5 6 10.5C6 14.5 7.5 17.5 9.5 22C10.5 24 11.5 25.5 12.8 25.5C14 25.5 14 23.5 14 20.5C14 23.5 14 25.5 15.2 25.5C16.5 25.5 17.5 24 18.5 22C20.5 17.5 22 14.5 22 10.5C22 5.5 18 3.5 14 3.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.5 8.5C11.5 9.5 12.8 9.8 14 9C15.2 9.8 16.5 9.5 17.5 8.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>
);

export const DentalAestheticIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#9E8268]", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M13 4.5C9.5 4.5 6 6.5 6 11C6 14.5 7.5 17.5 9.5 22C10.5 24 11.5 25.5 12.5 25.5C13.5 25.5 13.5 23.5 13.5 20.5C13.5 23.5 13.5 25.5 14.5 25.5C15.5 25.5 16.5 24 17.5 22C19.5 17.5 21 14.5 21 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Sparkling star */}
    <path d="M21 2L21.8 4.2L24 5L21.8 5.8L21 8L20.2 5.8L18 5L20.2 4.2L21 2Z" fill="currentColor" />
    <path d="M24 10L24.5 11.5L26 12L24.5 12.5L24 14L23.5 12.5L22 12L23.5 11.5L24 10Z" fill="currentColor" opacity="0.85" />
    <path d="M9 10C10.5 11 12 11 13 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const DentalImplantIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#9E8268]", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Dente superior da coroa */}
    <path d="M9 10C9 6.5 11 4 14 4C17 4 19 6.5 19 10C19 11.5 18 12.5 16.5 12.5H11.5C10 12.5 9 11.5 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Pilar intermediário */}
    <path d="M12 12.5V14.5H16V12.5" stroke="currentColor" strokeWidth="1.4" />
    {/* Rosca do implante (parafuso de titânio) */}
    <path d="M11 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11.5 17.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12.5 22.5H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 22.5V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DentalOrthoIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#9E8268]", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Linha do fio ortodôntico contínuo */}
    <path d="M4 14H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Brackets ortodônticos */}
    <rect x="7" y="10.5" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="17" y="10.5" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    {/* Slot central */}
    <path d="M9 10.5V17.5" stroke="currentColor" strokeWidth="1" />
    <path d="M19 10.5V17.5" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const DentalEndoIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#9E8268]", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M14 3.5C10 3.5 6 5.5 6 10.5C6 14.5 7.5 17.5 9.5 22C10.5 24 11.5 25.5 12.8 25.5C14 25.5 14 23.5 14 20.5C14 23.5 14 25.5 15.2 25.5C16.5 25.5 17.5 24 18.5 22C20.5 17.5 22 14.5 22 10.5C22 5.5 18 3.5 14 3.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Canais radiculares internos */}
    <path d="M11.5 13C11.5 16 11 19 11.5 23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M16.5 13C16.5 16 17 19 16.5 23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>
);

export const DentalProsthesisIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#9E8268]", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coroa protética reforçada */}
    <path
      d="M14 4C10 4 7 6 7 10C7 13.5 8 16 9.5 18.5H18.5C20 16 21 13.5 21 10C21 6 18 4 14 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Base de assentamento da prótese */}
    <path d="M8.5 21.5H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 24.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 10V15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

import React, { useState } from "react";
import { Camera } from "lucide-react";

interface ClinicImageProps {
  src: string;
  secondarySrc?: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  aspectRatioClass?: string;
}

/**
 * Componente oficial de imagem da clínica.
 * Carrega estritamente o arquivo oficial fornecido pelo usuário.
 * Se o arquivo ainda não tiver sido depositado no servidor, exibe um placeholder visual elegante
 * claramente identificado no código com o nome exato do arquivo para substituição.
 */
export const ClinicImage: React.FC<ClinicImageProps> = ({
  src,
  secondarySrc,
  alt,
  className = "w-full h-full object-cover",
  placeholderLabel,
  aspectRatioClass = "aspect-auto"
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (secondarySrc && currentSrc !== secondarySrc) {
      setCurrentSrc(secondarySrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`w-full h-full min-h-[160px] bg-gradient-to-br from-[#F5EFE6] to-[#ECE2D5] border-2 border-dashed border-[#D5C6B4] rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none ${aspectRatioClass}`}
        data-placeholder-target={src}
      >
        <div className="w-12 h-12 rounded-full bg-[#E5D7C5] flex items-center justify-center text-[#7D6650] mb-3 shadow-xs">
          <Camera className="w-6 h-6" />
        </div>
        <span className="font-serif text-base font-semibold text-[#3D352F] block mb-1">
          {placeholderLabel || alt}
        </span>
        <span className="text-[11px] font-mono text-[#8C7A67] bg-[#FAF7F2] px-3 py-1 rounded-md border border-[#E0D3C2] inline-block mb-1">
          Arquivo: {src}
        </span>
        <span className="text-[10px] text-[#A69788] max-w-xs block leading-tight">
          Posicione a foto oficial fornecida nesta rota para exibição imediata
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
};

import React from "react";

interface ToothLogoProps {
  className?: string;
  size?: number;
  neon?: boolean;
}

export const ToothLogo: React.FC<ToothLogoProps> = ({
  className = "w-8 h-8 text-[#9E8268]",
  size = 32,
  neon = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${neon ? "tooth-neon-glow" : ""}`}
    >
      {/* Molar tooth outline matching the provided reference */}
      <path
        d="M12 4.4C9.4 2.2 5.5 3.2 4.5 8C3.4 13 5.4 16.8 7.2 21C7.8 22.4 9.3 22.4 10 20.2C10.7 17.8 11.2 15 12 15C12.8 15 13.3 17.8 14 20.2C14.7 22.4 16.2 22.4 16.8 21C18.6 16.8 20.6 13 19.5 8C18.5 3.2 14.6 2.2 12 4.4Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

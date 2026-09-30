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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${neon ? "tooth-neon-glow" : ""}`}
    >
      {/* Elegant minimalist tooth icon */}
      <path
        d="M16 3C11.5 3 7 5.2 7 11C7 15 9 19 11 24.5C12 27.2 13 29 14.5 29C16 29 16 26.5 16 23C16 26.5 16 29 17.5 29C19 29 20 27.2 21 24.5C23 19 25 15 25 11C25 5.2 20.5 3 16 3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top subtle occlusal curve */}
      <path
        d="M12 9C13.5 10 14.8 10 16 9.2C17.2 10 18.5 10 20 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

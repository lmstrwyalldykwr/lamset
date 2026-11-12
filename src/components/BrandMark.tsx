import React from 'react';
import { COMPANY_INFO, Language } from '../data/company';

interface BrandMarkProps {
  lang: Language;
  variant?: 'header' | 'footer';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Renders the establishment's official circular logo (`/logo.png`) in 1:1 aspect ratio
 * alongside the establishment name in the Header (larger, prominent) and Footer (smaller).
 */
export const BrandMark: React.FC<BrandMarkProps> = ({
  lang,
  variant = 'header',
  onClick,
}) => {
  const isHeader = variant === 'header';

  return (
    <a
      href="/"
      onClick={onClick}
      className="group inline-flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]"
      aria-label={lang === 'ar' ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}
    >
      <img
        src="/logo.png"
        alt={lang === 'ar' ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}
        width={isHeader ? 56 : 44}
        height={isHeader ? 56 : 44}
        fetchPriority={isHeader ? 'high' : 'auto'}
        decoding="sync"
        className={`${
          isHeader
            ? 'w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14'
            : 'w-10 h-10 sm:w-11 sm:h-11'
        } aspect-square rounded-full object-contain shrink-0 select-none`}
      />
      <span
        className={`font-bold tracking-tight transition-colors ${
          isHeader
            ? 'text-base sm:text-lg lg:text-xl text-[#F5F1E8]'
            : 'text-base sm:text-lg text-[#F5F1E8]'
        } group-hover:text-[#DCC18A]`}
      >
        {lang === 'ar' ? 'مؤسسة لمسة رؤيا للديكور' : 'Lamsat Roya Decoration'}
      </span>
    </a>
  );
};

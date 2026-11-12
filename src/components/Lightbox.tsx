import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Language } from '../data/company';
import { TRANSLATIONS } from '../translations';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  title: string;
  lang: Language;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  title,
  lang,
  onClose,
  onSelectIndex,
}) => {
  const t = TRANSLATIONS[lang].lightbox;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onSelectIndex]);

  if (!images.length) return null;

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#071A35]/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between gap-4 max-w-7xl w-full mx-auto text-[#F5F1E8]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-sm">
          <span className="font-medium text-[#DCC18A] truncate max-w-md sm:max-w-xl">{title}</span>
          <span aria-hidden="true" className="text-[#B8A98C]">
            ·
          </span>
          <span className="tabular-nums text-[#B8A98C]">
            {t.imageCounter} {currentIndex + 1} {t.of} {images.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/30 text-[#F5F1E8] hover:border-[#C9A45C] hover:text-[#DCC18A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <span className="text-xs font-medium">{t.close}</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t.prev}
            className="absolute start-2 sm:start-4 z-10 p-3 rounded-full bg-[#071A35]/85 border border-[#C9A45C]/40 text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors cursor-pointer"
          >
            {lang === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          referrerPolicy="no-referrer"
          className="max-h-[72vh] max-w-full w-auto object-contain rounded-xl border border-[#C9A45C]/25 shadow-2xl"
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label={t.next}
            className="absolute end-2 sm:end-4 z-10 p-3 rounded-full bg-[#071A35]/85 border border-[#C9A45C]/40 text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors cursor-pointer"
          >
            {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <div
          className="flex items-center justify-center gap-3 overflow-x-auto py-2 max-w-4xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((imgUrl, idx) => (
            <button
              key={`${imgUrl}-${idx}`}
              type="button"
              onClick={() => onSelectIndex(idx)}
              aria-label={`${t.imageCounter} ${idx + 1}`}
              className={`relative h-14 w-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                idx === currentIndex
                  ? 'border-[#C9A45C] scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={imgUrl}
                alt={`${title} thumbnail ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

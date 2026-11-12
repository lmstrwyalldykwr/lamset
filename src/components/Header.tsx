import React, { useEffect, useState } from 'react';
import { Globe, Menu, MessageCircle, X } from 'lucide-react';
import { Language } from '../data/company';
import { TRANSLATIONS } from '../translations';
import { buildWhatsAppUrl } from '../utils/logic';
import { BrandMark } from './BrandMark';

interface HeaderProps {
  lang: Language;
  currentPath: string;
  onNavigate: (path: string) => void;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  currentPath,
  onNavigate,
  onToggleLang,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/services', label: t.services },
    { path: '/projects', label: t.projects },
    { path: '/contact', label: t.contact },
  ];

  const isHomeTop = currentPath === '/' && !isScrolled && !mobileMenuOpen;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const whatsappHref = buildWhatsAppUrl(
    lang === 'ar'
      ? 'السلام عليكم، أتواصل معكم من موقع مؤسسة لمسة رؤيا للديكور للاستفسار عن خدماتكم.'
      : 'Hello Lamsat Roya Decoration, I am reaching out from your website to inquire about your services.'
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isHomeTop
          ? 'bg-[#071A35]/75 backdrop-blur-sm border-b border-[#C9A45C]/20'
          : 'bg-[#071A35] border-b border-[#C9A45C]/25 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <BrandMark
          lang={lang}
          variant="header"
          onClick={(e) => handleLinkClick(e, '/')}
        />

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main Navigation'}
          className="hidden lg:flex items-center gap-7"
        >
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? currentPath === '/'
                : currentPath === item.path || currentPath.startsWith(`${item.path}/`);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#DCC18A] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#C9A45C]'
                    : 'text-[#F5F1E8]/85 hover:text-[#DCC18A]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switch & Primary WhatsApp Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={t.switchLangAria}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#C9A45C]/35 text-xs font-semibold text-[#F5F1E8] hover:border-[#C9A45C] hover:text-[#DCC18A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>{t.switchLang}</span>
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C9A45C] text-[#071A35] text-xs sm:text-sm font-semibold hover:bg-[#DCC18A] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.whatsappCta}</span>
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg border border-[#C9A45C]/35 text-[#F5F1E8] hover:border-[#C9A45C] hover:text-[#DCC18A] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1D38] border-b border-[#C9A45C]/30 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath === item.path || currentPath.startsWith(`${item.path}/`);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#C9A45C]/15 text-[#DCC18A]'
                      : 'text-[#F5F1E8] hover:bg-[#071A35] hover:text-[#DCC18A]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#C9A45C]/20">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#C9A45C] text-[#071A35] text-sm font-semibold hover:bg-[#DCC18A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.whatsappCta}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

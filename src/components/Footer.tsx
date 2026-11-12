import React from 'react';
import { ArrowUp, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO, Language } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { TRANSLATIONS } from '../translations';
import { buildWhatsAppUrl, getVisibleWorkingDays } from '../utils/logic';
import { BrandMark } from './BrandMark';

interface FooterProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang].footer;
  const navT = TRANSLATIONS[lang].nav;
  const visibleDays = getVisibleWorkingDays();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappHref = buildWhatsAppUrl(
    lang === 'ar'
      ? 'السلام عليكم، أرغب في التواصل مع مؤسسة لمسة رؤيا للديكور.'
      : 'Hello, I would like to connect with Lamsat Roya Decoration Establishment.'
  );

  return (
    <footer className="bg-[#071A35] text-[#F5F1E8] border-t border-[#C9A45C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Establishment Overview */}
          <div className="lg:col-span-4 space-y-5">
            <BrandMark
              lang={lang}
              variant="footer"
              onClick={(e) => handleNavClick(e, '/')}
            />
            <p className="text-sm text-[#B8A98C] leading-relaxed">
              {COMPANY_INFO.nameAr} — {COMPANY_INFO.nameEn}
            </p>
            <p className="text-sm text-[#F5F1E8]/80 leading-relaxed">{t.aboutText}</p>

            {/* Social Media Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/25 text-xs font-medium text-[#DCC18A] hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap"
              >
                Instagram
              </a>
              <a
                href={COMPANY_INFO.social.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/25 text-xs font-medium text-[#DCC18A] hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap"
              >
                Snapchat
              </a>
              <a
                href={COMPANY_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/25 text-xs font-medium text-[#DCC18A] hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap"
              >
                TikTok
              </a>
              <a
                href={COMPANY_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/25 text-xs font-medium text-[#DCC18A] hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap"
              >
                Google Maps
              </a>
            </div>
          </div>

          {/* Column 2: Quick Page Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-[#DCC18A] tracking-wide">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-[#F5F1E8]/80 hover:text-[#DCC18A] transition-colors"
                >
                  {navT.home}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNavClick(e, '/about')}
                  className="text-[#F5F1E8]/80 hover:text-[#DCC18A] transition-colors"
                >
                  {navT.about}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNavClick(e, '/services')}
                  className="text-[#F5F1E8]/80 hover:text-[#DCC18A] transition-colors"
                >
                  {navT.services}
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => handleNavClick(e, '/projects')}
                  className="text-[#F5F1E8]/80 hover:text-[#DCC18A] transition-colors"
                >
                  {navT.projects}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  className="text-[#F5F1E8]/80 hover:text-[#DCC18A] transition-colors"
                >
                  {navT.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-[#DCC18A] tracking-wide">
              {t.ourServices}
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {SERVICES_DATA.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/services#${service.id}`);
                    }}
                    className="text-[#F5F1E8]/80 hover:text-[#DCC18A] transition-colors"
                  >
                    {service.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact & Working Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-[#DCC18A] tracking-wide">
              {t.contactAndHours}
            </h3>
            <ul className="space-y-3 text-sm text-[#F5F1E8]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1" />
                <a
                  href={COMPANY_INFO.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DCC18A] transition-colors"
                >
                  {COMPANY_INFO.fullAddress[lang]}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  dir="ltr"
                  className="tabular-nums hover:text-[#DCC18A] transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#DCC18A] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            {/* Working Hours Summary */}
            <div className="pt-3 border-t border-[#C9A45C]/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DCC18A]">
                <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>{TRANSLATIONS[lang].contactPage.workingHoursTitle}</span>
              </div>
              <div className="space-y-1 text-xs text-[#F5F1E8]/75">
                {visibleDays.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-2">
                    <span>{item.day[lang]}:</span>
                    <span className={item.isClosed ? 'text-[#B8A98C]' : 'tabular-nums'}>
                      {item.hours[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8A98C]">
          <p dir="ltr">{t.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.backToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/30 text-[#F5F1E8] hover:border-[#C9A45C] hover:text-[#DCC18A] transition-colors cursor-pointer"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C9A45C]" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button (Positioned carefully so it never obscures mobile navigation or content) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingWhatsapp}
        className="fixed bottom-5 end-5 z-30 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#071A35] text-[#F5F1E8] border-2 border-[#C9A45C] shadow-xl hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors"
      >
        <MessageCircle className="w-5 h-5 text-[#C9A45C] group-hover:text-[#071A35]" />
        <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
          {t.floatingWhatsapp}
        </span>
      </a>
    </footer>
  );
};

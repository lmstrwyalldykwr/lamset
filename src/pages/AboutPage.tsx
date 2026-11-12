import React from 'react';
import { CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, IMAGES, Language } from '../data/company';
import { TRANSLATIONS } from '../translations';
import { buildWhatsAppUrl } from '../utils/logic';

interface AboutPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang].aboutPage;
  const homeWhyT = TRANSLATIONS[lang].homeWhyUs;

  const whatsappHref = buildWhatsAppUrl(
    lang === 'ar'
      ? 'السلام عليكم، أرغب في الاستفسار عن خدمات مؤسسة لمسة رؤيا للديكور بالمدينة المنورة.'
      : 'Hello Lamsat Roya Decoration Establishment, I would like to inquire about your interior design and decoration services.'
  );

  return (
    <div className="pt-20 bg-[#F5F1E8]">
      {/* Hero Banner */}
      <section className="bg-[#071A35] text-[#F5F1E8] py-16 sm:py-24 border-b border-[#C9A45C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xs sm:text-sm font-semibold text-[#DCC18A] tracking-wide">
            {t.kicker}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#FFFFFF] max-w-4xl leading-tight text-balance">
            {t.heroTitle}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#B8A98C] pt-2">
            <span>{COMPANY_INFO.fullAddress[lang]}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#DCC18A] font-semibold">
              {lang === 'ar' ? 'خبرة 15 عامًا' : '15 Years Experience'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#DCC18A] font-semibold">
              {lang === 'ar' ? 'ضمان 15 سنة' : '15-Year Warranty'}
            </span>
          </div>
        </div>
      </section>

      {/* Establishment Definition & Visual Split */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#B8A98C]/35">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071A35]">
                {t.introTitle}
              </h2>
              <p className="text-base text-[#292B30] leading-relaxed">{t.introText1}</p>
              <p className="text-base text-[#292B30] leading-relaxed">{t.introText2}</p>
            </div>

            <div className="pt-6 border-t border-[#B8A98C]/25 space-y-4">
              <h3 className="text-xl font-bold text-[#071A35]">{t.philosophyTitle}</h3>
              <p className="text-sm sm:text-base text-[#292B30]/85 leading-relaxed">
                {t.philosophyText}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-[#F5F1E8] border border-[#B8A98C]/30">
                <span className="block text-3xl font-bold text-[#071A35] tabular-nums">
                  15+
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#292B30]/80">
                  {lang === 'ar' ? 'عامًا من الخبرة العملية' : 'Years of Field Experience'}
                </span>
              </div>
              <div className="p-5 rounded-xl bg-[#071A35] text-[#F5F1E8] border border-[#C9A45C]/40">
                <span className="block text-3xl font-bold text-[#DCC18A] tabular-nums">
                  15
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#F5F1E8]/85">
                  {lang === 'ar' ? 'سنة ضمان على الجودة' : 'Years Quality Warranty'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative flex-1 min-h-72 rounded-2xl overflow-hidden border border-[#B8A98C]/35 bg-[#071A35]">
              <img
                src={IMAGES.heroMajlis}
                alt={lang === 'ar' ? 'أعمال الديكور والتصميم الداخلي' : 'Luxury Interior Design'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border border-[#B8A98C]/35 bg-[#071A35]">
              <img
                src={IMAGES.customWardrobe}
                alt={lang === 'ar' ? 'تفصيل الخزائن وغرف الملابس' : 'Custom Walk-in Wardrobes'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#FFFFFF] border-y border-[#B8A98C]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#071A35] text-[#F5F1E8] border border-[#C9A45C]/30 space-y-4">
            <span className="text-xs font-semibold text-[#DCC18A] tracking-wide">01</span>
            <h2 className="text-2xl font-bold text-[#FFFFFF]">{t.visionTitle}</h2>
            <p className="text-sm sm:text-base text-[#F5F1E8]/85 leading-relaxed">
              {t.visionText}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#F5F1E8] text-[#292B30] border border-[#B8A98C]/40 space-y-4">
            <span className="text-xs font-semibold text-[#C9A45C] tracking-wide">02</span>
            <h2 className="text-2xl font-bold text-[#071A35]">{t.missionTitle}</h2>
            <p className="text-sm sm:text-base text-[#292B30]/85 leading-relaxed">
              {t.missionText}
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences & Why Choose Us */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071A35]">
            {t.audiencesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_INFO.targetAudiences.map((aud, i) => (
              <div
                key={aud.en}
                className="bg-[#FFFFFF] p-5 rounded-xl border border-[#B8A98C]/35 flex flex-col justify-between space-y-3"
              >
                <span className="text-xs font-bold text-[#C9A45C] tabular-nums">
                  0{i + 1}
                </span>
                <p className="text-sm font-bold text-[#071A35]">{aud[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071A35]">
            {homeWhyT.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item) => (
              <div
                key={item.index}
                className="bg-[#FFFFFF] p-6 rounded-xl border border-[#B8A98C]/35 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C9A45C] tabular-nums">
                    {item.index}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                </div>
                <h3 className="text-base font-bold text-[#071A35]">{item.title[lang]}</h3>
                <p className="text-sm text-[#292B30]/80 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Banner */}
        <div className="bg-[#071A35] rounded-2xl p-8 sm:p-10 border border-[#C9A45C]/35 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#DCC18A]">
              <ShieldCheck className="w-4 h-4 text-[#C9A45C]" />
              <span>
                {lang === 'ar'
                  ? 'ضمان 15 سنة · المدينة المنورة – حي الدفاع'
                  : '15-Year Warranty · Madinah – Al-Difa’a District'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
              {TRANSLATIONS[lang].homeCta.title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A45C] text-[#071A35] text-sm font-bold hover:bg-[#DCC18A] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{TRANSLATIONS[lang].nav.whatsappCta}</span>
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#C9A45C]/40 text-[#F5F1E8] text-sm font-semibold hover:border-[#C9A45C] hover:text-[#DCC18A] transition-colors whitespace-nowrap"
            >
              <span>{TRANSLATIONS[lang].nav.contact}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

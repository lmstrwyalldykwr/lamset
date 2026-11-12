import React, { useState } from 'react';
import { Check, Expand, MessageCircle } from 'lucide-react';
import { Language } from '../data/company';
import { SERVICE_CATEGORIES, SERVICES_DATA, ServiceCategory } from '../data/services';
import { TRANSLATIONS } from '../translations';
import { buildWhatsAppUrl, filterServicesByCategory } from '../utils/logic';

interface ServicesPageProps {
  lang: Language;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ lang, onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const t = TRANSLATIONS[lang].servicesPage;
  const filteredServices = filterServicesByCategory(SERVICES_DATA, activeCategory);

  return (
    <div className="pt-20 bg-[#F5F1E8] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#071A35] text-[#F5F1E8] py-16 sm:py-20 border-b border-[#C9A45C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs sm:text-sm font-semibold text-[#DCC18A] tracking-wide">
            {t.kicker}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#FFFFFF] max-w-4xl leading-tight text-balance">
            {t.title}
          </h1>
          <p className="text-base text-[#F5F1E8]/80 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section className="sticky top-20 z-20 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#B8A98C]/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto">
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#071A35] text-[#DCC18A] shadow-sm'
                    : 'bg-[#F5F1E8] text-[#292B30] hover:bg-[#071A35]/10'
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
        {filteredServices.map((service, index) => {
          const isReversed = index % 2 === 1;
          const whatsappServiceHref = buildWhatsAppUrl(
            lang === 'ar'
              ? `السلام عليكم، أرغب في طلب خدمة "${service.title.ar}" من مؤسسة لمسة رؤيا للديكور.`
              : `Hello Lamsat Roya Decoration, I would like to inquire about your "${service.title.en}" service.`
          );

          return (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-36 bg-[#FFFFFF] rounded-2xl border border-[#B8A98C]/35 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Large Image Column */}
                <div
                  className={`lg:col-span-5 relative min-h-72 sm:min-h-80 bg-[#071A35] ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title[lang]}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() =>
                      onOpenLightbox(
                        service.relatedImages,
                        0,
                        service.title[lang]
                      )
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(
                        service.relatedImages,
                        0,
                        service.title[lang]
                      )
                    }
                    aria-label={service.title[lang]}
                    className="absolute top-4 end-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071A35]/85 border border-[#C9A45C]/40 text-xs font-medium text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors cursor-pointer"
                  >
                    <Expand className="w-3.5 h-3.5" />
                    <span>{TRANSLATIONS[lang].homePortfolio.zoomImage}</span>
                  </button>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6 ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C9A45C] tabular-nums">
                      <span>{service.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {lang === 'ar' ? 'ضمان 15 سنة' : '15-Year Warranty'}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#071A35]">
                      {service.title[lang]}
                    </h2>

                    <p className="text-sm sm:text-base text-[#292B30]/85 leading-relaxed">
                      {service.fullDescription[lang]}
                    </p>

                    <div className="pt-2 space-y-3">
                      <h3 className="text-xs font-bold text-[#071A35] uppercase tracking-wider">
                        {t.featuresHeading}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features[lang].map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#292B30]"
                          >
                            <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Related Visual Thumbnails & WhatsApp Service CTA */}
                  <div className="pt-6 border-t border-[#B8A98C]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs text-[#292B30]/70">
                        {t.relatedVisuals}:
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {service.relatedImages.map((imgUrl, idx) => (
                          <button
                            key={`${service.id}-rel-${idx}`}
                            type="button"
                            onClick={() =>
                              onOpenLightbox(
                                service.relatedImages,
                                idx,
                                service.title[lang]
                              )
                            }
                            className="h-11 w-16 rounded-lg overflow-hidden border border-[#B8A98C]/40 hover:border-[#C9A45C] transition-colors cursor-pointer shrink-0"
                          >
                            <img
                              src={imgUrl}
                              alt={`${service.title[lang]} ${idx + 1}`}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <a
                      href={whatsappServiceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#071A35] text-[#F5F1E8] text-xs sm:text-sm font-semibold hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C9A45C]" />
                      <span>{t.requestServiceWhatsapp}</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

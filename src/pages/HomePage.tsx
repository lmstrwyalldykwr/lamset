import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Expand, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, IMAGES, Language } from '../data/company';
import { PROJECTS_DATA } from '../data/projects';
import { SERVICES_DATA } from '../data/services';
import { TRANSLATIONS } from '../translations';
import { buildWhatsAppUrl } from '../utils/logic';

interface HomePageProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onOpenLightbox,
}) => {
  const t = TRANSLATIONS[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const heroWhatsappHref = buildWhatsAppUrl(
    lang === 'ar'
      ? 'السلام عليكم، أرغب في طلب عرض سعر لمشروع ديكور من مؤسسة لمسة رؤيا للديكور.'
      : 'Hello Lamsat Roya Decoration, I would like to request a quote for my project.'
  );

  const ctaWhatsappHref = buildWhatsAppUrl(
    lang === 'ar'
      ? 'السلام عليكم، لدي فكرة لمشروع ديكور وأرغب في مناقشتها مع فريق لمسة رؤيا.'
      : 'Hello, I have a project idea and would like to discuss it with the Lamsat Roya team.'
  );

  return (
    <div className="space-y-0">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center bg-[#071A35] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroMajlis}
            alt={
              lang === 'ar'
                ? 'تصميم داخلي فاخر لمجلس وصالة استقبال - مؤسسة لمسة رؤيا للديكور بالمدينة المنورة'
                : 'Luxury Saudi Majlis and Living Room Interior Design by Lamsat Roya Decoration in Madinah'
            }
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
          {/* Measured Scrim for Guaranteed WCAG AA Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A35] via-[#071A35]/80 to-[#071A35]/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="relative max-w-3xl space-y-6">
            {/* Logo Watermark behind Hero Texts only (Middle area behind main heading & paragraph) */}
            <img
              src={IMAGES.logoWatermark}
              alt=""
              aria-hidden="true"
              className="absolute top-[41%] left-1/2 -translate-x-1/2 -translate-y-[21%] z-[1] pointer-events-none select-none mix-blend-screen opacity-[0.30] brightness-[1.3] contrast-[1.15] [clip-path:inset(0_0_62%_0)] object-contain w-[416px] sm:w-[598px] lg:w-[702px] max-w-none h-auto"
            />

            <p className="relative z-10 text-xs sm:text-sm font-medium text-[#DCC18A] tracking-wide">
              {t.hero.kicker}
            </p>

            <h1 className="relative z-10 text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#FFFFFF] leading-[1.2] text-balance">
              {t.hero.title}
            </h1>

            <p className="relative z-10 text-base sm:text-lg text-[#F5F1E8]/90 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="relative z-10 pt-4 flex flex-wrap items-center gap-4">
              <a
                href={heroWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C9A45C] text-[#071A35] text-sm sm:text-base font-bold hover:bg-[#DCC18A] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-5 h-5 text-[#071A35]" />
                <span>{t.hero.requestQuoteWhatsapp}</span>
              </a>

              <a
                href="/projects"
                onClick={(e) => handleLink(e, '/projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0B1D38]/85 border border-[#C9A45C]/45 text-[#F5F1E8] text-sm sm:text-base font-semibold hover:border-[#C9A45C] hover:text-[#DCC18A] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{t.hero.exploreWorks}</span>
                <ArrowIcon className="w-4 h-4 text-[#C9A45C]" />
              </a>
            </div>
          </div>

          {/* Architectural Bottom Credentials Strip */}
          <div className="relative z-10 mt-14 pt-8 border-t border-[#C9A45C]/25 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm text-[#F5F1E8]/90">
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-[#DCC18A] tabular-nums">
                15+
              </span>
              <span className="text-[#B8A98C]">
                {lang === 'ar' ? 'عامًا من الخبرة العملية' : 'Years of Experience'}
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-[#DCC18A] tabular-nums">
                15
              </span>
              <span className="text-[#B8A98C]">
                {lang === 'ar' ? 'سنة ضمان على التنفيذ' : 'Years Quality Warranty'}
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-[#DCC18A] tabular-nums">
                9
              </span>
              <span className="text-[#B8A98C]">
                {lang === 'ar' ? 'خدمات ديكور وخزائن متكاملة' : 'Specialized Services'}
              </span>
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold text-[#FFFFFF]">
                {lang === 'ar' ? 'المدينة المنورة' : 'Madinah'}
              </span>
              <span className="text-[#B8A98C]">
                {lang === 'ar' ? 'حي الدفاع · أفراد وشركات' : 'Al-Difa’a · Residential & Commercial'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRIEF ABOUT ("حيث تلتقي الرؤية بالإبداع") */}
      <section className="py-20 sm:py-24 bg-[#F5F1E8] border-b border-[#B8A98C]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-semibold text-[#071A35]/75 tracking-wide">
                {t.homeBrief.kicker}
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#071A35] leading-tight text-balance">
                {t.homeBrief.title}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#292B30] leading-relaxed">
                {t.homeBrief.description}
              </p>
              <div>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, '/about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#071A35] hover:text-[#C9A45C] transition-colors"
                >
                  <span>{t.homeBrief.moreAboutUs}</span>
                  <ArrowIcon className="w-4 h-4 text-[#C9A45C]" />
                </a>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.homeBrief.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-[#FFFFFF] rounded-xl p-7 border border-[#B8A98C]/30 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#C9A45C] tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="h-px flex-1 mx-4 bg-[#B8A98C]/25" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#071A35]">{pillar.title}</h3>
                  <p className="text-sm text-[#292B30]/80 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR SERVICES (All 10 Required Services) */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF] border-b border-[#B8A98C]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold text-[#C9A45C] tracking-wide">
                {t.homeServices.kicker}
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#071A35] text-balance">
                {t.homeServices.title}
              </h2>
              <p className="text-sm sm:text-base text-[#292B30]/80 leading-relaxed">
                {t.homeServices.subtitle}
              </p>
            </div>

            <a
              href="/services"
              onClick={(e) => handleLink(e, '/services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#071A35] text-[#F5F1E8] text-xs sm:text-sm font-semibold hover:bg-[#0B1D38] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>{t.homeServices.viewAllServices}</span>
              <ArrowIcon className="w-4 h-4 text-[#C9A45C]" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES_DATA.map((service) => {
              const displayTitle =
                service.id === 'interior-design'
                  ? lang === 'ar'
                    ? 'غرف النوم'
                    : 'Bedrooms'
                  : service.title[lang];

              return (
                <article
                  key={service.id}
                  className="group bg-[#F5F1E8]/60 rounded-xl overflow-hidden border border-[#B8A98C]/30 flex flex-col justify-between transition-colors hover:border-[#C9A45C]"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-[#071A35]">
                      <img
                        src={service.image}
                        alt={displayTitle}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/70 via-transparent to-transparent" />
                      <span className="absolute bottom-3 start-4 text-xs font-semibold text-[#DCC18A] tabular-nums">
                        {service.number} · {displayTitle}
                      </span>
                    </div>

                    <div className="p-6 space-y-2.5">
                      <h3 className="text-lg font-bold text-[#071A35]">
                        {service.number}. {displayTitle}
                      </h3>
                      <p className="text-sm text-[#292B30]/80 leading-relaxed">
                        {service.shortDescription[lang]}
                      </p>
                      {service.relatedImages.length > 1 && (
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          {service.relatedImages.map((imgUrl, idx) => (
                            <button
                              key={`${service.id}-thumb-${idx}`}
                              type="button"
                              onClick={() =>
                                onOpenLightbox(
                                  service.relatedImages,
                                  idx,
                                  displayTitle
                                )
                              }
                              className="h-12 w-16 rounded-lg overflow-hidden border border-[#B8A98C]/50 hover:border-[#C9A45C] transition-colors cursor-pointer shrink-0"
                            >
                              <img
                                src={imgUrl}
                                alt={`${displayTitle} ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={`/services#${service.id}`}
                      onClick={(e) => handleLink(e, `/services#${service.id}`)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#071A35] group-hover:text-[#C9A45C] transition-colors whitespace-nowrap"
                    >
                      <span>{t.homeServices.learnMore}</span>
                      <ArrowIcon className="w-3.5 h-3.5 text-[#C9A45C]" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
          </div>
        </section>

        {/* SECTION 4: SELECTED PORTFOLIO SHOWCASE (Masonry / Bento Grid + Lightbox) */}
        <section className="py-20 sm:py-24 bg-[#F5F1E8] border-b border-[#B8A98C]/25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-semibold text-[#071A35]/75 tracking-wide">
                  {t.homePortfolio.kicker}
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#071A35] text-balance">
                  {t.homePortfolio.title}
                </h2>
                <p className="text-sm sm:text-base text-[#292B30]/80 leading-relaxed">
                  {t.homePortfolio.subtitle}
                </p>
              </div>

              <a
                href="/projects"
                onClick={(e) => handleLink(e, '/projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#071A35] text-[#F5F1E8] text-xs sm:text-sm font-semibold hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
              >
                <span>{t.homePortfolio.viewAllProjects}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#292B30]/70 bg-[#FFFFFF] px-4 py-3 rounded-lg border border-[#B8A98C]/35">
              {t.homePortfolio.illustrativeNote}
            </p>

            {/* Asymmetric Bento / Masonry Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {featuredProjects.map((project, index) => {
                const isWide = index === 0 || index === 3;
                return (
                  <article
                    key={project.id}
                    className={`${
                      isWide ? 'md:col-span-7' : 'md:col-span-5'
                    } group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#B8A98C]/35 flex flex-col justify-between`}
                  >
                    <div className="relative h-72 sm:h-80 overflow-hidden bg-[#071A35]">
                      <img
                        src={project.coverImage}
                        alt={project.title[lang]}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        onClick={() =>
                          onOpenLightbox(project.gallery, 0, project.title[lang])
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/80 via-[#071A35]/20 to-transparent pointer-events-none" />

                      <button
                        type="button"
                        onClick={() =>
                          onOpenLightbox(project.gallery, 0, project.title[lang])
                        }
                        aria-label={`${t.homePortfolio.zoomImage}: ${project.title[lang]}`}
                        className="absolute top-4 end-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071A35]/85 border border-[#C9A45C]/40 text-xs font-medium text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors cursor-pointer"
                      >
                        <Expand className="w-3.5 h-3.5" />
                        <span>{t.homePortfolio.zoomImage}</span>
                      </button>
                    </div>

                    <div className="p-6 flex flex-col gap-4">
                      {project.gallery.length > 1 && (
                        <div className="flex flex-wrap items-center gap-2">
                          {project.gallery.map((imgUrl, idx) => (
                            <button
                              key={`${project.id}-home-thumb-${idx}`}
                              type="button"
                              onClick={() =>
                                onOpenLightbox(
                                  project.gallery,
                                  idx,
                                  project.title[lang]
                                )
                              }
                              className="h-12 w-16 rounded-lg overflow-hidden border border-[#B8A98C]/50 hover:border-[#C9A45C] transition-colors cursor-pointer shrink-0"
                            >
                              <img
                                src={imgUrl}
                                alt={`${project.title[lang]} ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-[#292B30]/70">
                            <span>{project.categoryLabel[lang]}</span>
                            <span aria-hidden="true">·</span>
                            <span>{project.location[lang]}</span>
                          </div>
                          <h3 className="text-lg font-bold text-[#071A35]">
                            <a
                              href={`/projects/${project.id}`}
                              onClick={(e) => handleLink(e, `/projects/${project.id}`)}
                              className="hover:text-[#C9A45C] transition-colors"
                            >
                              {project.title[lang]}
                            </a>
                          </h3>
                        </div>

                        <a
                          href={`/projects/${project.id}`}
                          onClick={(e) => handleLink(e, `/projects/${project.id}`)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#071A35]/20 text-xs font-semibold text-[#071A35] hover:bg-[#071A35] hover:text-[#F5F1E8] transition-colors whitespace-nowrap shrink-0 self-start sm:self-center"
                        >
                          <span>{t.homePortfolio.viewDetails}</span>
                          <ArrowIcon className="w-3.5 h-3.5 text-[#C9A45C]" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE LAMSAT ROYA (7 Advantages) */}
      <section className="py-20 sm:py-24 bg-[#071A35] text-[#F5F1E8] border-b border-[#C9A45C]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold text-[#DCC18A] tracking-wide">
              {t.homeWhyUs.kicker}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FFFFFF] text-balance">
              {t.homeWhyUs.title}
            </h2>
            <p className="text-sm sm:text-base text-[#F5F1E8]/80 leading-relaxed">
              {t.homeWhyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => (
              <div
                key={item.index}
                className={`${
                  idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''
                } bg-[#0B1D38] rounded-xl p-6 sm:p-7 border border-[#C9A45C]/25 space-y-3`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#C9A45C] tabular-nums">
                    {item.index}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                </div>
                <h3 className="text-lg font-bold text-[#FFFFFF]">{item.title[lang]}</h3>
                <p className="text-sm text-[#F5F1E8]/80 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION ("لديك فكرة لمساحة أحلامك؟ دعنا نحولها إلى واقع.") */}
      <section className="py-20 bg-[#F5F1E8] border-b border-[#B8A98C]/25">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1D38] rounded-2xl p-8 sm:p-12 lg:p-14 border border-[#C9A45C]/35 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FFFFFF] text-balance">
              {t.homeCta.title}
            </h2>
            <p className="text-base sm:text-lg text-[#F5F1E8]/85 max-w-2xl mx-auto leading-relaxed">
              {t.homeCta.description}
            </p>
            <div className="pt-2">
              <a
                href={ctaWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-lg bg-[#C9A45C] text-[#071A35] text-sm sm:text-base font-bold hover:bg-[#DCC18A] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.homeCta.button}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLIENT TESTIMONIALS (Authentic Only — No Fake Invented Reviews) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#C9A45C] tracking-wide">
              {t.testimonials.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071A35]">
              {t.testimonials.title}
            </h2>
          </div>

          {COMPANY_INFO.verifiedTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_INFO.verifiedTestimonials.map((review) => (
                <blockquote
                  key={review.id}
                  className="bg-[#F5F1E8] rounded-xl p-6 border border-[#B8A98C]/35 space-y-4"
                >
                  <p className="text-sm text-[#292B30] leading-relaxed">
                    "{review.comment[lang]}"
                  </p>
                  <footer className="text-xs text-[#071A35] font-semibold">
                    {review.clientName[lang]} · {review.projectType[lang]}
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : (
            <div className="bg-[#F5F1E8] rounded-xl p-7 sm:p-9 border border-[#B8A98C]/35 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <h3 className="text-lg font-bold text-[#071A35]">
                  {t.testimonials.honestEmptyNoticeTitle}
                </h3>
                <p className="text-sm text-[#292B30]/80 leading-relaxed">
                  {t.testimonials.honestEmptyNoticeDesc}
                </p>
              </div>
              <a
                href={buildWhatsAppUrl(
                  lang === 'ar'
                    ? 'السلام عليكم، أنا أحد عملاء مؤسسة لمسة رؤيا للديكور وأود مشاركة تقييمي وتجربتي معكم.'
                    : 'Hello Lamsat Roya Decoration, I am a client and would like to share my verified project review.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#071A35] text-[#F5F1E8] text-xs sm:text-sm font-semibold hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A45C]" />
                <span>{t.testimonials.shareExperienceBtn}</span>
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

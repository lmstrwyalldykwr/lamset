import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Expand,
  MessageCircle,
  Share2,
} from 'lucide-react';
import { Language } from '../data/company';
import { PROJECTS_DATA } from '../data/projects';
import { TRANSLATIONS } from '../translations';
import { buildWhatsAppUrl } from '../utils/logic';

interface ProjectDetailsPageProps {
  projectId: string;
  lang: Language;
  onNavigate: (path: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({
  projectId,
  lang,
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);

  const t = TRANSLATIONS[lang].projectDetailsPage;
  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft;

  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-3xl font-bold text-[#071A35]">{t.notFoundTitle}</h1>
        <p className="text-base text-[#292B30]/80">{t.notFoundDesc}</p>
        <a
          href="/projects"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/projects');
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#071A35] text-[#F5F1E8] text-sm font-semibold hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors"
        >
          <BackArrow className="w-4 h-4" />
          <span>{t.backToProjects}</span>
        </a>
      </div>
    );
  }

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title[lang],
          text: project.subtitle[lang],
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    } catch {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    }
  };

  const whatsappSimilarHref = buildWhatsAppUrl(
    lang === 'ar'
      ? `السلام عليكم، أعجبني "${project.title.ar}" في معرض أعمال مؤسسة لمسة رؤيا للديكور، وأرغب في طلب تنفيذ مشروع مشابه.`
      : `Hello Lamsat Roya Decoration, I viewed "${project.title.en}" in your portfolio and would like to request a similar project.`
  );

  const safeImageIndex =
    activeImageIndex < project.gallery.length ? activeImageIndex : 0;

  return (
    <div className="pt-20 bg-[#F5F1E8] min-h-screen">
      {/* Top Header Strip */}
      <section className="bg-[#071A35] text-[#F5F1E8] py-12 sm:py-16 border-b border-[#C9A45C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/projects');
              }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#DCC18A] hover:text-[#FFFFFF] transition-colors"
            >
              <BackArrow className="w-4 h-4" />
              <span>{t.backToProjects}</span>
            </a>

            <div className="flex items-center gap-3 text-xs text-[#B8A98C]">
              <span>
                {t.category}:{' '}
                <strong className="text-[#DCC18A]">
                  {project.categoryLabel[lang]}
                </strong>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {t.location}:{' '}
                <strong className="text-[#F5F1E8]">
                  {project.location[lang]}
                </strong>
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] max-w-4xl leading-tight text-balance">
            {project.title[lang]}
          </h1>
          <p className="text-base sm:text-lg text-[#F5F1E8]/85 max-w-3xl">
            {project.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* Main Showcase Stage — Giving Visuals Maximum Space */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#071A35]">
              {t.galleryHeading}
            </h2>
            <button
              type="button"
              onClick={() =>
                onOpenLightbox(
                  project.gallery,
                  safeImageIndex,
                  project.title[lang]
                )
              }
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#071A35] text-[#F5F1E8] text-xs font-semibold hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors cursor-pointer"
            >
              <Expand className="w-3.5 h-3.5" />
              <span>{TRANSLATIONS[lang].projectsPage.openLightbox}</span>
            </button>
          </div>

          {/* Primary Large Image Viewer */}
          <div className="relative h-[420px] sm:h-[540px] lg:h-[620px] rounded-2xl overflow-hidden bg-[#071A35] border border-[#B8A98C]/40">
            <img
              src={project.gallery[safeImageIndex]}
              alt={`${project.title[lang]} - ${safeImageIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() =>
                onOpenLightbox(
                  project.gallery,
                  safeImageIndex,
                  project.title[lang]
                )
              }
            />
          </div>

          {/* Interactive Gallery Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {project.gallery.map((imgUrl, idx) => (
              <button
                key={`${project.id}-img-${idx}`}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  idx === safeImageIndex
                    ? 'border-[#071A35] ring-2 ring-[#C9A45C]'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`${project.title[lang]} view ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Description, Design Highlights & Execution Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl p-7 sm:p-10 border border-[#B8A98C]/35 space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#071A35]">
                {t.projectDescription}
              </h2>
              <p className="text-base text-[#292B30] leading-relaxed">
                {project.description[lang]}
              </p>
            </div>

            <div className="pt-6 border-t border-[#B8A98C]/25 space-y-4">
              <h3 className="text-lg font-bold text-[#071A35]">
                {t.designHighlights}
              </h3>
              <ul className="space-y-3">
                {project.designDetails[lang].map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-[#292B30]"
                  >
                    <Check className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Specifications & Conversion Actions */}
          <div className="lg:col-span-5 bg-[#071A35] text-[#F5F1E8] rounded-2xl p-7 sm:p-9 border border-[#C9A45C]/35 space-y-7">
            <h2 className="text-xl font-bold text-[#DCC18A]">
              {t.technicalSpecs}
            </h2>

            <dl className="divide-y divide-[#C9A45C]/20 text-sm">
              {project.executionSpecs.map((spec) => (
                <div
                  key={spec.label.en}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <dt className="text-[#B8A98C]">{spec.label[lang]}</dt>
                  <dd className="font-semibold text-[#FFFFFF]">
                    {spec.value[lang]}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="pt-4 space-y-3">
              <a
                href={whatsappSimilarHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#C9A45C] text-[#071A35] text-sm sm:text-base font-bold hover:bg-[#DCC18A] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.requestSimilarWhatsapp}</span>
              </a>

              <button
                type="button"
                onClick={handleShare}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B1D38] border border-[#C9A45C]/35 text-xs sm:text-sm font-semibold text-[#F5F1E8] hover:border-[#C9A45C] hover:text-[#DCC18A] transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#C9A45C]" />
                <span>{copiedShare ? t.linkCopied : t.shareProject}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

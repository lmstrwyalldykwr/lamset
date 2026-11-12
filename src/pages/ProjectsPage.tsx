import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Expand, Film } from 'lucide-react';
import { Language } from '../data/company';
import { PROJECT_CATEGORIES, PROJECTS_DATA, ProjectCategoryId } from '../data/projects';
import { TRANSLATIONS } from '../translations';
import { filterProjectsByCategory } from '../utils/logic';

interface ProjectsPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  onNavigate,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryId>('all');
  const t = TRANSLATIONS[lang].projectsPage;
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const filteredProjects = filterProjectsByCategory(PROJECTS_DATA, selectedCategory);

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(`/projects/${id}`);
  };

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

      {/* Category Filter Bar (All 10 Categories) */}
      <section className="sticky top-20 z-20 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#B8A98C]/30 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label={t.filterLabel}
            className="flex items-center gap-2 overflow-x-auto py-0.5"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#071A35] text-[#DCC18A] shadow-sm'
                      : 'bg-[#F5F1E8] text-[#292B30] hover:bg-[#071A35]/10'
                  }`}
                >
                  {category.label[lang]}
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-1.5 text-xs text-[#292B30]/75 whitespace-nowrap shrink-0">
            <span>{t.showingCount}</span>
            <strong className="font-bold text-[#071A35] tabular-nums">
              {filteredProjects.length}
            </strong>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        {/* Transparency Notice */}
        <div className="bg-[#FFFFFF] px-5 py-4 rounded-xl border border-[#B8A98C]/40 text-xs sm:text-sm text-[#292B30]/80 leading-relaxed">
          {t.transparencyBanner}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#B8A98C]/35 flex flex-col justify-between transition-colors hover:border-[#C9A45C]"
            >
              <div>
                {/* Media Container (Supports Video or High-Res Image + Lightbox Trigger) */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#071A35]">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      poster={project.coverImage}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
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
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/90 via-[#071A35]/30 to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 end-3.5 flex items-center gap-2">
                    {project.videoUrl && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#071A35]/90 text-[#DCC18A] text-xs font-medium">
                        <Film className="w-3.5 h-3.5" />
                        <span>{t.videoAvailable}</span>
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox(project.gallery, 0, project.title[lang])
                      }
                      aria-label={`${t.openLightbox}: ${project.title[lang]}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071A35]/85 border border-[#C9A45C]/40 text-xs font-medium text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors cursor-pointer"
                    >
                      <Expand className="w-3.5 h-3.5" />
                      <span>{t.openLightbox}</span>
                    </button>
                  </div>

                  <div className="absolute bottom-3 start-4 text-xs text-[#F5F1E8]/90">
                    <span>{project.categoryLabel[lang]}</span>
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    <span className="tabular-nums">
                      {project.gallery.length}{' '}
                      {lang === 'ar'
                        ? project.gallery.length === 1
                          ? 'صورة'
                          : 'صور'
                        : project.gallery.length === 1
                        ? 'Photo'
                        : 'Photos'}
                    </span>
                  </div>
                </div>

                {/* Card Copy */}
                <div className="p-6 space-y-2.5">
                  {project.gallery.length > 1 && (
                    <div className="pb-1 flex items-center gap-2">
                      {project.gallery.map((imgUrl, idx) => (
                        <button
                          key={`${project.id}-proj-thumb-${idx}`}
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
                  <h2 className="text-lg font-bold text-[#071A35] leading-snug">
                    <a
                      href={`/projects/${project.id}`}
                      onClick={(e) => handleProjectClick(e, project.id)}
                      className="hover:text-[#C9A45C] transition-colors"
                    >
                      {project.title[lang]}
                    </a>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#292B30]/80 leading-relaxed">
                    {project.subtitle[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#B8A98C]/20 mt-2">
                <a
                  href={`/projects/${project.id}`}
                  onClick={(e) => handleProjectClick(e, project.id)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#071A35] group-hover:text-[#C9A45C] transition-colors whitespace-nowrap"
                >
                  <span>{t.viewProjectDetails}</span>
                  <ArrowIcon className="w-3.5 h-3.5 text-[#C9A45C]" />
                </a>

                <span className="text-xs text-[#292B30]/65">
                  {project.location[lang]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

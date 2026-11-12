import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Lightbox } from './components/Lightbox';
import { IMAGES, Language } from './data/company';
import { PROJECTS_DATA } from './data/projects';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServicesPage } from './pages/ServicesPage';
import { getRouteSeoMeta } from './utils/logic';

const LANG_STORAGE_KEY = 'lamsat_roya_lang';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      return saved === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  });

  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    index: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    index: 0,
    title: '',
  });

  // Pre-warm all gallery and service WebP images into browser cache right after first paint
  useEffect(() => {
    const urls = Object.values(IMAGES);
    urls.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  }, []);

  // Sync HTML dir/lang attributes and localStorage when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage quota errors
    }
  }, [lang]);

  // Listen to browser back/forward navigation
  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Update SEO document title, meta description, and canonical link on route or language change
  useEffect(() => {
    const projectMatch = currentPath.startsWith('/projects/')
      ? PROJECTS_DATA.find((p) => `/projects/${p.id}` === currentPath)
      : undefined;

    const seo = getRouteSeoMeta(
      currentPath,
      lang,
      projectMatch ? projectMatch.title[lang] : undefined
    );
    document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        `${window.location.origin}${currentPath === '/' ? '/' : currentPath}`
      );
    }
  }, [currentPath, lang]);

  const handleNavigate = (target: string) => {
    const [pathPart, hashPart] = target.split('#');
    const cleanPath = pathPart || '/';
    if (cleanPath !== currentPath) {
      window.history.pushState({}, '', target);
      setCurrentPath(cleanPath);
    }

    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenLightbox = (images: string[], index: number, title: string) => {
    setLightboxState({
      isOpen: true,
      images,
      index,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const renderPage = () => {
    if (currentPath.startsWith('/projects/')) {
      const projectId = currentPath.replace('/projects/', '').trim();
      return (
        <ProjectDetailsPage
          projectId={projectId}
          lang={lang}
          onNavigate={handleNavigate}
          onOpenLightbox={handleOpenLightbox}
        />
      );
    }

    switch (currentPath) {
      case '/about':
        return <AboutPage lang={lang} onNavigate={handleNavigate} />;
      case '/services':
        return (
          <ServicesPage lang={lang} onOpenLightbox={handleOpenLightbox} />
        );
      case '/projects':
        return (
          <ProjectsPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case '/contact':
        return <ContactPage lang={lang} />;
      default:
        return (
          <HomePage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#292B30]">
      <Header
        lang={lang}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onToggleLang={handleToggleLang}
      />

      <main className="flex-1">{renderPage()}</main>

      <Footer lang={lang} onNavigate={handleNavigate} />

      {lightboxState.isOpen && (
        <Lightbox
          images={lightboxState.images}
          currentIndex={lightboxState.index}
          title={lightboxState.title}
          lang={lang}
          onClose={handleCloseLightbox}
          onSelectIndex={(idx) =>
            setLightboxState((prev) => ({ ...prev, index: idx }))
          }
        />
      )}
    </div>
  );
}

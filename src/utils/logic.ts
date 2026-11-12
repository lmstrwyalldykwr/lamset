import { COMPANY_INFO, Language, WorkingDay } from '../data/company';
import { ProjectCategoryId, ProjectItem } from '../data/projects';
import { ServiceCategory, ServiceItem } from '../data/services';

export interface QuoteFormInput {
  fullName: string;
  phone: string;
  clientType: 'individual' | 'company';
  projectType: string;
  city: string;
  budget?: string;
  referenceImageName?: string;
  details: string;
}

export interface QuoteValidationErrors {
  fullName?: string;
  phone?: string;
  projectType?: string;
  city?: string;
  details?: string;
}

/**
 * Formats an international WhatsApp wa.me link without '+' or spaces.
 */
export function buildWhatsAppUrl(message: string, phone: string = COMPANY_INFO.whatsappNumber): string {
  const sanitizedPhone = phone.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${sanitizedPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

/**
 * Validates required fields of the quote request form.
 */
export function validateQuoteForm(
  input: QuoteFormInput,
  lang: Language
): { isValid: boolean; errors: QuoteValidationErrors } {
  const errors: QuoteValidationErrors = {};
  const digitsOnlyPhone = input.phone.replace(/[^0-9]/g, '');

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName =
      lang === 'ar' ? 'يرجى إدخال الاسم الكامل.' : 'Please enter your full name.';
  }

  if (!digitsOnlyPhone || digitsOnlyPhone.length < 9) {
    errors.phone =
      lang === 'ar'
        ? 'يرجى إدخال رقم جوال صحيح (9 أرقام على الأقل).'
        : 'Please enter a valid mobile number (at least 9 digits).';
  }

  if (!input.projectType || input.projectType.trim().length === 0) {
    errors.projectType =
      lang === 'ar' ? 'يرجى اختيار نوع المشروع.' : 'Please select a project or service type.';
  }

  if (!input.city || input.city.trim().length < 2) {
    errors.city =
      lang === 'ar' ? 'يرجى إدخال المدينة أو الحي.' : 'Please enter your city or district.';
  }

  if (!input.details || input.details.trim().length < 5) {
    errors.details =
      lang === 'ar'
        ? 'يرجى كتابة تفاصيل مختصرة عن المشروع المطلوب.'
        : 'Please provide brief details about your project.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a structured WhatsApp quote request message in the selected language.
 */
export function formatQuoteWhatsAppMessage(input: QuoteFormInput, lang: Language): string {
  const clientTypeLabel =
    lang === 'ar'
      ? input.clientType === 'company'
        ? 'شركة / مؤسسة'
        : 'فرد'
      : input.clientType === 'company'
      ? 'Company / Establishment'
      : 'Individual';

  if (lang === 'ar') {
    const lines = [
      'السلام عليكم ورحمة الله وبركاته،',
      'أرغب في طلب عرض سعر من *مؤسسة لمسة رؤيا للديكور*:',
      '',
      `• الاسم الكامل: ${input.fullName.trim()}`,
      `• رقم الجوال: ${input.phone.trim()}`,
      `• نوع العميل: ${clientTypeLabel}`,
      `• نوع المشروع / الخدمة: ${input.projectType.trim()}`,
      `• المدينة / الحي: ${input.city.trim()}`,
    ];

    if (input.budget && input.budget.trim()) {
      lines.push(`• الميزانية التقريبية: ${input.budget.trim()}`);
    }
    if (input.referenceImageName && input.referenceImageName.trim()) {
      lines.push(`• صورة مرجعية مرفقة: ${input.referenceImageName.trim()}`);
    }

    lines.push('', '• تفاصيل المشروع:', input.details.trim());
    return lines.join('\n');
  }

  const lines = [
    'Hello *Lamsat Roya Decoration Establishment*,',
    'I would like to request a project quotation:',
    '',
    `• Full Name: ${input.fullName.trim()}`,
    `• Mobile Number: ${input.phone.trim()}`,
    `• Client Type: ${clientTypeLabel}`,
    `• Project / Service Type: ${input.projectType.trim()}`,
    `• City / District: ${input.city.trim()}`,
  ];

  if (input.budget && input.budget.trim()) {
    lines.push(`• Approximate Budget: ${input.budget.trim()}`);
  }
  if (input.referenceImageName && input.referenceImageName.trim()) {
    lines.push(`• Reference Image Selected: ${input.referenceImageName.trim()}`);
  }

  lines.push('', '• Project Details:', input.details.trim());
  return lines.join('\n');
}

/**
 * Filters projects by category.
 */
export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: ProjectCategoryId
): ProjectItem[] {
  if (category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

/**
 * Filters services by category.
 */
export function filterServicesByCategory(
  services: ServiceItem[],
  category: ServiceCategory
): ServiceItem[] {
  if (category === 'all') {
    return services;
  }
  return services.filter((service) => service.category === category);
}

/**
 * Returns only visible working days (e.g. omitting Monday until confirmed).
 */
export function getVisibleWorkingDays(days: WorkingDay[] = COMPANY_INFO.workingHours): WorkingDay[] {
  return days.filter((d) => d.isVisible);
}

/**
 * Resolves localized SEO title and meta description for any active route.
 */
export function getRouteSeoMeta(
  pathname: string,
  lang: Language,
  projectTitle?: string
): { title: string; description: string } {
  if (pathname.startsWith('/projects/') && projectTitle) {
    return lang === 'ar'
      ? {
          title: `${projectTitle} | معرض أعمال مؤسسة لمسة رؤيا للديكور`,
          description: `تعرف على تفاصيل وتصميم "${projectTitle}" من مؤسسة لمسة رؤيا للديكور في المدينة المنورة – خبرة 15 عامًا وضمان 15 سنة.`,
        }
      : {
          title: `${projectTitle} | Lamsat Roya Decoration Portfolio`,
          description: `Explore the design and execution specifications of "${projectTitle}" by Lamsat Roya Decoration Establishment in Madinah.`,
        };
  }

  switch (pathname) {
    case '/about':
      return lang === 'ar'
        ? {
            title: 'من نحن | مؤسسة لمسة رؤيا للديكور بالمدينة المنورة',
            description:
              'تعرف على مؤسسة لمسة رؤيا للديكور في المدينة المنورة (حي الدفاع). خبرة 15 عامًا وضمان 15 سنة في التصميم الداخلي والديكور وتفصيل الخزائن.',
          }
        : {
            title: 'About Us | Lamsat Roya Decoration Establishment Madinah',
            description:
              'Discover Lamsat Roya Decoration Establishment in Madinah. 15 years of experience and a 15-year warranty in interior design, renovation, and bespoke wardrobes.',
          };
    case '/services':
      return lang === 'ar'
        ? {
            title: 'خدماتنا | ديكورات منازل وتصميم داخلي وتفصيل خزائن بالمدينة المنورة',
            description:
              'استكشف خدمات مؤسسة لمسة رؤيا للديكور: ديكورات المنازل، التصميم الداخلي، تجديد وترميم المباني، ديكورات المحلات، وتوريد وتفصيل خزائن الملابس.',
          }
        : {
            title: 'Our Services | Interior Design, Renovation & Custom Wardrobes in Madinah',
            description:
              'Explore our 10 specialized services: home decoration, interior design, villa renovation, restoration, commercial store fit-outs, and custom wardrobes.',
          };
    case '/projects':
      return lang === 'ar'
        ? {
            title: 'معرض أعمالنا | مؤسسة لمسة رؤيا للديكور بالمدينة المنورة',
            description:
              'تصفح معرض أعمال ونماذج تصميم مؤسسة لمسة رؤيا للديكور في المجالس، غرف النوم، المطابخ، خزائن الملابس، المحلات التجارية، وأعمال الترميم.',
          }
        : {
            title: 'Projects Portfolio | Lamsat Roya Decoration Establishment',
            description:
              'Browse our interior design and decoration showcase across majlis, master bedrooms, kitchens, walk-in closets, retail stores, and restoration works.',
          };
    case '/contact':
      return lang === 'ar'
        ? {
            title: 'تواصل معنا واطلب عرض سعر | مؤسسة لمسة رؤيا للديكور بالمدينة المنورة',
            description:
              'تواصل مع مؤسسة لمسة رؤيا للديكور في المدينة المنورة – حي الدفاع عبر واتساب (+966531826166) أو أرسل طلب عرض سعر لمشروعك السكني أو التجاري.',
          }
        : {
            title: 'Contact Us & Request a Quote | Lamsat Roya Decoration Madinah',
            description:
              'Contact Lamsat Roya Decoration Establishment in Al-Difa’a District, Madinah (+966531826166) or submit a WhatsApp quote request for your project.',
          };
    default:
      return lang === 'ar'
        ? {
            title: 'مؤسسة لمسة رؤيا للديكور | تصميم داخلي وديكورات بالمدينة المنورة',
            description:
              'مؤسسة لمسة رؤيا للديكور في المدينة المنورة (حي الدفاع). خبرة 15 عامًا وضمان 15 سنة في التصميم الداخلي، ديكورات المنازل، تجديد وترميم المباني، وتفصيل خزائن الملابس.',
          }
        : {
            title: 'Lamsat Roya Decoration Establishment | Luxury Interior Design in Madinah',
            description:
              'Lamsat Roya Decoration Establishment in Madinah. 15 years of expertise and a 15-year warranty in interior design, home decoration, renovation, and custom wardrobes.',
          };
  }
}

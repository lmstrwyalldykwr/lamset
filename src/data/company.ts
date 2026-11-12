export type Language = 'ar' | 'en';

export interface BilingualText {
  ar: string;
  en: string;
}

export interface WorkingDay {
  id: string;
  day: BilingualText;
  hours: BilingualText;
  isClosed?: boolean;
  isVisible: boolean;
}

export const IMAGES = {
  heroMajlis: '/images/hero_luxury_majlis_1794440345651.webp',
  homeDecor1: '/images/home_decor_1.webp',
  homeDecor2: '/images/home_decor_2.webp',
  homeDecor3: '/images/home_decor_3.webp',
  majlis1: '/images/majlis_1.webp',
  majlis2: '/images/majlis_2.webp',
  customWardrobe: '/images/custom_wardrobe_main.webp',
  modernBedroom: '/images/modern_bedroom_main.webp',
  commercialBoutique: '/images/interior_commercial_boutique_1794440350349.webp',
  architecturalRenovation: '/images/interior_architectural_renovation_1794440349766.webp',
} as const;

export const COMPANY_INFO = {
  nameAr: 'مؤسسة لمسة رؤيا للديكور',
  nameEn: 'Lamsat Roya Decoration Establishment',
  shortNameAr: 'لمسة رؤيا للديكور',
  shortNameEn: 'Lamsat Roya',
  cityAr: 'المدينة المنورة',
  cityEn: 'Madinah',
  districtAr: 'حي الدفاع',
  districtEn: 'Al-Difa’a District',
  countryAr: 'المملكة العربية السعودية',
  countryEn: 'Kingdom of Saudi Arabia',
  fullAddress: {
    ar: 'المدينة المنورة، المملكة العربية السعودية، حي الدفاع',
    en: 'Al-Difa’a District, Madinah, Kingdom of Saudi Arabia',
  },
  experienceYears: 15,
  warrantyYears: 15,
  phoneDisplay: '+966 53 182 6166',
  phoneRaw: '+966531826166',
  whatsappNumber: '966531826166',
  email: 'lmshroeyid@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/s33j.s/',
    snapchat: 'https://t.snapchat.com/G8cDkZoo',
    tiktok: 'https://www.tiktok.com/@s33j.s',
    googleMaps: 'https://maps.app.goo.gl/cZ1C9Liaefr6EAd36?g_st=ic',
  },
  // Structured working hours — Monday is kept configurable with isVisible: false until confirmed
  workingHours: [
    {
      id: 'saturday',
      day: { ar: 'السبت', en: 'Saturday' },
      hours: { ar: '9:00 صباحًا – 10:30 مساءً', en: '9:00 AM – 10:30 PM' },
      isVisible: true,
    },
    {
      id: 'sunday',
      day: { ar: 'الأحد', en: 'Sunday' },
      hours: { ar: '9:00 صباحًا – 10:30 مساءً', en: '9:00 AM – 10:30 PM' },
      isVisible: true,
    },
    {
      id: 'monday',
      day: { ar: 'الاثنين', en: 'Monday' },
      hours: { ar: '9:00 صباحًا – 10:30 مساءً', en: '9:00 AM – 10:30 PM' },
      isVisible: false, // Omitted until confirmed per business instructions
    },
    {
      id: 'tuesday',
      day: { ar: 'الثلاثاء', en: 'Tuesday' },
      hours: { ar: '9:00 صباحًا – 10:30 مساءً', en: '9:00 AM – 10:30 PM' },
      isVisible: true,
    },
    {
      id: 'wednesday',
      day: { ar: 'الأربعاء', en: 'Wednesday' },
      hours: { ar: '9:00 صباحًا – 10:30 مساءً', en: '9:00 AM – 10:30 PM' },
      isVisible: true,
    },
    {
      id: 'thursday',
      day: { ar: 'الخميس', en: 'Thursday' },
      hours: { ar: '9:00 صباحًا – 10:30 مساءً', en: '9:00 AM – 10:30 PM' },
      isVisible: true,
    },
    {
      id: 'friday',
      day: { ar: 'الجمعة', en: 'Friday' },
      hours: { ar: 'مغلق', en: 'Closed' },
      isClosed: true,
      isVisible: true,
    },
  ] satisfies WorkingDay[],
  targetAudiences: [
    {
      ar: 'الأفراد وأصحاب المنازل',
      en: 'Individuals & Homeowners',
    },
    {
      ar: 'أصحاب الفلل والشقق',
      en: 'Villa & Apartment Owners',
    },
    {
      ar: 'الشركات والمؤسسات',
      en: 'Companies & Establishments',
    },
    {
      ar: 'أصحاب المحلات التجارية',
      en: 'Commercial Store Owners',
    },
    {
      ar: 'أصحاب المشاريع والمباني',
      en: 'Project & Building Owners',
    },
  ],
  whyChooseUs: [
    {
      index: '01',
      title: {
        ar: 'خبرة 15 عامًا في المجال',
        en: '15 Years of Field Experience',
      },
      description: {
        ar: 'مسيرة عملية ممتدة في تصميم وتنفيذ أعمال الديكور الداخلي والخزائن والترميم في المدينة المنورة.',
        en: 'An extensive track record in designing and executing interior decoration, custom cabinetry, and renovation across Madinah.',
      },
    },
    {
      index: '02',
      title: {
        ar: 'ضمان 15 سنة',
        en: '15-Year Comprehensive Warranty',
      },
      description: {
        ar: 'ثقة راسخة في متانة الخامات ودقة التنفيذ نترجمها بضمان يصل إلى 15 سنة يمنح العميل راحة البال.',
        en: 'Unwavering confidence in material durability and execution precision backed by a 15-year warranty.',
      },
    },
    {
      index: '03',
      title: {
        ar: 'الاهتمام بالتفاصيل',
        en: 'Meticulous Attention to Detail',
      },
      description: {
        ar: 'نعالج الزوايا، الإضاءة المخفية، وتناسق الملمس والألوان بعناية فائقة تصنع الفارق البصري والعملي.',
        en: 'Every joint, recessed lighting line, texture pairing, and finish is crafted with architectural precision.',
      },
    },
    {
      index: '04',
      title: {
        ar: 'جودة المواد والتنفيذ',
        en: 'Superior Materials & Craftsmanship',
      },
      description: {
        ar: 'ننتقي أجود الأخشاب، الإكسسوارات، الرخام، والدهانات لضمان استدامة المظهر الفاخر لسنوات طويلة.',
        en: 'We select premium woods, hardware fittings, natural stones, and architectural finishes built to endure.',
      },
    },
    {
      index: '05',
      title: {
        ar: 'حلول تناسب احتياجات العملاء',
        en: 'Tailored Client-Centric Solutions',
      },
      description: {
        ar: 'ندرس نمط حياة الأسرة أو طبيعة النشاط التجاري لنبتكر مساحات عملية تعبر عن ذوق العميل وتلبي متطلباته.',
        en: 'We analyze residential lifestyles and commercial workflows to create spaces tailored to each client’s needs.',
      },
    },
    {
      index: '06',
      title: {
        ar: 'تنفيذ المشاريع للأفراد والشركات',
        en: 'Residential & Commercial Execution',
      },
      description: {
        ar: 'جاهزية فنية وتنفيذية شاملة لخدمة المنازل والفلل الخاصة وكذلك المحلات التجارية والمشاريع العامة.',
        en: 'Full technical readiness to serve private villas and apartments alongside retail stores and public projects.',
      },
    },
    {
      index: '07',
      title: {
        ar: 'الالتزام بمعايير الجودة',
        en: 'Strict Quality Standards',
      },
      description: {
        ar: 'إشراف مباشر ومراحل فحص دقيقة منذ رفع المقاسات والتصميم وحتى التسليم النهائي للموقع.',
        en: 'Direct supervision and rigorous quality checks from initial site measurements through final handover.',
      },
    },
  ],
  // Verified Testimonials array: intentionally empty until documented client reviews are added
  verifiedTestimonials: [] as Array<{
    id: string;
    clientName: BilingualText;
    projectType: BilingualText;
    comment: BilingualText;
    date: string;
  }>,
};

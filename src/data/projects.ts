import { BilingualText, IMAGES } from './company';

export type ProjectCategoryId =
  | 'all'
  | 'home-decor'
  | 'bedrooms'
  | 'majlis'
  | 'kitchens'
  | 'wardrobes'
  | 'storage-cabinets'
  | 'commercial-stores'
  | 'public-projects'
  | 'restoration';

export interface ProjectSpecification {
  label: BilingualText;
  value: BilingualText;
}

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategoryId, 'all'>;
  categoryLabel: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  location: BilingualText;
  coverImage: string;
  gallery: string[];
  videoUrl?: string; // Supports optional video playback in gallery/details when provided
  isIllustrativeShowcase: boolean; // Explicit transparency flag per instructions
  description: BilingualText;
  designDetails: {
    ar: string[];
    en: string[];
  };
  executionSpecs: ProjectSpecification[];
  featured: boolean;
}

export const PROJECT_CATEGORIES: Array<{ id: ProjectCategoryId; label: BilingualText }> = [
  { id: 'all', label: { ar: 'جميع الأعمال', en: 'All Works' } },
  { id: 'home-decor', label: { ar: 'ديكورات المنازل', en: 'Home Decoration' } },
  { id: 'bedrooms', label: { ar: 'غرف النوم', en: 'Bedrooms' } },
  { id: 'majlis', label: { ar: 'المجالس', en: 'Majlis' } },
  { id: 'kitchens', label: { ar: 'المطابخ', en: 'Kitchens' } },
  { id: 'wardrobes', label: { ar: 'خزائن الملابس', en: 'Wardrobes' } },
  { id: 'storage-cabinets', label: { ar: 'الخزائن والتخزين', en: 'Storage & Cabinets' } },
  { id: 'commercial-stores', label: { ar: 'المحلات التجارية', en: 'Commercial Stores' } },
  { id: 'public-projects', label: { ar: 'المشاريع العامة', en: 'Public Projects' } },
  { id: 'restoration', label: { ar: 'أعمال الترميم', en: 'Restoration Works' } },
];

/**
 * Structured Portfolio Data.
 * Note: Items are clearly marked with `isIllustrativeShowcase: true` to serve as
 * architectural design showcases without falsely claiming synthetic images as completed client sites,
 * and can be replaced directly by updating image paths and setting `isIllustrativeShowcase: false`.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'villa-interior-home-decor-living',
    category: 'home-decor',
    categoryLabel: { ar: 'ديكورات المنازل', en: 'Home Decoration' },
    title: {
      ar: 'ديكورات صالة فيلا سكنية بنظام المساحات المفتوحة',
      en: 'Residential Villa Open-Concept Living & Family Lounge Decor',
    },
    subtitle: {
      ar: 'تناغم التكسيات الخشبية والرخامية مع الإضاءة الطبيعية في صالات المعيشة',
      en: 'Seamless integration of wood cladding, stone textures, and natural daylight',
    },
    coverImage: IMAGES.homeDecor1,
    gallery: [IMAGES.homeDecor1, IMAGES.homeDecor2, IMAGES.homeDecor3],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: false,
    featured: true,
    description: {
      ar: 'تصميم متكامل لصالات المعيشة العائلية يركز على الرحابة والاتصال البصري بين مناطق الجلوس، مع توظيف الستائر الممتدة من السقف للأرض والتكسيات الدافئة.',
      en: 'Complete residential living room decoration emphasizing spatial flow, floor-to-ceiling drapery bays, and warm architectural wall treatments.',
    },
    designDetails: {
      ar: [
        'ربط بصري متناغم بين صالة الجلوس العائلية ومنطقة الضيافة',
        'بيوت ستائر مخفية داخل الجبس مع إضاءة دافئة على امتداد الواجهة الزجاجية',
        'توظيف ألوان الهوية (الكحلي والذهبي والبيج) بتوازن مريح للعين',
      ],
      en: [
        'Visual continuity between family living zones and guest reception areas',
        'Recessed ceiling curtain pockets with integrated warm perimeter lighting',
        'Balanced application of Royal Navy, Champagne Gold, and Stone Beige tones',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'ديكورات منازل متكاملة', en: 'Full Home Interior Decoration' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
  {
    id: 'royal-majlis-reception-design',
    category: 'majlis',
    categoryLabel: { ar: 'المجالس', en: 'Majlis' },
    title: {
      ar: 'تصميم مجلس استقبال فاخر بتكسيات الجوز والذهب المطفي',
      en: 'Luxury Reception Majlis with Fluted Walnut & Brushed Gold',
    },
    subtitle: {
      ar: 'نموذج تصميمي يوضح معاييرنا في تنفيذ المجالس الرحبة وتوزيع الإضاءة المخفية',
      en: 'Design showcase illustrating our standards in grand majlis execution and cove lighting',
    },
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    coverImage: IMAGES.majlis1,
    gallery: [IMAGES.majlis1, IMAGES.majlis2],
    isIllustrativeShowcase: false,
    featured: true,
    description: {
      ar: 'يستعرض هذا النموذج أسلوب مؤسسة لمسة رؤيا في المزج بين الأصالة السعودية في المجالس الواسعة والخطوط العصرية الهادئة. تم اعتماد تكسيات خشب الجوز المضلعة مع شرائح النحاس الذهبي المطفي، وأسقف جبسية متعدّدة المستويات بإضاءة دافئة غير مباشرة تمنح المكان هيبة وراحة بصرية.',
      en: 'This design showcase demonstrates Lamsat Roya’s approach to blending authentic Saudi majlis hospitality with contemporary architectural lines, featuring fluted walnut wall panels, brushed champagne gold trims, and layered cove lighting.',
    },
    designDetails: {
      ar: [
        'تكسيات جدارية من خشب الجوز الطبيعي المضلع مع فواصل معدنية بلون الذهب الشامبين',
        'تناغم لوني بين العاجي الدافئ للجدران والكحلي الملكي في وسائد الجلسات',
        'تصميم سقف جبسي هندسي مع إنارة مخفية دافئة (3000K) وثريا مركزية معاصرة',
        'أرفف عرض جدارية مدمجة بإضاءة نقطية لإبراز التحف والمقتنيات',
      ],
      en: [
        'Fluted walnut wood wall paneling accented with brushed champagne gold inlays',
        'Harmonious palette pairing Warm Ivory walls with Royal Navy velvet accents',
        'Geometric coffered gypsum ceiling with 3000K warm indirect LED cove lighting',
        'Recessed architectural display niches with integrated spotlighting',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'تصميم داخلي وتكسيات جدران وأسقف وإضاءة', en: 'Interior Design, Wall Cladding, Ceilings & Lighting' },
      },
      {
        label: { ar: 'الخامات الأساسية', en: 'Primary Materials' },
        value: { ar: 'خشب جوز معالج، شرائح ستانلس ذهبي، رخام ترافرتين', en: 'Treated Walnut, Brushed Gold Steel, Travertine Marble' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة على التنفيذ والخامات', en: '15-Year Execution & Material Warranty' },
      },
    ],
  },
  {
    id: 'walk-in-wardrobe-glass-oak',
    category: 'wardrobes',
    categoryLabel: { ar: 'خزائن الملابس', en: 'Wardrobes' },
    title: {
      ar: 'غرفة ملابس متكاملة بواجهات زجاجية وإضاءة استشعارية',
      en: 'Bespoke Walk-In Closet with Tinted Glass & Integrated Lighting',
    },
    subtitle: {
      ar: 'نموذج تفصيل خزائن ملابس من الأرض حتى السقف مع جزيرة إكسسوارات وسطية',
      en: 'Floor-to-ceiling custom wardrobe concept with central jewelry island',
    },
    coverImage: IMAGES.customWardrobe,
    gallery: [IMAGES.customWardrobe],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: true,
    featured: true,
    description: {
      ar: 'نموذج تطبيقي لخدمة توريد وتفصيل خزائن الملابس حسب الطلب. يركز التصميم على استغلال كامل ارتفاع الغرفة، مع أبواب زجاجية شفافة بإطارات معدنية نحيفة، وأدراج منظمة للساعات والمجوهرات، ونظام إضاءة LED طولي داخل كل وحدة تخزين.',
      en: 'An architectural showcase of our bespoke wardrobe supply and fabrication service, utilizing full room height with slim-framed tinted glass doors, velvet-lined watch drawers, and vertical LED strip illumination.',
    },
    designDetails: {
      ar: [
        'أبواب زجاجية مدخنة بإطارات ألمنيوم نحيفة باللون الذهبي المطفي',
        'جزيرة وسطية بسطح رخامي وأدراج مقسمة للإكسسوارات والساعات',
        'إضاءة LED طولية مدمجة داخل الخزائن لتوضيح المعروضات دون بهر بصري',
        'مفصلات ومسارات سحب هيدروليكية هادئة الإغلاق (Soft-Close)',
      ],
      en: [
        'Smoked glass doors framed in ultra-slim brushed brass aluminum profiles',
        'Central island topped with stone beige marble and divided accessory drawers',
        'Integrated vertical LED lighting channels inside every wardrobe bay',
        'Heavy-duty soft-close hydraulic hinges and concealed drawer runners',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'توريد وتصميم وتنفيذ خزائن ملابس حسب الطلب', en: 'Custom Wardrobe Design, Supply & Installation' },
      },
      {
        label: { ar: 'الخامات الأساسية', en: 'Primary Materials' },
        value: { ar: 'خشب بلوط معالج، زجاج سيكوريت، قطاعات ألمنيوم ذهبية', en: 'Treated Oak Wood, Tempered Glass, Anodized Gold Aluminum' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
  {
    id: 'master-bedroom-suite-cladding',
    category: 'bedrooms',
    categoryLabel: { ar: 'غرف النوم', en: 'Bedrooms' },
    title: {
      ar: 'جناح نوم رئيسي بخلفية جدارية منجدة وتفاصيل خشبية',
      en: 'Master Bedroom Suite with Upholstered Geometric Wall Paneling',
    },
    subtitle: {
      ar: 'تناغم الألوان الهادئة مع التكسيات المنجدة وخزائن الحائط المدمجة',
      en: 'Serene neutral tones paired with bespoke upholstered headboards and built-in storage',
    },
    coverImage: IMAGES.modernBedroom,
    gallery: [IMAGES.modernBedroom],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: true,
    featured: true,
    description: {
      ar: 'يبرز هذا التصميم كيفية تحويل غرفة النوم الرئيسية إلى ملاذ هادئ مستوحى من الأجنحة الفندقية الفاخرة، من خلال تنفيذ خلفية سرير ممتدة من القماش الفاخر المؤطر بالخشب وشرائح النحاس، مع ربطها بخزائن ملابس مدمجة بنفس روح التصميم.',
      en: 'Transforming the master bedroom into a tranquil hotel-inspired sanctuary through full-height upholstered wall panels framed in dark timber and brass, seamlessly integrated with built-in wardrobes.',
    },
    designDetails: {
      ar: [
        'تكسيات جدارية هندسية مبطنة بأقمشة الكتان والبيج الحجري الدافئ',
        'إطارات خشبية دقيقة مطعمة بخطوط ذهبية ناعمة',
        'وحدات إضاءة متدلية جانبية تمنح قراءة مريحة وإضاءة مسائية هادئة',
        'ربط بصري متكامل بين منطقة النوم وركن الملابس المدمج',
      ],
      en: [
        'Geometric upholstered fabric panels in Warm Ivory and Stone Beige',
        'Precision wood framing accented with subtle brushed brass inlays',
        'Suspended bedside pendant lighting for warm evening ambiance',
        'Seamless architectural transition into the adjoining dressing area',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'تصميم داخلي وتنفيذ خلفيات أسرّة وخزائن', en: 'Interior Design, Custom Headboard Cladding & Wardrobes' },
      },
      {
        label: { ar: 'الخامات الأساسية', en: 'Primary Materials' },
        value: { ar: 'أقمشة منجدة فاخرة، خشب طبيعي، إضاءة ديكورية', en: 'Luxury Upholstery, Natural Timber, Decorative Lighting' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
  {
    id: 'luxury-retail-boutique-showroom',
    category: 'commercial-stores',
    categoryLabel: { ar: 'المحلات التجارية', en: 'Commercial Stores' },
    title: {
      ar: 'تجهيز معرض وبوتيك تجاري بوحدات عرض خشبية منحنية',
      en: 'Luxury Retail Boutique with Curved Timber Displays & Navy Accent Wall',
    },
    subtitle: {
      ar: 'تصميم وتنفيذ ديكورات المحلات التجارية وكاونترات الاستقبال بالرخام والذهب',
      en: 'Commercial interior execution featuring travertine reception counters and custom shelving',
    },
    coverImage: IMAGES.commercialBoutique,
    gallery: [IMAGES.commercialBoutique, IMAGES.architecturalRenovation],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: true,
    featured: true,
    description: {
      ar: 'نموذج لتجهيز المعارض والمحلات التجارية الفاخرة بما يعكس قوة العلامة التجارية. يجمع التصميم بين جدار الهوية باللون الكحلي العميق، وكاونتر استقبال من رخام الترافرتين المطعم بالنحاس، ووحدات عرض خشبية منحنية مزودة بإضاءة مخفية لكل رف.',
      en: 'A commercial showroom design combining a Deep Navy brand feature wall, a fluted travertine and brushed brass reception desk, and curved walnut display shelving with shelf-level LED lighting.',
    },
    designDetails: {
      ar: [
        'أرفف عرض خشبية منحنية الزوايا مصممة حسب مقاسات المنتجات المعروضة',
        'كاونتر استقبال رئيسي من الحجر الطبيعي بتفاصيل مضلعة وإطار ذهبي مصقول',
        'جدار خلفية باللون الكحلي الملكي يبرز شعار المتجر والمرايا الجانبية',
        'مسارات إضاءة سقفية مغناطيسية (Magnetic Track) قابلة للتوجيه',
      ],
      en: [
        'Curved walnut display cabinetry engineered around product dimensions',
        'Fluted travertine marble reception desk with brushed brass collar',
        'Royal Navy backdrop wall framing brand signage and brass-rimmed mirrors',
        'Adjustable magnetic track lighting for dynamic product spotlighting',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'تنفيذ ديكورات محلات تجارية ووحدات عرض وكاونترات', en: 'Commercial Store Fit-Out, Display Units & Counters' },
      },
      {
        label: { ar: 'الخامات الأساسية', en: 'Primary Materials' },
        value: { ar: 'خشب جوز، رخام ترافرتين، نحاس مصقول، دهانات كحلية', en: 'Walnut Timber, Travertine Stone, Brushed Brass, Navy Finishes' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
  {
    id: 'modern-villa-kitchen-dining-renovation',
    category: 'kitchens',
    categoryLabel: { ar: 'المطابخ', en: 'Kitchens' },
    title: {
      ar: 'تطوير مطبخ تحضيري وصالة طعام مفتوحة بجزيرة رخامية',
      en: 'Open-Plan Kitchen & Dining Renovation with Bookmatched Marble Island',
    },
    subtitle: {
      ar: 'خزائن مطبخ بدون مقابض وتكسيات جدارية متكاملة مع منطقة الطعام',
      en: 'Handleless kitchen cabinetry seamlessly integrated with formal dining wall cladding',
    },
    coverImage: IMAGES.architecturalRenovation,
    gallery: [IMAGES.architecturalRenovation, IMAGES.heroMajlis],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: true,
    featured: true,
    description: {
      ar: 'يوضح هذا النموذج حلولنا في تجديد المطابخ التحضيرية المفتوحة وربطها بصالات الطعام والمعيشة، عبر تنفيذ خزائن حائطية ملساء بدون مقابض، وجزيرة رخامية بعروق متطابقة (Bookmatched)، مع وحدات عرض زجاجية مضاءة.',
      en: 'Showcasing our capabilities in open-plan kitchen and dining renovations, featuring floor-to-ceiling handleless cabinetry, a bookmatched marble waterfall island, and illuminated glass display niches.',
    },
    designDetails: {
      ar: [
        'خزائن مطبخ كاملة الارتفاع بتصميم خالٍ من المقابض البارزة لسهولة التنظيف',
        'جزيرة وسطية مكسوة برخام ذي عروق متناظرة تمنح فخامة استثنائية',
        'وحدة عرض طولية بأرفف مضاءة تفصل بين الخزائن المغلقة بأناقة',
        'سقف جبسي منحني الحواف مع إنارة خطية ومعلقات طاولة طعام عصرية',
      ],
      en: [
        'Full-height handleless cabinetry combining Warm Ivory and dark walnut',
        'Center waterfall island clad in bookmatched natural marble',
        'Vertical illuminated open-shelf display column breaking up solid cabinetry',
        'Soft-curved cove ceiling with linear suspension dining luminaires',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'تجديد وتطوير مطابخ وخزائن مدمجة وأسقف', en: 'Kitchen Renovation, Custom Cabinetry & Ceiling Design' },
      },
      {
        label: { ar: 'الخامات الأساسية', en: 'Primary Materials' },
        value: { ar: 'ألواح مقاومة للرطوبة والحرارة، رخام، إضاءة خطية', en: 'Moisture/Heat-Resistant Panels, Marble, Linear LEDs' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
  {
    id: 'bespoke-storage-and-wall-cabinets',
    category: 'storage-cabinets',
    categoryLabel: { ar: 'الخزائن والتخزين', en: 'Storage & Cabinets' },
    title: {
      ar: 'وحدات تخزين جدارية وخزائن مدمجة للمداخل والممرات',
      en: 'Built-In Architectural Storage & Entryway Cabinetry System',
    },
    subtitle: {
      ar: 'استغلال ذكي للمساحات عبر خزائن مخفية ومكتبات جدارية مصممة حسب الطلب',
      en: 'Smart space utilization through flush built-in cabinets and custom display shelving',
    },
    coverImage: IMAGES.customWardrobe,
    gallery: [IMAGES.customWardrobe],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: true,
    featured: false,
    description: {
      ar: 'حلول تخزين مبتكرة تندمج مع الجدران كقطعة ديكورية واحدة، توفر سعة تخزينية كبيرة للعبايات والأحذية والمقتنيات المنزلية دون الانتقاص من مساحة الممرات.',
      en: 'Innovative storage solutions that blend flush into architectural walls, providing generous capacity for abayas, footwear, and household items.',
    },
    designDetails: {
      ar: [
        'أبواب خزائن مدمجة بمستوى الجدار لمظهر انسيابي أنيق',
        'تقسيمات داخلية قابلة للتعديل حسب احتياج الأسرة',
        'تهوية مخفية وإضاءة داخلية تلقائية عند فتح الأبواب',
      ],
      en: [
        'Flush wall-integrated cabinet doors for a clean architectural profile',
        'Adjustable internal shelving engineered around family storage needs',
        'Concealed ventilation channels and automatic door-sensor LED lighting',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'تفصيل وتنفيذ خزائن وتخزين حسب الطلب', en: 'Bespoke Storage & Cabinetry Execution' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
  {
    id: 'corporate-public-project-lobby',
    category: 'public-projects',
    categoryLabel: { ar: 'المشاريع العامة', en: 'Public Projects' },
    title: {
      ar: 'تنفيذ ديكورات بهو ومناطق استقبال للمشاريع والمؤسسات',
      en: 'Corporate & Public Facility Reception Lobby Fit-Out',
    },
    subtitle: {
      ar: 'تشطيبات معمارية عالية التحمل للمباني الإدارية والمشاريع العامة',
      en: 'High-durability architectural finishes for administrative buildings and public facilities',
    },
    coverImage: IMAGES.commercialBoutique,
    gallery: [IMAGES.commercialBoutique, IMAGES.heroMajlis],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: true,
    featured: false,
    description: {
      ar: 'تجهيز مناطق الاستقبال والقاعات للمشاريع العامة والشركات بمواصفات فنية تجمع بين المتانة العالية وسهولة الصيانة والمظهر المؤسسي الفخم.',
      en: 'Outfitting reception lobbies and halls for public projects and corporate offices with durable, low-maintenance, prestigious architectural materials.',
    },
    designDetails: {
      ar: [
        'تكسيات جدارية مقاومة للخدش والصدمات للاستخدام الكثيف',
        'منصات استقبال رسمية مجهزة بمسارات مخفية للتمديدات التقنية',
        'أنظمة إضاءة موفرة للطاقة وموزعة وفق المعايير الهندسية',
      ],
      en: [
        'Impact- and scratch-resistant wall claddings suited for high foot traffic',
        'Executive reception desks with concealed cable management channels',
        'Energy-efficient architectural lighting engineered to commercial codes',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'تنفيذ ديكورات مشاريع عامة ومباني', en: 'Public & Corporate Project Execution' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
  {
    id: 'complete-structural-interior-restoration',
    category: 'restoration',
    categoryLabel: { ar: 'أعمال الترميم', en: 'Restoration Works' },
    title: {
      ar: 'إعادة تأهيل وترميم شامل للمساحات الداخلية والأسقف',
      en: 'Comprehensive Interior Rehabilitation & Ceiling Restoration',
    },
    subtitle: {
      ar: 'تحويل المباني القديمة إلى مساحات حديثة متكاملة التشطيب',
      en: 'Transforming aging properties into fully modernized luxury interiors',
    },
    coverImage: IMAGES.architecturalRenovation,
    gallery: [IMAGES.architecturalRenovation],
    location: { ar: 'المدينة المنورة', en: 'Madinah' },
    isIllustrativeShowcase: true,
    featured: false,
    description: {
      ar: 'إعادة تأهيل شاملة تشمل معالجة الجدران، تحديث التمديدات، إعادة تصميم الأسقف والإضاءة، وتركيب الأرضيات والتكسيات الجديدة لتحويل العقار بالكامل.',
      en: 'Full-scale interior restoration covering wall rehabilitation, ceiling reconstruction, modern lighting integration, and new luxury flooring and cladding.',
    },
    designDetails: {
      ar: [
        'معالجة هندسية للجدران والأسقف قبل البدء بالتشطيبات الديكورية',
        'إعادة توزيع المساحات الداخلية لزيادة الإضاءة الطبيعية والاتساع',
        'تشطيبات نهائية فاخرة مشمولة بضمان 15 سنة',
      ],
      en: [
        'Thorough structural surface preparation prior to decorative finishing',
        'Spatial reconfiguration to maximize natural light and room flow',
        'Turnkey luxury finishes backed by our 15-year warranty',
      ],
    },
    executionSpecs: [
      {
        label: { ar: 'نطاق العمل', en: 'Scope of Work' },
        value: { ar: 'أعمال ترميم وتجديد شامل', en: 'Full Restoration & Renovation Works' },
      },
      {
        label: { ar: 'الضمان المعتمد', en: 'Warranty Coverage' },
        value: { ar: 'ضمان 15 سنة', en: '15-Year Warranty' },
      },
    ],
  },
];

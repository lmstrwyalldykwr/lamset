import { BilingualText, IMAGES } from './company';

export type ServiceCategory = 'all' | 'interior' | 'renovation' | 'commercial' | 'cabinetry';

export interface ServiceItem {
  id: string;
  number: string;
  category: Exclude<ServiceCategory, 'all'>;
  title: BilingualText;
  shortDescription: BilingualText;
  fullDescription: BilingualText;
  features: {
    ar: string[];
    en: string[];
  };
  image: string;
  relatedImages: string[];
}

export const SERVICE_CATEGORIES: Array<{ id: ServiceCategory; label: BilingualText }> = [
  { id: 'all', label: { ar: 'جميع الخدمات', en: 'All Services' } },
  { id: 'interior', label: { ar: 'التصميم والديكور السكني', en: 'Residential & Interior Design' } },
  { id: 'cabinetry', label: { ar: 'النجارة وخزائن الملابس', en: 'Woodwork & Custom Wardrobes' } },
  { id: 'renovation', label: { ar: 'التجديد والترميم والمباني', en: 'Renovation & Building Decor' } },
  { id: 'commercial', label: { ar: 'المحلات والمشاريع العامة', en: 'Commercial & Public Projects' } },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-decoration',
    number: '01',
    category: 'interior',
    title: {
      ar: 'ديكورات المنازل',
      en: 'Home Decoration',
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ ديكورات متكاملة للمجالس، الصالات، وغرف المعيشة بتفاصيل تجمع الفخامة والدفء.',
      en: 'Complete decoration execution for majlis, living rooms, and family spaces blending luxury with warmth.',
    },
    fullDescription: {
      ar: 'نبتكر ديكورات منزلية متكاملة للفلل والشقق السكنية تشمل تكسيات الجدران الخشبية والرخامية، الأسقف الحديثة، توزيع الإضاءة المعمارية، وتنسيق الخامات بما يمنح كل ركن في منزلك طابعًا راقيًا ومتناسقًا.',
      en: 'We craft bespoke home decorations for villas and apartments, encompassing wood and marble wall cladding, modern ceiling details, architectural lighting layouts, and harmonious material palettes.',
    },
    features: {
      ar: [
        'تكسيات جدارية خشبية وبدائل رخام وشيبورد بمعايير فندقية',
        'تصميم وتنفيذ ديكورات المجالس العربية والعصرية',
        'توزيع إضاءة مخفية وموجهة تبرز جمال الخامات',
        'تنسيق متكامل بين الأرضيات والجدران والأسقف',
      ],
      en: [
        'Hotel-grade wooden wall cladding, marble panels, and fluted accents',
        'Bespoke traditional and contemporary Saudi majlis execution',
        'Recessed cove and spot lighting tailored to highlight textures',
        'Cohesive coordination of flooring, wall treatments, and ceilings',
      ],
    },
    image: IMAGES.heroMajlis,
    relatedImages: [IMAGES.heroMajlis],
  },
  {
    id: 'interior-design',
    number: '02',
    category: 'interior',
    title: {
      ar: 'التصميم الداخلي',
      en: 'Interior Design',
    },
    shortDescription: {
      ar: 'تحويل المساحات إلى بيئات متوازنة بصريًا ووظيفيًا عبر تخطيط مدروس للفرش والألوان والإضاءة.',
      en: 'Transforming spaces into visually and functionally balanced environments through thoughtful spatial planning.',
    },
    fullDescription: {
      ar: 'نقدم خدمة التصميم الداخلي الشاملة التي تبدأ من فهم احتياجات العميل ودراسة المساحة هندسيًا، مرورًا باختيار لوحة الألوان والخامات وتوزيع الأثاث والإضاءة، وصولًا إلى تحويل الرؤية الفنية إلى واقع ملموس بدقة عالية.',
      en: 'Our comprehensive interior design service begins with understanding your lifestyle and spatial geometry, curating color palettes, textures, furniture layouts, and lighting plans executed to perfection.',
    },
    features: {
      ar: [
        'دراسة استغلال المساحات وتوزيع الحركة الوظيفية',
        'اختيار لوحات الألوان والخامات المتناغمة مع هوية المكان',
        'تصميم غرف النوم الرئيسية والأجنحة الفندقية المنزلية',
        'إشراف فني دقيق لمطابقة التنفيذ مع الرؤية التصميمية',
      ],
      en: [
        'Spatial optimization and functional circulation planning',
        'Curated color palettes and tactile material boards',
        'Master bedroom suites and luxury residential lounge design',
        'Direct technical supervision ensuring faithful execution',
      ],
    },
    image: IMAGES.modernBedroom,
    relatedImages: [IMAGES.modernBedroom],
  },
  {
    id: 'home-renovation-development',
    number: '03',
    category: 'renovation',
    title: {
      ar: 'تجديد وتطوير المنازل',
      en: 'Home Renovation & Upgrading',
    },
    shortDescription: {
      ar: 'إعادة صياغة المنازل القائمة وتحديث ديكوراتها لتواكب أحدث المعايير العصرية دون عناء.',
      en: 'Reimagining existing homes and upgrading their interiors to contemporary luxury standards.',
    },
    fullDescription: {
      ar: 'نحول المنازل والفلل القائمة إلى مساحات عصرية متجددة بالكامل عبر تحديث الواجهات الداخلية، فتح المساحات، تجديد المطابخ والصالات، واستبدال التشطيبات القديمة بخامات حديثة تدوم طويلًا.',
      en: 'We breathe new life into existing residences by modernizing interior layouts, opening living spaces, upgrading kitchens and reception halls, and replacing dated finishes with enduring luxury materials.',
    },
    features: {
      ar: [
        'تحديث شامل للصالات والمجالس وغرف النوم والمطابخ',
        'تطوير أنظمة الإضاءة والأسقف الجبسية الحديثة',
        'استبدال الأبواب والتكسيات والأرضيات بخامات فاخرة',
        'خطة عمل منظمة تراعي نظافة الموقع وسرعة الإنجاز',
      ],
      en: [
        'Complete modernization of lounges, majlis, bedrooms, and kitchens',
        'Upgrading architectural lighting and contemporary ceiling systems',
        'Replacing doors, wall claddings, and flooring with premium materials',
        'Structured execution schedule maintaining site cleanliness and speed',
      ],
    },
    image: IMAGES.architecturalRenovation,
    relatedImages: [IMAGES.architecturalRenovation, IMAGES.heroMajlis],
  },
  {
    id: 'building-decoration',
    number: '04',
    category: 'renovation',
    title: {
      ar: 'ديكورات المباني',
      en: 'Building Decoration',
    },
    shortDescription: {
      ar: 'تنفيذ المداخل الرئيسية، البهو، والممرات المشتركة للمباني السكنية والتجارية بفخامة استثنائية.',
      en: 'Executing grand main entrances, lobbies, and common corridors for residential and commercial buildings.',
    },
    fullDescription: {
      ar: 'تشكل مداخل المباني والبهو الرئيسي الانطباع الأول عن العقار؛ لذا نصمم وننفذ ديكورات مداخل العمائر والفلل والمباني الإدارية باستخدام الرخام، التكسيات المقاومة، والإضاءة الترحيبية الراقية.',
      en: 'Building entrances and lobbies define the first impression of any property. We design and execute residential and administrative building lobbies using natural stone, durable claddings, and welcoming architectural lighting.',
    },
    features: {
      ar: [
        'تصميم وتنفيذ مداخل الفلل والعمائر السكنية والتجارية',
        'تكسيات جدارية للممرات ومناطق الاستقبال والمصاعد',
        'تشطيبات عالية التحمل تجمع بين المتانة والمظهر الفخم',
        'حلول إضاءة معمارية تبرز فخامة المبنى',
      ],
      en: [
        'Grand entrance and lobby execution for villas and multi-story buildings',
        'Elevator surrounds, corridor cladding, and reception finishes',
        'High-durability materials engineered for heavy daily use',
        'Architectural lighting schemes that elevate property value',
      ],
    },
    image: IMAGES.commercialBoutique,
    relatedImages: [IMAGES.commercialBoutique, IMAGES.architecturalRenovation],
  },
  {
    id: 'restoration-works',
    number: '05',
    category: 'renovation',
    title: {
      ar: 'أعمال الترميم',
      en: 'Architectural Restoration Works',
    },
    shortDescription: {
      ar: 'معالجة متكاملة وإعادة تأهيل للمباني والمساحات الداخلية بأسس فنية تضمن السلامة والجمال.',
      en: 'Comprehensive structural and interior rehabilitation restoring strength, functionality, and elegance.',
    },
    fullDescription: {
      ar: 'نقوم بأعمال الترميم الداخلي ومعالجة الجدران والأسقف وإعادة تأهيل المساحات المتضررة أو القديمة، مع تنفيذ تشطيبات دقيقة تعيد للمكان رونقه وتضمن استدامته تحت مظلة ضمان المؤسسة.',
      en: 'We perform thorough interior restoration, treating walls and ceilings, rehabilitating worn or damaged spaces, and applying precision finishes backed by our 15-year quality warranty.',
    },
    features: {
      ar: [
        'معالجة التشققات والرطوبة وإعادة تأهيل الجدران والأسقف',
        'ترميم شامل للمنازل والفلل والمحلات قبل التشطيب الديكوري',
        'استخدام مواد عزل ومعالجة معتمدة وعالية الكفاءة',
        'ضمان يصل إلى 15 سنة على جودة الأعمال المنفذة',
      ],
      en: [
        'Treatment of cracks, moisture, and wall/ceiling rehabilitation',
        'Full pre-decoration structural and surface restoration',
        'Certified high-performance insulation and finishing materials',
        'Up to 15-year warranty on executed restoration works',
      ],
    },
    image: IMAGES.architecturalRenovation,
    relatedImages: [IMAGES.architecturalRenovation],
  },
  {
    id: 'commercial-store-decoration',
    number: '06',
    category: 'commercial',
    title: {
      ar: 'ديكورات المحلات التجارية',
      en: 'Commercial Store Decoration',
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ واجهات وديكورات المعارض والبوتيكات والمقاهي بما يعزز هوية العلامة التجارية.',
      en: 'Designing and building retail boutiques, showrooms, and cafes that amplify brand identity and sales.',
    },
    fullDescription: {
      ar: 'نساعد أصحاب الأنشطة التجارية على التميز عبر تصميم وتنفيذ ديكورات المحلات والمعارض التجارية ووحدات العرض المبتكرة، مع الاهتمام بتجربة الزائر وإبراز المنتجات بأفضل صورة بصرية ممكنة.',
      en: 'We help commercial brands stand out through bespoke store interiors, custom display shelving, reception counters, and strategic product spotlighting designed to elevate customer experience.',
    },
    features: {
      ar: [
        'تصميم وتنفيذ أرفف ومنصات عرض المنتجات حسب طبيعة النشاط',
        'تنفيذ كاونترات الاستقبال والمحاسبة بالرخام والخشب والمعادن',
        'توزيع إضاءة احترافي يبرز المعروضات ويجذب المتسوقين',
        'التزام صارم بالجداول الزمنية لافتتاح النشاط التجاري في موعده',
      ],
      en: [
        'Custom product display units and shelving tailored to retail sector',
        'Bespoke marble, wood, and brass reception and checkout counters',
        'Commercial spotlighting engineered to highlight merchandise',
        'Strict adherence to project timelines for on-schedule store openings',
      ],
    },
    image: IMAGES.commercialBoutique,
    relatedImages: [IMAGES.commercialBoutique, IMAGES.architecturalRenovation],
  },
  {
    id: 'public-projects-decoration',
    number: '07',
    category: 'commercial',
    title: {
      ar: 'تنفيذ ديكورات المشاريع العامة',
      en: 'Public & Corporate Project Execution',
    },
    shortDescription: {
      ar: 'تنفيذ أعمال الديكور للمكاتب، المؤسسات، القاعات، والمرافق العامة بكفاءة عالية ومواصفات معتمدة.',
      en: 'Executing interior fit-outs for corporate offices, institutions, halls, and public facilities.',
    },
    fullDescription: {
      ar: 'نمتلك الخبرة والقدرة التنفيذية لتولي أعمال الديكور الداخلي والتجهيزات الخشبية للمشاريع العامة والمقرات الإدارية والمؤسسات، مع الالتزام التام بالمواصفات الفنية ومعايير السلامة والجودة.',
      en: 'We bring the technical capacity and 15-year expertise required to execute interior fit-outs and architectural woodwork for corporate headquarters, institutions, and public facilities.',
    },
    features: {
      ar: [
        'تجهيز المكاتب الإدارية وقاعات الاجتماعات ومناطق الاستقبال',
        'تنفيذ التكسيات الجدارية والقواطع الديكورية للمؤسسات',
        'خامات عملية عالية التحمل ومطابقة للمعايير الفنية',
        'إدارة مشاريع متكاملة للتوريد والتركيب والتسليم',
      ],
      en: [
        'Executive offices, boardrooms, and institutional reception fit-outs',
        'Acoustic and decorative wall paneling and spatial partitions',
        'Heavy-duty commercial-grade materials meeting technical standards',
        'End-to-end project management from supply to handover',
      ],
    },
    image: IMAGES.commercialBoutique,
    relatedImages: [IMAGES.commercialBoutique, IMAGES.heroMajlis],
  },
  {
    id: 'carpentry-and-cabinets',
    number: '08',
    category: 'cabinetry',
    title: {
      ar: 'النجارة والخزائن',
      en: 'Bespoke Carpentry & Cabinetry',
    },
    shortDescription: {
      ar: 'أعمال نجارة ديكورية وخزائن مدمجة ومكتبات تلفزيون مصنعة بحرفية متقنة وأخشاب فاخرة.',
      en: 'Architectural woodwork, built-in storage, and media walls crafted with premium timber and hardware.',
    },
    fullDescription: {
      ar: 'نقدم أعمال النجارة المعمارية والخزائن الخشبية المتنوعة، من مكتبات التلفزيون العصرية ووحدات التخزين المخفية إلى الأبواب والتكسيات الخشبية، باستخدام أخشاب منتقاة ومفصلات وإكسسوارات ناعمة الإغلاق.',
      en: 'Our bespoke carpentry covers architectural media walls, concealed storage units, wooden cladding, and cabinetry built with selected timber and soft-close European-grade hardware.',
    },
    features: {
      ar: [
        'تنفيذ مكتبات التلفزيون العصرية والمدافئ الديكورية',
        'خزائن مدمجة للمداخل والممرات والمجالس',
        'أخشاب معالجة مقاومة للخدش والرطوبة بتشطيبات ناعمة',
        'مفصلات ومسارات سحب هادئة وعالية الاعتمادية',
      ],
      en: [
        'Contemporary TV media walls and decorative fireplace surrounds',
        'Built-in entryway, corridor, and majlis storage cabinetry',
        'Scratch- and moisture-resistant treated woods with refined finishes',
        'Silent soft-close hinges and heavy-duty drawer runners',
      ],
    },
    image: IMAGES.customWardrobe,
    relatedImages: [IMAGES.customWardrobe],
  },
  {
    id: 'wardrobe-supply-and-design',
    number: '09',
    category: 'cabinetry',
    title: {
      ar: 'توريد وتصميم خزائن الملابس',
      en: 'Wardrobe Supply & Design',
    },
    shortDescription: {
      ar: 'تصميم وتوريد غرف الملابس (Dressing Rooms) وخزائن الملابس العصرية بواجهات زجاجية وخشبية مضاءة.',
      en: 'Designing and supplying luxury walk-in closets and modern wardrobes with illuminated glass and wood fronts.',
    },
    fullDescription: {
      ar: 'نصمم ونورد خزائن الملابس وغرف الملابس الفاخرة التي تجمع بين الأناقة البصرية والتنظيم الذكي، مع تقسيمات مدروسة للملابس والأحذية والحقائب والإكسسوارات، وإضاءة LED داخلية تمنحك تجربة فندقية يومية.',
      en: 'We design and supply luxury walk-in closets and bedroom wardrobes featuring tinted glass doors, slim metallic frames, intelligent compartments for garments and accessories, and integrated warm LED lighting.',
    },
    features: {
      ar: [
        'تصميم غرف ملابس متكاملة (Walk-in Closets) وجزر وسطية للإكسسوارات',
        'أبواب زجاجية بإطارات معدنية أنيقة أو أبواب خشبية سحاب ومفصلية',
        'إضاءة LED داخلية مدمجة تعمل بالحساسات لإبراز المقتنيات',
        'تقسيمات ذكية مخصصة للأحذية، الحقائب، الساعات، والملابس الطويلة',
      ],
      en: [
        'Full walk-in closets with central accessory and jewelry islands',
        'Tinted glass doors with brushed brass frames or sliding wood panels',
        'Sensor-activated warm LED shelf and hanging rod illumination',
        'Dedicated compartments for footwear, handbags, watches, and long garments',
      ],
    },
    image: IMAGES.customWardrobe,
    relatedImages: [IMAGES.customWardrobe],
  },
  {
    id: 'custom-cabinets-execution',
    number: '10',
    category: 'cabinetry',
    title: {
      ar: 'تنفيذ الخزائن حسب الطلب',
      en: 'Custom-Made Cabinets Execution',
    },
    shortDescription: {
      ar: 'تفصيل وتنفيذ الخزائن بمقاسات خاصة تستثمر كل سنتيمتر من المساحة بدقة متناهية وضمان 15 سنة.',
      en: 'Precision custom-built cabinets engineered to maximize every centimeter of space with a 15-year warranty.',
    },
    fullDescription: {
      ar: 'كل مساحة لها أبعادها الخاصة؛ لذلك ننفذ الخزائن حسب الطلب بعد رفع المقاسات الدقيقة في الموقع، لنضمن استغلال الزوايا والارتفاعات الكاملة من الأرض حتى السقف بتصميم مخصص تمامًا لاحتياجك.',
      en: 'Every room has unique dimensions. Following exact on-site laser measurements, we custom-build floor-to-ceiling cabinetry that turns awkward corners and recesses into seamless, high-capacity storage.',
    },
    features: {
      ar: [
        'رفع مقاسات دقيق في الموقع وتفصيل من الأرض حتى السقف',
        'حرية كاملة في اختيار الألوان، نوع الخشب، وتوزيع الأرفف والأدراج',
        'حلول مبتكرة للزوايا والمساحات الضيقة وغرف التخزين والمطابخ التحضيرية',
        'تركيب احترافي سريع ونظيف مع ضمان 15 سنة',
      ],
      en: [
        'Precision on-site measurement and floor-to-ceiling custom fabrication',
        'Full customization of wood finishes, colors, shelves, and drawer layouts',
        'Smart corner systems, pantry storage, and utility cabinetry',
        'Clean, professional installation backed by our 15-year warranty',
      ],
    },
    image: IMAGES.customWardrobe,
    relatedImages: [IMAGES.customWardrobe],
  },
];

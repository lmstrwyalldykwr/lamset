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
  { id: 'renovation', label: { ar: 'تجديد وتطوير المنازل', en: 'Home Renovation & Upgrading' } },
  { id: 'commercial', label: { ar: 'المحلات وأعمال الواجهات', en: 'Commercial & Facade Works' } },
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
    image: IMAGES.homeDecor1,
    relatedImages: [IMAGES.homeDecor1, IMAGES.homeDecor2, IMAGES.homeDecor3],
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
    image: IMAGES.masterRoom1,
    relatedImages: [
      IMAGES.masterRoom1,
      IMAGES.masterRoom2,
      IMAGES.masterRoom3,
      IMAGES.masterRoom4,
      IMAGES.masterRoom5,
    ],
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
    id: 'commercial-store-decoration',
    number: '04',
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
    image: IMAGES.commercial1,
    relatedImages: [IMAGES.commercial1, IMAGES.commercial2],
  },
  {
    id: 'public-projects-decoration',
    number: '05',
    category: 'commercial',
    title: {
      ar: 'أعمال الواجهات',
      en: 'Architectural Facade Works',
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ الواجهات المعمارية الحديثة للفلل والمباني بالتكسيات الخارجية والإضاءة الخطية.',
      en: 'Designing and executing modern architectural facades for villas and buildings with exterior cladding and linear lighting.',
    },
    fullDescription: {
      ar: 'نمتلك الخبرة والقدرة التنفيذية لتولي أعمال الواجهات الخارجية للفلل والمباني السكنية والتجارية، باستخدام التكسيات المقاومة للعوامل الجوية، القواطع المعدنية المقصوصة بالليزر، والإضاءة المعمارية التي تمنح المبنى حضورًا استثنائيًا.',
      en: 'We bring the technical capacity and 15-year expertise required to execute modern exterior facades for villas and commercial buildings using weather-resistant louvers, laser-cut architectural screens, and exterior lighting.',
    },
    features: {
      ar: [
        'تكسيات خارجية بديل الخشب والألمنيوم المقاوم للعوامل الجوية والحرارة',
        'تصميم وتنفيذ المداخل المعمارية المرتفعة مع الإضاءة الخطية والنقطية',
        'تركيب واجهات القص الليزري (الكلادينج والشتر المعدني) بتصاميم هندسية',
        'إشراف هندسي وتنفيذ متكامل يضمن المتانة وثبات الألوان لسنوات طويلة',
      ],
      en: [
        'Weather- and heat-resistant exterior WPC and aluminum louver cladding',
        'Grand double-height entrance portals with integrated linear and spot LEDs',
        'Custom laser-cut geometric metal facade screens and privacy panels',
        'End-to-end engineering supervision ensuring long-term durability',
      ],
    },
    image: IMAGES.facades1,
    relatedImages: [IMAGES.facades1, IMAGES.facades2, IMAGES.facades3],
  },
  {
    id: 'carpentry-and-cabinets',
    number: '06',
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
    relatedImages: [IMAGES.customWardrobe, IMAGES.storage1, IMAGES.storage2],
  },
  {
    id: 'wardrobe-supply-and-design',
    number: '07',
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
    number: '08',
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
    relatedImages: [IMAGES.customWardrobe, IMAGES.storage1, IMAGES.storage2],
  },
  {
    id: 'gypsum-works',
    number: '09',
    category: 'interior',
    title: {
      ar: 'أعمال الجبس',
      en: 'Gypsum Works',
    },
    shortDescription: {
      ar: 'تصميم وتنفيذ الأسقف الجبسية الحديثة والديكورات الجدارية مع الإضاءة الخطية والمسارات المغناطيسية.',
      en: 'Designing and executing modern gypsum board ceilings and wall moldings with linear LEDs and magnetic tracks.',
    },
    fullDescription: {
      ar: 'ننفذ كافة أعمال الجبس بورد والأسقف المعلقة الحديثة للفلل والشقق والمجالس، مع تأسيس دقيق لمسارات الإضاءة المغناطيسية (Magnetic Track)، الإضاءة الخطية المخفية، وبيوت الستائر، باستخدام ألواح جبس مقاومة للرطوبة والحرارة.',
      en: 'We execute modern gypsum board ceilings, shadow-gap details, curtain pockets, and recessed magnetic track and linear LED lighting channels using moisture-resistant boards and precision laser leveling.',
    },
    features: {
      ar: [
        'تنفيذ أسقف جبس بورد فلات وهندسية بقياسات ليزر دقيقة وتشطيبات ناعمة',
        'تأسيس وتركيب مسارات الإضاءة المغناطيسية (Magnetic Track) والإضاءة الخطية',
        'تفصيل بيوت الستائر المخفية والإنارة المحيطية الدافئة (Cove Lighting)',
        'استخدام ألواح جبس مقاومة للرطوبة والحرارة مع ضمان عدم التشقق لمدة 15 سنة',
      ],
      en: [
        'Laser-leveled flat and geometric gypsum board ceiling installations',
        'Seamless integration of recessed magnetic tracks and linear LED profiles',
        'Concealed curtain pockets and warm perimeter cove lighting channels',
        'Moisture-resistant gypsum boards backed by our 15-year quality warranty',
      ],
    },
    image: IMAGES.gypsum1,
    relatedImages: [IMAGES.gypsum1, IMAGES.gypsum2, IMAGES.gypsum3, IMAGES.gypsum4],
  },
];

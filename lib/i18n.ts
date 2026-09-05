export type Language = 'en' | 'ar'

export const dictionary = {
  en: {
    dir: 'ltr',
    nav: {
      destinations: 'Destinations',
      packages: 'Journeys',
      experience: 'The Ziyara Way',
      about: 'About',
      contact: 'Plan your trip',
    },
    hero: {
      eyebrow: 'From the United States to the Kingdom',
      title: 'Sacred journeys, crafted with grace.',
      subtitle:
        'Ziyara designs private Umrah and luxury travel from America to Saudi Arabia — every visa, flight, hotel, and guide handled with quiet, white-glove care.',
      ctaPrimary: 'Begin your journey',
      ctaSecondary: 'Explore destinations',
      stat1: 'Travelers guided',
      stat2: 'Years of expertise',
      stat3: 'Concierge support',
    },
    destinations: {
      eyebrow: 'Where we take you',
      title: 'The Kingdom, unveiled with reverence',
      subtitle:
        'From the holiest sites of Islam to the golden canyons of AlUla, we open Saudi Arabia to you with intimacy and ease.',
      items: [
        {
          name: 'Makkah',
          tag: 'The Holy Sanctuary',
          desc: 'Perform Umrah in comfort, steps from Al-Masjid al-Haram with premium accommodation and scholarly guides.',
        },
        {
          name: 'Madinah',
          tag: 'City of the Prophet ﷺ',
          desc: 'Rest in serenity near Al-Masjid an-Nabawi, with curated ziyarat of the blessed historical sites.',
        },
        {
          name: 'AlUla',
          tag: 'Ancient Wonder',
          desc: 'Wander the Nabataean tombs of Hegra and vast desert vistas — Saudi Arabia’s open-air museum.',
        },
        {
          name: 'Riyadh',
          tag: 'The Modern Capital',
          desc: 'Experience the pulse of the new Kingdom: culture, cuisine, and skyline in refined comfort.',
        },
        {
          name: 'Red Sea',
          tag: 'Coastal Escape',
          desc: 'Unwind along pristine turquoise shores and exclusive island resorts on the Red Sea coast.',
        },
      ],
    },
    packages: {
      eyebrow: 'Signature journeys',
      title: 'Choose the journey that calls to you',
      subtitle:
        'Every Ziyara journey is fully guided, from your departure gate in the USA to your safe return home.',
      from: 'From',
      perPerson: '/ person',
      cta: 'Request details',
      popular: 'Most requested',
      items: [
        {
          name: 'Umrah Essence',
          price: '$3,200',
          duration: '10 days · Makkah & Madinah',
          desc: 'A serene, fully guided Umrah with premium hotels within walking distance of the two Holy Mosques.',
          features: [
            'US departure flights & visa',
            '5-star haram-view hotels',
            'English-speaking scholar guide',
            'Private ground transport',
          ],
        },
        {
          name: 'Sacred & Wonders',
          price: '$5,900',
          duration: '14 days · Holy Sites + AlUla',
          desc: 'Combine a complete Umrah with the breathtaking heritage of AlUla and Madinah’s historic ziyarat.',
          features: [
            'Everything in Umrah Essence',
            'Guided AlUla & Hegra experience',
            'Luxury desert stay',
            'Domestic flights included',
          ],
        },
        {
          name: 'Bespoke Kingdom',
          price: 'Tailored',
          duration: 'Your itinerary, your pace',
          desc: 'A private journey designed entirely around you — faith, leisure, family, or business, seamlessly arranged.',
          features: [
            'Dedicated travel designer',
            'Any destination in the Kingdom',
            'Private guides & drivers',
            '24/7 concierge on the ground',
          ],
        },
      ],
    },
    services: {
      eyebrow: 'Beyond the journey',
      title: 'Every detail, quietly handled',
      subtitle:
        'The parts of travel that cause worry, we carry for you — so you can be fully present.',
      items: [
        { title: 'Visa & Documentation', desc: 'Complete Saudi visa processing and travel paperwork, start to finish.' },
        { title: 'Flights & Transfers', desc: 'Direct US routings, domestic flights, and private airport transfers.' },
        { title: 'Premium Hotels', desc: 'Hand-selected 4 & 5-star stays, many with Haram views.' },
        { title: 'Scholarly Guides', desc: 'Knowledgeable, English-speaking guides for rituals and history.' },
      ],
    },
    experience: {
      eyebrow: 'The Ziyara Way',
      title: 'The care of a family, the polish of a concierge',
      body: 'Ziyara was founded to remove every obstacle between American travelers and the Kingdom’s most meaningful places. We are licensed, deeply experienced, and personally invested in your peace of mind — from your first question to your safe return.',
      points: [
        { title: 'Licensed & trusted', desc: 'Fully authorized for Umrah and travel to Saudi Arabia.' },
        { title: 'US-based team', desc: 'Support in your time zone, in your language.' },
        { title: 'On-the-ground care', desc: 'Local Ziyara hosts with you throughout the Kingdom.' },
      ],
    },
    contact: {
      eyebrow: 'Plan your trip',
      title: 'Let’s design your journey',
      subtitle:
        'Share a few details and a Ziyara travel designer will reach out within one business day.',
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone',
      interest: 'I’m interested in',
      interestOptions: ['Umrah journey', 'Luxury leisure travel', 'Custom / bespoke trip', 'Group travel'],
      travelers: 'Number of travelers',
      message: 'Tell us about your ideal trip',
      submit: 'Request my consultation',
      success: 'Thank you. A Ziyara designer will contact you within one business day.',
    },
    footer: {
      tagline: 'Premium journeys from the United States to Saudi Arabia.',
      explore: 'Explore',
      company: 'Company',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    langToggle: 'العربية',
  },
  ar: {
    dir: 'rtl',
    nav: {
      destinations: 'الوجهات',
      packages: 'الرحلات',
      experience: 'طريقة زيارة',
      about: 'من نحن',
      contact: 'خطط لرحلتك',
    },
    hero: {
      eyebrow: 'من الولايات المتحدة إلى المملكة',
      title: 'رحلات مباركة، تُصمَّم بعناية وأناقة.',
      subtitle:
        'تصمّم زيارة رحلات العمرة والسياحة الفاخرة الخاصة من أمريكا إلى السعودية — التأشيرة والطيران والفنادق والمرشدون، كل ذلك بعناية راقية وهادئة.',
      ctaPrimary: 'ابدأ رحلتك',
      ctaSecondary: 'اكتشف الوجهات',
      stat1: 'مسافر رافقناهم',
      stat2: 'سنوات من الخبرة',
      stat3: 'دعم على مدار الساعة',
    },
    destinations: {
      eyebrow: 'إلى أين نأخذك',
      title: 'المملكة، تتكشّف بخشوع',
      subtitle:
        'من أقدس بقاع الإسلام إلى أودية العُلا الذهبية، نفتح لك أبواب السعودية بسهولة وقرب.',
      items: [
        {
          name: 'مكة المكرمة',
          tag: 'الحرم الشريف',
          desc: 'أدِّ العمرة براحة على بُعد خطوات من المسجد الحرام، مع إقامة فاخرة ومرشدين علماء.',
        },
        {
          name: 'المدينة المنورة',
          tag: 'مدينة النبي ﷺ',
          desc: 'استرح في سكينة قرب المسجد النبوي، مع زيارات منسّقة للمعالم التاريخية المباركة.',
        },
        {
          name: 'العُلا',
          tag: 'عجيبة الزمان',
          desc: 'تجوّل بين مقابر الحِجر النبطية والمناظر الصحراوية الواسعة — متحف السعودية المفتوح.',
        },
        {
          name: 'الرياض',
          tag: 'العاصمة الحديثة',
          desc: 'عِش نبض المملكة الجديدة: ثقافة ومأكولات وأفق حضري في راحة راقية.',
        },
        {
          name: 'البحر الأحمر',
          tag: 'وجهة ساحلية',
          desc: 'استجمّ على شواطئ فيروزية نقية ومنتجعات جزرية حصرية على ساحل البحر الأحمر.',
        },
      ],
    },
    packages: {
      eyebrow: 'رحلات مميزة',
      title: 'اختر الرحلة التي تناديك',
      subtitle:
        'كل رحلة مع زيارة مصحوبة بالكامل، من بوابة مغادرتك في أمريكا حتى عودتك سالمًا إلى بيتك.',
      from: 'تبدأ من',
      perPerson: '/ للفرد',
      cta: 'اطلب التفاصيل',
      popular: 'الأكثر طلبًا',
      items: [
        {
          name: 'جوهر العمرة',
          price: '$3,200',
          duration: '10 أيام · مكة والمدينة',
          desc: 'عمرة هادئة مصحوبة بالكامل مع فنادق فاخرة على مسافة قريبة من الحرمين الشريفين.',
          features: [
            'رحلات المغادرة من أمريكا والتأشيرة',
            'فنادق 5 نجوم بإطلالة على الحرم',
            'مرشد عالِم يتحدث الإنجليزية',
            'نقل بري خاص',
          ],
        },
        {
          name: 'المقدّسات والعجائب',
          price: '$5,900',
          duration: '14 يومًا · المقدسات + العُلا',
          desc: 'اجمع بين عمرة كاملة وتراث العُلا الخلّاب وزيارات المدينة التاريخية.',
          features: [
            'كل ما في جوهر العمرة',
            'تجربة مصحوبة في العُلا والحِجر',
            'إقامة صحراوية فاخرة',
            'رحلات داخلية مشمولة',
          ],
        },
        {
          name: 'المملكة حسب الطلب',
          price: 'مخصّصة',
          duration: 'برنامجك، وبإيقاعك',
          desc: 'رحلة خاصة مصمّمة حولك بالكامل — عبادة أو ترفيه أو عائلة أو عمل، بتنظيم سلس.',
          features: [
            'مصمّم رحلات مخصّص لك',
            'أي وجهة في المملكة',
            'مرشدون وسائقون خاصون',
            'خدمة كونسيرج على مدار الساعة',
          ],
        },
      ],
    },
    services: {
      eyebrow: 'أبعد من الرحلة',
      title: 'كل التفاصيل، نتكفّل بها بهدوء',
      subtitle: 'أجزاء السفر التي تسبّب القلق، نحملها عنك — لتكون حاضرًا بالكامل.',
      items: [
        { title: 'التأشيرة والوثائق', desc: 'إنجاز كامل لتأشيرة السعودية وأوراق السفر من البداية للنهاية.' },
        { title: 'الطيران والتنقلات', desc: 'رحلات مباشرة من أمريكا، ورحلات داخلية، وتنقلات مطار خاصة.' },
        { title: 'فنادق فاخرة', desc: 'إقامات مختارة بعناية 4 و5 نجوم، كثير منها بإطلالة على الحرم.' },
        { title: 'مرشدون علماء', desc: 'مرشدون على دراية يتحدثون الإنجليزية للمناسك والتاريخ.' },
      ],
    },
    experience: {
      eyebrow: 'طريقة زيارة',
      title: 'عناية العائلة، ورُقيّ الكونسيرج',
      body: 'تأسّست زيارة لإزالة كل عائق بين المسافر الأمريكي وأكثر بقاع المملكة معنى. نحن مرخّصون وذوو خبرة عميقة ومهتمّون شخصيًا براحة بالك — من أول سؤال حتى عودتك سالمًا.',
      points: [
        { title: 'مرخّصون وموثوقون', desc: 'مصرّح لنا بالكامل بالعمرة والسفر إلى السعودية.' },
        { title: 'فريق في أمريكا', desc: 'دعم في توقيتك وبلغتك.' },
        { title: 'رعاية ميدانية', desc: 'مضيفو زيارة معك في كل أنحاء المملكة.' },
      ],
    },
    contact: {
      eyebrow: 'خطط لرحلتك',
      title: 'لنصمّم رحلتك',
      subtitle: 'شارك بعض التفاصيل وسيتواصل معك مصمّم رحلات من زيارة خلال يوم عمل واحد.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      interest: 'أنا مهتم بـ',
      interestOptions: ['رحلة عمرة', 'سياحة فاخرة', 'رحلة مخصّصة', 'سفر جماعي'],
      travelers: 'عدد المسافرين',
      message: 'أخبرنا عن رحلتك المثالية',
      submit: 'اطلب استشارتي',
      success: 'شكرًا لك. سيتواصل معك مصمّم رحلات من زيارة خلال يوم عمل واحد.',
    },
    footer: {
      tagline: 'رحلات فاخرة من الولايات المتحدة إلى السعودية.',
      explore: 'استكشف',
      company: 'الشركة',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
    },
    langToggle: 'English',
  },
} as const

export type Dictionary = (typeof dictionary)['en']

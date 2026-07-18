export type Lang = 'en' | 'rw'

export const getLang = (value: string | null | undefined): Lang => {
  if (value === 'rw') return 'rw'
  return 'en'
}

export const t = {
  nav: {
    home: { en: 'Home', rw: 'Ahabanzo' },
    about: { en: 'About', rw: 'Ibyerekeye' },
    services: { en: 'Services', rw: 'Serivisi' },
    gallery: { en: 'Gallery', rw: 'Amashusho' },
    whyUs: { en: 'Why Choose Us', rw: 'Impamvu Duhitamo' },
    testimonials: { en: 'Testimonials', rw: 'Ibitekerezo By’abakiriya' },
    faqs: { en: 'FAQs', rw: 'Ibibazo Bikunze Kubazwa' },
    contact: { en: 'Contact', rw: 'Twandikire' },
    book: { en: 'Book Consultation', rw: 'Tegeka Inama' },
  },
  hero: {
    badge: { en: 'Premium Event Services', rw: 'Serivisi Y’amakoriyo Yihariye' },
    title: {
      en: 'Professional Protocol & Event Coordination Services',
      rw: 'Serivisi Z’Ubunyamwuga (Protocol) & Ubufatanye Mu Mategeko/Amadini',
    },
    description: {
      en: 'We transform your special moments into unforgettable experiences through exceptional planning, coordination, and protocol management.',
      rw: 'Tuhindura ibihe byawe by’ingenzi bigahinduka ubunararibonye budasanzwe binyuze mu gutegura neza, guhuza ibikorwa, no kuyobora protocol.',
    },
    cta1: { en: 'Book Consultation', rw: 'Tegeka Inama' },
    cta2: { en: 'View Services', rw: 'Reba Serivisi' },
    statEvents: { en: 'Events', rw: 'Ibihe by’Igikorwa' },
    statClients: { en: 'Happy Clients', rw: 'Abakiriya Bari Kurabagirana' },
    statYears: { en: 'Years', rw: 'Imyaka' },
  },
  about: {
    badge: { en: 'About Us', rw: 'Ibyerekeye Twebwe' },
    title: { en: 'About Brenda Protocol Service', rw: 'Ibyerekeye Brenda Protocol Service' },
    p1: {
      en: 'Brenda Protocol Service is a trusted protocol and event coordination agency committed to delivering outstanding planning services for weddings, engagements, introductions, meetings, graduations, anniversaries, birthdays, and corporate events.',
      rw: 'Brenda Protocol Service ni ikigo cyizewe muri protocol n’ubufatanye mu birori, giharanira gutegura neza iby’ingenzi nka ubukwe, ubukwe bw’ubusabe, imihango yo gutegurana, inama, impamyabumenyi, imyaka y’ubukwe, iminsi y’amavuko, n’ibikorwa bya sosiyete.',
    },
    p2: {
      en: 'Our experienced team handles every detail with professionalism so our clients can enjoy their events stress-free.',
      rw: 'Abakozi bacu b’abahanga biyemeje gucunga buri kantu twitondeye, kugira ngo abakiriya bacu bishimire ibirori babo nta gihagararo.',
    },
    excellence: { en: 'Excellence', rw: 'Ubuhanga' },
    premium: { en: 'Premium quality service', rw: 'Serivisi nziza kandi y’icyubahiro' },
    professional: { en: 'Professional', rw: 'Ubufatanye Bw’umwuga' },
    expert: { en: 'Expert team members', rw: 'Ikipe y’abahanga' },
    detail: { en: 'Detail-Oriented', rw: 'Twitaho Ibisobanuro' },
    execution: { en: 'Perfect execution', rw: 'Kunoza neza buri kintu' },
    passionate: { en: 'Passionate', rw: 'Urukundo mu Kazi' },
    dedicated: { en: 'Dedicated service', rw: 'Ubufatanye budacogora' },
    mission: { en: 'Our Mission', rw: 'Uhamagaro Rwacu' },
    missionBody: {
      en: 'To provide exceptional protocol, planning, coordination, and event management services that create memorable experiences while maintaining professionalism and excellence.',
      rw: 'Gutanga protocol, gutegura, guhuza ibikorwa, no kuyobora ibirori ku rwego rwo hejuru, bigatera abakiriya ubunararibonye budasanzwe mu gihe dushyize imbere ubuhanga n’icyubahiro.',
    },
  },
  services: {
    badge: { en: 'Our Services', rw: 'Serivisi Zacu' },
    description: { en: 'We offer comprehensive event planning and coordination services tailored to your unique needs.', rw: 'Dutanga serivisi z’uburyo bwuzuye bwo gutegura no guhuza ibirori bikurikije ibyo ukeneye.' },
    learnMore: { en: 'Learn More', rw: 'Menya Byinshi' },
  },
  why: {
    title: { en: 'Why Choose Us', rw: 'Impamvu Duhitamo' },
    description: { en: 'We deliver exceptional event experiences with professionalism and excellence', rw: 'Dutanga ubunararibonye budasanzwe mu birori, dushyize imbere ubuhanga n’icyubahiro' },
    reasons: [
      { title: { en: 'Professional Team', rw: 'Ikipe y’Abahanga' }, description: { en: 'Experienced and dedicated event coordinators', rw: 'Abayobozi b’ibirori b’abahanga biyemeje' } },
      { title: { en: 'Reliable Planning', rw: 'Gutegura Byizewe' }, description: { en: 'Trustworthy and organized event management', rw: 'Gucunga ibikorwa byizewe kandi byateguwe neza' } },
      { title: { en: 'Attention to Detail', rw: 'Kwitaho Ibisobanuro' }, description: { en: 'Every detail meticulously planned and executed', rw: 'Buri kantu katateguwe neza kandi kakorwa uyu buryo' } },
      { title: { en: 'Affordable Packages', rw: 'Paketi Zishingiye' }, description: { en: 'Competitive pricing without compromising quality', rw: 'Ibiciro bikwiye nta na rimwe mu kintu gikenewe' } },
      { title: { en: 'Luxury Decorations', rw: 'Imyambaro Y’icyubahiro' }, description: { en: 'Elegant and premium event decorations', rw: 'Imyambaro y’ibirori y’ubwiza n’icyubahiro' } },
      { title: { en: 'Excellent Customer Service', rw: 'Serivisi Nziza' }, description: { en: '24/7 support and responsive communication', rw: 'Ubufatanye 24/7 n’ubuntu bwo kwiyandikisha' } },
    ],
    // Counter labels handled separately in existing component
  },
  gallery: {
    title: { en: 'Event Gallery', rw: 'Amashusho y’Ibikorwa' },
    description: { en: 'Browse through our portfolio of successfully executed events', rw: 'Reba portefolio y’ibirori twateguye neza' },
    close: { en: 'Close', rw: 'Funga' },
    items: [
      { title: { en: 'Elegant Wedding Ceremony', rw: 'Ubukwe Bw’ubwiza' } },
      { title: { en: 'Traditional Introduction', rw: 'Imihango yo Gutegurana' } },
      { title: { en: 'Birthday Celebration', rw: 'Umunsi w’Amavuko' } },
      { title: { en: 'Corporate Meeting', rw: 'Inama ya Sosiyete' } },
      { title: { en: 'Graduation Ceremony', rw: 'Impamyabumenyi' } },
      { title: { en: 'Anniversary Dinner', rw: 'Ifunguro ry’imyaka y’ubukwe' } },
      { title: { en: 'Luxury Wedding Decor', rw: 'Imyambaro y’Ubukwe bw’icyubahiro' } },
    ],
  },
  process: {
    title: { en: 'Our Process', rw: 'Uburyo Bukoreshwa' },
    description: { en: 'A simple and efficient process to bring your event vision to life', rw: 'Uburyo bworoshye kandi bukora neza bwo gutuma ibyifuzo by’ibirori byawe bihinduka' },
    steps: [
      {
        title: { en: 'Book Consultation', rw: 'Tegeka Inama' },
        description: { en: 'Schedule a meeting to discuss your event requirements', rw: 'Gahura kugira ngo muvugishe ibyo ukeneye ku gikorwa' },
      },
      {
        title: { en: 'Understand Client Needs', rw: 'Menya Ibyo Ukeneye' },
        description: { en: 'We listen and understand your vision and preferences', rw: 'Tukumira kandi tuba uburyo bwo gusoma ibyifuzo byawe' },
      },
      {
        title: { en: 'Planning & Budget', rw: 'Gutegura & Ingengo Yimari' },
        description: { en: 'Create a detailed plan and budget for your event', rw: 'Gukora gahunda yimbitse n’ingengo yimari y’igikorwa' },
      },
      {
        title: { en: 'Coordination', rw: 'Guhuza Ibikorwa' },
        description: { en: 'Execute the plan with precision and attention to detail', rw: 'Gukora gahunda uyu buryo bwuzuye kandi ujitaho ibisobanuro' },
      },
      {
        title: { en: 'Successful Event', rw: 'Igikorwa Gifite Agaciro' },
        description: { en: 'Enjoy your perfectly organized event', rw: 'Ishimire igikorwa cyawe cyateguwe neza' },
      },
    ],
  },
  testimonials: {
    title: { en: 'What Our Clients Say', rw: 'Ibyo Abakiriya Bacu Bavuga' },
    description: { en: 'Hear from our satisfied clients about their experience with us', rw: 'Soma ibyo abakiriya bacu banyuzwe bavuga ku muryango wacu' },
    items: [
      {
        name: { en: 'Sarah N.', rw: 'Sarah N.' },
        rating: 5,
        text: { en: 'Brenda Protocol Service made our wedding stress-free. Everything was perfectly organized.', rw: 'Brenda Protocol Service yatumye ubukwe bwacu butagira ingorane. Byari byateguwe neza rwose.' },
      },
      {
        name: { en: 'Jean Claude', rw: 'Jean Claude' },
        rating: 5,
        text: { en: 'Professional, organized, and very reliable. They exceeded all our expectations.', rw: 'Buhanga, byari byateguwe neza, kandi byizewe cyane. Byarenze ibyo twitezaga byose.' },
      },
      {
        name: { en: 'Diane', rw: 'Diane' },
        rating: 5,
        text: { en: 'The best protocol service in Kigali. Highly recommended for any event.', rw: 'Serivisi nziza cyane ya protocol i Kigali. Ntacyo bitwaye kuyihemba.' },
      },
    ],
  },
  faq: {
    badge: { en: 'FAQs', rw: 'Ibibazo Bikunze Kubazwa' },
    title: { en: 'Frequently Asked Questions', rw: 'Ibibazo Bikunze Kubazwa' },
    description: { en: 'Find answers to common questions about our services', rw: 'Shaka ibisubizo by’ibibazo bisanzwe kuri serivisi zacu' },
    items: [
      {
        question: { en: 'How early should I book?', rw: 'Nagomba gutegika ryari?' },
        answer: { en: 'We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller events to ensure availability and proper planning.', rw: 'Tugusaba gutegika nibura amezi 3-6 mbere y’ubukwe n’ibikorwa binini, n’amezi 1-2 y’ibikorwa bito kugira ngo tubone uburyo bwo kubikorera neza.' },
      },
      {
        question: { en: 'Do you work outside Kigali?', rw: 'Mukora hanze y’i Kigali?' },
        answer: { en: 'Yes, we provide services throughout Rwanda and can travel to other countries for international events. Additional travel fees may apply for events outside Kigali.', rw: 'Yego, dutanga serivisi mu Rwanda hose kandi dushobora kujya mu mashyiga yandi ku gikorwa mpuzamahanga. Amafaranga y’urugendo yongeweho ashobora gukoreshwa ku gikorwa rungane mu gihugu.' },
      },
      {
        question: { en: 'Can you provide decorations?', rw: 'Mushobora gutanga imyambaro?' },
        answer: { en: 'Absolutely! We offer comprehensive decoration services including floral arrangements, lighting, table settings, and thematic decor tailored to your event style and preferences.', rw: 'Nta gushidikanya! Dutanga serivisi z’imyambaro zuzuye harimo imyambarire y’imbuto, amatara, imyambaro y’ameza, n’imyambaro y’ubwoko bw’igikorwa wawe.' },
      },
      {
        question: { en: 'Do you handle corporate events?', rw: 'Mukora ibikorwa bya sosiyete?' },
        answer: { en: 'Yes, we specialize in corporate event planning including conferences, meetings, product launches, and company celebrations with professional protocol and coordination.', rw: 'Yego, turi abahanga mu gutegura ibikorwa bya sosiyete harimo inama, ibiganiro, gutangiza ibicuruzwa, n’ibirori bya sosiyete hakoreshejwe protocol n’ubufatanye bw’umwuga.' },
      },
      {
        question: { en: 'Can I customize my package?', rw: 'Nshobora guhindura paketi yanjye?' },
        answer: { en: 'Yes, all our packages are customizable. We work closely with you to create a personalized plan that fits your specific needs, preferences, and budget.', rw: 'Yego, paketi zacu zose zishobora guhindurwa. Dukora hafi yawe kugira ngo dukore gahunda yihariye ikurikije ibyo ukeneye, ibyo ukunda, n’ingengo yimari yawe.' },
      },
    ],
  },
  contact: {
    title: { en: 'Contact Us', rw: 'Twandikire' },
    description: { en: 'Get in touch with us to start planning your perfect event', rw: 'Twandikire kugira ngo dutangire gutegura ibirori byawe byiza' },
    address: { en: 'Address', rw: 'Aderesi' },
    phone: { en: 'Phone', rw: 'Telefone' },
    email: { en: 'Email', rw: 'Imeri' },
    hours: { en: 'Working Hours', rw: 'Igihe dukorana' },
    name: { en: 'Name', rw: 'Amazina' },
    phoneLabel: { en: 'Phone', rw: 'Telefone' },
    eventType: { en: 'Event Type', rw: 'Ubwoko bw’Igikorwa' },
    eventDate: { en: 'Event Date', rw: 'Itariki y’Igikorwa' },
    message: { en: 'Message', rw: 'Ubutumwa' },
    send: { en: 'Send Message', rw: 'Ohereza Ubutumwa' },
    placeholders: {
      name: { en: 'Your name', rw: 'Andika amazina yawe' },
      phone: { en: 'Your phone number', rw: 'Andika nimero ya telefone' },
      email: { en: 'Your email', rw: 'Andika imeri yawe' },
      message: { en: 'Tell us about your event', rw: 'Tubarize ku birori byawe' },
      selectEvent: { en: 'Select event type', rw: 'Hitamo ubwoko bw’igikorwa' },
      other: { en: 'Other', rw: 'Andi' },
    },
    options: {
      wedding: { en: 'Wedding', rw: 'Ubukwe' },
      introduction: { en: 'Introduction Ceremony', rw: 'Imihango yo Kwitwarira/kwiyerekana' },
      engagement: { en: 'Engagement Party', rw: 'Ibirori by’Ubukwe bw’Umwanzuro' },
      birthday: { en: 'Birthday Celebration', rw: 'Umunsi w’amavuko' },
      corporate: { en: 'Corporate Event', rw: 'Igikorwa cya Sosiyete' },
      graduation: { en: 'Graduation Ceremony', rw: 'Impamyabumenyi' },
      anniversary: { en: 'Anniversary Celebration', rw: 'Ibirori byo kwizihiza imyaka' },
    },
  },
  cta: {
    badge: { en: 'Get Started', rw: 'Tangira' },
    title: { en: 'Ready to Make Your Event Extraordinary?', rw: 'Witeguye ko Igikorwa cyawe kiba Igitandukanye?' },
    description: { en: 'Book your consultation today and let Brenda Protocol Service handle every detail with professionalism and excellence.', rw: 'Tega inama uyumunsi kandi reka Brenda Protocol Service icunge buri kintu ku rwego rw’ibihe kandi mu bwitonzi.' },
    button: { en: 'Book Now', rw: 'Tega Ubu' },
  },
  footer: {
    quickLinks: { en: 'Quick Links', rw: 'Link Zitihuse' },
    services: { en: 'Services', rw: 'Serivisi' },
    contactInfo: { en: 'Contact Info', rw: 'Uburyo Twakwigiraho' },
  },
}

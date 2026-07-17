export const ONBOARDING_VERSION = '2026-07';

export const onboardingPages = [
  {
    id: 'home',
    eyebrow: 'WORKING WITH YOLŊU CARD',
    title: 'Recognition grounded in Yolŋu leadership',
    description:
      'The Working with Yolŋu Card recognises a commitment to building cultural competency while working alongside Yolŋu people in East Arnhem Land.',
    icon: 'people-outline',
    sections: [
      {
        title: 'Governed by Yolŋu',
        body:
          'The Dilak Council, a body of senior Yolŋu leaders, guides the standards, values and integrity of the card system.',
      },
      {
        title: 'Preparing an application',
        body:
          'Applicants provide evidence of relevant training or experience, two Yolŋu referees and a current photo.',
      },
    ],
    sourceUrl: 'https://www.workingwithyolngu.com.au/',
  },
  {
    id: 'framework',
    eyebrow: 'CULTURAL COMPETENCY',
    title: 'Four stages of cultural growth',
    description:
      'Cultural competency is an ongoing journey. Each stage builds on the last and maps to a Working with Yolŋu Card level.',
    icon: 'sync-circle-outline',
    sections: [
      {
        title: '1 · Knowing — Cultural Awareness',
        body:
          'Build foundational knowledge of Yolŋu culture, history and the context of East Arnhem Land.',
        badge: 'Culturally Aware',
      },
      {
        title: '2 · Being — Cultural Sensitivity',
        body:
          'Move from knowledge to genuine respect, humility and awareness of your own cultural lens.',
        badge: 'Yolŋu Informed',
      },
      {
        title: '3 · Doing — Cultural Competence',
        body:
          'Apply cultural knowledge in day-to-day practice and adapt behaviour when working alongside Yolŋu people.',
        badge: 'Communicating with Yolŋu',
      },
      {
        title: '4 · Embedding — Cultural Proficiency',
        body:
          'Centre Yolŋu knowledge and leadership in organisational practice and advocate for systemic change.',
        badge: 'Leading with Yolŋu',
      },
    ],
    sourceUrl: 'https://www.workingwithyolngu.com.au/framework',
  },
  {
    id: 'training',
    eyebrow: 'TRAINING',
    title: 'Recognised training providers',
    description:
      'Training can be completed before or alongside a card application. These organisations offer relevant cultural learning programs.',
    icon: 'book-outline',
    sections: [
      {
        title: 'ARDS',
        body: 'Community-based cultural competency training developed with and for Yolŋu people.',
        linkLabel: 'Visit ARDS',
        url: 'https://www.ards.com.au/cultural-competency-training',
      },
      {
        title: 'Charles Darwin University',
        body: 'Accredited study in Indigenous knowledges, languages and cross-cultural communication.',
        linkLabel: 'Explore CDU courses',
        url: 'https://www.cdu.edu.au/study/indigenous-knowledges',
      },
      {
        title: 'Cross Cultural Consultants',
        body: 'Tailored training for organisations working with First Nations communities in the NT.',
        linkLabel: 'Visit provider',
        url: 'https://www.cccnt.com.au/training-solutions/',
      },
      {
        title: 'Mura Training',
        body: 'Culturally informed business and workforce training for remote community contexts.',
        linkLabel: 'View provider',
        url: 'https://www.facebook.com/p/Mura-Training-Business-Solutions-61573813588102/',
      },
      {
        title: 'Why Warriors',
        body: 'Online and in-person programs focused on practical understanding and respect.',
        linkLabel: 'Learn with Why Warriors',
        url: 'https://learn.whywarriors.com.au',
      },
    ],
    sourceUrl: 'https://www.workingwithyolngu.com.au/training',
  },
  {
    id: 'east-arnhem',
    eyebrow: 'COUNTRY',
    title: 'East Arnhem Land',
    description:
      'East Arnhem Land is a vast Aboriginal-owned region where Yolŋu languages, laws and relationships with land and sea continue to shape daily life.',
    icon: 'map-outline',
    actions: [
      {
        label: 'Visit East Arnhem',
        url: 'https://www.visiteastarnhem.com.au/',
      },
      {
        label: 'Access permits',
        url: 'https://www.visiteastarnhem.com.au/plan/access-permits',
      },
    ],
    sections: [
      {
        title: "Galiwin'ku",
        body: 'An Elcho Island community with a rich history of cultural exchange.',
      },
      {
        title: 'Gapuwiyak',
        body: 'A community on Lake Evella known for strong clan connections, art and ceremony.',
      },
      {
        title: 'Gunyangara',
        body: 'A small community near Nhulunbuy on the ancestral lands of the Gumatj clan.',
      },
      {
        title: 'Milingimbi',
        body: 'An island centre of Yolŋu art, ceremony and traditional governance.',
      },
      {
        title: 'Nhulunbuy',
        body: 'The regional hub for services, health and education on the Gove Peninsula.',
      },
      {
        title: 'Ramingining',
        body: 'An inland community renowned for bark painting, sculpture and cultural practice.',
      },
      {
        title: 'Yirrkala',
        body: 'Home of the Church Panels and Bark Petition, landmark expressions of Yolŋu sovereignty.',
      },
    ],
    sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
  },
  {
    id: 'news',
    eyebrow: 'NEWS & UPDATES',
    title: 'Stay connected',
    description:
      'Live news is coming soon to the website. In the meantime, follow these East Arnhem organisations and community sources directly.',
    icon: 'newspaper-outline',
    notice: 'Live news feed coming soon',
    sections: [
      {
        title: 'East Arnhem Regional Council',
        body: 'Regional community news and events.',
        linkLabel: 'Read updates',
        url: 'https://eastarnhem.nt.gov.au/news-and-events',
      },
      {
        title: 'Laynhapuy Homelands',
        body: 'Updates from around 30 remote Yolŋu homelands.',
        linkLabel: 'Visit source',
        url: 'https://www.laynhapuy.com.au',
      },
      {
        title: 'Nhulunbuy Corporation',
        body: 'Community and municipal news from Nhulunbuy.',
        linkLabel: 'Read community news',
        url: 'https://ncl.net.au/our-community/news',
      },
      {
        title: 'Yiŋiya Mark Guyula MLA',
        body: 'Policy and community updates from the Member for Mulka.',
        linkLabel: 'Visit source',
        url: 'https://www.yingiya.net/index.php',
      },
      {
        title: 'Yolŋu Radio',
        body: 'Community broadcasting across Arnhem Land and remote homelands.',
        linkLabel: 'Listen and learn',
        url: 'https://www.yolnguradio.ards.com.au/',
      },
      {
        title: 'Yothu Yindi Foundation',
        body: 'Garma Festival announcements and foundation news.',
        linkLabel: 'Read YYF news',
        url: 'https://yyf.com.au/about-yyf/latest-news/',
      },
    ],
    sourceUrl: 'https://www.workingwithyolngu.com.au/news',
  },
];

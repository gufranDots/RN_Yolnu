export type TrainingProvider = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export const trainingContent = {
  eyebrow: 'TRAINING',
  title: 'Cultural Competency Training',
  introduction:
    'A Working with Yolŋu Card requires demonstrated cultural competency. The following providers offer training programs that are recognised as evidence for card applications. Training can be completed before or alongside your application, and some providers offer programs specifically designed for the East Arnhem context.',
  sectionTitle: 'Recognised training providers',
  sectionIntroduction:
    'Explore providers offering relevant cultural learning programs for people and organisations working alongside Yolŋu communities.',
} as const;

export const trainingProviders: TrainingProvider[] = [
  {
    id: 'ards',
    name: 'ARDS',
    description:
      'Community-based cultural competency training developed with and for Yolŋu people.',
    url: 'https://www.ards.com.au/cultural-competency-training',
  },
  {
    id: 'charles-darwin-university',
    name: 'Charles Darwin University',
    description:
      'Accredited study in Indigenous knowledges, languages, and cross-cultural communication.',
    url: 'https://www.cdu.edu.au/study/indigenous-knowledges',
  },
  {
    id: 'cross-cultural-consultants',
    name: 'Cross Cultural Consultants',
    description:
      'Tailored training for organisations working with First Nations communities in the Northern Territory.',
    url: 'https://www.cccnt.com.au/training-solutions/',
  },
  {
    id: 'mura-training',
    name: 'Mura Training',
    description:
      'Culturally informed business and workforce training for remote community contexts.',
    url: 'https://www.facebook.com/p/Mura-Training-Business-Solutions-61573813588102/',
  },
  {
    id: 'why-warriors',
    name: 'Why Warriors',
    description:
      'Online and in-person programs focused on practical understanding, communication, and respect.',
    url: 'https://learn.whywarriors.com.au',
  },
];

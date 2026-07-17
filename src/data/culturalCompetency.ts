export type FrameworkStage = {
  number: number;
  action: string;
  title: string;
  description: string;
};

export type FrameworkCardLevel = {
  level: number;
  title: string;
  description: string;
};

export const culturalCompetencyFramework = {
  eyebrow: 'FRAMEWORK',
  title: 'Cultural Competency Framework',
  introduction:
    'The Working with Yolŋu Card is built on a four-level cultural competency framework developed in partnership with Yolŋu leaders. The framework describes a progression from basic awareness through to genuine, sustained cultural proficiency — and maps each stage to a specific card level.',
  progressionIntroduction:
    'Cultural competency is not a destination — it is an ongoing journey. Each stage builds on the last.',
} as const;

export const frameworkStages: FrameworkStage[] = [
  {
    number: 1,
    action: 'Knowing',
    title: 'Cultural Awareness',
    description:
      'Developing a foundational knowledge of Yolŋu culture, history, and the context of East Arnhem Land. Knowing that difference exists and beginning to understand what that means.',
  },
  {
    number: 2,
    action: 'Being',
    title: 'Cultural Sensitivity',
    description:
      "Moving beyond knowledge toward genuine respect. Recognising the impact of one's own cultural lens and actively choosing to engage with Yolŋu people with humility and openness.",
  },
  {
    number: 3,
    action: 'Doing',
    title: 'Cultural Competence',
    description:
      'Applying cultural knowledge and sensitivity in day-to-day practice. Working effectively and respectfully alongside Yolŋu people and adapting behaviour accordingly.',
  },
  {
    number: 4,
    action: 'Embedding',
    title: 'Cultural Proficiency',
    description:
      'Embedding cultural competency as standard organisational practice. Advocating for systemic change and ensuring Yolŋu knowledge and leadership are central to how an organisation operates.',
  },
];

export const frameworkCardLevels: FrameworkCardLevel[] = [
  {
    level: 1,
    title: 'Culturally Aware',
    description:
      'The cardholder has completed foundational cultural awareness training and demonstrates a basic understanding of Yolŋu culture, history, and East Arnhem Land.',
  },
  {
    level: 2,
    title: 'Yolŋu Informed',
    description:
      'The cardholder has deepened their knowledge of Yolŋu society, kinship systems, and cultural protocols, demonstrating informed respect.',
  },
  {
    level: 3,
    title: 'Communicating with Yolŋu',
    description:
      'The cardholder has developed practical communication skills and demonstrates cultural competence through respectful, informed engagement.',
  },
  {
    level: 4,
    title: 'Leading with Yolŋu',
    description:
      'The cardholder works in genuine partnership with Yolŋu people, advocates for self-determination, and embeds Yolŋu knowledge into leadership and practice.',
  },
];

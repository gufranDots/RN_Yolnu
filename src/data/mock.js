export const mockUser = {
  name: 'Sample User',
  email: 'sample.user@example.com',
  phone: '0400000000',
  yearOfBirth: '1995',
  address: 'Sample Address, Nhulunbuy NT',
  photoLabel: 'Profile photo selected',
};

export const cardDetails = {
  level: 'Level 2 - Yolnu Informed',
  name: 'Sample User',
  status: 'Active',
  cardId: 'YC-1001',
  issueDate: '22/05/2026',
  validUntil: '22/05/2028',
};

export const cardLevels = [
  {
    id: 'level-1',
    title: 'Level 1 - Culturally Aware',
    description:
      'Awareness of Aboriginal and Torres Strait Islander beliefs, knowledge, and impacts of colonisation.',
  },
  {
    id: 'level-2',
    title: 'Level 2 - Yolnu Informed',
    description:
      'Key understanding of Yolnu culture, worldview, and effective engagement.',
  },
  {
    id: 'level-3',
    title: 'Level 3 - Communicating with Yolnu',
    description:
      'Basic conversational skills, showing commitment to relationships and respect.',
  },
  {
    id: 'level-4',
    title: 'Level 4 - Leading with Yolnu',
    description:
      'Management skills to ensure safe and culturally respectful workplaces.',
  },
];

export const messages = [
  {
    id: 'msg-approved',
    subject: 'Application approved',
    from: 'Admin Team',
    sentAt: '22/05/2026, 19:50:00',
    body: 'Your Yolnu Card application has been approved for the demo build.',
    badge: 'Application #1001',
  },
  {
    id: 'msg-docs',
    subject: 'Training document received',
    from: 'Admin Team',
    sentAt: '20/05/2026, 16:30:00',
    body: 'We have received your uploaded training document.',
    badge: 'Application #1001',
  },
];

export const applicationRequirements = [
  'Evidence of relevant training or a statement of experience',
  'Two Yolnu referees',
  'A current profile photo',
];

export const latestApplication = {
  type: 'New application',
  status: 'Approved',
  submittedAt: '20/05/2026, 16:00:00',
  cardLevel: 'Level 2 - Yolnu Informed',
  filesUploaded: '1 uploaded',
};

export const rejectionReason =
  'Your last submission is missing valid supporting evidence. Please upload a recognised training document and resubmit.';

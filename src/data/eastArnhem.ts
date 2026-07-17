export type Community = {
  id: string;
  name: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  sourceUrl: string;
};

export const eastArnhem = {
  eyebrow: 'COUNTRY',
  title: 'East Arnhem Land',
  introduction:
    'East Arnhem Land covers approximately 100,000 km² of remote northern Australia — one of the largest areas of Aboriginal-owned land on the continent. The Miwatj region, at its heart, is home to a population of around 12,240 people, the majority of whom are Yolŋu.',
  culturalContext:
    'Yolŋu people have lived on this country for tens of thousands of years. Their languages, laws, and relationships with land and sea continue to define life in East Arnhem Land today. For those who work or travel in this region, developing genuine cultural competency is both a professional responsibility and a mark of respect.',
  communitiesIntroduction:
    'East Arnhem Land encompasses many distinct Yolŋu communities, each with its own clans, ceremonies, and connections to country.',
  sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
} as const;

export const eastArnhemCommunities: Community[] = [
  {
    id: 'galiwinku',
    name: "Galiwin'ku",
    location: 'Elcho Island',
    description:
      "Located on Elcho Island, Galiwin'ku is one of the largest Yolŋu communities in East Arnhem Land, with a rich history of cultural exchange and Christian mission heritage dating to the 1940s.",
    latitude: -12.0281,
    longitude: 135.5649,
    sourceUrl: 'https://eastarnhem.nt.gov.au/communities/galiwinku',
  },
  {
    id: 'gapuwiyak',
    name: 'Gapuwiyak',
    location: 'Lake Evella',
    description:
      'Situated on the shores of Lake Evella, Gapuwiyak is a Yolŋu community known for its strong clan connections, distinctive art, and traditional ceremonies that continue to shape community life.',
    latitude: -12.5031,
    longitude: 135.8105,
    sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
  },
  {
    id: 'gunyangara',
    name: 'Gunyangara',
    location: 'Gove Peninsula',
    description:
      'Also known as Ski Beach, Gunyangara is a small Yolŋu community near Nhulunbuy on the ancestral lands of the Gumatj clan.',
    latitude: -12.216,
    longitude: 136.783,
    sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
  },
  {
    id: 'milingimbi',
    name: 'Milingimbi',
    location: 'Arafura Sea',
    description:
      'Milingimbi is an island community with a long history of contact and cultural exchange. It is a centre of Yolŋu art, ceremony, and traditional governance.',
    latitude: -12.095,
    longitude: 134.893,
    sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
  },
  {
    id: 'nhulunbuy',
    name: 'Nhulunbuy',
    location: 'Gove Peninsula',
    description:
      'The main township of East Arnhem Land, Nhulunbuy serves as the regional hub for services, health, and education, surrounded by Yolŋu homelands.',
    latitude: -12.18,
    longitude: 136.77,
    sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
  },
  {
    id: 'ramingining',
    name: 'Ramingining',
    location: 'Central Arnhem Land',
    description:
      'Ramingining is an inland community known for its extraordinary contribution to Aboriginal art, particularly bark paintings and sculptures held in major galleries around the world.',
    latitude: -12.42,
    longitude: 135.21,
    sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
  },
  {
    id: 'yirrkala',
    name: 'Yirrkala',
    location: 'Gove Peninsula',
    description:
      'Yirrkala holds profound significance in Australian history as the home of the Church Panels and Bark Petition, landmark acts of Yolŋu sovereignty.',
    latitude: -12.25,
    longitude: 136.88,
    sourceUrl: 'https://www.workingwithyolngu.com.au/east-arnhem',
  },
];

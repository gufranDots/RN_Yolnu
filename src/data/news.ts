export type NewsSource = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export const newsContent = {
  eyebrow: 'NEWS',
  title: 'News & Updates',
  introduction:
    'Stay connected with news from East Arnhem Land, the Yothu Yindi Foundation, and organisations working to advance Yolŋu self-determination and cultural competency across the region. Add these to your favourites and subscribe to newsletters to stay up to date with local activities and opportunities.',
  notice:
    'This section will display live news and updates from East Arnhem organisations. In the meantime, visit the sources below directly to stay up to date.',
  sectionTitle: 'Stay connected with East Arnhem Land',
} as const;

export const newsSources: NewsSource[] = [
  {
    id: 'east-arnhem-regional-council',
    name: 'East Arnhem Regional Council',
    description:
      'Follow news and events from the remote communities serviced by the East Arnhem Regional Council.',
    url: 'https://eastarnhem.nt.gov.au/news-and-events',
  },
  {
    id: 'laynhapuy-homelands',
    name: 'Laynhapuy Homelands',
    description:
      'Laynhapuy Homelands Aboriginal Corporation supports around 30 remote Yolŋu homelands across North-East Arnhem Land. Follow their updates for community news and events.',
    url: 'https://www.laynhapuy.com.au',
  },
  {
    id: 'nhulunbuy-corporation',
    name: 'Nhulunbuy Corporation',
    description:
      'Nhulunbuy Corporation maintains municipal services for Nhulunbuy, its industrial estate, and Gove Airport. Visit their community news page for local updates.',
    url: 'https://ncl.net.au/our-community/news',
  },
  {
    id: 'yingiya-mark-guyula',
    name: 'Yiŋiya Mark Guyula MLA',
    description:
      'Independent Member for Mulka representing Yolŋu country in the NT Parliament. Follow updates on policy and community matters in East Arnhem Land.',
    url: 'https://www.yingiya.net/index.php',
  },
  {
    id: 'yolngu-radio',
    name: 'Yolŋu Radio',
    description:
      'Yolŋu Radio 88.9FM is a key community media source for Aboriginal people in Arnhem Land, broadcasting across major communities and remote homelands.',
    url: 'https://www.yolnguradio.ards.com.au/',
  },
  {
    id: 'yothu-yindi-foundation',
    name: 'Yothu Yindi Foundation',
    description:
      'Follow Garma Festival announcements and the latest news from the Yothu Yindi Foundation.',
    url: 'https://yyf.com.au/about-yyf/latest-news/',
  },
];

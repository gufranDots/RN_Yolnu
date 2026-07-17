import type { ComponentProps } from 'react';
import type { Feather } from '@expo/vector-icons';

export type GuestTile = {
  id: string;
  label: string;
  icon: ComponentProps<typeof Feather>['name'];
  url: string;
  destination?:
    | 'web'
    | 'cultural-competency-detail'
    | 'training-detail'
    | 'east-arnhem-detail'
    | 'news-detail';
};

export const guestTiles: GuestTile[] = [
  {
    id: 'cultural-competency',
    label: 'Cultural Competency',
    icon: 'users',
    url: 'https://www.workingwithyolngu.com.au/framework',
    destination: 'cultural-competency-detail',
  },
  {
    id: 'training',
    label: 'Training',
    icon: 'book-open',
    url: 'https://www.workingwithyolngu.com.au/training',
    destination: 'training-detail',
  },
  {
    id: 'east-arnhem-land',
    label: 'East Arnhem Land',
    icon: 'map-pin',
    url: 'https://www.workingwithyolngu.com.au/east-arnhem',
    destination: 'east-arnhem-detail',
  },
  {
    id: 'news',
    label: 'News',
    icon: 'file-text',
    url: 'https://www.workingwithyolngu.com.au/news',
    destination: 'news-detail',
  },
];

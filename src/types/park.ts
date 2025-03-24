export interface Park {
  id: number;
  name: string;
  location: string;
  type: 'pretpark' | 'dierentuin' | 'museum' | 'festival';
  website: string;
  priceLink: string;
  price: string;
  priceValue: number;
  ageRange: string;
  description: string;
  arrangements: string;
  distance: number;
  travelTime: string;
  hasStay: boolean;
} 
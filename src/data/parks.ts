import { Park } from '@/types/park';

export const parksData: Park[] = [
  // Pretparken
  {
    id: 1,
    name: "Amusementspark Tivoli",
    location: "Berg en Dal, Gelderland",
    type: "pretpark",
    website: "https://www.parktivoli.nl",
    priceLink: "https://www.parktivoli.nl/entreeprijzen",
    price: "ca. €19 p.p.",
    priceValue: 19,
    ageRange: "4-15 jaar",
    description: "Familiepretpark met diverse attracties voor kinderen; eenvoudige dagbeleving.",
    arrangements: "Lokale combinaties, geen eigen hotel",
    distance: 130,
    travelTime: "1u20",
    hasStay: false
  },
  {
    id: 2,
    name: "Attractiepark Drouwenerzand",
    location: "Drouwen, Drenthe",
    type: "pretpark",
    website: "https://www.drouwenerzand.nl",
    priceLink: "https://www.drouwenerzand.nl/prijzen",
    price: "€18,50-€19,50 p.p.",
    priceValue: 19,
    ageRange: "vanaf 4 jaar",
    description: "All-inclusive park met attracties en gratis snacks.",
    arrangements: "Eigen hotelarrangementen",
    distance: 100,
    travelTime: "1u10",
    hasStay: true
  },
  // ... Add all other parks here ...
] as const; 
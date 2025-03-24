import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterChips = [
  { id: 'all', label: 'Alles' },
  { id: 'price-low', label: '≤ €20' },
  { id: 'price-mid', label: '€20-30' },
  { id: 'price-high', label: '≥ €30' },
  { id: 'distance-near', label: 'Dichtbij' },
  { id: 'has-stay', label: 'Overnachting' },
  { id: 'for-young', label: 'Jonge kinderen' },
];

export default function SearchFilter({ searchTerm, onSearchChange, currentFilter, onFilterChange }: SearchFilterProps) {
  return (
    <div className="bg-white p-3 shadow-sm">
      <div className="relative mb-2">
        <FontAwesomeIcon 
          icon={faSearch} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" 
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Zoek op naam, plaats, leeftijd..."
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {filterChips.map((chip) => (
          <button
            key={chip.id}
            onClick={() => onFilterChange(chip.id)}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium transition-colors
              ${currentFilter === chip.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
} 
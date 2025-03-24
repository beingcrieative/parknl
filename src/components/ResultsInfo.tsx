interface ResultsInfoProps {
  resultCount: number;
  sortOption: string;
  onSortChange: (value: string) => void;
}

const sortOptions = [
  { value: 'distance', label: 'Afstand ↑' },
  { value: 'price', label: 'Prijs ↑' },
  { value: 'price-desc', label: 'Prijs ↓' },
  { value: 'name', label: 'Naam A-Z' },
];

export default function ResultsInfo({ resultCount, sortOption, onSortChange }: ResultsInfoProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-500">
      <span>
        {resultCount} {resultCount === 1 ? 'locatie' : 'locaties'} gevonden
      </span>
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-2 py-1 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
} 
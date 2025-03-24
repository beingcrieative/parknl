interface CategoryTabsProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'Alles' },
  { id: 'pretpark', label: 'Pretparken' },
  { id: 'dierentuin', label: 'Dierentuinen' },
  { id: 'museum', label: 'Musea' },
  { id: 'festival', label: 'Festivals & Events' },
];

export default function CategoryTabs({ currentCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="bg-white shadow-sm sticky top-[72px] z-40">
      <div className="flex overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors
              ${currentCategory === category.id
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
} 
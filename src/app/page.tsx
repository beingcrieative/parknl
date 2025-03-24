'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchFilter from '@/components/SearchFilter';
import CategoryTabs from '@/components/CategoryTabs';
import ResultsInfo from '@/components/ResultsInfo';
import ParkCard from '@/components/ParkCard';
import { parksData } from '@/data/parks';

export default function Home() {
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentCategory, setCurrentCategory] = useState('all');
  const [sortOption, setSortOption] = useState('distance');

  const filteredParks = useMemo(() => {
    return parksData.filter(park => {
      const matchesSearch = !searchTerm || 
        park.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        park.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
        park.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        park.ageRange.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = currentCategory === 'all' || park.type === currentCategory;
      
      let matchesFilter = true;
      switch(currentFilter) {
        case 'price-low':
          matchesFilter = park.priceValue <= 20;
          break;
        case 'price-mid':
          matchesFilter = park.priceValue > 20 && park.priceValue <= 30;
          break;
        case 'price-high':
          matchesFilter = park.priceValue > 30;
          break;
        case 'distance-near':
          matchesFilter = park.distance <= 50;
          break;
        case 'has-stay':
          matchesFilter = park.hasStay;
          break;
        case 'for-young':
          matchesFilter = park.ageRange.includes('3') || 
                         park.ageRange.includes('4') || 
                         park.ageRange.includes('peuter') || 
                         park.ageRange.includes('kleuter');
          break;
      }
      
      return matchesSearch && matchesCategory && matchesFilter;
    }).sort((a, b) => {
      switch(sortOption) {
        case 'distance':
          return a.distance - b.distance;
        case 'price':
          return a.priceValue - b.priceValue;
        case 'price-desc':
          return b.priceValue - a.priceValue;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return a.distance - b.distance;
      }
    });
  }, [searchTerm, currentFilter, currentCategory, sortOption]);

  return (
    <>
      <Header isGridView={isGridView} onViewToggle={() => setIsGridView(!isGridView)} />
      
      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      
      <CategoryTabs
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />
      
      <ResultsInfo
        resultCount={filteredParks.length}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      
      <div className={`p-4 grid gap-4 ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredParks.map(park => (
          <ParkCard
            key={park.id}
            park={park}
            isGridView={isGridView}
          />
        ))}
        
        {filteredParks.length === 0 && (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">
              Geen locaties gevonden met deze filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCurrentFilter('all');
                setCurrentCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Filters resetten
            </button>
          </div>
        )}
      </div>

      <footer className="bg-blue-500 text-white text-center text-sm py-4">
        <div>&copy; 2025 ParkNL - Alle rechten voorbehouden</div>
      </footer>
    </>
  );
}

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

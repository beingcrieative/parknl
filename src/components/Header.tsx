import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faTh } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  isGridView: boolean;
  onViewToggle: () => void;
}

export default function Header({ isGridView, onViewToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-blue-500 text-white shadow-md">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">ParkNL</h1>
            <div className="text-sm opacity-80">Attracties, Dierentuinen & Meer</div>
          </div>
          <button 
            onClick={onViewToggle}
            className="p-2 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label={isGridView ? 'Schakel naar lijstweergave' : 'Schakel naar rasterweergave'}
          >
            <FontAwesomeIcon icon={isGridView ? faThList : faTh} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
} 
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faTag, faDirections, faChevronDown, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import type { Park } from '@/types/park';

interface ParkCardProps {
  park: Park;
  isGridView: boolean;
}

const typeLabels = {
  pretpark: 'Pretpark',
  dierentuin: 'Dierentuin',
  museum: 'Museum',
  festival: 'Festival/Event'
};

const typeColors = {
  pretpark: 'bg-amber-100 text-amber-800',
  dierentuin: 'bg-green-100 text-green-800',
  museum: 'bg-blue-100 text-blue-800',
  festival: 'bg-red-100 text-red-800'
};

export default function ParkCard({ park, isGridView }: ParkCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm relative
      ${isGridView ? 'h-full' : 'mb-3'}`}>
      <div className={`${typeColors[park.type]} absolute top-0 right-0 text-xs font-medium px-2 py-1 rounded-bl-lg`}>
        {typeLabels[park.type]}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{park.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3 mr-1" />
          {park.location}
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
            {park.price}
          </span>
          <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
            {park.distance} km ({park.travelTime})
          </span>
          <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-full">
            {park.ageRange}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {park.description}
        </p>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${showDetails ? 'max-h-48' : 'max-h-0'}`}>
        <div className="px-4 pb-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-500">Arrangementen:</div>
            <div className="text-right">{park.arrangements}</div>

            <div className="text-gray-500">Overnachting:</div>
            <div className="text-right">
              {park.hasStay ? (
                <span className="text-green-600">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                  Beschikbaar
                </span>
              ) : (
                <span className="text-gray-400">
                  <FontAwesomeIcon icon={faTimesCircle} className="mr-1" />
                  Niet beschikbaar
                </span>
              )}
            </div>

            <div className="text-gray-500">Doelgroep:</div>
            <div className="text-right">{park.ageRange}</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full py-2 text-sm text-blue-500 border-t border-gray-100 hover:bg-gray-50 transition-colors"
      >
        Details{' '}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-1 transition-transform ${showDetails ? 'rotate-180' : ''}`}
        />
      </button>

      <div className="grid grid-cols-3 border-t border-gray-100">
        <a
          href={park.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-2 text-sm text-blue-500 hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          Website
        </a>
        <a
          href={park.priceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-2 text-sm text-blue-500 hover:bg-gray-50 transition-colors border-x border-gray-100"
        >
          <FontAwesomeIcon icon={faTag} className="mr-2" />
          Prijzen
        </a>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(park.name + ' ' + park.location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-2 text-sm text-blue-500 hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon icon={faDirections} className="mr-2" />
          Route
        </a>
      </div>
    </div>
  );
} 
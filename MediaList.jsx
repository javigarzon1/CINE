import React, { useState, useMemo, useEffect } from 'react';
import MediaCard from '../common/MediaCard';
import { Search } from 'lucide-react';

const MediaList = ({ items, type, title, globalSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    if (globalSearchTerm !== undefined) {
      setSearchTerm(globalSearchTerm);
    }
  }, [globalSearchTerm]);

  const years = useMemo(() => {
    const allYears = items.map(item => item.year);
    return [...new Set(allYears)].sort((a, b) => b - a);
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear === '' || item.year.toString() === selectedYear;
      return matchesSearch && matchesYear;
    });
  }, [items, searchTerm, selectedYear]);

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full">
        <div className="max-w-[1600px] mx-auto px-6 py-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold mb-6">{title}</h1>
            
            {/* Filtros locales */}
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-white focus:outline-none focus:border-gray-700 text-sm"
              >
                <option value="">Todos los años</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <p className="text-gray-500 text-sm">
              {filteredItems.length} {filteredItems.length === 1 ? 'resultado' : 'resultados'}
            </p>
          </div>

          {/* Grid de items */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredItems.map(item => (
                <MediaCard
                  key={item.id}
                  item={item}
                  type={type}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No se encontraron resultados</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MediaList;

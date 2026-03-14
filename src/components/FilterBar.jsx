const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => String(currentYear - i));

const FilterBar = ({
  genres, selectedGenre, selectedYear, selectedRating, searchQuery,
  onGenreChange, onYearChange, onRatingChange, onSearchChange
}) => {
  const selectClass = "h-10 bg-secondary border border-border rounded-md px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer";

  return (
    <div className="flex flex-wrap gap-3 items-center px-4 md:px-8 py-4">
      <input type="text" value={searchQuery} onChange={e => onSearchChange(e.target.value)} placeholder="Buscar por título..." className="h-10 w-full md:w-64 bg-secondary border border-border rounded-md px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
      <select value={selectedGenre} onChange={e => onGenreChange(e.target.value)} className={selectClass}>
        <option value="">Todos los géneros</option>
        {genres.map(g => <option key={g.id} value={String(g.id)}>{g.name}</option>)}
      </select>
      <select value={selectedYear} onChange={e => onYearChange(e.target.value)} className={selectClass}>
        <option value="">Todos los años</option>
        {years.map(y => <option key={y} value={y}>{y}</option>)}
      </select>
      <select value={selectedRating} onChange={e => onRatingChange(e.target.value)} className={selectClass}>
        <option value="">Cualquier valoración</option>
        <option value="9">⭐ 9+</option>
        <option value="8">⭐ 8+</option>
        <option value="7">⭐ 7+</option>
        <option value="6">⭐ 6+</option>
        <option value="5">⭐ 5+</option>
      </select>
    </div>
  );
};

export default FilterBar;
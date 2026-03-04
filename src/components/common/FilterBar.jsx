import { Search } from "lucide-react";
import { Input } from "@/components/ui/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterBar = ({ search, onSearchChange, year, onYearChange, sort, onSortChange, years, resultCount }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between mb-6">
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por título..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 bg-secondary border-border"
          />
        </div>
        {/* Year filter */}
        <Select value={year} onValueChange={onYearChange}>
          <SelectTrigger className="w-full sm:w-32 bg-secondary border-border">
            <SelectValue placeholder="Año" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="all">Todos</SelectItem>
            {years.map((y) => (
              <SelectItem key={y} value={String(y)}>{y}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Sort */}
        <Select value={sort} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-40 bg-secondary border-border">
            <SelectValue placeholder="Ordenar" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="rating">Mayor rating</SelectItem>
            <SelectItem value="year">Más reciente</SelectItem>
            <SelectItem value="title">A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        {resultCount} resultado{resultCount !== 1 ? "s" : ""}
      </span>
    </div>
  );
};
export default FilterBar;

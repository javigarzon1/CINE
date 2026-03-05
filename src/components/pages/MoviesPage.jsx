import { useState, useMemo } from "react";
import { getMovies, getMovieCategories } from "../../services/api";
import MediaCard from "../common/MediaCard";
import MediaDetailModal from "../common/MediaDetailModal";
import { Input } from "../../components/ui/ui";
import { Search } from "lucide-react";

const MoviesPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const allMovies = getMovies();
  const categories = getMovieCategories();

  const filtered = useMemo(() => {
    let result = [...allMovies];

    if (activeCategory !== "Todas") {
      result = result.filter((m) => m.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((m) =>
        m.title.toLowerCase().includes(q) || m.genres.some((g) => g.toLowerCase().includes(q))
      );
    }

    return result.sort((a, b) => b.rating - a.rating);
  }, [allMovies, search, activeCategory]);

  const categoryEmojis = {
    Todas: "🎬",
    Terror: "👻",
    Suspense: "🔍",
    Drama: "🎭",
    Históricas: "🏛️",
    Comedias: "😂",
    Infantiles: "🧸",
  };

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">🎬 Películas</h1>

      {/* Search */}
      <div className="relative w-full sm:w-80 mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar película..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-secondary border-border"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["Todas", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {categoryEmojis[cat]} {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {filtered.map((item) => (
          <MediaCard key={item.id} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">No se encontraron películas</p>
          <p className="text-sm mt-1">Prueba con otra categoría o búsqueda</p>
        </div>
      )}

      <MediaDetailModal item={selectedItem} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default MoviesPage;

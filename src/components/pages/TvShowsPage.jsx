import { useState, useMemo } from "react";
import { getTvShows, getPlatforms, getSeriesCategories } from "../../services/api";
import MediaCard from "../common/MediaCard";
import MediaDetailModal from "../common/MediaDetailModal";
import { Input } from "../ui/ui";
import { Search } from "lucide-react";

const TvShowsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [activePlatform, setActivePlatform] = useState("Todas");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const allShows = getTvShows();
  const platforms = getPlatforms();
  const categories = getSeriesCategories();

  const filtered = useMemo(() => {
    let result = [...allShows];

    if (activePlatform !== "Todas") {
      result = result.filter((s) => s.platform === activePlatform);
    }

    if (activeCategory !== "Todas") {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((m) =>
        m.title.toLowerCase().includes(q) || m.genres.some((g) => g.toLowerCase().includes(q))
      );
    }

    return result.sort((a, b) => b.rating - a.rating);
  }, [allShows, search, activePlatform, activeCategory]);

  const platformLogos = {
    Todas: "📺",
    Netflix: "🔴",
    HBO: "🟣",
    Movistar: "🔵",
    Apple: "🍎",
    Prime: "🟡",
    Disney: "✨",
  };

  const categoryEmojis = {
    Todas: "🎭",
    Terror: "👻",
    Suspense: "🔍",
    Drama: "🎭",
    Comedias: "😂",
    Infantiles: "🧸",
  };

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">📺 Series</h1>

      {/* Search */}
      <div className="relative w-full sm:w-80 mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar serie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-secondary border-border"
        />
      </div>

      {/* Platform Tabs */}
      <div className="mb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Plataforma</p>
        <div className="flex flex-wrap gap-2">
          {["Todas", ...platforms].map((plat) => (
            <button
              key={plat}
              onClick={() => setActivePlatform(plat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activePlatform === plat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {platformLogos[plat]} {plat}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-4">Género</p>
        <div className="flex flex-wrap gap-2">
          {["Todas", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryEmojis[cat] || "📁"} {cat}
            </button>
          ))}
        </div>
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
          <p className="text-lg">No se encontraron series</p>
          <p className="text-sm mt-1">Prueba con otra plataforma o género</p>
        </div>
      )}

      <MediaDetailModal item={selectedItem} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default TvShowsPage;

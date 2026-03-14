import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { discoverTV, getTVGenres } from "@/lib/tmdb";
import FilterBar from "@/components/FilterBar";
import MediaCard from "@/components/MediaCard";

const Series = () => {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data: genresData } = useQuery({ queryKey: ["tvGenres"], queryFn: getTVGenres });

  const { data, isLoading } = useQuery({
    queryKey: ["discoverTV", genre, year, rating, page],
    queryFn: () => discoverTV({
      with_genres: genre || undefined,
      first_air_date_year: year || undefined,
      "vote_average.gte": rating || undefined,
      page,
    }),
  });

  let items = data?.results || [];
  if (search) {
    items = items.filter(m =>
      (m.name || "").toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold px-4 md:px-8 mb-2">Series</h1>
        <p className="text-muted-foreground px-4 md:px-8 mb-4">Explora el catálogo completo de series</p>

        <FilterBar
          genres={genresData?.genres || []}
          selectedGenre={genre}
          selectedYear={year}
          selectedRating={rating}
          searchQuery={search}
          onGenreChange={v => { setGenre(v); setPage(1); }}
          onYearChange={v => { setYear(v); setPage(1); }}
          onRatingChange={v => { setRating(v); setPage(1); }}
          onSearchChange={setSearch}
        />

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 md:px-8">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="aspect-[2/3] rounded-lg bg-secondary animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 md:px-8">
            {items.map(m => (
              <MediaCard key={m.id} item={m} type="tv" />
            ))}
          </div>
        )}

        {data && data.total_pages > 1 && (
          <div className="flex justify-center gap-4 py-10">
            <button
              disabled={page <= 1}
              onClick={() => setPage(p => p - 1)}
              className="px-4 py-2 bg-secondary rounded-md text-sm font-medium disabled:opacity-30 hover:bg-accent transition-colors"
            >
              Anterior
            </button>
            <span className="flex items-center text-sm text-muted-foreground">
              Página {page} de {data.total_pages}
            </span>
            <button
              disabled={page >= data.total_pages}
              onClick={() => setPage(p => p + 1)}
              className="px-4 py-2 bg-secondary rounded-md text-sm font-medium disabled:opacity-30 hover:bg-accent transition-colors"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Series;
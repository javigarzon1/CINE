import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Star, Clock, Calendar } from "lucide-react";
import {
  getMovieDetail, getTVDetail,
  getMovieCredits, getTVCredits,
  getSimilarMovies, getSimilarTV,
  getMovieVideos, getTVVideos,
  getBackdropUrl, getImageUrl,
} from "../lib/tmdb";
import MediaCarousel from "../components/MediaCarousel";

const Detail = ({ type }) => {
  const { id } = useParams();
  const numId = Number(id);

  const { data: detail } = useQuery({
    queryKey: [type, "detail", numId],
    queryFn: () => type === "movie" ? getMovieDetail(numId) : getTVDetail(numId),
    enabled: !!numId,
  });

  const { data: credits } = useQuery({
    queryKey: [type, "credits", numId],
    queryFn: () => type === "movie" ? getMovieCredits(numId) : getTVCredits(numId),
    enabled: !!numId,
  });

  const { data: similar } = useQuery({
    queryKey: [type, "similar", numId],
    queryFn: () => type === "movie" ? getSimilarMovies(numId) : getSimilarTV(numId),
    enabled: !!numId,
  });

  const { data: videos } = useQuery({
    queryKey: [type, "videos", numId],
    queryFn: async () => {
      const esData = type === "movie" ? await getMovieVideos(numId) : await getTVVideos(numId);
      if (esData.results?.length) return esData;
      // Fallback to English if no Spanish videos
      const endpoint = type === "movie" ? `/movie/${numId}/videos` : `/tv/${numId}/videos`;
      const res = await fetch(`https://api.themoviedb.org/3${endpoint}?api_key=2dca580c2a14b55200e784d157207b4d&language=en-US`);
      return res.json();
    },
    enabled: !!numId,
  });

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const trailers = (videos?.results || []).filter(
    v => v.site === "YouTube" && (v.type === "Trailer" || v.type === "Teaser")
  );

  const title = detail.title || detail.name || "";
  const year = (detail.release_date || detail.first_air_date || "").slice(0, 4);
  const cast = credits?.cast?.slice(0, 12) || [];

  return (
    <div className="min-h-screen">
      <div className="relative h-[70vh] min-h-[400px]">
        <img src={getBackdropUrl(detail.backdrop_path)} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative -mt-72 z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <img src={getImageUrl(detail.poster_path, "w500")} alt={title} className="w-48 md:w-64 rounded-xl shadow-2xl border border-border" />
          </div>

          <div className="flex-1 space-y-4 pt-4">
            <h1 className="text-3xl md:text-5xl font-black leading-tight">{title}</h1>
            {detail.tagline && <p className="text-muted-foreground italic text-lg">"{detail.tagline}"</p>}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-foreground font-bold">{detail.vote_average.toFixed(1)}</span>
              </span>
              {year && <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {year}</span>}
              {detail.runtime && <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {detail.runtime} min</span>}
              {detail.number_of_seasons && <span>{detail.number_of_seasons} temporada{detail.number_of_seasons > 1 ? "s" : ""}</span>}
            </div>
            <div className="flex flex-wrap gap-2">
              {detail.genres.map(g => (
                <span key={g.id} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground">{g.name}</span>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sinopsis</h3>
              <p className="text-muted-foreground leading-relaxed">{detail.overview || "Sin sinopsis disponible."}</p>
            </div>
          </div>
        </div>

        {trailers.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">🎬 Trailers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trailers.slice(0, 4).map(v => (
                <a
                  key={v.id}
                  href={`https://www.youtube.com/watch?v=${v.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video rounded-xl overflow-hidden bg-secondary block"
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.key}/hqdefault.jpg`}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white truncate">{v.name}</p>
                </a>
              ))}
            </div>
          </div>
        )}
        {cast.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Reparto</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {cast.map(c => (
                <div key={c.id} className="text-center">
                  <div className="w-full aspect-square rounded-full overflow-hidden bg-secondary mb-2 mx-auto max-w-[100px]">
                    <img src={getImageUrl(c.profile_path, "w185")} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-medium truncate">{c.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{c.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {similar?.results && similar.results.length > 0 && (
          <div className="mt-12 pb-16">
            <MediaCarousel title="Similares" items={similar.results} type={type} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;

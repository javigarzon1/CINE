import { useQuery } from "@tanstack/react-query";
import { getTrending, getPopularMovies, getPopularTV, getTopRatedMovies } from "../lib/tmdb";
import HeroSection from "../components/HeroSection";
import MediaCarousel from "../components/MediaCarousel";

const Index = () => {
  const { data: trending } = useQuery({ queryKey: ["trending"], queryFn: getTrending });
  const { data: popularMovies } = useQuery({ queryKey: ["popularMovies"], queryFn: () => getPopularMovies() });
  const { data: popularTV } = useQuery({ queryKey: ["popularTV"], queryFn: () => getPopularTV() });
  const { data: topRated } = useQuery({ queryKey: ["topRatedMovies"], queryFn: () => getTopRatedMovies() });

  const hero = trending?.results?.[0];

  return (
    <div className="min-h-screen">
      {hero && <HeroSection item={hero} />}
      <div className="space-y-10 pb-16 -mt-16 relative z-10">
        {trending?.results && <MediaCarousel title="🔥 Tendencias" items={trending.results.slice(1, 20)} />}
        {popularMovies?.results && <MediaCarousel title="🎬 Películas Populares" items={popularMovies.results} type="movie" />}
        {popularTV?.results && <MediaCarousel title="📺 Series Populares" items={popularTV.results} type="tv" />}
        {topRated?.results && <MediaCarousel title="⭐ Mejor Valoradas" items={topRated.results} type="movie" />}
      </div>
    </div>
  );
};

export default Index;
import { Link } from "react-router-dom";
import { Play, Info } from "lucide-react";
import { getBackdropUrl } from "@/lib/tmdb";

const HeroSection = ({ item }) => {
  const title = item.title || item.name || "";
  const type = item.media_type === "tv" ? "tv" : "movie";

  return (
    <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={getBackdropUrl(item.backdrop_path)} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-end pb-24 md:pb-32">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">{title}</h1>
          <p className="text-sm md:text-base text-muted-foreground line-clamp-3 leading-relaxed">{item.overview}</p>
          <div className="flex gap-3 pt-2">
            <Link to={`/${type}/${item.id}`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors">
              <Play className="w-4 h-4 fill-current" /> Ver más
            </Link>
            <Link to={`/${type}/${item.id}`} className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-secondary transition-colors">
              <Info className="w-4 h-4" /> Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
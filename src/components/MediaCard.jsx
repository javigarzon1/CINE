import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { getImageUrl } from "@/lib/tmdb";

const MediaCard = ({ item, type }) => {
  const mediaType = type || item.media_type || "movie";
  const title = item.title || item.name || "";
  const year = (item.release_date || item.first_air_date || "").slice(0, 4);

  return (
    <Link to={`/${mediaType}/${item.id}`} className="group relative flex-shrink-0 w-[160px] md:w-[200px]">
      <div className="relative overflow-hidden rounded-lg aspect-[2/3] bg-secondary">
        <img src={getImageUrl(item.poster_path)} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs font-medium text-foreground truncate">{title}</p>
          <p className="text-xs text-muted-foreground">{year}</p>
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-0.5">
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span className="text-xs font-semibold text-foreground">{item.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
import { Star, Play } from "lucide-react";
import { Badge } from "./components/ui/ui";
const MediaCard = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick?.(item)}
      className="group relative flex-shrink-0 w-44 md:w-52 cursor-pointer"
    >
      {/* Poster */}
      <div className="relative overflow-hidden rounded-xl aspect-[2/3] bg-secondary">
        <img
          src={item.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <button className="mb-2 self-center w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform hover:scale-110">
            <Play className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" />
          </button>
          <p className="text-xs text-foreground/80 line-clamp-2">{item.description?.slice(0, 80)}...</p>
        </div>
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {item.featured && (
            <Badge className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 border-0">
              ⭐ Destacado
            </Badge>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-background/70 backdrop-blur-sm text-foreground border-0">
            {item.type === "movie" ? "Película" : "Serie"}
          </Badge>
        </div>
      </div>
      {/* Info */}
      <div className="mt-2 px-1">
        <h3 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-muted-foreground">{item.year}</span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-primary" fill="currentColor" />
            <span className="text-xs font-medium text-foreground">{item.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediaCard;

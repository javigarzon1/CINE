import { Play, Star, Clock, Clapperboard, Tv } from "lucide-react";
import { Badge, Button } from "@/components/ui/ui";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const MediaDetailModal = ({ item, open, onClose }) => {
  if (!item) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
        {/* Backdrop image */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
          <img
            src={item.backdrop || item.poster}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground drop-shadow-lg">
                {item.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Detalles de {item.title}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
        {/* Content */}
        <div className="px-6 pb-6 space-y-4">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-primary">
              <Star className="h-4 w-4" fill="currentColor" />
              <span className="font-semibold">{item.rating}</span>
            </div>
            <span className="text-muted-foreground">{item.year}</span>
            {item.duration && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{item.duration}</span>
              </div>
            )}
            {item.seasons && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Tv className="h-3.5 w-3.5" />
                <span>{item.seasons} temp · {item.episodes} ep</span>
              </div>
            )}
            {item.director && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clapperboard className="h-3.5 w-3.5" />
                <span>{item.director}</span>
              </div>
            )}
          </div>
          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {item.genres?.map((genre) => (
              <Badge key={genre} variant="secondary" className="text-xs bg-secondary text-secondary-foreground border-0">
                {genre}
              </Badge>
            ))}
          </div>
          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          {/* Play button */}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-11 font-semibold">
            <Play className="h-5 w-5" fill="currentColor" />
            Reproducir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default MediaDetailModal;
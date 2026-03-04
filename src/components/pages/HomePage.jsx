import { useState } from "react";
import { Play, Info } from "lucide-react";
import { Button, Input } from "./components/ui/ui";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./components/ui/dialog";
import MediaCarousel from "./components/MediaCarousel";
import MediaDetailModal from "./components/MediaDetailModal";
import { getTrending, getMovies, getTvShows, getFeatured } from "@/services/api";


const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const featured = getFeatured();
  const hero = featured[0];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <img
          src={hero.backdrop || hero.poster}
          alt={hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="relative container h-full flex flex-col justify-end pb-16 md:pb-20 px-4">
          <div className="max-w-xl space-y-4">
            <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground drop-shadow-2xl">
              {hero.title}
            </h1>
            <p className="text-sm md:text-base text-foreground/80 line-clamp-3 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex gap-3 pt-2">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-11 px-6 font-semibold shadow-lg shadow-primary/25">
                <Play className="h-5 w-5" fill="currentColor" />
                Reproducir
              </Button>
              <Button
                variant="secondary"
                className="gap-2 h-11 px-6 bg-secondary/80 backdrop-blur-sm hover:bg-secondary"
                onClick={() => setSelectedItem(hero)}
              >
                <Info className="h-5 w-5" />
                Más info
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Carousels */}
      <div className="-mt-10 relative z-10 space-y-2">
        <MediaCarousel title="🔥 Tendencias" items={getTrending()} onCardClick={setSelectedItem} />
        <MediaCarousel title="🎬 Películas populares" items={getMovies()} onCardClick={setSelectedItem} />
        <MediaCarousel title="📺 Series populares" items={getTvShows()} onCardClick={setSelectedItem} />
      </div>
      {/* Detail Modal */}
      <MediaDetailModal item={selectedItem} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
export default HomePage;

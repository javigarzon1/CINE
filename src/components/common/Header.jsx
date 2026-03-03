import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { searchMedia } from "@/services/api";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/movies", label: "Películas" },
  { to: "/tv-shows", label: "Series" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.trim().length > 1) {
      setSearchResults(searchMedia(value).slice(0, 6));
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (item) => {
    setSearchQuery("");
    setSearchResults([]);
    setSearchOpen(false);
    // Navigate to the appropriate page
    if (item.type === "movie") navigate("/movies");
    else navigate("/tv-shows");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Film className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-display text-3xl tracking-wider text-foreground">
            MOV<span className="text-primary">IEW</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search + Mobile menu */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Input
                    autoFocus
                    placeholder="Buscar películas, series..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-48 md:w-72 bg-secondary border-border text-sm"
                  />
                  {searchResults.length > 0 && (
                    <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
                      {searchResults.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleResultClick(item)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-secondary transition-colors text-left"
                        >
                          <img
                            src={item.poster}
                            alt={item.title}
                            className="w-8 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.year} · {item.type === "movie" ? "Película" : "Serie"}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Button variant="ghost" size="icon" onClick={() => { setSearchOpen(false); setSearchQuery(""); setSearchResults([]); }}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-64">
              <SheetTitle className="font-display text-2xl tracking-wider mb-6">
                MOV<span className="text-primary">IEW</span>
              </SheetTitle>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      location.pathname === link.to
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
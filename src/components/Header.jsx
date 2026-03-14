import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Film, Search, Menu, X } from "lucide-react";
import { searchMulti, getImageUrl } from "@/lib/tmdb";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [location]);

  useEffect(() => {
    if (query.length < 2) { setResults([]); return; }
    const t = setTimeout(async () => {
      const data = await searchMulti(query);
      setResults(data.results.filter(r => r.media_type === "movie" || r.media_type === "tv").slice(0, 8));
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/movies", label: "Películas" },
    { to: "/series", label: "Series" },
  ];

  const goTo = (item) => {
    const type = item.media_type === "tv" ? "tv" : "movie";
    navigate(`/${type}/${item.id}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" : "bg-gradient-to-b from-background/80 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Film className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CINE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === l.to ? "text-primary" : "text-muted-foreground")}>{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div ref={searchRef} className="relative">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar..." className="w-48 md:w-64 h-9 bg-secondary border border-border rounded-md px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <button onClick={() => { setSearchOpen(false); setQuery(""); }}><X className="w-5 h-5 text-muted-foreground hover:text-foreground" /></button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)}><Search className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" /></button>
            )}
            {results.length > 0 && searchOpen && (
              <div className="absolute top-12 right-0 w-72 md:w-80 bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
                {results.map(r => (
                  <button key={r.id} onClick={() => goTo(r)} className="flex items-center gap-3 w-full px-3 py-2 hover:bg-accent transition-colors text-left">
                    <img src={getImageUrl(r.poster_path, "w92")} alt={r.title || r.name} className="w-10 h-14 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-foreground">{r.title || r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.media_type === "tv" ? "Serie" : "Película"} · ⭐ {r.vote_average.toFixed(1)}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={cn("block px-4 py-3 text-sm font-medium border-b border-border transition-colors", location.pathname === l.to ? "text-primary bg-accent" : "text-muted-foreground hover:bg-accent")}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
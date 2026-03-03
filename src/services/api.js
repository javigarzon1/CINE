const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    type: "movie",
    rating: 8.8,
    featured: true,
    genres: ["Sci-Fi", "Aventura", "Drama"],
    description: "Paul Atreides se une a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia. Enfrentándose a una elección entre el amor de su vida y el destino del universo conocido, debe evitar un terrible futuro.",
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nez7S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    duration: "2h 46min",
    director: "Denis Villeneuve"
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    type: "movie",
    rating: 8.9,
    featured: true,
    genres: ["Drama", "Historia", "Biografía"],
    description: "La historia del científico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    duration: "3h 0min",
    director: "Christopher Nolan"
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    type: "movie",
    rating: 8.7,
    featured: false,
    genres: ["Animación", "Acción", "Aventura"],
    description: "Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn a través del Multiverso.",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    duration: "2h 20min",
    director: "Joaquim Dos Santos"
  },
  {
    id: 4,
    title: "Killers of the Flower Moon",
    year: 2023,
    type: "movie",
    rating: 8.0,
    featured: false,
    genres: ["Drama", "Crimen", "Historia"],
    description: "Miembros de la nación Osage son asesinados bajo misteriosas circunstancias en la década de 1920, provocando una importante investigación del FBI.",
    poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
    duration: "3h 26min",
    director: "Martin Scorsese"
  },
  {
    id: 5,
    title: "Poor Things",
    year: 2023,
    type: "movie",
    rating: 8.3,
    featured: false,
    genres: ["Comedia", "Drama", "Romance"],
    description: "La increíble historia de Bella Baxter, una joven traída de vuelta a la vida por el brillante y poco ortodoxo científico Dr. Godwin Baxter.",
    poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    duration: "2h 21min",
    director: "Yorgos Lanthimos"
  },
  {
    id: 6,
    title: "The Batman",
    year: 2022,
    type: "movie",
    rating: 7.8,
    featured: false,
    genres: ["Acción", "Crimen", "Drama"],
    description: "Cuando un asesino en serie ataca a la élite de Gotham, una serie de pistas crípticas envía al Caballero Oscuro a una investigación en el submundo.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlMFUwHCmRBCFo.jpg",
    duration: "2h 56min",
    director: "Matt Reeves"
  },
  {
    id: 7,
    title: "Everything Everywhere All at Once",
    year: 2022,
    type: "movie",
    rating: 8.9,
    featured: true,
    genres: ["Acción", "Aventura", "Comedia"],
    description: "Una inmigrante china se ve envuelta en una aventura loca en la que solo ella puede salvar el mundo explorando otros universos.",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fMBs5CXKF4lik8M1JAF20RQI8AG.jpg",
    duration: "2h 19min",
    director: "Daniel Kwan, Daniel Scheinert"
  },
  {
    id: 8,
    title: "Top Gun: Maverick",
    year: 2022,
    type: "movie",
    rating: 8.2,
    featured: false,
    genres: ["Acción", "Drama"],
    description: "Después de más de treinta años de servicio, Pete Mitchell sigue donde siempre, forzando los límites como un valiente piloto de pruebas.",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/AaV1YIdWKRUzEMqMYTNDIVgSMSp.jpg",
    duration: "2h 11min",
    director: "Joseph Kosinski"
  },
  {
    id: 9,
    title: "Interstellar",
    year: 2014,
    type: "movie",
    rating: 9.0,
    featured: true,
    genres: ["Sci-Fi", "Aventura", "Drama"],
    description: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    duration: "2h 49min",
    director: "Christopher Nolan"
  },
  {
    id: 10,
    title: "Blade Runner 2049",
    year: 2017,
    type: "movie",
    rating: 8.0,
    featured: false,
    genres: ["Sci-Fi", "Drama", "Thriller"],
    description: "El oficial K de LAPD descubre un secreto enterrado durante mucho tiempo que tiene el potencial de hundir en el caos lo que queda de la sociedad.",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
    duration: "2h 44min",
    director: "Denis Villeneuve"
  }
];
const tvShows = [
  {
    id: 101,
    title: "Breaking Bad",
    year: 2008,
    type: "series",
    rating: 9.5,
    featured: true,
    genres: ["Drama", "Crimen", "Thriller"],
    description: "Un profesor de química de secundaria al que le diagnostican cáncer de pulmón inoperable se dedica a fabricar y vender metanfetamina para asegurar el futuro financiero de su familia.",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    seasons: 5,
    episodes: 62
  },
  {
    id: 102,
    title: "Stranger Things",
    year: 2016,
    type: "series",
    rating: 8.7,
    featured: true,
    genres: ["Drama", "Fantasía", "Terror"],
    description: "Cuando un niño desaparece, un pueblo pequeño descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales y una niña muy extraña.",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlYj2O0gkHVcB0KMSIY7y.jpg",
    seasons: 4,
    episodes: 34
  },
  {
    id: 103,
    title: "The Last of Us",
    year: 2023,
    type: "series",
    rating: 8.8,
    featured: true,
    genres: ["Drama", "Acción", "Aventura"],
    description: "Joel y Ellie, dos supervivientes conectados por la dureza del mundo en el que viven, se ven obligados a soportar circunstancias brutales y despiadados asesinos en un viaje a través de la América post-pandémica.",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    seasons: 2,
    episodes: 17
  },
  {
    id: 104,
    title: "House of the Dragon",
    year: 2022,
    type: "series",
    rating: 8.4,
    featured: false,
    genres: ["Drama", "Fantasía", "Acción"],
    description: "Una precuela de Juego de Tronos ambientada 200 años antes de los eventos de la serie original. Cuenta la historia de la Casa Targaryen.",
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    seasons: 2,
    episodes: 18
  },
  {
    id: 105,
    title: "Wednesday",
    year: 2022,
    type: "series",
    rating: 8.1,
    featured: false,
    genres: ["Comedia", "Crimen", "Fantasía"],
    description: "La inteligente y sarcástica Wednesday Addams investiga una serie de asesinatos que han aterrorizado a la comunidad local mientras navega sus nuevas relaciones en la Academia Nevermore.",
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsNBBngSAb6w2p70SQ7eR.jpg",
    seasons: 1,
    episodes: 8
  },
  {
    id: 106,
    title: "The Mandalorian",
    year: 2019,
    type: "series",
    rating: 8.7,
    featured: false,
    genres: ["Acción", "Aventura", "Sci-Fi"],
    description: "Las aventuras de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.",
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    seasons: 3,
    episodes: 24
  },
  {
    id: 107,
    title: "Dark",
    year: 2017,
    type: "series",
    rating: 8.8,
    featured: false,
    genres: ["Drama", "Misterio", "Sci-Fi"],
    description: "La desaparición de un niño expone las relaciones entre cuatro familias y revela una siniestra conspiración de viajes en el tiempo que abarca varias generaciones.",
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iICfelNPbQSOSi0pfGaw7xQrCAh.jpg",
    seasons: 3,
    episodes: 26
  },
  {
    id: 108,
    title: "Arcane",
    year: 2021,
    type: "series",
    rating: 9.0,
    featured: true,
    genres: ["Animación", "Acción", "Aventura"],
    description: "Ambientada en el universo de League of Legends, la serie sigue los orígenes de dos icónicos campeones y el poder que los separará.",
    poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
    seasons: 2,
    episodes: 18
  }
];
export const getMovies = () => movies;
export const getTvShows = () => tvShows;
export const getAllMedia = () => [...movies, ...tvShows];
export const getFeatured = () => [...movies, ...tvShows].filter(m => m.featured);
export const getTrending = () => [...movies, ...tvShows].sort((a, b) => b.rating - a.rating).slice(0, 8);
export const getMediaById = (id) => [...movies, ...tvShows].find(m => m.id === id);
export const searchMedia = (query) => {
  const q = query.toLowerCase();
  return getAllMedia().filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genres.some(g => g.toLowerCase().includes(q))
  );
};
export const getYears = () => {
  const years = [...new Set(getAllMedia().map(m => m.year))];
  return years.sort((a, b) => b - a);
};
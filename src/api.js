const mockTvShows = [
  {
    id: 1,
    title: "The Last Kingdom",
    description: "Es el año 872 y muchos de los reinos separados de lo que ahora se conoce como Inglaterra han caído en manos de los invasores daneses, dejando al gran reino de Wessex solo y bajo el mando del rey Alfredo el Grande.",
    image: "https://m.media-amazon.com/images/I/71b5mDrvCyL._UF894,1000_QL80_.jpg",
    year: 2023,
    rating: 8.5,
    genre: "Drama"
  },
  {
    id: 2,
    title: "Stranger Things",
    description: "Ambientada durante la década de 1980, la historia se sitúa en el pequeño pueblo ficticio de Hawkins, Indiana, Estados Unidos, donde sus residentes comienzan a lidiar con una dimensión alternativa hostil conocida como Upside Down.",
    image: "https://www.nacionflix.com/__export/1679947679522/sites/debate/img/2023/03/27/stranger-things-5-netflix.jpg_593059942.jpg",
    year: 2023,
    rating: 9.1,
    genre: "Ciencia Ficción"
  },
  {
    id: 3,
    title: "The Crown",
    description: "The Crown es una serie de televisión estadounidense/británica para emisión en streaming de drama histórico acerca del reinado de la reina Isabel II.",
    image: "https://www.nouveautes-tele.com/wp-content/uploads/2022/09/thecrown.jpg",
    year: 2022,
    rating: 8.7,
    genre: "Histórica"
  },
  {
    id: 4,
    title: "Wednesday",
    description: "Wednesday Addams es expulsada de su escuela. Sus padres la transfieren a su antigua escuela, la Academia Nunca Más, ubicada en la ciudad de Jericho, Vermont.",
    image: "https://hips.hearstapps.com/hmg-prod/images/miercoles-netflix-3-1669199747.jpg",
    year: 2024,
    rating: 8.2,
    genre: "Comedia"
  },
  {
    id: 5,
    title: "Breaking Bad",
    description: "Un profesor de química de un instituto diagnosticado con cáncer terminal recurre a la elaboración y venta de metanfetamina para sacar adelante a su familia.",
    image: "https://m.media-amazon.com/images/I/71HvGDa1ZLL._UF1000,1000_QL80_.jpg",
    year: 2021,
    rating: 9.5,
    genre: "Drama"
  },
  {
    id: 6,
    title: "The Mandalorian",
    description: "Narra las aventuras de Din Djarin, un cazarrecompensas mandaloriano solitario en los confines de la galaxia, después de la caída del Imperio Galáctico.",
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/934.jpg",
    year: 2024,
    rating: 8.8,
    genre: "Ciencia Ficción"
  }
];

const mockMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    description: "Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia. Enfrentándose a una elección entre el amor de su vida y el destino del universo.",
    image: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    year: 2024,
    rating: 8.9,
    genre: "Ciencia Ficción"
  },
  {
    id: 2,
    title: "Oppenheimer",
    description: "Aborda la vida del científico J. Robert Oppenheimer y el complejo proceso de creación de la bomba atómica, así como el dilema moral y las consecuencias de sus actos.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    year: 2023,
    rating: 8.8,
    genre: "Biográfica"
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    description: "Tras encontrarse con Gwen Stacy, el agradable vecindario de Brooklyn en el que vive Mike Morales se ve transportado al multiverso, donde Spiderman conocerá a nuevos personajes.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    year: 2023,
    rating: 9.0,
    genre: "Animación"
  },
  {
    id: 4,
    title: "The Batman",
    description: "En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
    year: 2022,
    rating: 8.1,
    genre: "Acción"
  },
  {
    id: 5,
    title: "Inception",
    description: "Dom Cobb es un ladrón capaz de adentrarse en los sueños de la gente y hacerse con sus secretos. Ahora tiene que realizar una incepción para implantar una idea en el subconsciente.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    year: 2021,
    rating: 8.8,
    genre: "Ciencia Ficción"
  },
  {
    id: 6,
    title: "Interstellar",
    description: "Ambientada en un futuro distópico donde la humanidad está luchando por sobrevivir, cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano cerca de Saturno.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    year: 2022,
    rating: 8.6,
    genre: "Aventura"
  }
];

export const getTvShows = () => {
  return mockTvShows;
};

export const getMovies = () => {
  return mockMovies;
};
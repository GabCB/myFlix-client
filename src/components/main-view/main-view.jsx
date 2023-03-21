import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Fantastic Beasts: The Crimes of Grindelwald",
      description:"Set in 1927, it follows Newt Scamander and Albus Dumbledore as they attempt to take down the dark wizard Gellert Grindelwald while facing new threats in a more divided wizarding world.",
      image:
        "https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Crimes_of_Grindelwald#/media/File:Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png",
      genre:"Fantasy",
      director: "David Yates"
    },
    {
      id: 2,
      title: "News of the world",
      description:"The story of a journey across Reconstruction-Era Texas from Wichita Falls to San Antonia for two unlikely companions. Captain Kidd is an older war veteran and Johanna is a ten-year-old white girl who has been recaptured from the Kiowa people, a Native American tribe, that has been raising her as a captive.",
      image:
        "https://en.wikipedia.org/wiki/News_of_the_World_(film)#/media/File:News_of_the_World_film_poster.png",
      genre:"Drama",
      director: "Paul Greengrass"
    },
    {
      id: 3,
      title: "Man on fire",
      description:"Former CIA SAD/SOG officer John W. Creasy visits his old friend Paul Rayburn in Mexico. Rayburn convinces him to take a bodyguard position with Samuel Ramos, a Mexico City automaker whose young daughter Lupita Pita requires a bodyguard for her kidnapping insurance policy to take effect.",
      image:
        "https://www.imdb.com/title/tt0328107/mediaviewer/rm3032648704/?ref_=tt_md_3",
      genre:"Drama",
      director: "Tony Scott"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { getAllFilms } from '../api/films';

const FilmIndex = () => {
  const [films, setFilms] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const films = await getAllFilms();
      const sortedFilms = films.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      setFilms(sortedFilms);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="title">Film Index</h1>
      {films ? (
        <div className="container">
          <div className="columns is-multiline">
            {films.map((film) => (
              <div key={film._id} className="column card m-3 is-one-fifth">
                <Link to={`/film/${film._id}`}>
                  <h2 className="card-header">
                    {film.title} - {film.country}
                  </h2>
                  <div className="card-image">
                    <figure className="image is-4by5">
                      <img src={film.img} alt={film.title} />
                    </figure>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default FilmIndex;
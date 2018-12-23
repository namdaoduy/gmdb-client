import { Server } from './../configs/server'

class _API {
  async getMovies() {
    const res = await fetch(Server + "/movies");
    const result = await res.json();
    return result;
  }

  async getMovieById(movie_id) {
    const res = await fetch(Server + "/movies/id/" + movie_id);
    const result = await res.json();
    return result;
  }

  async getMovieShowtime(movie_id) {
    const res = await fetch(Server + "/showtime/" + movie_id);
    const result = await res.json();
    return result;
  }
}

const API = new _API();
export default API;
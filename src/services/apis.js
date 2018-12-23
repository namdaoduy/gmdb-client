import { Server } from './../configs/server'

const API_URL = Server + "/api";

class _API {
  async getMovies() {
    const res = await fetch(API_URL + "/movies");
    const result = await res.json();
    return result;
  }

  async getMovieById(movie_id) {
    const res = await fetch(API_URL + "/movies/id/" + movie_id);
    const result = await res.json();
    return result;
  }

  async getMovieShowtime(movie_id) {
    const res = await fetch(API_URL + "/showtime/" + movie_id);
    const result = await res.json();
    return result;
  }

  async postLogin(username, password) {
    const res = await fetch(API_URL + "/user/login", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        username: username,
        userpass: password
      })
    });
    const result = await res.json();
    return result;
  }

  async getComments(movie_id) {
    const res = await fetch(API_URL + "/movies/" + movie_id + "/comments");
    const result = await res.json();
    return result;
  }
}

const API = new _API();
export default API;
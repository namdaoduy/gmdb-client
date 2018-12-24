import { Server } from './../configs/server'

const API_URL = Server + "/api";

class _API {
  async getMovies() {
    const res = await fetch(API_URL + "/movies");
    const result = await res.json();
    return result;
  }

  async getMoviesByName(name) {
    const res = await fetch(API_URL + "/movies/name/" + name);
    const result = await res.json();
    return result;
  }

  async getMoviesByType(movie_type) {
    const res = await fetch(API_URL + "/movies/type/" + movie_type);
    const result = await res.json();
    return result;
  }

  async getMovieById(movie_id) {
    const res = await fetch(API_URL + "/movies/id/" + movie_id);
    const result = await res.json();
    return result;
  }

  async putMovieById(movie) {
    const res = await fetch(API_URL + "/movies/id/" + movie.movie_id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(movie)
    });
    const result = await res.json();
    return result;
  }

  async deleteMovieById(movie_id) {
    const res = await fetch(API_URL + "/movies/id/" + movie_id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    });
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

  async postComment(movie_id, name, email, comment, point) {
    const res = await fetch(API_URL + "/movies/" + movie_id + "/comments", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        comment: comment,
        point: point
      })
    });
    const result = await res.json();
    return result;
  }

  async deleteComment(movie_id, rate_id) {
    const res = await fetch(API_URL + "/movies/" + movie_id + "/comments/" + rate_id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    });
    const result = await res.json();
    return result;
  }

  async getCrawlNew() {
    const res = await fetch(API_URL + "/movies/crawl");
    const result = await res.json();
    return result;
  }
}

const API = new _API();
export default API;
import axios from "axios";

export default {
  // Gets all users
  searchBooks: function(bookTerm) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTerm}`);
  }

};

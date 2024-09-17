

import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const api = {
  signup: (fullName, username, email, password) =>
    axios.post(`${API_URL}/register`, {
      fullName,
      username,
      email,
      password,
    }),
  login: (email, password) =>
    axios.post(`${API_URL}/login`, {
      email,
      password,
    }),
};

export default api;

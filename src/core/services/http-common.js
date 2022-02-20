import axios from "axios";
import config from "../../config/config.json";

export default axios.create({
  baseURL: config.app.baseUrl.default,
  timeout: config.app.timeout,
  headers: {
    "Content-type": "application/json",
  },
});

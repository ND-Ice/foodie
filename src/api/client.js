import { create } from "axios";

const apiClient = create({
  baseURL: "https://api.edamam.com/api",
});

export default apiClient;

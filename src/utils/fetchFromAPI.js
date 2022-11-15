import axios from "axios";

import { CONFIG } from "../config";

export const fetchFromAPI = async (endpoint) => {
  const { data } = await axios.get(`${CONFIG.API_BASE_URL}/user/${endpoint}`);

  return data;
};

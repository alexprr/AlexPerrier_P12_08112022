import axios from "axios";

import { CONFIG } from "../config";

import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mocks";

/**
 *
 * @param { string } endpoint
 * @returns an object "data" based on the endpoint call
 */
export const fetchFromAPI = async (endpoint) => {
  let output = {};

  if (CONFIG.MOCK) {
    const URLdetail = endpoint.split("/");
    const userId = Number(URLdetail[0]);

    if (URLdetail.length === 1) {
      output = USER_MAIN_DATA.find((u) => u.id === userId);
    } else {
      switch (URLdetail[1]) {
        case "activity":
          output = { data: USER_ACTIVITY.find((u) => u.userId === userId) };
          break;
        case "average-sessions":
          output = {
            data: USER_AVERAGE_SESSIONS.find((u) => u.userId === userId),
          };
          break;
        case "performance":
          output = { data: USER_PERFORMANCE.find((u) => u.userId === userId) };
          break;
      }
    }
  } else {
    const { data } = await axios.get(`${CONFIG.API_BASE_URL}/user/${endpoint}`);
    output = data;
  }

  return output;
};

import { FORMATTED_SESSIONS, PERFORMANCE_KIND } from "./constants";

export default class FormatUserData {
  /**
   *
   * @param { array } data
   * @returns new array with letters instead of numbers for day property
   */
  static getFormattedSessionsData(data) {
    let averageSessions = [...FORMATTED_SESSIONS];

    for (let item of data) {
      for (let i in item) {
        averageSessions[i].sessionLength = item[i].sessionLength;
      }
    }

    return averageSessions;
  }

  /**
   *
   * @param { array } data
   * @returns new array with formatted user score
   */
  static getFormattedScoreData(data) {
    let userScore = [];

    for (let score of data) {
      userScore.push({
        todayScore: score,
        fill: "#E60000",
      });
    }

    return userScore;
  }

  /**
   *
   * @param { array } data
   * @returns new array w/ formatted date : dd:mm
   */
  static getFormattedDate(data) {
    const formattedData = [];

    for (let item of data) {
      for (let i of item) {
        // eslint-disable-next-line no-unused-vars
        const [yyyy, mm, dd] = i.day.split("-");

        formattedData.push({
          day: `${dd}/${mm}`,
          kilogram: i.kilogram,
          calories: i.calories,
        });
      }
    }

    return formattedData;
  }

  /**
   *
   * @param { array } data
   * @returns new array w/ formatted performance kind properties
   */
  static getFormattedPerformance(data) {
    let performanceData = [];

    for (let item of data) {
      for (let i of item) {
        performanceData.push({
          value: i.value,
          kind: PERFORMANCE_KIND[i.kind],
        });
      }
    }

    return performanceData;
  }
}

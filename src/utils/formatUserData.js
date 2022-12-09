import { FORMATTED_SESSIONS, PERFORMANCE_KIND } from "./constants";

export default class FormatUserData {
  /**
   *
   * @param { array } data
   * @returns new array with letters instead of numbers for day property
   */
  static getFormattedSessionsData(data) {
    let averageSessions = [...FORMATTED_SESSIONS];

    if (data) {
      for (let item in data.sessions) {
        averageSessions[item].sessionLength = data.sessions[item].sessionLength;
      }
      return averageSessions;
    }

    return FORMATTED_SESSIONS;
  }

  /**
   *
   * @param { array } data
   * @returns new array with formatted user score
   */
  static getFormattedScoreData(data) {
    let userScore = [];

    if (data) {
      for (let score of data) {
        userScore.push(
          {
            todayScore: 1 - score,
            fill: "white",
          },
          {
            todayScore: score,
            fill: "#E60000",
          }
        );
      }

      return userScore;
    }

    return this.getDefaultScore();
  }

  /**
   *
   * @param { array } data
   * @returns new array w/ formatted date : dd:mm
   */
  static getFormattedDailyActivity(data) {
    const formattedDailyActivity = [];

    if (data) {
      for (let item of data) {
        // eslint-disable-next-line no-unused-vars
        const [yyyy, mm, dd] = item.day.split("-");

        formattedDailyActivity.push({
          day: `${dd}/${mm}`,
          kilogram: item.kilogram,
          calories: item.calories,
        });
      }

      return formattedDailyActivity;
    }
  }

  /**
   *
   * @param { array } data
   * @returns new array w/ formatted performance kind properties
   */
  static getFormattedPerformance(data) {
    let performanceData = [];

    if (data) {
      for (let item in data.data) {
        performanceData.push({
          value: data.data[item].value,
          kind: PERFORMANCE_KIND[item],
        });
      }

      return performanceData;
    }
  }
}

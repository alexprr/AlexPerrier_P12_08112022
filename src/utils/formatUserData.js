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
   * @param { object } data
   * @returns todayScore property
   */
  static userScoreData(data) {
    if (data.todayScore) {
      return data.todayScore;
    } else {
      data.todayScore = data.score;
    }

    return data.todayScore;
  }

  /**
   *
   * @param { array } data
   * @returns new array with formatted user score
   */
  static getFormattedScoreData(data) {
    let userScore = [];

    if (data) {
      userScore.push(
        {
          todayScore: this.userScoreData(data),
          fill: "#E60000",
        },
        {
          todayScore: 1 - this.userScoreData(data),
          fill: "#FBFBFB",
        }
      );
    }

    return userScore;
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

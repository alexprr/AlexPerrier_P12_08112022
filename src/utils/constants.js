import Calories from "../assets/icons/energy.svg";
import Proteins from "../assets/icons/chicken.svg";
import Glucids from "../assets/icons/apple.svg";
import Lipids from "../assets/icons/cheeseburger.svg";

const NUTRIENTS_ICON = {
  calories: {
    background: "#FBEAEA",
    img: `${Calories}`,
  },
  proteins: {
    background: "#E9F4FB",
    img: `${Proteins}`,
  },
  glucids: {
    background: "#FAF6E5",
    img: `${Glucids}`,
  },
  lipids: {
    background: "#FBEAEF",
    img: `${Lipids}`,
  },
};

const FORMATTED_SESSIONS = [
  {
    day: "L",
    sessionLength: 0,
  },
  {
    day: "M",
    sessionLength: 0,
  },
  {
    day: "M",
    sessionLength: 0,
  },
  {
    day: "J",
    sessionLength: 0,
  },
  {
    day: "V",
    sessionLength: 0,
  },
  {
    day: "S",
    sessionLength: 0,
  },
  {
    day: "D",
    sessionLength: 0,
  },
];

const PERFORMANCE_KIND = {
  1: "Cardio",
  2: "Énergie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

export { NUTRIENTS_ICON, FORMATTED_SESSIONS, PERFORMANCE_KIND };

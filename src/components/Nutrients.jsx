import { NUTRIENTS_ICON } from '../utils/constants'
import NutrientCard from "./NutrientCard"

const Nutrients = ({id, keyData}) => {
  return (
    <div>
      {keyData &&
       keyData.map(user => (
        <div key={id}>
          <NutrientCard 
            count={user.calorieCount}
            unit='kCal'
            nutrient="Calories"
            color={NUTRIENTS_ICON.calories.background}
            icon={NUTRIENTS_ICON.calories.img}
          />
          <NutrientCard 
            count={user.proteinCount}
            unit='g'
            nutrient="Proteines"
            color={NUTRIENTS_ICON.proteins.background}
            icon={NUTRIENTS_ICON.proteins.img}
          />
          <NutrientCard 
            count={user.carbohydrateCount}
            unit='g'
            nutrient="Glucides"
            color={NUTRIENTS_ICON.glucids.background}
            icon={NUTRIENTS_ICON.glucids.img}
          />
          <NutrientCard 
            count={user.lipidCount}
            unit='g'
            nutrient="Glucides"
            color={NUTRIENTS_ICON.lipids.background}
            icon={NUTRIENTS_ICON.lipids.img}
          />
        </div>
       ))}
    </div>
  )
}

export default Nutrients
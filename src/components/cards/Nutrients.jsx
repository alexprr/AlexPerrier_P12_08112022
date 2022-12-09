import PropTypes from 'prop-types'

import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

import NutrientCard from "./NutrientCard"

import { NUTRIENTS_ICON } from '../../utils/constants'
import nutrient from './Nutrient.module.css'

import FormatUserData from '../../utils/formatUserData'

const Nutrients = ({ id }) => {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetchFromAPI(`${id}`).then((data) => {
        setData(data)
        })
    }, [id])

    const keyData = FormatUserData.getKeyData(data)
    
      return (
        <div className={nutrient.keyDataContainer}>
          <div className={nutrient.keyDataCardContainer}>
            <NutrientCard 
              value={keyData?.calorieCount}
              unit='kCal'
              nutrientType="Calories"
              color={NUTRIENTS_ICON.calories.background}
              icon={NUTRIENTS_ICON.calories.img}
            />
            <NutrientCard 
              value={keyData?.proteinCount}
              unit='g'
              nutrientType="Proteines"
              color={NUTRIENTS_ICON.proteins.background}
              icon={NUTRIENTS_ICON.proteins.img}
            />
            <NutrientCard 
              value={keyData?.carbohydrateCount}
              unit='g'
              nutrientType="Glucides"
              color={NUTRIENTS_ICON.glucids.background}
              icon={NUTRIENTS_ICON.glucids.img}
            />
            <NutrientCard 
              value={keyData?.lipidCount}
              unit='g'
              nutrientType="Glucides"
              color={NUTRIENTS_ICON.lipids.background}
              icon={NUTRIENTS_ICON.lipids.img}
            />
        </div>
      </div>
    )
  }

Nutrients.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Nutrients
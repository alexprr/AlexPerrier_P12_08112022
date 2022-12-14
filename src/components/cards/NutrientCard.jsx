import styled from 'styled-components'
import PropTypes from 'prop-types'

import nutrient from './Nutrient.module.css'

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;

  @media (max-width: 1300px) {
    gap: 10px;
    width: 70%
  }
`

const Icon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  border-radius: 6px;

  @media (max-width: 1300px) {
    width: 30px;
    height: 30px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Count = styled.p`
  margin: 0 0 2px 10px;
  font-size: 20px;
  font-weight: 700;
  color: #282D30;

  @media (max-width: 1300px) {
    font-size: 14px;
  }
`

const Nutrient = styled.p`
  margin: 10px 0 0 10px;
  font-size: 14px;
  font-weight: 500;
  color: #74798C;
`

const NutrientCard = ({ unit, value, icon, color, nutrientType }) => {
  return (
    <Card>
      <Icon style={{background: color}}>
        <img className={nutrient.icon_img} src={icon} alt='icon'/>
      </Icon>
      <TextContainer>
        <Count>{value}{unit}</Count>
        <Nutrient>{nutrientType}</Nutrient>
      </TextContainer>
    </Card>
  )
}

NutrientCard.propTypes = {
  unit: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
  nutrient: PropTypes.string
}

export default NutrientCard
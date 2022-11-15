import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 258px;
  height: 124px;
  margin: 30px;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`

const Icon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  border-radius: 6px;
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
`

const Nutrient = styled.p`
  margin: 10px 0 0 10px;
  font-size: 14px;
  font-weight: 500;
  color: #74798C;
`

const NutrientCard = ({ unit, count, icon, color, nutrient }) => {
  return (
    <Card>
      <Icon style={{background: color}}>
        <img src={icon} alt='icon'/>
      </Icon>
      <TextContainer>
        <Count>{count}{unit}</Count>
        <Nutrient>{nutrient}</Nutrient>
      </TextContainer>
    </Card>
  )
}

export default NutrientCard
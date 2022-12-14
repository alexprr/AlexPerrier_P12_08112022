import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchFromAPI } from '../../utils/fetchFromAPI';

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 500;

  @media (max-width: 1200px) {
    font-size: 24px;
  }
`
const Congrats = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`

const Welcome = ({ id }) => {
  const [data, setData] = useState(null)
 
  useEffect(() => {
    fetchFromAPI(`${id}`).then((data) => {
        setData(data)
    })
  }, [id])

  const congratulations = `Félicitations ! Vous avez explosé vos objectifs hier 👏`;

  return (
    <div>
        <Title>Bonjour <span style={{color: '#FF0101'}}>{data?.userInfos?.firstName}</span></Title>
        <Congrats>{congratulations}</Congrats>
    </div>
  )
}

Welcome.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Welcome
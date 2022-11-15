import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 500;
`
const Congrats = styled.p`
  font-size: 18px;
  font-weight: 400;
`

const Header = ({id, userInfos}) => {
  const congratulations = `Félicitations ! Vous avez explosé vos objectifs hier 👏`;
  
  return (
    <div>
      {userInfos && 
      userInfos.map(user => (
        <Title key={id}>Bonjour <span style={{color: '#FF0101'}}>{user.firstName}</span></Title>
      ))}
        
        <Congrats>{congratulations}</Congrats>
    </div>
  )
}

export default Header
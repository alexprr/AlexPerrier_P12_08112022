import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import PropTypes from 'prop-types'

import FormatUserData from '../../utils/formatUserData';

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

import style from './UserScore.module.css'

const UserScore = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFromAPI(`${id}`).then((data) => {
            setData(data)
        })
    }, [id])

    // formatted array to use with RadialBarChart data props
    const userScore = FormatUserData.getFormattedScoreData(data)

  return (
    <div className={style.userScoreContainer}>
        <h2 className={style.userScoreTitle}>Score</h2>

        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart  
                innerRadius="80%" 
                outerRadius="60%"
                width={730} 
                height={250}
                barSize={15}
                data={userScore}  
            >
                <RadialBar 
                    minAngle={15}
                    background={true}
                    dataKey='todayScore'
                />
            </RadialBarChart>
        </ResponsiveContainer>

        <p className={style.userScoreLabel}>
            <span className={style.userScoreValue}>
                {userScore[0].todayScore * 100}% <br />
            </span>
            de votre <br />
            objectif
        </p>
    </div>
  )
}

UserScore.propTypes = {
    id: PropTypes.string.isRequired
}

export default UserScore
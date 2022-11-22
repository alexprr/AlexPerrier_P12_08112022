import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import style from '../styles/UserScore.module.css'

const UserScore = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFromAPI(`${id}`).then((data) => {
            setData(data)
        })
    }, [id])

    const userScoreData = Object.values(data).map(user => {
        if(user.todayScore) {
            return user.todayScore
        } else {
            user.todayScore = user.score
        }

        return user.todayScore
    })

    const getScore = (data) => {
        let userScore = [];

        for(let score of data) {
            userScore.push({
                todayScore: score,
                fill: "#E60000",
            });
        }

        return userScore;
    }

    const userScore = getScore(userScoreData)
    console.log(userScore);
    

  return (
    <div className={style.userScoreContainer}>
        <h2 className={style.userScoreTitle}>Score</h2>

        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={200} height={200}>
                <Pie 
                data={userScore}
                dataKey="todayScore"
                innerRadius={70}
                outerRadius={80}
                startAngle={90}
                >
                    {userScore.map((entry, index) => (
                        <Cell 
                            key={`cell-${index}`}
                            fill={entry.fill}
                            cornerRadius='50%'
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>

        <p className={style.userScoreLabel}>
            {userScore.map((user, index) => (
                <span key={index} className={style.userScoreValue}>
                    {user.todayScore * 100}% <br />
                </span>
            ))}
            {/* <span className={style.userScoreValue}>
                {`${100* userScore[0].todayScore}%`}
                <br />
            </span> */}
            de votre <br />
            score
        </p>
    </div>
  )
}

export default UserScore
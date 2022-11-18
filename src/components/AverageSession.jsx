import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI';

import { FORMATTED_SESSIONS } from '../utils/constants'
import style from '../styles/AverageSession.module.css'

import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

const AverageSession = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFromAPI(`${id}/average-sessions`).then((data) => {
        setData(data)
        })
    }, [id])

    const sessions = Object.values(data).map(user => user.sessions);
    
    const getFormattedData = (data) => {
        let averageSessions = [...FORMATTED_SESSIONS];
        
        for (let item of data) {
            for(let i in item) {
                averageSessions[i].sessionLength = item[i].sessionLength;
            }
        }
    
        return averageSessions;
      }

    const averageSession = getFormattedData(sessions);

    return (
        <div className={style.averageSessionContainer}>
           <h3 className={style.averageSessionTitle}>
                Durée moyenne des <br />
                sessions
           </h3>

           <ResponsiveContainer width="100%" height="100%">
            <LineChart data={averageSession}>
                <XAxis 
                    dataKey="day"
                    tickLine={false} 
                    axisLine={false}
                    stroke="rgba(255, 255, 255, .4"
                    dy={10}
                    tick={{
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                />
                <YAxis 
                    dataKey="sessionLength"
                    domain={[0, "dataMax + 40"]}
                    hide={true}
                />
                <Line 
                    type="monotone"
                    dataKey="sessionLength" 
                    stroke="#fff"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                        stroke: "rgba(255,255,255, 0.6)",
                        strokeWidth: 10,
                        r: 5,
                    }}
                />
                <Tooltip content={<CustomToolType />}/>
            </LineChart>
           </ResponsiveContainer>
        </div>
    )
}

export default AverageSession

function CustomToolType({active, payload}) {
    if(active) {
        return <p className={style.averageSessionTooltipe}>{`${payload[0].value} min`}</p>
    }
}
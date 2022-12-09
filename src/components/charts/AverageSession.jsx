import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import PropTypes from 'prop-types'

import FormatUserData from '../../utils/formatUserData';

import style from './AverageSession.module.css'

import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

const AverageSession = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFromAPI(`${id}/average-sessions`).then((data) => {
        setData(data)
        })
    }, [id])

    // formatted array to use with LineChart data props
    const averageSession = FormatUserData.getFormattedSessionsData(data);

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

AverageSession.propTypes = {
    id: PropTypes.string.isRequired
}

export default AverageSession

function CustomToolType({active, payload}) {
    if(active) {
        return <p className={style.averageSessionTooltipe}>{`${payload[0].value} min`}</p>
    }
}

CustomToolType.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import PropTypes from 'prop-types'

import FormatUserData from '../../utils/formatUserData';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import style from './UserPerformance.module.css'

const UserPerformance = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFromAPI(`${id}/performance`).then((data) => {
        setData(data)
        })
    }, [id])

    // formatted array to use with RadarChart data props
    const performanceData = FormatUserData.getFormattedPerformance(data)
    
  return (
    <div className={style.userPerformanceContainer}>
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart 
                data={performanceData}
                outerRadius={"70%"}
            >
                <PolarGrid stroke='#fff'/>
                <PolarAngleAxis 
                    dataKey="kind"
                    dy={2}
                    dx={-2}
                    stroke='#fff'
                    tickLine={false}
                    tick={{
                        fontSize: 10,
                        fontWeight: 500,
                    }}
                />
                <Radar 
                    name="User" 
                    dataKey="value" 
                    fill="rgba(255, 1, 1, 0.7)"
                />
            </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

UserPerformance.propTypes = {
    id: PropTypes.string.isRequired
}

export default UserPerformance
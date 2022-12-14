import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import PropTypes from 'prop-types'

import FormatUserData from '../../utils/formatUserData';

import style from './DailyActivity.module.css'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * 
 * @param { string } id 
 * @returns React Component : DailyActivity based on user id's.
 */
const DailyActivity = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFromAPI(`${id}/activity`).then((data) => {
      setData(data)
    })
  }, [id])

  const sessions = data.sessions;
  
  // formatted array to use with BarChart data props
  const dailyActivity = FormatUserData.getFormattedDailyActivity(sessions);

  return (
      <div className={style.dailyActivityContainer}>
          <h3 className={style.dailyActivityTitle}>Activité quotidienne</h3>

          <div className={style.dailyActivityLegend}>
            <p className={style.legend}>
              <span className={`${style.legendBullet} ${style.dark}`}></span>
              Poids (kg)
            </p>
            <p className={style.legend}>
              <span className={`${style.legendBullet} ${style.red}`}></span>
              Calories brûlées (kCal)
            </p>
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
              <BarChart
                barGap={8}
                barCategoryGap="30%"
                data={dailyActivity}
                margin={{ top: 120, right: 0, bottom: 10, left: 40 }}
              >
                <CartesianGrid
                  vertical={false}
                  stroke='#dedede' 
                  strokeDasharray="2 3" 
                />
                <XAxis 
                  dataKey="day"
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis 
                  orientation='right'
                  yAxisId='kg'
                  dataKey='kilogram' 
                  domain={['dataMin', 'dataMax']}
                  minTickGap={20}
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis
                  yAxisId='cal'
                  dataKey='calories' 
                  domain={[0, 'dataMax']}
                  minTickGap={20}
                  hide={true}
                />
                <Tooltip content={<CustomTooltip />}/>
                <Bar
                  minPointSize={10}
                  maxBarSize={8}
                  yAxisId='kg'
                  dataKey="kilogram" 
                  name="Poids (kg)"
                  fill="#282D30" 
                  radius={[50, 50, 0, 0]}
                />
                <Bar
                  maxBarSize={8}
                  yAxisId='cal'
                  dataKey="calories" 
                  name="Calories brûlées (kCal)"
                  fill="#e60000" 
                  radius={[50, 50, 0, 0]}
                />
              </BarChart>
          </ResponsiveContainer>
      </div>
  )
}

DailyActivity.propTypes = {
  id: PropTypes.string.isRequired
}

export default DailyActivity

function CustomTooltip({ active, payload}) {
  if(active) {
    return (
      <div style={{ width: '50px', height: '69px', background:"#ec0000", textAlign: 'center', color: 'white', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', fill: 'transparent', borderRadius: 3}}>
        <p className={style.calorieValue}>{payload[0].value} kCal</p>
        <p className={style.kilogramValue}>{payload[1].value} kg</p>
      </div>
    )
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}
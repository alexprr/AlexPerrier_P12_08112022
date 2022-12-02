import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { 
  TopMenu, 
  LeftMenu, 
  Welcome, 
  DailyActivity, 
  Nutrients, 
  AverageSession, 
  UserPerformance, 
  UserScore } 
  from '../components'

  
import { fetchFromAPI } from '../utils/fetchFromAPI'
import dashboard from './Dashboard.module.css'

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetchFromAPI(`${id}`).then((data) => {
      setData(data)
    })
  }, [id])

  const keyData = Object.values(data).map(user => user.keyData)
  
  return (
    <div>
      <TopMenu />
      <div className={dashboard.main_content}>
        <LeftMenu />

        {/* Main user content */}
        <div className={dashboard.user_content}>
          {/* Welcome message */}
          <div className={dashboard.user_content_header}>
            <Welcome id={id}/>
          </div>

          {/* Main infos */}
          <section className={dashboard.user_infos}>

            {/* User charts */}
            <div className={dashboard.user_infos_charts}>
              <div className={dashboard.user_charts_daily}>
                <DailyActivity id={id} />
              </div>
              
              <div className={dashboard.user_charts_cards}>
                <AverageSession id={id} />
                <UserPerformance id={id} />
                <UserScore id={id} />
              </div>
            </div>

            {/* User key data */}
            <div className={dashboard.user_infos_keyData}>
              <Nutrients id={id} keyData={keyData}/>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { TopMenu, LeftMenu, Header, DailyActivity, Nutrients } from '../components'

import style from '../styles/Dashboard.module.css'

import { fetchFromAPI } from '../utils/fetchFromAPI'

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetchFromAPI(`${id}`).then((data) => {
      setData(data)
    })
  }, [id])

  const userInfos = Object.values(data).map(user => user.userInfos)
  const keyData = Object.values(data).map(user => user.keyData)
  
  return (
    <div>
      <TopMenu />
      <div className={style.main_content}>
        <LeftMenu />
        <div className={style.user_content}>
            <Header id={id} userInfos={userInfos}/>
          <section className={style.user_charts}>
            <div className={style.user_charts_cards}>
              <DailyActivity id={id} />
            </div>
            <div className={style.user_charts_nutrients}>
              <Nutrients id={id} keyData={keyData}/>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
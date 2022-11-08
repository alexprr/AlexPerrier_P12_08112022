import style from '../styles/LeftMenu.module.css'

import Relaxing from '../assets/activities/relaxing.svg'
import Swimming from '../assets/activities/swimming.svg'
import Biking from '../assets/activities/biking.svg'
import Fitness from '../assets/activities/fitness.svg'

const LeftMenu = () => {
  return (
    <div className={style.container}>
        <div className={style.activities}>
            <a href='/'><img src={Relaxing} /></a>
            <a href='/'><img src={Swimming} /></a>
            <a href='/'><img src={Biking} /></a>
            <a href='/'><img src={Fitness} /></a>
        </div>
        <p className={style.copyright}>Copyright, SportSee 2020</p>
    </div>
  )
}

export default LeftMenu
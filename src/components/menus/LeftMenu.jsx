import style from './LeftMenu.module.css'

import Relaxing from '../../assets/activities/relaxing.svg'
import Swimming from '../../assets/activities/swimming.svg'
import Biking from '../../assets/activities/biking.svg'
import Fitness from '../../assets/activities/fitness.svg'

const LeftMenu = () => {
  return (
    <div className={style.container}>
        <div className={style.activities}>
            <a href='/'><img src={Relaxing} className={style.activities_img}/></a>
            <a href='/'><img src={Swimming} className={style.activities_img}/></a>
            <a href='/'><img src={Biking} className={style.activities_img}/></a>
            <a href='/'><img src={Fitness} className={style.activities_img}/></a>
        </div>
        <p className={style.copyright}>Copyright, SportSee 2020</p>
    </div>
  )
}

export default LeftMenu
import { PageLayout } from '../components/General/PageLayout'  
import { userLogoutAction } from '../Store/actions/user/userLogoutAction'
import { useDispatch } from 'react-redux'
import '/src/styles/stylesglobales.css'
import styles from '../styles/pages/campaignHome.module.css'
import {Funnel} from '../components/Dashboards/Funnel/Index'
import ActividadReciente from '../components/campaign/ActividadReciente/ActividadReciente'

// import rutas from '../Routes/routes'

const Home = () => {
    const dispatch = useDispatch()

    const nombre = ''

    const handleLogOut = () => {
        dispatch(userLogoutAction())
    }

    return (

        <PageLayout>
            {/* <h1>
        home
            </h1> */}
            <div className={styles.grid}>
                <div className={styles.funnelContainer}>
                    <Funnel></Funnel>
                </div>

                <div className={styles.AD}>
                    <div className={styles.graficoCircular}>
                        {/* <defs>
                            <linearGradient id={styles.gradiente}>
                                <stop offset="0%" stopColor='#e91e63' />
                            </linearGradient>
                        </defs> */}
                        <svg width="150" height="150">
                            <circle r="65" cx="50%" cy="50%" pathLength="100"/>
                            <circle r="65" cx="50%" cy="50%" pathLength="100" strokeLinecap='round'/>

                        </svg>
                        <span>60%</span>

                    </div>
                    <div>
                        <h2>Avance general</h2>
                        <p>Métrica según el avance de todas tus campañas activas</p>
                    </div>
                    
                </div>
                <ActividadReciente></ActividadReciente>

            </div>
            {/* <button onClick={handleLogOut}>
        logout
            </button> */}
        </PageLayout>
    
    ) 
}


export default Home
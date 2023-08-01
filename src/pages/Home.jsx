import { useState } from 'react'
import { PageLayout } from '../components/General/PageLayout'  
import { userLogoutAction } from '../Store/actions/user/userLogoutAction'
import { useDispatch } from 'react-redux'
import '/src/styles/stylesglobales.css'
import styles from '../styles/pages/campaignHome.module.css'
import {Funnel} from '../components/Dashboards/Funnel/Index'
import ActividadReciente from '../components/campaign/ActividadReciente/ActividadReciente'
import { Circular } from '../components/Dashboards/Circular'

// import rutas from '../Routes/routes'

const Home = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ name: 'Javier' })

    const handleLogOut = () => { // eslint-disable-line
        dispatch(userLogoutAction())
    }

    return (
        <PageLayout
            separator={false}
        >
            <header className={styles.homeHeader}>
                <div className={styles.homeHeaderInfo}>
                    <h1>
                        Hola, {userData.name}!
                    </h1>
                    <p>
                        Esto es lo que está pasando con tu cuenta de LinkedIn hoy
                    </p>
                </div>
                <button className={`pageButton pageButton--hover ${styles.headerButton}`}>
                    Ver por campaña
                </button>
            </header>
            <section className={styles.grid}>
                <article className={styles.funnelContainer}>
                    <Funnel></Funnel>
                </article>

                <Circular
                    percentage={60}
                    title='Avance general'
                    description='Métrica según el avance de todas tus campañas activas'
                />

                <article className={`pageSection ${styles.activity}`}>
                    <div className={styles.activityHeader}>
                        <h2 className={styles.activityTitle}>
                        Actividad Reciente
                        </h2>
                    </div>
                    <ActividadReciente></ActividadReciente>
                </article>

            </section>
        </PageLayout>
    
    ) 
}


export default Home
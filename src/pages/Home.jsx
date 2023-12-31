import { useState, useEffect } from 'react'
import { PageLayout } from '../components/General/PageLayout'  
import { userLogoutAction } from '../Store/actions/user/userLogoutAction'
import { useDispatch } from 'react-redux'
import '/src/styles/stylesglobales.css'
import styles from '../styles/pages/campaignHome.module.css'
import {Funnel} from '../components/Dashboards/Funnel/Index'
import ActividadReciente from '../components/campaign/ActividadReciente/ActividadReciente'
import { Circular } from '../components/Dashboards/Circular'
import { getActividad } from '../services/campaign/getCampaignActividad'
import { getUserData } from '../services/auth/getUserData'
// import rutas from '../Routes/routes'

const Home = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({})
    const [info, setInfo] = useState([])
    const [data, setData] = useState([])

    useEffect (()=> {
        async function fetchAndProcessData() {
            try {
                
                let actividad = []
                let data = await getActividad(); 
                // console.log("API Data:", data);
                for (let i = 0; i < 7; i++) {
                    actividad.push(data.latest_audits[i])
                }
                   
                setInfo(actividad)
                setData(data)
                
            } catch (error) {
                console.error("API Request Error:", error);
            }
        }
        fetchAndProcessData();
        // console.log(actividad);
    },[])
    
    useEffect(() => {
        getUserData()
            .then(response => {
                setUserData(response.data)
            })
    }, [])    


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
                        Hola, {userData.full_name}!
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
                    <Funnel info={data}></Funnel>
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
                    <ActividadReciente data={info}></ActividadReciente>
                </article>

            </section>
        </PageLayout>
    
    ) 
}


export default Home
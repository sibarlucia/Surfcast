import { useState, useEffect } from 'react'
import { PageLayout } from '../components/General/PageLayout'  
import { userLogoutAction } from '../Store/actions/user/userLogoutAction'
import { useDispatch } from 'react-redux'
import '/src/styles/stylesglobales.css'
import styles from '../styles/pages/campaignHome.module.css'
import {Funnel} from '../components/Dashboards/Funnel/Index'
import ActividadReciente from '../components/campaign/ActividadReciente/ActividadReciente'
import { Circular } from '../components/Dashboards/Circular'
import { getMetrics } from '../services/campaign/getCampaignActividad'
import newMessageIcon from '../assets/icons/message.svg'
import vistoIcon from '../assets/icons/visto.svg'
import invitationIcon from '../assets/icons/invitation.svg'
import responseIcon from '../assets/icons/response.svg'

// import rutas from '../Routes/routes'

const DefaultData = [
    {
        text: 'Hola',
        type: ''
    },
    {
        text: '',
        type: ''
    },
    {
        text: '',
        type: ''
    },
    {
        text: '',
        type: ''
    },
    {
        text: '',
        type: ''
    },
    {
        text: '',
        type: ''
    },
    {
        text: '',
        type: ''
    },
    
   
]    


async function fetchAndProcessData() {
    try {
        let data = await getMetrics(); 
        // console.log("API Data:", data);
        let actividad = []
        for (let i = 0; i < 7; i++) {
            actividad.push(data.latest_audits[i])
            
            
            
        }
        // console.log(actividad);
        // console.log(actividad[0].comment);
        // console.log(DefaultData[0]);
        // console.log(DefaultData[0].text);


        for (let j = 0; j < actividad.length; j++) {
            DefaultData[j].id = actividad[j].id

            DefaultData[j].text = actividad[j].comment

            DefaultData[j].type = actividad[j].event



            // console.log(DefaultData[j]);
        }

        
    } catch (error) {
        console.error("API Request Error:", error);
    }
}

fetchAndProcessData();

// console.log(DefaultData);
const Datos = DefaultData

// console.log(Datos);




const ICONS = {
    'message_sent': newMessageIcon,

    'message_read': vistoIcon,
    'profile_visited': vistoIcon,

    'skill_endorsed': responseIcon,
    'end_of_sequence': responseIcon,

    'follow_up_scheduled': invitationIcon,
    'connection_sent': invitationIcon

}

const Home = ({ Data = Datos }) => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ name: 'Javier' }) // eslint-disable-line
    

    const [info, setInfo] = useState(Data);
    useEffect (()=> {
        if (info[1].text != Data[1].text) {
            
            setInfo(Data)
        }

    },[Data])
    console.log(info);


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
                    <ActividadReciente data={info}></ActividadReciente>
                </article>

            </section>
        </PageLayout>
    
    ) 
}


export default Home
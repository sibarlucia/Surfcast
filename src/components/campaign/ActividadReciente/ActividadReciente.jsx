import newMessageIcon from '../../../assets/icons/message.svg'
import vistoIcon from '../../../assets/icons/visto.svg'
import invitationIcon from '../../../assets/icons/invitation.svg'
import responseIcon from '../../../assets/icons/response.svg'
import styles from './index.module.css'
import { getMetrics } from '../../../services/campaign/getCampaignActividad'
import { useEffect, useState } from 'react'


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


const ActividadReciente = ({ Actividad = Datos }) => {
    const [data, setData] = useState(Actividad);

    // console.log(Actividad);
    // console.log(data);
    
    return (
        <ul className={styles.list}>
            {
                data.map((item, index) => {
                    return (
                        <li
                            key={`Activiti-Item-${index}`}
                            className={styles.listItem}
                        >
                            <div className={styles.iconContainer}>
                                {
                                    ICONS[item.type] && (
                                        <img
                                            src={ICONS[item.type]}
                                            className={styles.icon}
                                        />
                                    )
                                }
                                {
                                    index < DefaultData.length -1 && (
                                        <div className={styles.divisor}></div>
                                    )
                                }
                            </div>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
    
}

export default ActividadReciente
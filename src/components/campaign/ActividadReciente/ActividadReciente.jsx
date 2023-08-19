import newMessageIcon from '../../../assets/icons/message.svg'
import vistoIcon from '../../../assets/icons/visto.svg'
import invitationIcon from '../../../assets/icons/invitation.svg'
import responseIcon from '../../../assets/icons/response.svg'
import styles from './index.module.css'
import { getMetrics } from '../../../services/campaign/getCampaignActividad'
import { useEffect, useState } from 'react'

const ICONS = {
    'newMessage': newMessageIcon,
    'view': vistoIcon,
    'response': responseIcon,
    'invitation': invitationIcon
}




const DefaultData = [

    {
        text: 'Un mensaje de Royer se ha detectado en la campaña de "Venta de lanzamiento"',
        type: 'newMessage'
    },
    {
        text: 'Perfil visto de Royer en la campaña numero 1',
        type: 'view'
    },
    {
        text: 'Royer respondió por mensaje privado',
        type: 'response'
    },
    {
        text: 'Se le envió a Pedro una invitación para conectar',
        type: 'invitation'
    },
    {
        text: 'Un mensaje de Royer se ha detectado en la campaña de "Venta de lanzamiento"',
        type: 'newMessage'
    },
    {
        text: 'Perfil visto de Royer en la campaña numero 1',
        type: 'view'
    }
]    

const ActividadReciente = ({ listData = DefaultData }) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        
        getMetrics()
            .then(responseData => {
                setData(responseData); 
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    

    console.log(data.latest_audits);
    return (
        <ul className={styles.list}>
            {
                listData.map((item, index) => {
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
                                    index < listData.length -1 && (
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
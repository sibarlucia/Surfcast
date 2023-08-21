import newMessageIcon from '../../../assets/icons/message.svg'
import vistoIcon from '../../../assets/icons/visto.svg'
import invitationIcon from '../../../assets/icons/invitation.svg'
import responseIcon from '../../../assets/icons/response.svg'
import styles from './index.module.css'
import { getMetrics } from '../../../services/campaign/getCampaignActividad'
import { useEffect, useState } from 'react'


const ICONS = {
    'message_sent': newMessageIcon,

    'message_read': vistoIcon,
    'profile_visited': vistoIcon,

    'skill_endorsed': responseIcon,
    'end_of_sequence': responseIcon,

    'follow_up_scheduled': invitationIcon,
    'connection_sent': invitationIcon

}


const ActividadReciente = ({ data }) => {
    const [info, setInfo] = useState(data);


    // useEffect (()=> {
    //     setInfo(data)
    // },[])
    // console.log(info);
    
    return (
        <ul className={styles.list}>
            {
                // info.map((item, index) => {
                //     return (
                //         <li
                //             key={`Activiti-Item-${index}`}
                //             className={styles.listItem}
                //         >
                //             <div className={styles.iconContainer}>
                //                 {
                //                     ICONS[item.type] && (
                //                         <img
                //                             src={ICONS[item.type]}
                //                             className={styles.icon}
                //                         />
                //                     )
                //                 }
                //                 {
                //                     index < info.length -1 && (
                //                         <div className={styles.divisor}></div>
                //                     )
                //                 }
                //             </div>
                //             <p className={styles.text}>
                //                 {item.text}
                //             </p>
                            
                //         </li>
                //     )
                // })
            }
        </ul>
    )
    
}

export default ActividadReciente
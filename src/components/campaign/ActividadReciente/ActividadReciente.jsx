import newMessageIcon from '../../../assets/icons/message.svg'
import vistoIcon from '../../../assets/icons/visto.svg'
import invitationIcon from '../../../assets/icons/invitation.svg'
import responseIcon from '../../../assets/icons/response.svg'
import styles from './index.module.css'



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
    
    console.log(data);
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
                                    ICONS[item.event] && (
                                        <img
                                            src={ICONS[item.event]}
                                            className={styles.icon}
                                        />
                                    )
                                }
                                {
                                    index < data.length -1 && (
                                        <div className={styles.divisor}></div>
                                    )
                                }
                            </div>
                            <p className={styles.text}>
                                {item.comment}
                            </p>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
    
}

export default ActividadReciente
import styles from './index.module.css'
import ArrowIcon from '../../../assets/up_arrow.svg'

export const CampaignGeneralInformation = ({ invitations = 0, unreadMessages = 0, views = 0  }) => {

    return (
        <section className={`pageSection ${styles.mainSection}`}>
            <div className={styles.infoItem}>
                <h1>
                    {invitations}
                </h1>
                <p>
          invitaciones <br /> 
          Pendientes
                </p>
            </div>
            <span className={styles.separator} />
            <div className={styles.infoItem}>
                <h1>
                    {unreadMessages}
                </h1>
                <p>
          Mensajes <br />
          sin leer
                </p>
            </div>
            <span className={styles.separator} />
            <div className={styles.infoItem}>
                <img
                    className={`${styles.arrowIcon} ${views < 0 ? styles.arrowIconDown : ''}`}
                    src={ArrowIcon}
                    alt="flecha"
                />
                <h1>
                    {
                        Math.abs(views) + '%'
                    }
                </h1>
                <p>
          Vistas al perfil <br />
          desde el mes pasado
                </p>
            </div>
        </section>

    )

}

import profileImg from '../../../assets/campaign/defaultProfile.svg'
import styles from './index.module.css'
import favoriteIcon from '../../../assets/icons/favoriteIcon.svg'
import menudotsIcon from '../../../assets/campaign/menu_dots.svg'
import resendIcon from '../../../assets/icons/resendIcon.svg'


const defaultHistory = [
    {
        user: {
            icon: profileImg,
            name: 'Javier Mansilla',
            mail: 'jmansillomo@gmail.com'
        },

        message: `"Sed ut perspiciatis unde omnis

        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        
        Nemo enim ipsam voluptatem: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.`,
        date: '18 de abr 2023, 7:23',
        for: 'Royer'
    },
    {
        user: {
            icon: profileImg,
            name: 'Javier Mansilla',
            mail: 'jmansillomo@gmail.com'
        },

        message: `"Sed ut perspiciatis unde omnis

        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
       
        Nemo enim ipsam voluptatem: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.`,
        date: '18 de abr 2023, 7:23',
        for: 'Royer'
    },
    
]

const ResponseIcon = ({color = '#A8A8A8', size = 30}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 30 30" fill="none">
            <path d="M20.0001 12.5H8.85011L12.2251 8.27502C12.3439 8.14915 12.4353 7.99997 12.4935 7.83694C12.5516 7.67391 12.5753 7.50058 12.5629 7.32792C12.5506 7.15527 12.5025 6.98706 12.4218 6.83395C12.3411 6.68084 12.2294 6.54617 12.0939 6.43846C11.9584 6.33076 11.802 6.25237 11.6346 6.20826C11.4673 6.16415 11.2925 6.15528 11.1216 6.18222C10.9506 6.20916 10.7871 6.27132 10.6413 6.36476C10.4956 6.45819 10.3709 6.58087 10.2751 6.72502L5.27511 12.975C5.10072 13.1957 5.00586 13.4688 5.00586 13.75C5.00586 14.0313 5.10072 14.3043 5.27511 14.525L10.2751 20.775C10.3915 20.9223 10.5396 21.0415 10.7084 21.1238C10.8772 21.206 11.0623 21.2492 11.2501 21.25C11.5321 21.2484 11.8052 21.1515 12.0251 20.975C12.2827 20.7688 12.4482 20.4691 12.4857 20.1412C12.5232 19.8134 12.4295 19.4841 12.2251 19.225L8.85011 15H20.0001C20.3316 15 20.6496 15.1317 20.884 15.3661C21.1184 15.6006 21.2501 15.9185 21.2501 16.25V22.5C21.2501 22.8315 21.3818 23.1495 21.6162 23.3839C21.8506 23.6183 22.1686 23.75 22.5001 23.75C22.8316 23.75 23.1496 23.6183 23.384 23.3839C23.6184 23.1495 23.7501 22.8315 23.7501 22.5V16.25C23.7501 15.2555 23.355 14.3016 22.6518 13.5984C21.9485 12.8951 20.9947 12.5 20.0001 12.5Z" fill={color}/>
        </svg>
    )
}

export const GmailHistory = ({ history = defaultHistory }) => {
    return (
        <section className={styles.mainsection}>
            <header className={styles.mainHeader}>
                <h1 className={styles.mainTitle}>
                    {/* cargar desde api de historial o campaña con el id */}
                    Fwd: Campaña Numero 1
                </h1> 
            </header>
            <main className={styles.mainContent}>
                <ul className={styles.messageList}>
                    {
                        history.map((item, index) => {
                            return (
                                <li
                                    key={`history-message-gmail-${index}`}
                                    className={styles.messageItem}
                                >
                                    <img
                                        src={item.user.icon}
                                        alt={item.user.name}
                                        className={styles.messageIcon}
                                    />
                                    <article className={styles.messageInfoContainer}>
                                        <div className={styles.messageHeader}>
                                            <div className={styles.messageUserInfo}>
                                                <h2>
                                                    {item.user.name}
                                                    <span>{`<${item.user.mail}>`}</span>
                                                </h2>
                                                <div>
                                                    Para {item.for}
                                                </div>
                                            </div>
                                            <div className={styles.messageActions}>
                                                <p>
                                                    {item.date}
                                                </p>
                                                <button>
                                                    <img
                                                        src={favoriteIcon}
                                                        alt="Favorito"
                                                    />
                                                </button>
                                                <button>
                                                    <ResponseIcon/>
                                                </button>
                                                <button>
                                                    <img
                                                        src={menudotsIcon}
                                                        alt="Menu"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <p className={styles.messageText}>
                                            {item.message}
                                        </p>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
            <footer className={styles.footer}>
                <button className={styles.footerButton}>
                    <ResponseIcon
                        color='#231F20'
                    />                    
                    <span>
                        Responder
                    </span>
                </button>
                <button className={styles.footerButton}>
                    <img
                        src={resendIcon}
                        alt="Reenviar"
                    />
                    <span>
                        Reenviar
                    </span>

                </button>
            </footer>
        </section>
    )
}
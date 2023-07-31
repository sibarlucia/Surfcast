import profileImg from '../../../assets/campaign/defaultProfile.svg'
import styles from './index.module.css'

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
                    Responder
                </button>
                <button className={styles.footerButton}>
                    Reenviar
                </button>
            </footer>
        </section>
    )
}
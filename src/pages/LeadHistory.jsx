import { PageLayout } from "../components/General/PageLayout"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from '../styles/pages/LeadHistory.module.css'
import profileImg from '../assets/campaign/defaultProfile.svg'

const defaultLeadData = {
    name: 'Javier Mansilla',
    position: 'CTO en Surfcast'
}

const defaultHistory = [
    {
        divider: true,
        text: '28 SEPT 2023'
    },
    {
        user: {
            icon: profileImg,
            name: 'Javier Mansilla'
        },
        message: `Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.`,
        hour: '17:30',
    },
    {
        user: {
            icon: profileImg,
            name: 'Surfcast'
        },
        message: `Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.`,
        hour: '17:30',
    },
    {
        divider: true,
        text: '30 SEPT 2023'
    },
    {
        user: {
            icon: profileImg,
            name: 'Javier Mansilla'
        },
        message: `Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.`,
        hour: '17:30',
    },
    {
        user: { 
            icon: profileImg,
            name: 'Surfcast'
        },
        message: `Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        Sed ut perspiciatis unde omnis ste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.`,
        hour: '17:30',
    }
]

const LinkedInHistory = ({ history, leadId }) => {
    return (
        <ul className={styles.historyList}>
            {
                history.map((item, index) => {
                    if (item.divider) {
                        return (
                            <li
                                key={`leadHistory-${leadId}-divider-${index}`}
                                className={styles.historyListItem}
                            >
                                <article className={styles.divider}>
                                    <span></span>
                                    <p>
                                        {item.text}
                                    </p>
                                    <span></span>
                                </article>
                            </li>
                        )
                    }
                    return (
                        <li
                            key={`leadHistory-${leadId}-message-${index}`}
                            className={styles.historyListItem}
                        >
                            <article className={styles.message}>
                                <img
                                    src={item.user.icon}
                                    alt={item.user.name}
                                />
                                <div>
                                    <h4 className={styles.messageUser}>
                                        {item.user.name}
                                        <span>
                                            {item.hour}
                                        </span>
                                    </h4>
                                    <p>
                                        {item.message}
                                    </p>
                                </div>
                            </article>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const LeadHistory = () => {
    const { leadId, campaignId } = useParams() // eslint-disable-line
    const [leadData] = useState(defaultLeadData)
    const [history] = useState(defaultHistory)

    return (
        <PageLayout>
            <section className={styles.mainSection}>
                <header className={styles.mainHeader}>
                    <h1 className={styles.mainTitle}>
                      Historial de {leadData.name}
                    </h1>
                    <div className={styles.headerButtonContainer}>
                        <Link
                            className="pageButton pageButton--empty pageButton--hover"
                            to={`/campaign/${campaignId}/info`}
                        >
                          Volver a la campaña
                        </Link>
                        <button
                            className="pageButton pageButton--hover"
                        >
                          Descargar historial
                        </button>
                    </div>
                </header>
                <main className={`pageSection ${styles.MainhistoryContainer}`}>
                    <section className={styles.channelSection}>
                        <button>
                            linkding
                        </button>
                        <button>
                            gmail
                        </button>
                    </section>
                    <section className={styles.historyContainer}>
                        <header>
                            <div className={styles.historyHeaderContainer}>
                                <img
                                    className={styles.headerProfileImg}
                                    src={profileImg}
                                    alt={leadData.name}
                                />
                                <div className={styles.historyHeaderContainer_leadInfo}>
                                    <h2>
                                        {leadData.name}
                                    </h2>
                                    <p>
                                        {leadData.position}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.historyHeaderContainer}>
                                <p>
                                    Esta Semana: 12 - 18 de marzo 2023
                                </p>
                            </div>
                        </header>
                        <LinkedInHistory
                            history={history}
                            leadId={leadId}
                        />
                    </section>
                </main>
            </section>
        </PageLayout>
    )
}

export default LeadHistory
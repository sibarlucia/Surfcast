import { useState, useEffect } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from '../styles/pages/LeadHistory.module.css'
import profileImg from '../assets/campaign/defaultProfile.svg'
import linkedinLogo from '../assets/linkedin.png'
import gmailLogo from '../assets/gmail.png'
import { LinkedInHistory } from "../components/campaign/LinkedInHistory/LinkedInHistory" 
import { GmailHistory } from "../components/campaign/GmailHistory/GmailHistory"
import { getMessagesOfLead } from "../services/messages/getMessagesOfLead"

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
]
const channelsOptions = {
    linkedIn: 'linkedIn',
    gmail: 'gmail'
} 

const LeadHistory = () => {
    const { leadId, campaignId } = useParams() // eslint-disable-line
    const [leadData] = useState(defaultLeadData)
    const [history] = useState(defaultHistory)
    const [channel, setChannel] = useState(channelsOptions.linkedIn)
    
    const [linkedInHistory, setLinkedInHistory] = useState([]) 
    const [gmailHistory, setGmailHistory] = useState([]) 

    useEffect(() => {
        getMessagesOfLead(leadId)
            .then(response => {
                const { data } = response

                const linkedInMessages = []
                const gmailMessages = []

                data.forEach(item => {
                    if (item.channel === "email") {
                        gmailMessages.push(item)
                    } else if (item.channel === 'linkedin') {
                        linkedInMessages.push(item)
                    }
                })

                setLinkedInHistory(linkedInMessages)
                setGmailHistory(gmailMessages)
            })

        
    }, [leadId])


    const handelSelectChannel = (newChannel) => () => {
        setChannel(newChannel)
    }

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
                        <button
                            className={`${styles.channelButton} ${channelsOptions.linkedIn === channel ? styles.channelButton_selected: ''}`}
                            onClick={handelSelectChannel(channelsOptions.linkedIn)}
                        >
                            <img
                                src={linkedinLogo}
                                alt="linkedin"
                            />
                        </button>
                        <button
                            className={`${styles.channelButton} ${channelsOptions.gmail === channel ? styles.channelButton_selected: ''}`}
                            onClick={handelSelectChannel(channelsOptions.gmail)}
                        >
                            <img
                                src={gmailLogo}
                                alt="gmail"
                            />
                        </button>
                    </section>
                    {
                        channelsOptions.linkedIn === channel && (
                            <LinkedInHistory
                                leadData={leadData}
                                leadId={leadId}
                                history={history}
                            />
                        )
                    }
                    {
                        channelsOptions.gmail === channel && (
                            <GmailHistory
                                // history={}
                                leadId={leadId}
                            />

                        )
                    }
                    

                </main>
            </section>
        </PageLayout>
    )
}

export default LeadHistory
import { useState, useEffect } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from '../styles/pages/LeadHistory.module.css'
import linkedinLogo from '../assets/linkedin.png'
import gmailLogo from '../assets/gmail.png'
import { LinkedInHistory } from "../components/campaign/LinkedInHistory/LinkedInHistory" 
import { GmailHistory } from "../components/campaign/GmailHistory/GmailHistory"
import { getMessagesOfLead } from "../services/messages/getMessagesOfLead"
import { getLeadsByCampaign } from "../services/leads/getLeadsByCampaign"

const channelsOptions = {
    linkedIn: 'linkedIn',
    gmail: 'gmail'
} 

const LeadHistory = () => {
    const { leadId, campaignId } = useParams() // eslint-disable-line
    const [leadData, setLead] = useState({})
    // const [history] = useState(defaultHistory)
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

    useEffect(() => {
        getLeadsByCampaign(campaignId)
            .then(response => {
                const { data: allLeads } = response 
                console.log(leadId)
                const selectedLead = allLeads.find(lead => lead.id === parseInt(leadId))
                setLead(selectedLead)
            })
            
    }, [campaignId, leadId])


    const handelSelectChannel = (newChannel) => () => {
        setChannel(newChannel)
    }

    return (
        <PageLayout>
            <section className={styles.mainSection}>
                <header className={styles.mainHeader}>
                    <h1 className={styles.mainTitle}>
                      Historial de {leadData.full_name}
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
                                history={linkedInHistory}
                            />
                        )
                    }
                    {
                        channelsOptions.gmail === channel && (
                            <GmailHistory
                                leadData={leadData}
                                leadId={leadId}
                                history={gmailHistory}
                            />
                        )
                    }
                </main>
            </section>
        </PageLayout>
    )
}

export default LeadHistory
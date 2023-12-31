import { useEffect, useState } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { getCampaign } from "../services/campaign/getCampaign"
import { CampaignTable } from "../components/campaign/CampaignTable"
import { CampaignGeneralInformation } from "../components/campaign/CampaignGeneralInformation/index.jsx"
import { CampaignStatistics } from "../components/campaign/CampaignStatistics"
import styles from '../styles/pages/campaign.module.css'
import { NewCampaingModal } from "../components/Modals/NewCampaignModal"
import { createCampaign } from "../services/campaign/createCampaign" 
import { useNavigate } from "react-router-dom"
import { updateCampaign } from "../services/campaign/updateCampaign"
import { getMetrics } from '../services/campaign/getCampaignMetrics'


const Campaign = () => {
    const [campaigns, setCampaigns] = useState([])
    const [showNewCampaignModal, setShowNewCampaignModal] = useState(false)
    const navigate = useNavigate()
    const [metricas, setMetricas] = useState([])


    useEffect(() =>{
        async function fetchMetricas() {
            try {
                let dataMetricas = await getMetrics()

               
                setMetricas(dataMetricas)
            }

            catch (error) {
                console.error("API Request Error:", error);
            }

        }
        fetchMetricas()
    },[])

    console.log(metricas);

    useEffect(() => {
        getCampaign({})
            .then(response => {
                setCampaigns(response.data)
            })
    }, [])
  
    const toggleshowCampaingModal = () => {
        setShowNewCampaignModal(!showNewCampaignModal)
    }

    const handleCreateCampaign = async (campaingName) => {
        try {
            const response = createCampaign({ name: campaingName })
            const campaingId = response.data.id
            navigate(`/campaign/${campaingId}/importacion/1`)
        } catch (error) {
            console.error('algo fallo al crear la campaña')
        }
    }

    // maneja el boton de active
    const handleToggleCampaign = async (campaignData) => {
        const updatedData = { ...campaignData }
        updatedData.active = !updatedData.active
        const response = await updateCampaign({...updatedData, campaignId: updatedData.id})
        const { data } = response

        const updatedCampaigns = campaigns.map(item => {
            if (item.id === data.id) {
                item = data
            }
            return item
        })
        setCampaigns(updatedCampaigns)
    }

    return (
        <PageLayout>
            <section className={styles.mainSection}>
                <CampaignGeneralInformation
                    invitations={metricas.pending_invitations}
                    unreadMessages={metricas.sent_messages} 
                    views={metricas.profile_visits} 
                />
                {/* <CampaignStatistics metricas={metricas}/> */}
                <div className={styles.campaignList}>
                    <header className={styles.campaignListHeader}>
                        <div>
                            <h2>
                                Todas tus campañas
                            </h2>
                            <select defaultValue={'-1'}>
                                <option value="-1" disabled>
                                    Filtrar por                                 
                                </option>
                            </select>
                        </div>
                        <button
                            className="pageButton pageButton--hover"
                            onClick={toggleshowCampaingModal}
                        >
                            Nueva campaña
                        </button>
                    </header>
                    <section className={`pageSection ${styles.tableContainer}`}>
                        <CampaignTable
                            data={campaigns}
                            onToggleActive={handleToggleCampaign}
                        />
                    </section>
                </div>
            </section>
            <NewCampaingModal
                isOpen={showNewCampaignModal}
                onClose={toggleshowCampaingModal}
                onDone={handleCreateCampaign}
            />
        </PageLayout>
    )

}

export default Campaign
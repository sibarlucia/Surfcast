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

const Campaign = () => {
    const [campaigns, setCampaigns] = useState([])
    const [showNewCampaignModal, setShowNewCampaignModal] = useState(false)
    const navigate = useNavigate()

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
        let campaingId = 4 // TODO: eliminar el id 4 por defecto
        try {
            const response = createCampaign({ name: campaingName })
            campaingId = response.data.id
        } catch (error) {
            console.error('algo fallo al crear la campaña')
        }
        navigate(`/campaign/${campaingId}/importacion/1`)
    }

    return (
        <PageLayout>
            <section className={styles.mainSection}>
                <CampaignGeneralInformation
                    invitations={200}
                    unreadMessages={8}
                    views={20}
                />
                <CampaignStatistics/>
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
                        <CampaignTable data={campaigns}/>
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
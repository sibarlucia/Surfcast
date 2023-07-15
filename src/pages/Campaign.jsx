import { useEffect, useState } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { getCampaign } from "../services/campaign/getCampaign"
import { CampaignTable } from "../components/campaign/CampaignTable"
import { CampaingGeneralInformation } from "../components/campaign/CampaignGeneralInformacion/index.js"
import { CampaignStatistics } from "../components/campaign/CampaignStatistics"
import styles from '../styles/pages/campaign.module.css'

const Campaign = () => {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        getCampaign()
            .then(response => {
                setCampaigns(response.data)
            })
    }, [])
  
    const handleCreateCampaign = () => {
    // TODO: consumir api crear
    // redireccionar a los formularios con el id de la nueva campaña
    }

    return (
        <PageLayout>
            <section className={styles.mainSection}>
                <CampaingGeneralInformation
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
                            onClick={handleCreateCampaign}
                        >
              Nueva campaña
                        </button>
                    </header>
                    <section className={`pageSection ${styles.tableContainer}`}>
                        <CampaignTable data={campaigns}/>
                    </section>
                </div>
            </section>
        </PageLayout>
    )

}

export default Campaign
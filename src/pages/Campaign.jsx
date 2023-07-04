import { useEffect, useState } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { getCampaign } from "../services/campaign/getCampaign"
import { CampaignTable } from "../components/campaign/CampaignTable"
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
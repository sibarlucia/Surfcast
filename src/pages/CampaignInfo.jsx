import { useEffect, useState } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { useParams } from "react-router-dom"
import { getCampaingById } from "../services/campaign/getCampaingById"
import styles from '../styles/pages/campaignInfo.module.css'

const CampaignInfo = () => {
  const [campaignData, setCampaignData] = useState({})

  console.log(campaignData)

  const { id: campaignId } = useParams()

  useEffect(() => {
    if (campaignId) {
      getCampaingById(campaignId)
        .then(response => {
          setCampaignData(response.data)
        })
    }

  }, [campaignId])
  
 

  return (
    <PageLayout>
      <section className='pageMainSection'>
        <header className={styles.header}>
          <article className={styles.headerInfoContainer}>
            <h1>
              {
                campaignData.name
              }
            </h1>
            <div className={styles.dateContaner}>
              <div className={styles.dateButtonContainer}>
                <button>{'<'}</button>
                <button>{'>'}</button>
              </div>
              <p>
                Esta Semana: 12 - 18 de marzo 2023
              </p>
            </div>
          </article>
          {/* TODO: estilar estos botones */}
          <div> 
            <button
              className="pageButton pageButton--empty pageButton--hover"
            >
              Configurar
            </button>
            <button
              className="pageButton pageButton--hover"
            >
              Descargar reporte
            </button>
          </div>
        </header>
      </section>
    </PageLayout>
  )

}

export default CampaignInfo
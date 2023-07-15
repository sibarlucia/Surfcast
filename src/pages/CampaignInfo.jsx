import { useEffect, useState } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { useParams } from "react-router-dom"
import { getCampaingById } from "../services/campaign/getCampaingById"
import { CampaingInfoStatistics } from "../components/campaign/CampaingInfoStatistics/index.js"
import searchIcon from '../assets/campaing/search.svg'
import styles from '../styles/pages/campaignInfo.module.css'
import { LeadsTable } from "../components/campaign/LeadsTable"

const CampaignInfo = () => {
    const [campaignData, setCampaignData] = useState({})
    const [leadsFilter, setLeadsFilter] = useState('')
    const { id: campaignId } = useParams()

    const handleChangeLeadsFilter = (event) => {
        setLeadsFilter(event.target.value)
    }

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
                    <div className={styles.headerButtons}>
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
                <CampaingInfoStatistics />
                <section className={styles.leadsTableContainer}>
                    <header className={styles.leadsTableContainerHeader}>
                        <h1>
              Todas tus leads
                        </h1>
                        <label className={styles.searchLabel}>
                            <img
                                src={searchIcon}
                                alt="buscar"
                            />
                            <input
                                placeholder="búsqueda"
                                type="text"
                                onChange={handleChangeLeadsFilter}
                                value={leadsFilter}
                            >
                            </input>
                        </label>
                    </header>
                    <LeadsTable
                        campaingId={campaignId}
                        filter={leadsFilter}
                    />
                </section>
            </section>
        </PageLayout>
    )

}

export default CampaignInfo
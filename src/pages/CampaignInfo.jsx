import { useEffect, useState } from "react"
import { PageLayout } from "../components/General/PageLayout"
import { useParams } from "react-router-dom"
import { getcampaignById } from "../services/campaign/getCampaignById"
import { CampaignInfoStatistics } from "../components/campaign/CampaingInfoStatistics"
import searchIcon from '../assets/campaign/search.svg'
import styles from '../styles/pages/campaignInfo.module.css'
import { LeadsTable } from "../components/campaign/LeadsTable"
import { CampaignConfigModal } from "../components/Modals/CampaignConfigModal" 
import { DateRangeButtons } from "../components/campaign/DateRangeButtons"
import { updateCampaign } from "../services/campaign/updateCampaign"

const CampaignInfo = () => {
    const [campaignData, setCampaignData] = useState({})
    const [leadsFilter, setLeadsFilter] = useState('')
    const [showConfigModal, setShowConfigModal] = useState(false)
    const { id: campaignId } = useParams()

    console.log({campaignData})

    const toggleShowConfigModal = () => {
        setShowConfigModal(!showConfigModal)
    }

    const handleChangeLeadsFilter = (event) => {
        setLeadsFilter(event.target.value)
    }

    useEffect(() => {
        if (campaignId) {
            getcampaignById(campaignId)
                .then(response => { 
                    setCampaignData(response.data)
                }) 
        }
    }, [campaignId])

    // maneja el campo active
    const handleToggleActive = async () => {
        const updateData = { ...campaignData, active: !campaignData.active }
        const response = await updateCampaign({ ...updateData, campaignId: updateData.id })
        const { data } = response
        setCampaignData(data)
    }

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
                        <DateRangeButtons
                            text='Esta Semana: 12 - 18 de marzo 2023'
                        />
                    </article>
                    <div className={styles.headerButtons}>
                        <button
                            className="pageButton pageButton--empty pageButton--hover"
                            onClick={toggleShowConfigModal}
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
                <CampaignInfoStatistics
                    isActive={campaignData.active}
                    onToggleActive={handleToggleActive}
                />
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
                        campaignName={campaignData.name}
                        campaignId={campaignId}
                        filter={leadsFilter}
                    />
                </section>
            </section>
            <CampaignConfigModal
                isOpen={showConfigModal}
                onClose={toggleShowConfigModal}
                onDone={toggleShowConfigModal}
            />
        </PageLayout>
    )

}

export default CampaignInfo
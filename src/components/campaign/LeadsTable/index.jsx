import { useEffect, useState, useMemo } from 'react'
import { getLeadsByCampaign } from '../../../services/leads/getLeadsByCampaign'
import menuDotsIcon from '../../../assets/campaign/menu_dots.svg'
import styles from './index.module.css'
import { LeadInfoModal } from '../../Modals/LeadInfoModal'

const LEADS_TYPES = [
    {
        name: 'Interesados',
        number: 100
    },
    {
        name: 'Pendientes',
        number: 100
    },
    {
        name: 'No interesados',
        number: 100
    },
    {
        name: 'Rechazados',
        number: 100
    },
    {
        name: 'Sin respuesta',
        number: 100
    }
]

export const LeadsTable = ({ filter = '', campaignId = null, campaignName  = ''}) => {
    const [LeadsList, setLeadsList] = useState([])
    const [selectedLeadType, setSelectedLeadType] = useState(LEADS_TYPES[0])
    const [sortField, setSortField] = useState(null)
    const [selectedLead, setSelectedLead] = useState(null)

    const handleSelectLeadsType = (selectedIndex) => () => {
        const selectedData = LEADS_TYPES[selectedIndex]
        setSelectedLeadType(selectedData)
    }

    const handleSortButton = (selectedField) => () => {
        setSortField(selectedField)
    }

    useEffect(() => {
        getLeadsByCampaign(campaignId)
            .then(response => {
                console.log(response.data)
                setLeadsList(response.data)
            })
    }, [campaignId])

    // maneja el filtro en de texto
    const filteredLeads = useMemo(() => {
        if (!filter) return LeadsList
        const filterLeads = LeadsList.filter(lead => {
            let leadDataString = JSON.stringify(Object.values(lead))
            leadDataString = leadDataString.replaceAll(/"|\[|\]/g, '').replaceAll(',', ' ')
            return leadDataString.toLowerCase().includes(filter.toLowerCase())
        })
        return filterLeads
    }, [LeadsList, filter])

    // ordena la lista dependiendo del campo seleccionado
    const sortedLeads = useMemo(() => {
        if (!sortField) return filteredLeads
        const sorted = filteredLeads.sort((a, b) => {
            if (a[sortField] < b[sortField]) {
                return -1;
            }
            if (b[sortField] > a[sortField]) {
                return 1;
            }
            return 0;
        })
        return sorted 
    }, [filteredLeads, sortField])

    const handelSelectLead = (selectedLeadIndex) => () => {
        const selectedLead = sortedLeads[selectedLeadIndex]
        setSelectedLead(selectedLead)
    }

    const cleanSelectedLead = () => {
        setSelectedLead(null)
    }

    return (
        <section className="pageSection">
            <div className={styles.tableContainer}>
                <nav>
                    {
                        LEADS_TYPES.map((item, index) => {
                            return (
                                <button
                                    onClick={handleSelectLeadsType(index)}
                                    key={`leadsSection-${index}`}
                                    className={selectedLeadType.name === item.name ? styles.buttonSelected : ''}
                                >
                                    {item.name} ({item.number})
                                </button>
                            )
                        })
                    }
                </nav>
                <table className={styles.table}>
                    <thead className={styles.tableHead}>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>
                                Nombre completo
                                <button onClick={handleSortButton('full_name')}>
                                    {'>'}
                                </button>
                            </th>
                            <th>
                                Puesto
                                <button onClick={handleSortButton('job')}>
                                    {'>'}
                                </button>
                            </th>
                            <th>
                                Correo
                                <button onClick={handleSortButton('email')}>
                                    {'>'}
                                </button>
                            </th>
                            <th>
                                 Ubicación
                                <button onClick={handleSortButton('location')}>
                                    {'>'}
                                </button>
                            </th>
                            <th>
                                Actualización
                                <button onClick={handleSortButton('timestamp')}>
                                    {'>'}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {
                            sortedLeads.map((item, leadIndex) => {
                                return (
                                    <tr
                                        className={styles.bodyRow}
                                        key={`campaign-${item.id}`}
                                    >
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            <p onClick={handelSelectLead(leadIndex)}>
                                                {item.full_name}
                                            </p>
                                        </td>
                                        <td>
                                            <p>
                                                {item.job}
                                            </p>
                                        </td>
                                        <td>
                                            <p>
                                                jmansilla@surfcast.com
                                            </p>
                                        </td>
                                        <td>
                                            <p>
                                                {item.location}
                                            </p>
                                        </td>
                                        <td>
                                            <p>
                                                {item.timestamp}
                                            </p>
                                        </td>
                                        <td>
                                            <button className={styles.tableMenuButton}>
                                                <img
                                                    src={menuDotsIcon}
                                                    alt="menu"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <LeadInfoModal
                campaignName={campaignName}
                leadData={selectedLead}
                onClose={cleanSelectedLead}
                onDone={(() => {cleanSelectedLead()})}
                onDeleteLead={() => {cleanSelectedLead()}}
            />

        </section>
    )

}
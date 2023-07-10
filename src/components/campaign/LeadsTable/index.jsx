import { useEffect, useState, useMemo } from 'react'
import { getLeadsByCampaign } from '../../../services/leads/getLeadsByCampaign'
import styles from './index.module.css'

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

export const LeadsTable = ({ filter = '', campaingId = null }) => {
  const [LeadsList, setLeadsList] = useState([])
  const [selectedLeadType, setSelectedLeadType] = useState(LEADS_TYPES[0])

  const handleSelectLeadsType = (selectedIndex) => () => {
    const selectedData = LEADS_TYPES[selectedIndex]
    setSelectedLeadType(selectedData)
  }

  useEffect(() => {
    getLeadsByCampaign(campaingId)
      .then(response => {
        console.log(response.data)
        setLeadsList(response.data)
      })
  }, [campaingId])


  const filteredLeads = useMemo(() => {
    // TODO: filtar lista de leads
    return LeadsList
  }, [LeadsList])

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
              <th>Nombre completo</th>
              <th>Puesto</th>
              <th>Correo</th>
              <th>Ubicación</th>
              <th>Actualización</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {
              filteredLeads.map(item => {
                return (
                  <tr
                    className={styles.bodyRow}
                    key={`campaign-${item.id}`}
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <p>
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
                      menu
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </section>
  )

}
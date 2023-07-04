import styles from './index.module.css'

export const CampaignTable = ({ data = [] }) => {
  return (
    <table className={styles.table}>
      <tbody className={styles.body}>
        {
          data.map(item => {
            return (
              <tr
                className={styles.bodyRow}
                key={`campaign-${item.id}`}
              >
                <td className={styles.bodyItem}>
                  {item.name}
                </td>
                <td className={styles.bodyItem}>
                  <div className={styles.dataInfo}>
                    <h5>
                      20
                    </h5>
                    <p>
                      LEADS TOTALES
                    </p>
                  </div>
                </td>
                <td className={styles.bodyItem}>
                  <div className={styles.dataInfo}>
                    <h5>
                      50%
                    </h5>
                    <p>
                      NIVEL DE ÉXITO
                    </p>
                  </div>
                </td>
                <td className={styles.bodyItem}>
                  <div className={styles.dateContainer}>
                    <h5>
                      10/04/23
                    </h5>
                    <p>
                      CREADA
                    </p>
                  </div>
                </td>
                <td className={styles.bodyItem}>
                  active
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
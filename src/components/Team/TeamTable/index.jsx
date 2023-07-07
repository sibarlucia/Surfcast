import styles from './index.module.css'
import trahsIcon from '../../../assets/trash_icon.svg'

export const TeamTable = ({ data = [] }) => {


  const handleDelete = (deleteData) => {
    console.log('Borrar', deleteData)
  }

  return (
    <table className={styles.table}>
      <tbody className={styles.body}>
        {
          data.map(item => {
            return (
              <tr
                className={styles.bodyRow}
                key={`team_${item.id}`}
              >
                <td className={styles.bodyItem}>
                  {item.name}
                </td>
                <td className={styles.bodyItem}>
                  {item.position}
                </td>
                <td className={styles.bodyItem}>
                  {item.email}
                </td>
                <td className={styles.bodyItem}>
                  {item.location}
                </td>
                <td className={styles.bodyItem}>
                  <button
                    onClick={() => {
                      handleDelete(item)
                    }}
                    className={styles.deleteButton}
                    title='Eliminar'
                  >
                    <img
                      src={trahsIcon}
                      alt='Borrar'
                    />
                  </button>
                </td>

              </tr>
            )
          })
        }
        
      
      </tbody>
    </table>
  )
}
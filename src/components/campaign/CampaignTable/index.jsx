import { SliceButton } from '../../General/SliceButton'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

export const CampaignTable = ({ data = [], onToggleActive = () => {} }) => {

    const handelToggleActive = (campaign) => () => {
        onToggleActive(campaign)
    }

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
                                    <Link to={`/campaign/${item.id}/info`}>
                                        {item.name}
                                    </Link>
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
                                    <div className={styles.activeContainer}>
                                        <p className={item.active ? styles.active : styles.disable }>
                                            {
                                                item.active ? 'Activa' :  'Desactivada'
                                            }
                                        </p>
                                        <SliceButton
                                            // onClick={() => {setActive(!active)}}
                                            onClick={handelToggleActive(item)}
                                            active={item.active}
                                            size={13}
                                        />
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
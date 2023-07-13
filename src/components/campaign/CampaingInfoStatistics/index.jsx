import { useState } from 'react'
import styles from './index.module.css'
import { SliceButton } from '../../General/SliceButton'
import personICon from '../../../assets/campaign/person.svg'
import loaderIcon from '../../../assets/campaign/loader.svg'
import doneICon from '../../../assets/campaign/done.svg'
import clockIcon from '../../../assets/campaign/clock.svg'

export const campaignInfoStatistics = () => {
    const [isActive, setIsActive] = useState(true)
  
    const toggleIsActive = () => setIsActive(!isActive)

    const data = [
        {
            icon: personICon,
            value: '238',
            text: 'Todos los leads creados'
        },
        {
            icon: loaderIcon,
            value: '20',
            text: 'En  progreso'
        },
        {
            icon: clockIcon,
            value: '90',
            text: 'Esperando respuesta'
        },
        {
            icon: doneICon,
            value: '10',
            text: 'Todos los pasos completados'
        }
    ]

    return (
        <section className="pageSection">
            <header className={styles.header}> 
                <div className={styles.header_activeContainer}>
                    <SliceButton
                        active={isActive}
                        onClick={toggleIsActive}
                    />
                    <p
                        className={isActive ? styles.activeText : ''}
                    >
                        { isActive ? 'Activa' : 'Inactiva' }
                    </p>
                </div>
                <p className={styles.headerDate}>
          Creada el 24 de Abril 2023
                </p>
            </header>
            <div className={styles.dataContainer}>
                {
                    data.map((item, index) => {
                        return (
                            <article
                                key={`campaign-${index}-data`}
                                className={styles.dataItem}
                            >
                                <div className={styles.dataItemValueContainer}>
                                    <img
                                        src={item.icon}
                                        alt={item.text}
                                    />
                                    <h2>
                                        {item.value}
                                    </h2>
                                </div>
                                <span className={styles.separator} />
                                <p>
                                    {item.text}
                                </p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
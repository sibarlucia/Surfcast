import { useEffect, useState } from 'react';
import styles from './index.module.css'

export const CampaignStatistics = ({metricas}) => {
    const [stats, setStats] = useState([])

    useEffect(() => {
        setStats(metricas)

    },[])
    console.log(stats);

    console.log(metricas);
    const defaultData = [
        {
            name: 'Solicitudes enviadas',
            value: stats.sent_invitations,
            max: 100,
        },
        {
            name: 'Visitas a la página web',
            value: 50, //otra API
            max: 100,
        },
        {
            name: 'Solicitudes enviadas por correo',
            value: 15, //otra API
            max: 100,
        },
        {
            name: 'Visitas al perfil',
            value: stats.profile_visits,
            max: 100,
        },
        {
            name: 'Mensajes enviados',
            value: stats.sent_messages,
            max: 100,
        }
    ]

    return (
        <section className={`pageSection ${styles.mainSection}`}>
            <header className={styles.header}>
                <h1>
          Estadísticas
                </h1>
                <a
                    href="/campaign"
                    target='_blank'
                    rel='noreferrer'
                >
          Ir a mi LinkedIn
                </a>
            </header>
            <div className={styles.metricsContainer}>
                {
                    defaultData.map((item, index) => {
                        let progress = (100*item.value) / item.max
                        if (progress > 100) progress = 100
                        return (
                            <article
                                key={`campaign-statistics-${index}`}
                                className={styles.statisticItem}
                            >
                                <div className={styles.bar}>
                                    <div
                                        className={styles.progress}
                                        style={{ width: `${progress}%` }}  
                                    />
                                </div>
                                <div className={styles.itemInfo}>
                                    <p>
                                        <span>
                                            {item.value}/{item.max}
                                        </span>
                                        {` - ${item.name}`}
                                    </p>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

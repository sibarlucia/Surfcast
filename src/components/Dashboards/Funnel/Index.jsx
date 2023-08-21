import { useSearchParams } from 'react-router-dom'
import styles from './index.module.css'
import { useEffect, useState } from 'react'

const default_maxValue = 500
const defaultData = [
    {
        name: 'Conexiones enviadas',
        value: 230,
        color: '#7D7DFF'
    },
    {
        name: 'Leads generados',
        value: 150,
        color: '#6262E2'
    },
    {
        name: 'Oportunidades',
        value: 50,
        color: '#3939B7'
    },
    {
        name: 'Clientes',
        value: 4,
        color: '#001B8D'
    }
]


const FunnelItem = ({color, number = 1}) => {
    if (number === 1) {
        return (
            <svg width="470" height="89" viewBox="0 0 470 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_43_1537)">
                    <path d="M449.167 0H20.1669C3.1322 0 -6.10431 19.9356 4.90938 32.931L46.4374 81.9309C50.2375 86.4147 55.8174 89 61.6949 89H412.672C418.991 89 424.938 86.014 428.712 80.9464L465.207 31.9464C475.033 18.7533 465.617 0 449.167 0Z" fill={color}/>
                </g>
                <defs>
                    <filter id="filter0_i_43_1537" x="0.12793" y="0" width="473.075" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_43_1537"/>
                    </filter>
                </defs>
            </svg>
        )
    }

    if (number === 2) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="333" height="89" viewBox="0 0 333 89" fill="none">
                <g filter="url(#filter0_i_43_1542)">
                    <path d="M312.907 0H20.25C4.72014 0 -4.88442 16.9281 3.08172 30.2591L32.3623 79.2591C35.9725 85.3007 42.4925 89 49.5306 89H287.176C294.608 89 301.428 84.8786 304.883 78.2985L330.614 29.2985C337.608 15.981 327.95 0 312.907 0Z" fill={color}/>
                </g>
                <defs>
                    <filter id="filter0_i_43_1542" x="0.21875" y="0" width="336.716" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_43_1542"/>
                    </filter>
                </defs>
            </svg>
        )
    }

    if (number === 3) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="229" height="89" viewBox="0 0 229 89" fill="none">
                <g filter="url(#filter0_i_43_1543)">
                    <path d="M208.601 0H20.7386C6.53638 0 -3.1407 14.3891 2.21546 27.5427L22.1684 76.5427C25.2356 84.0751 32.5587 89 40.6916 89H191.067C199.514 89 207.051 83.6923 209.897 75.7385L227.432 26.7385C232.093 13.7115 222.437 0 208.601 0Z" fill={color}/>
                </g>
                <defs>
                    <filter id="filter0_i_43_1543" x="0.71875" y="0" width="231.899" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_43_1543"/>
                    </filter>
                </defs>
            </svg>
        )
    }

    if (number === 4) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="153" height="89" viewBox="0 0 153 89" fill="none">
                <g filter="url(#filter0_i_43_1544)">
                    <path d="M132.667 0H20.1532C6.97548 0 -2.6006 12.5223 0.851795 25.2397L14.1538 74.2397C16.5189 82.9521 24.4275 89 33.4552 89H120.978C130.236 89 138.284 82.6462 140.432 73.641L152.122 24.641C155.12 12.0713 145.59 0 132.667 0Z" fill={color}/>
                </g>
                <defs>
                    <filter id="filter0_i_43_1544" x="0.141602" y="0" width="156.535" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_43_1544"/>
                    </filter>
                </defs>
            </svg>
        )
    }
}

export const Funnel = ({ data = defaultData, maxValue = default_maxValue, info }) => {

    const [values, setValues] = useState([])

    useEffect(() => {
        setValues(info)
    })
    console.log(info);
    // console.log(values);
    data[0].value = values.total_connections_sent
    data[1].value = values.total_leads_processed
    data[2].value = values.total_responses_received
    data[3].value = values.total_leads  

    console.log(data);
    return (
        <section className='pageSection'>
            <header className={styles.header}>
                <h4>
                    Métricas generales
                </h4>
            </header>
            <main className={styles.main}>
                {
                    data.map((item, index) => {
                        return (
                            <div
                                className={styles.funnelItem}
                                key={`funnel-main-${index}`}
                            >
                                <FunnelItem color={item.color} number={index+1}></FunnelItem>
                                <h2 className={styles.value}>
                                    {item.value}
                                </h2>
                            </div>
                        )
                    })
                }
            </main>
            <footer className={styles.footer}>
                <ul className={styles.list}>
                    {
                        data.map((item, index) => {
                            return (
                                <li
                                    key={`funnel-funnel-${index}`}
                                    className={styles.listItem}
                                >
                                    <div className={styles.nameContainer}>
                                        <span
                                            style={{ backgroundColor: item.color }}
                                            className={styles.color}
                                        />
                                        <p className={styles.name}>
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className={styles.valuesContainer}>
                                        <p>{item.value}/{maxValue}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </footer>
        </section>
    )
}
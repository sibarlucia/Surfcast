import { useMemo, useState, useEffect } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import mainLogo from '../../../assets/main_logo.svg'
import pieChartIcon from '../../../assets/menu/pie_chart.svg'
import pieChartIconSelected from '../../../assets/menu/pie_chart_selected.svg'
import flagIcon from '../../../assets/menu/flag.svg'
import flagIconSelected from '../../../assets/menu/flag_selected.svg'
// import userPlus from '../../../assets/menu/userPlus.svg'
// import userPlusSelected from '../../../assets/menu/userPlus_selected.svg'
import fileIcon from '../../../assets/menu/file.svg' 
import fileIconSelected from '../../../assets/menu/file_selected.svg' 
import userProfile from '../../../assets/menu/userProfile.svg'
import styles from './index.module.css'
import { getUserData } from '../../../services/auth/getUserData'

const MENUS_DATA = [
    {
        title: 'Dashboards',
        img: pieChartIcon,
        selectedImg: pieChartIconSelected,
        url: '/home',
        matchUrl: ['home']
    },
    {
        title: 'campañas',
        img: flagIcon,
        selectedImg: flagIconSelected,
        url: '/campaign',
        matchUrl: ['campaign']
    },
    // {
    //     title: 'Equipo',
    //     img: userPlus,
    //     selectedImg: userPlusSelected,
    //     url: '/team',
    //     matchUrl: ['team']
    // },
    {
        title: 'Facturación',
        img: fileIcon,
        selectedImg: fileIconSelected,
        url: '/billing',
        matchUrl: ['billing']
    }
]

export const PageMenu = () => {
    const location = useLocation()
    const [userData, setUserData] = useState({})

    console.log('home', userData)

    useEffect(() => {
        getUserData()
            .then(response => {
                setUserData(response.data)
            })
    }, [])


    const pathname = useMemo(() => {
        const { pathname: path } = location
        const formated = path.slice(1)
        const finalPath = formated.split('/')[0]
        return finalPath 
    }, [location])

    return (
        <aside className={styles.menu}>
            <figure className={styles.mainIconContainer}>
                <img
                    src={mainLogo}
                    alt="Surftcast"
                />
            </figure>
            <nav className={styles.navigate}>
                {
                    MENUS_DATA.map((item, index) => {
                        const isSelected = item.matchUrl.includes(pathname)
                        return (
                            <Link
                                className={`${styles.navigateLink} ${isSelected ? styles.selectedLink : ''}`}
                                key={`main-menu-${index}`}
                                to={item.url}
                            >
                                <img
                                    src={isSelected ? item.selectedImg : item.img}
                                    alt={`icon ${item.title}`}
                                />
                                <h2>
                                    {
                                        item.title
                                    }
                                </h2>
                            </Link>
                        )
                    }) 
                }
            </nav>
            <footer className={styles.footer}>
                <img
                    className={styles.footerImg}
                    src={userProfile}
                    alt="Perfil"
                />
                <div className={styles.footerContent}>
                    <h6 className={styles.footerContent_title}>
                        {userData.full_name || ''}
                    </h6>
                    <p className={styles.footerContent_email}>
                        {userData.email || ''}
                    </p>
                </div>
            </footer>
        </aside>
    )
}
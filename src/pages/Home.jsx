import { PageLayout } from '../components/General/PageLayout'  
import { userLogoutAction } from '../Store/actions/user/userLogoutAction'
import { useDispatch } from 'react-redux'
import { Funnel } from '../components/Dashboards/Funnel/Index'
import styles from '../styles/pages/home.module.css' 
import '/src/styles/stylesglobales.css'

// import rutas from '../Routes/routes'

const Home = () => {
    const dispatch = useDispatch()

    const handleLogOut = () => { // eslint-disable-line
        dispatch(userLogoutAction())
    }

    return (

        <PageLayout>
            <h1>
              home
            </h1>
            <div className={styles.funnelContainer}>
                <Funnel></Funnel>
            </div>
            {/* <button onClick={handleLogOut}>
              logout
            </button> */}
        </PageLayout>
    
    ) 
}


export default Home
import { PageLayout } from '../components/General/PageLayout'  
import { userLogoutAction } from '../Store/actions/user/userLogoutAction'
import { useDispatch } from 'react-redux'
import styles from '../styles/pages/campaignHome.module.css'

// import rutas from '../Routes/routes'

const Home = () => {
    const dispatch = useDispatch()

    const nombre = ''

    const handleLogOut = () => {
        dispatch(userLogoutAction())
    }

    return (
        <PageLayout>
            <article className={styles.mainArticle}>

                <section id={styles.sectionLeft}>
                    <h2>Hola, {nombre}</h2>
                    <p>Esto es lo que está pasando con tu cuenta de LinkedIn hoy</p>

                    <div id={styles.divLeft}>


                    </div>
                </section>

                <section id={styles.sectionRight}>
                    <div id={styles.divTopRight}>


                    </div>

                    <div id={styles.idottomRight}>


                    </div>

                </section>
            </article>
            {/* <button onClick={handleLogOut}>
        logout
            </button> */}
        </PageLayout>
    
    ) 
}


export default Home
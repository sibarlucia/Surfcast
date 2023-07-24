import { PageLayout } from '../components/General/PageLayout'  
import { userLogoutAction } from '../Store/actions/user/userLogoutAction'
import { useDispatch } from 'react-redux'
import '/src/styles/stylesglobales.css'

// import rutas from '../Routes/routes'

const Home = () => {
    const dispatch = useDispatch()

    const nombre = ''

    const handleLogOut = () => {
        dispatch(userLogoutAction())
    }

    return (
        <PageLayout>
            <h1>
        home
            </h1>
            <button onClick={handleLogOut}>
        logout
            </button>
        </PageLayout>
    
    ) 
}


export default Home
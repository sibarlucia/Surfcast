import { lazy, Suspense, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoading } from './components/Pages/PageLoading'
import { Layout } from './components/Pages/Layout'
import { useSelector } from 'react-redux'
import { PrivateRoute } from './components/Pages/PrivateRoute'

// import Perfilamiento from './pages/PerfilamientoRender'
// import Home from './pages/Home/'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound'
// import Producto from './pages/ProductoRender'
// import Importacion from './pages/ImportacionRender'
// import Webinar from './pages/WebinarRender'
// import Newsletter from './pages/NewsletterRender'
// import AumentarRed from './pages/AumentarRedRender'
// import Reunion from './pages/ReunionRender'

const Perfilamiento = lazy(() => import('./pages/PerfilamientoRender'))
const Home = lazy(() => import('./pages/Home/'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Producto = lazy(() => import('./pages/ProductoRender'))
const Importacion = lazy(() => import('./pages/ImportacionRender'))
const Webinar = lazy(() => import('./pages/WebinarRender'))
const Reunion = lazy(() => import('./pages/ReunionRender'))
const Newsletter = lazy(() => import('./pages/NewsletterRender'))
const AumentarRed = lazy(() => import('./pages/AumentarRedRender'))
const LoginToken = lazy(() => import('./pages/LoginToken'))
const Team = lazy(() => import('./pages/Team'))
const Campaign = lazy(() => import('./pages/Campaign'))
const CampaignInfo = lazy(() => import('./pages/CampaignInfo'))



function App() {
    const userData = useSelector(state => state.user)

    const isLogged = useMemo(() => {

        return true // para desarrollo, comentar cuando sea necesario

    }, [userData])

    return (
        <Layout>
            <Suspense fallback={< PageLoading />}>
                <Routes>
                    <Route
                        path='/'
                        element={<Login />}
                    />
                    <Route
                        path='/login'
                        element={<Login />}
                    />
                    <Route
                        path='/login/auth'
                        element={<LoginToken />}
                    />
                    <Route
                        path='/home'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/campaign'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Campaign />
                            </PrivateRoute>
                        }
                    /> 
                    <Route
                        path='/campaign/:id/info'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <CampaignInfo />
                            </PrivateRoute>
                        }
                    /> 
                    <Route
                        path='/team'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Team />
                            </PrivateRoute>
                        }
                    /> 
                    <Route
                        path='/billing'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Home />
                            </PrivateRoute>
                        }
                    /> 
                    <Route
                        path='/perfilamiento'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Perfilamiento />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/perfilamiento/:step'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Perfilamiento />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/producto'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Producto />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/producto/:step'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Producto />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/campaign/:campaignId/importacion/:step'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Importacion />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/webinar'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Webinar />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/webinar/:step'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Webinar />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/reunion'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Reunion />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/campaign/:campaignId/reunion/:step'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Reunion />
                            </PrivateRoute>
                        }
                    />
                    {/* <Route
                        path='/newsletter'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Newsletter />
                            </PrivateRoute>
                        }
                    /> */}
                    <Route
                        // path='/newsletter/:step'
                        path='/campaign/:campaignId/newsletter/:step'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <Newsletter />
                            </PrivateRoute>
                        }
                    />
                    {/* <Route
                        path='/aumentarred'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <AumentarRed />
                            </PrivateRoute>
                        }
                    /> */}
                    <Route
                        path='/campaign/:campaignId/aumentarred/:step'
                        element={
                            <PrivateRoute isLogged={isLogged}>
                                <AumentarRed />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/*'
                        element={<NotFound/>}
                    />
                </Routes>
            </Suspense>
        </Layout>
    )
}

export default App

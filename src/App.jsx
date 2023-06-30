import { lazy, Suspense, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoading } from './components/Pages/PageLoading'
import { Layout } from './components/Pages/Layout'
import { useSelector } from 'react-redux'
import { PrivateRoute } from './components/Pages/PrivateRoute'

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

function App() {
  const userData = useSelector(state => state.user)

  const isLogged = useMemo(() => {
    return userData.token ? true : false
  }, [userData])

  return (
    <Layout>
      <Suspense fallback={< PageLoading />}>
        <Routes>
          <Route
            path='/test'
            element={
              <PrivateRoute isLogged={isLogged}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/login/auth' element={<LoginToken />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/campaign' element={<Home />}/> 
          <Route path='/team' element={<Home />}/> 
          <Route path='/billing' element={<Home />}/> 
          <Route path='/perfilamiento' element={<Perfilamiento/>}/>
          <Route path='/perfilamiento/:step' element={<Perfilamiento/>}/>
          <Route path='/producto' element={<Producto/>} />
          <Route path='/producto/:step' element={<Producto/>} />
          <Route path='/importacion/:step' element={<Importacion/>} />
          <Route path='/webinar' element={<Webinar/>}/>
          <Route path='/webinar/:step' element={<Webinar/>}/>
          <Route path='/reunion' element={<Reunion/>}/>
          <Route path='/reunion/:step' element={<Reunion/>}/>
          <Route path='/newsletter' element={<Newsletter/>}/>
          <Route path='/newsletter/:step' element={<Newsletter/>}/>
          <Route path='/aumentarred' element={<AumentarRed/>}/>
          <Route path='/aumentarred/:step' element={<AumentarRed/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App

import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoading } from './components/Pages/PageLoading'
import { Layout } from './components/Pages/Layout'

const Perfilamiento = lazy(() => import('./pages/PerfilamientoRender'))
const Home = lazy(() => import('./pages/Home/'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Producto = lazy(() => import('./pages/ProductoRender'))
const Importacion = lazy(() => import('./pages/Importacion'))

function App() {
  return (
    <Layout>
      <Suspense fallback={< PageLoading />}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/perfilamiento' element={<Perfilamiento/>}/>
          <Route path='/perfilamiento/:step' element={<Perfilamiento/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/producto' element={<Producto/>} />
          <Route path='/producto/:step' element={<Producto/>} />
          <Route path='/importacion' element={<Importacion/>} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App

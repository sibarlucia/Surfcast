import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoading } from './components/Pages/PageLoading'
import { Layout } from './components/Pages/Layout'
import Perfilamiento from './pages/Perfilamiento'
import Perfilamiento2 from './components/Perfilamientos/perfilamiento2'
import Perfilamiento3 from './components/Perfilamientos/perfilamiento3'
import Perfilamiento4 from './components/Perfilamientos/perfilamiento4'
import Perfilamiento5 from './components/Perfilamientos/perfilamiento5'
const Home = lazy(() => import('./pages/Home/'))
const Login = lazy(() => import('./pages/Login'))

function App() {
  return (
    <Layout>
      <Suspense fallback={< PageLoading />}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/perfilamiento' element={<Perfilamiento/>}/>
          <Route path='/perfilamiento2' element={<Perfilamiento2/>}/>
          <Route path='/perfilamiento3' element={<Perfilamiento3/>}/>
          <Route path='/perfilamiento4' element={<Perfilamiento4/>}/>
          <Route path='/perfilamiento5' element={<Perfilamiento5/>}/>

        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App

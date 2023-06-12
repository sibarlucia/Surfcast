import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoading } from './components/Pages/PageLoading'
import { Layout } from './components/Pages/Layout'
const Home = lazy(() => import('./pages/Home/'))
const Login = lazy(() => import('./pages/Login'))

function App() {
  return (
    <Layout>
      <Suspense fallback={< PageLoading />}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App


import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import { GlobalProvider } from './GlobalApi/GlobalContextApi'
import Detail from './components/Cart/Detail'
import CategoryProducts from './components/CategoryProducts/CategoryProducts'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Detail />} />
            <Route
              path="/category/:category"
              element={<CategoryProducts />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App

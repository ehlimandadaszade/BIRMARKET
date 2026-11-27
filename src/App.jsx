import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart/Cart'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import { GlobalProvider } from './GlobalApi/GlobalContextApi'
import Detail from './components/Cart/Detail'
import CategoryProducts from './components/CategoryProducts/CategoryProducts'

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Detail />} />
              <Route path="/category/:category" element={<CategoryProducts />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App

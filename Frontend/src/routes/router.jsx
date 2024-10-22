import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/login'
import Success from '../components/success'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeForm from "./pages/EmployeeForm"
import EmployeeList from "./pages/EmployeeList"
import Nav from './component/Nav'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<EmployeeForm/>}/>
        <Route path='/list' element={<EmployeeList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

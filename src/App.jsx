
import './App.css'
import Welcome from './routes/Welcome'
import Catalogue from './routes/Catalogue'
import { Route, Routes } from 'react-router'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Welcome />
        }/>

        <Route path='/catalogue' element={
          <Catalogue />
        }/>

        <Route path='/catalogue/:currentdog' element={
          <Catalogue />
        }/>
      </Routes>
    </div>
  )
}

export default App

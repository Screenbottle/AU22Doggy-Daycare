
import './App.css'
import Welcome from './routes/Welcome'
import Catalogue from './routes/Catalogue'
import { Route, Routes } from 'react-router'
import { useState } from 'react'
import CatalogueItem from './routes/CatalogueItem'

function App() {
  
  const [dogList, setDogList] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Welcome />
        }/>

        <Route path='/catalogue' element={
          <Catalogue dogList={dogList} setDogList={() => setDogList()}/>
        }/>

        <Route path='/catalogue/item/:currentdog' element={
          <CatalogueItem dogList={dogList} setDogList={() => setDogList() }/>
        }/>
      </Routes>
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { GlobalStyled } from './components/GlobalStyle/GlobalStyle.styled'
import Playlist from './Pages/Playlist'
import Avaliacao from './Pages/FeedBacks/AvaliacaoMain'
import Hamburguer from './components/Hamburguer'
import { useState } from 'react'
import Cabecalho from './components/Cabecalho'



function App() {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <>
      <BrowserRouter>
      <GlobalStyled>
      <Cabecalho setMenuVisible={setMenuVisible}/>
      <Hamburguer
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
        />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/avaliacao' element={<Avaliacao/>}/>
        </Routes>
      </GlobalStyled>
      </BrowserRouter>
    </>
  )
}



export default App

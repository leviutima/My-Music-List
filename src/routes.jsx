import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { GlobalStyled } from './components/GlobalStyle/GlobalStyle.styled'
import Playlist from './Pages/Playlist'
import Avaliacao from './Pages/FeedBacks/AvaliacaoMain'

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyled>
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

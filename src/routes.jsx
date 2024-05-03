import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { GlobalStyled } from './components/GlobalStyle/GlobalStyle.styled'

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyled>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </GlobalStyled>
      </BrowserRouter>
    </>
  )
}

export default App

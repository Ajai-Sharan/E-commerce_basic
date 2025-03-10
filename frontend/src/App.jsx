import { Box, Button} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NavBar from './components/ui/Navbar'
import { Toaster } from './components/ui/toaster'
import Demo from './pages/Demo.jsx'

// import ProductCard from './components/ProductCard.jsx'

function App() {  
  

  return (
    <>
      <Box minH={"100vh"} >
          <NavBar></NavBar>
          <Toaster />
          <Routes>
              <Route path='/' element={<HomePage></HomePage>}></Route>
              <Route path='/create' element={<CreatePage></CreatePage>}></Route>
          </Routes>

          {/* <Demo></Demo> */}

          {/* <ProductCard></ProductCard> */}

      </Box>
    </>
  )
}

export default App

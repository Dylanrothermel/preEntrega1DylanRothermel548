
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title="Tienda"/>
    </ChakraProvider>
  )
}

export default App

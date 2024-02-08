import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { MyRoutes } from './routes/routes'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <MyRoutes/>
    </>
  )
}

export default App

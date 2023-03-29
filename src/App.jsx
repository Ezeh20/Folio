import { useEffect, useState } from 'react'
import './App.scss'
import Main from './Pages/Home'
import Intro from './Pages/Intro/intro'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false)
    }, 2800)
    return () => clearTimeout(time)
  }, [])
  return (
    <div>

      {
        loading ? <Intro /> : <Main />
      }
    </div>
  )
}

export default App

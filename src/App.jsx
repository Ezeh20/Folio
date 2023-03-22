import { useEffect, useState } from 'react'
import './App.scss'
import Main from './Pages/Home'
import Intro from './Pages/Intro/intro'
import { motion } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false)
    }, 2800)
    return () => clearTimeout(time)
  }, [])
  return (
    <motion.div>

      {
        loading ? <Intro /> : <Main />
      }
    </motion.div>
  )
}

export default App

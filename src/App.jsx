import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const el = document.createElement('span')
    el.innerText = ' Hello'
    document.getElementById('root').appendChild(el)
    return () => {
      document.removeChild(el)
    } // this should not do do nothing because document dosen't have a child that is el, only root div has
  }, [])
  return <>World</>
}

export default App

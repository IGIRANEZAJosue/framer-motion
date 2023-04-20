import { useState } from 'react'
import { motion, spring } from 'framer-motion'


import './App.css'
import Card from './Card';


function App() {

  const [isOpen, setIsopen] = useState(false);


   return (
      <div className='App'>
         <Card />
         <Card />
         <Card />
      </div>
   )
}

export default App

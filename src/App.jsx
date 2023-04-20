import { useState } from 'react'
import { motion, spring } from 'framer-motion'


import './App.css'


function App() {

  const [isOpen, setIsopen] = useState(false);


   return (
      <div className='App'>
         <motion.div transition={{layout: {duration: 1, type: "spring" }}} layout onClick={() => setIsopen(!isOpen)} className='card'>
            <motion.h2 layout="position" >Framer Motion 🚀</motion.h2>

            {isOpen && (
               <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className='expand'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor officiis amet expedita aspernatur quibusdam tempore, quo quaerat pariatur officia inventore.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, labore!</p>
                  <button>View More</button>   
               </motion.div>
               
            )}

         </motion.div>
      </div>
   )
}

export default App

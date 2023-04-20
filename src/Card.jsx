import React from 'react'
import { useState } from 'react'
import { motion, spring } from 'framer-motion'



const Card = () => {
    const [isOpen, setIsopen] = useState(false);

  return (
    <div>
        <motion.div transition={{layout: {duration: 1, type: "spring" }}} layout onClick={() => setIsopen(!isOpen)} className='card'>
        <motion.h2 layout="position" >Framer Motion 🚀</motion.h2>

        {isOpen && (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className='expand'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing, pariatur officia inventore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur</p>
            <button>View More</button>   
        </motion.div>
        
        )}

        </motion.div>
    </div>
  )
}

export default Card

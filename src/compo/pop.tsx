import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

interface PopProps {
  children: React.ReactNode;
}

const Pop: React.FC<PopProps> = ({children}) => {
    const control = useAnimation(); 
    const [ref, isInView] = useInView({triggerOnce: true}); 
  

    const scrollVariants = {
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          delay: 0.8,
          type: "spring",
        },
      },
      hidden: {
        y: 0,
        opacity: 0,
      },
    }

    useEffect( 
      ()=>{
        if(isInView){
          control.start("visible");
        }
      },
      [isInView]
    );

    return(
        <motion.div
          className="figure2"
          //initial={{ scale: 0, opacity: 0 }}
          //animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          variants = {scrollVariants}
          ref = {ref} 
          initial = "hidden"
          animate = {control} 
        >
          <h1>{children}</h1>
        </motion.div>
    );

}

export default Pop;

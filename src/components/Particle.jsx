import { easeInOut, easeOut, motion } from "framer-motion";

function Particle(){

    return(
        <motion.section className="w-12 h-12 rounded-full absolute bg-[#4a91e296] shadow-5xl blur-xl hover:bg-[#4A90E2]"
            initial={{
                opacity: 0.4,
            }}
            animate={{
                x: [0, 50, -20, 0],
                y: [0, -30, 40, 0],
                rotate: [14],
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: easeInOut
                }
            }}

            whileHover={{
                scale: 1.8,
                opacity: 0.8,
                transition: {duration: 0.1}
            }}
        >
            
        </motion.section>
    );
}

export default Particle;
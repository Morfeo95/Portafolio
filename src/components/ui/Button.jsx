import {motion} from "framer-motion";

function Button({children, onClick}){
    return(
        <motion.button initial={{scale:0.5, opacity:0}}
        animate={{scale:1, opacity:1}}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={onClick} className={`p-4 bg-[#7BAA8F] hover:bg-[#4A90E2] rounded-xl font-montserrat text-md`}>
            {children}
        </motion.button>
    );
}
export default Button;
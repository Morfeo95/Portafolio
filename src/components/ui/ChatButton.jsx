import {motion} from "framer-motion";

function ChatButton({children, onClick}){
    return(
        <motion.button initial={{scale:0.5, opacity:0}}
        animate={{scale:1, opacity:1}}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={onClick} className={`p-2 bg-[#7BAA8F] hover:bg-[#4A90E2] rounded-full font-montserrat text-md`}>
            {children}
        </motion.button>
    );
}
export default ChatButton;
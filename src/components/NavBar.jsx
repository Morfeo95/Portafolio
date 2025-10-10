import {motion} from "framer-motion";

function NavBar(){
    return(
        <>
    <nav className="w-full bg-[#2C2C2E] flex left-32">
        <div className="w-20">
            <motion.img src="/img/logo.png" alt="Logo de Francisco"
            initial={{scale:0.5, opacity:0.5}}
            animate={{scale:1, opacity:1}}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}

            className="hover:shadow-xl"
            />
        </div>
        <div className="w-1/3"></div>
        <ul className="flex align-middle items-center-safe gap-4 text-[#F5F5F7] font-montserrat">
            <motion.li className="hover:text-[#7BAA8F]"
            initial={{opacity:0.5}}
            animate={{opacity:1}}
            whileTap={{scale:0.90}}
            >Inicio</motion.li>
            <motion.li className="hover:text-[#7BAA8F]"
            initial={{opacity:0.5}}
            animate={{opacity:1}}
            whileTap={{scale:0.90}}>Sobre mi</motion.li>
            <motion.li className="hover:text-[#7BAA8F]"
            initial={{opacity:0.5}}
            animate={{opacity:1}}
            whileTap={{scale:0.90}}>Portafolio</motion.li>
            <motion.li className="hover:text-[#7BAA8F]"
            initial={{opacity:0.5}}
            animate={{opacity:1}}
            whileTap={{scale:0.90}}>Contacto</motion.li>
        </ul>
    </nav>
    </>
    )
}
export default NavBar;
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from 'lucide-react';


function NavBar() {

     const [isOpen, setIsOpen] = useState(false);
     
     const toggleMenu = () => {
        setIsOpen(!isOpen);
     };

      const menuVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" }
    };

    return (
        <>
            <nav className="w-full bg-[#2C2C2E] flex left-32 items-center sm:px-4">
                <div className="w-20">
                    <a href="#">
                        <motion.img src="/img/logo.png" alt="Logo de Francisco"
                            initial={{ scale: 0.5, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}

                            className="hover:shadow-xl"
                        /></a>
                </div>

                <div className="w-1/3 hidden md:block"></div>
                <ul className="hidden align-middle items-center-safe gap-4 text-[#F5F5F7] font-montserrat md:flex">
                    <motion.li className="hover:text-[#7BAA8F]"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        whileTap={{ scale: 0.90 }}
                    ><a href="#">Inicio</a></motion.li>
                    <motion.li className="hover:text-[#7BAA8F]"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        whileTap={{ scale: 0.90 }}> <a href="#sobreMi">Sobre mi</a> </motion.li>
                    <motion.li className="hover:text-[#7BAA8F]"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        whileTap={{ scale: 0.90 }}> <a href="#portafolio">Portafolio</a></motion.li>
                    <motion.li className="hover:text-[#7BAA8F]"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        whileTap={{ scale: 0.90 }}> <a href="#contacto">Contacto</a></motion.li>
                </ul>

                <a className="text-[#7BAA8F]" onClick={toggleMenu}><div className="md:hidden"><Menu/></div></a>
            </nav>

            {isOpen && (
                <motion.ul 
                    className="md:hidden absolute top-[70px] left-0 w-full bg-[#2C2C2E] flex flex-col items-start p-4 space-y-4 text-[#F5F5F7] z-50"
                    initial="closed"
                    animate="open"
                    exit="closed" 
                    variants={menuVariants}
                >
                    <motion.li className="w-full border-b border-gray-700 pb-2 hover:text-[#7BAA8F]"><a href="#" onClick={toggleMenu}>Inicio</a></motion.li>
                    <motion.li className="w-full border-b border-gray-700 pb-2 hover:text-[#7BAA8F]"><a href="#sobreMi" onClick={toggleMenu}>Sobre mi</a></motion.li>
                    <motion.li className="w-full border-b border-gray-700 pb-2 hover:text-[#7BAA8F]"><a href="#portafolio" onClick={toggleMenu}>Portafolio</a></motion.li>
                    <motion.li className="w-full pb-2 hover:text-[#7BAA8F]"><a href="#contacto" onClick={toggleMenu}>Contacto</a></motion.li>
                </motion.ul>
            )}
        </>
    )
}
export default NavBar;
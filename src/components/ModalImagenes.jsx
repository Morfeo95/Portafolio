import { AnimatePresence, motion } from "framer-motion";
import { CircleX } from "lucide-react";

function ModalImagenes({isOpen, onClose, imagenUrl}){
    
    return (
        <AnimatePresence>
            {
                isOpen && (
                    <motion.div className="fixed inset-0 bg-[#2c2c2ef5] z-50 flex justify-center items-center p-8"
                    key="modal-imagen"
                    initial={{y: "-100vh", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{scale: 0.2, opacity: 0}}
                    transition={{duration: .400}}

                    >
                        <div
                        className="absolute inset-0 bg-cover bg-center filter blur-lg scale-115 opacity-50"
                        style={{ backgroundImage: `url(${imagenUrl})` }}
                        >

                        </div>
                        <div className="relative z-10 max-w-full max-h-full">
                            <button onClick={onClose} className="flex font-montserrat text-md text-[#F5F5F7] justify-center items-center gap-2 mb-1"
                            style={{ pointerEvents: 'auto' }}
                            > <CircleX color="#F5F5F7"/>cerrar</button>
                            <img src={imagenUrl} alt="" />
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );

}

export default ModalImagenes;
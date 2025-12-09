import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { useState } from "react";

import ModalImagenes from "../ModalImagenes.jsx";


function Card({ imagenUrl, titulo, descripcion, tecnologias, urlDemo, urlCodigo }) {

    const[isExpaded, setIsExpanded] = useState(false);
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[imagen, setImagen] = useState('');
    const [cardClickable, setCardClickable] = useState(true);
    
    
    const MAX_LENGTH = 150;

    const needTruncation = descripcion.length > MAX_LENGTH;

    const descriptionToShow = needTruncation && !isExpaded
    ? descripcion.substring(0, MAX_LENGTH) + "..."
    : descripcion;

    const toggleExpation = () => {
        setIsExpanded(!isExpaded);
    };

    const handleModalState = (url) => {
        setImagen(url);
        setIsModalOpen(true);
        setCardClickable(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setCardClickable(true);
        }, 500);
    };


    return (
        <section className="bg-[#2C2C2E] shadow-lg rounded-2xl overflow-hidden group w-80 hover:scale-110 transition-all duration-300 relative"
        style={{ pointerEvents: cardClickable ? 'auto' : 'none' }}
        >
            <div className="w-full h-48 overflow-hidden">
                <img 
                    src={imagenUrl} 
                    alt={`imagen de ${titulo}`} 
                    className="w-full h-full object-cover hover:scale-110 duration-300" 
                    onClick={() =>handleModalState(imagenUrl)}
                />
            </div>
            <h2 className="font-signika text-[#F5F5F7] text-center text-3xl">{titulo}</h2>
            <p className="font-montserrat text-[#C0C0C0] text-md m-2 mb-0">{descriptionToShow}</p>

            {
                needTruncation && (
                    <motion.button
                    onClick={toggleExpation}
                    whileTap={{scale: 0.9}}
                    className="font-signika text-[#7BAA8F] ml-4"
                    >{isExpaded ? "Ver menos..." : "Ver mas..."}</motion.button>
                )
            }

            <div className="flex justify-center gap-1.5">
                {tecnologias.map((tech, index) => (<span key={index}
                    className="font-titilium text-xs uppercase text-center text-[#F5F5F7]"
                >◉{tech}</span>
                ))}
            </div>
            <div className="flex justify-between mr-8 ml-8 mb-2 mt-3 font-signika text-sm text-center text-[#2C2C2E]">
                {urlDemo && <div className="flex items-center gap-2 p-1 rounded-full bg-[#7BAA8F] hover:scale-110">
                    <Globe/>
                    <a href={urlDemo}>
                    Ver Demo</a>
                </div>
                }
                {urlCodigo && <div className="flex items-center gap-2 p-1 rounded-full bg-[#7BAA8F] hover:scale-110">
                    <Github />
                    <a href={urlCodigo}>
                    Ver Codigo Fuente</a>
                </div>

                }
            </div>
            <ModalImagenes
            imagenUrl={imagen}
            isOpen={isModalOpen}
            onClose={closeModal}
            />
        </section>
    );
}

export default Card;
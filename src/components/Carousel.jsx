import { motion } from "framer-motion";
import Card from "./ui/Card.jsx";
import ProyectosData from "../Data/ProjectosData.js";

function Carrousel() {
    return (
        <section id="portafolio">
            <h1 className="font-signika text-5xl text-[#7BAA8F] text-center mt-4 mb-4">Proyectos</h1>
            <div className="flex flex-wrap gap-8 justify-center p-4 md:w-full">
            {ProyectosData.map((proyecto) => (
                <Card
                    key={proyecto.id}
                    imagenUrl={proyecto.imagenUrl}
                    titulo={proyecto.titulo}
                    descripcion={proyecto.descripcion}
                    tecnologias={proyecto.tecnologias}
                    urlDemo={proyecto.urlDemo}
                    urlCodigo={proyecto.urlCodigo}
                />
            ))}
            </div>
        </section>
    );
}

export default Carrousel;

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import { useState } from "react";

function Hero() {

    const [ isTextDisplayed, setIsTextDisplayed ] = useState(false);

    const { scrollYProgress } = useScroll();
    const rawHeight = useTransform(scrollYProgress, [0, 0.5], ["100vh", "50vh"])

    const moreText = () => {
        setIsTextDisplayed(true);
    }

    const smoothHeight = useSpring(rawHeight, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.01
    })
    return (
        <>
            <motion.section
                style={{ height: smoothHeight, top: 0 }}
                className="bg-[#1A1A1A] text-[#F5F5F7] relative overflow-hidden">
                <div className="flex justify-start overflow-hidden">
                    <img src="/img/trique.png" alt="" className="absolute start-0 inset-0 object-cover w-full h-full z-0 overflow-hidden md:start-96" />
                </div>
                <h1 className="relative text-[#7BAA8F] z-10 pl-8 pt-8 font-signika text-6xl">Hola</h1>
                <br />
                <h2 className="relative z-10 pl-4 font-montserrat text-4xl"> Soy <motion.strong
                    className="text-[#7BAA8F]"
                    style={{ display: 'inline-block' }}
                    animate={{
                        x: [0, 2, -2, 2, -2, 1, -1, 0],
                        color: ['#7BAA8F', '#4A90E2', '#7BAA8F', '#4A90E2', '#7BAA8F', '#4A90E2', '#7BAA8F'],
                        opacity: [1, 0.8, 1, 0.8, 1, 0.8, 1]
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        repeatDelay: 1.5
                    }}
                >Francisco Xavier Vera Fabila.</motion.strong> </h2>
                <h2 className="relative z-10 pl-4 font-montserrat text-2xl">Desarrollador Backend (Java & Spring Boot).</h2>
                <div>
                    {
                        isTextDisplayed ? (
                            <div>
                                <AnimatePresence>
                                    <motion.p
                                    className="m-4 md:w-3xl relative overflow-hidden font-montserrat text-left md:text-xl text-[#F5F5F7] text-md w-fit"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    exit={{scale:0.5, opacity:0}}
                                    viewport={{ once: true }}
                                >
                                    Soy un desarrollador backend especializado en Java y Spring Boot, apasionado por crear sistemas seguros, escalables y elegantes.
                                    A lo largo de mi trayectoria he diseñado <strong className='text-[#7BAA8F]'>APIs RESTful</strong>, optimizado bases de datos y aplicado principios de ciberseguridad y arquitectura limpia para ofrecer soluciones sólidas y confiables.

                                    Me guía una filosofía de equilibrio entre precisión técnica y claridad humana: escribir código que no solo funcione, sino que comunique orden, justicia y propósito.

                                    Además de mi experiencia en backend, disfruto aprender y aplicar nuevas tecnologías, integrar prácticas <strong className='text-[#7BAA8F]'>DevSecOps</strong> y colaborar con equipos multidisciplinarios para convertir ideas en productos reales.

                                    Cada proyecto —desde plataformas educativas como Bach hasta herramientas empresariales como <strong className='text-[#7BAA8F]'>EasyBiz</strong>— representa un paso más en mi búsqueda por unir la eficiencia del código con la sabiduría del diseño.
                                </motion.p>
                                </AnimatePresence>
                                <div className="bg-[#7BAA8F] rounded-full w-fit p-2 items-center ml-12 z-10 relative">
                                    <ChevronUp onClick={() => setIsTextDisplayed(false)} />
                                </div>
                            </div>
                        ) : (
                            <div className="bg-[#7BAA8F] rounded-full w-fit p-2 items-center ml-12 z-10 relative">
                                <ChevronDown onClick={moreText} /> 
                            </div>
                            
                        )
                    }
                </div>
                <div className="flex pl-32 gap-32 relative z-10">
                    <a href="#contacto"><Button>Contacto</Button></a> <a href="#portafolio"><Button>Mis Proyectos</Button></a>
                </div>
            </motion.section>
        </>
    );
}

export default Hero;
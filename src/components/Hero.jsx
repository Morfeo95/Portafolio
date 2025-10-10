import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Button from "./ui/Button";

function Hero(){
    const {scrollYProgress} = useScroll();
    const rawHeight = useTransform(scrollYProgress, [0, 0.5], ["100vh", "50vh"])

    const smoothHeight = useSpring(rawHeight, {
        stiffness:150,
        damping:30,
        restDelta:0.01
    })
    return(
        <>
        <motion.section
        style={{height: smoothHeight, top: 0}}
        className="bg-[#1A1A1A] text-[#F5F5F7] relative overflow-hidden">
            <div className="flex justify-start overflow-hidden">
                <img src="/img/trique.png" alt="" className="absolute start-96 inset-0 object-cover w-full h-full z-0 overflow-hidden"/>
            </div>
            <h1 className="relative z-10 pl-8 pt-8 font-signika text-6xl">Hola</h1>
            <br />
            <h2 className="relative z-10 pl-4 font-montserrat text-4xl">Soy <strong className="text-[#7BAA8F]">Francisco Xavier Vera Fabila.</strong> </h2>
            <h2 className="relative z-10 pl-4 font-montserrat text-2xl">Desarrollador Backend (Java & Spring Boot).</h2>
            <div className="flex pt-16 pl-32 gap-32 relative z-10">
                <Button>Contacto</Button> <Button>Mis Proyectos</Button>
            </div>
        </motion.section>
        </>
    );
}

export default Hero;
import Particle from "./Particle"
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const getRandomPosition = (max) => Math.floor(Math.random() * max);
const numeroDeParticulas = 20;

const generateParticles = Array.from({ length: numeroDeParticulas }).map((_, index) => (
        <div
            key={index}
            className="absolute"
            style={{
                top: `${getRandomPosition(100)}vh`,
                left: `${getRandomPosition(100)}vw`,

            }}
        >
            <Particle />
        </div>
    ))



function Contact() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const particles = useState(generateParticles);


    const handleSubmit = (e) => {
        e.preventDefault();

        const datosContacto = {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            timestamp: Date.now().toString()
        };
        const json = JSON.stringify(datosContacto);

        console.log(json);
    };


    return (

        <form onSubmit={handleSubmit} className="relative overflow-hidden items-center block justify-center mt-45" id="contacto">
            <div className="absolute inset-0 z-0 w-full h-full">
                {particles}
            </div>
            <div className="relative z-10 items-center flex flex-col justify-center mb-6">
                <motion.h1 className="text-[#7BAA8F] font-signika text-4xl md:text-6xl"
                 initial={{scale:0.5, y: -350}}
                 animate={{scale:1, y: 0}}
                 transition={{duration:.9}}
                >Contacta me:</motion.h1>
                <motion.div
                initial={{opacity: 0.5, scale: 0.5}}
                animate={{ opacity: 1, scale:1 }}
                transition={{duration: 0.9}}
                >
            <Input
                id={"nombre"}
                label={"Nombre"}
                type={"text"}
                placeholder={"Ingresa tu nombre"}
                required={true}
                onChange={(e) => setNombre(e.target.value)}
            />

            <Input
                id={"email"}
                label={"Email"}
                type={"email"}
                placeholder={"Ingresa tu email de contacto aqui"}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                id={"asunto"}
                label={"Asunto"}
                type={"text"}
                placeholder={"Ingresa motivo de contacto"}
                onChange={(e) => setAsunto(e.target.value)}
            />

            <Textarea
                id={"mensaje"}
                label={"Mensaje"}
                placeholder={"Escribe tu mensaje"}
                onChange={(e) => setMensaje(e.target.value)}
            />
            <div className="block md:flex md:flex-row-reverse mt-3 justify-between">
                <Button type="submit">Enviar mensaje</Button>
                <div className="flex text-[#7BAA8F] gap-6 mt-3">
                    <a href="https://www.linkedin.com/in/francisco-x-vera-/" className="hover:text-[#4A90E2]"><Linkedin /></a>
                    <a href="https://github.com/Morfeo95/" className="hover:text-[#4A90E2]"><Github /></a>
                    <a href="mailto:francisco.vera.95@gmail.com" className="hover:text-[#4A90E2]"><Mail /></a>
                    <p className="font-montserrat text-sm md:text-md hover:text-[#4A90E2]">francisco.vera.95@gmail.com</p>
                </div>
            </div>
            </motion.div>
            </div>

        </form>

    );
}

export default Contact;
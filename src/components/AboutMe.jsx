import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Talents from './Talents';

// Componente reutilizable para el número animado
function AnimatedNumber({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Anima solo una vez

  useEffect(() => {
    if (isInView) {
      // Anima desde 0 hasta el valor final
      animate(0, value, {
        duration: 2, // 2 segundos de duración
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(0);
          }
        }
      });
    }
  }, [isInView, value]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-[#7BAA8F]">
        +<span ref={ref}>0</span>
      </p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

function AboutMe() {
  const metrics = [
  { value: 3, label: 'Áreas de Especialización (Backend, Seguridad, Datos)' },
  { value: 6, label: 'Certificaciones y Cursos Completados' },
  { value: 6, label: 'Repositorios Activos en GitHub' }
];
  return (
    <section className="py-20 bg-[#1A1A1A] flex justify-between">
      <Talents/>
      <div className="px-4 text-center">
        <motion.h2 className="text-5xl font-signika text-[#7BAA8F] mb-4"
        whileInView={{y:0, opacity:1}}
        animate={{y: -100, opacity:0}}
        transition={{duration:1.2,  delay:0.9}}
        >Sobre Mí</motion.h2>
        <motion.p className="max-w-3xl mx-auto font-montserrat text-xl text-[#F5F5F7]"
        whileInView={{scale:1, opacity:1}}
        animate={{scale:0.5, opacity:0}}
        transition={{duration:1.1, delay:0.9}}
        >
          Soy un desarrollador backend especializado en Java y Spring Boot, apasionado por crear sistemas seguros, escalables y elegantes.
A lo largo de mi trayectoria he diseñado <strong className='text-[#7BAA8F]'>APIs RESTful</strong>, optimizado bases de datos y aplicado principios de ciberseguridad y arquitectura limpia para ofrecer soluciones sólidas y confiables.

Me guía una filosofía de equilibrio entre precisión técnica y claridad humana: escribir código que no solo funcione, sino que comunique orden, justicia y propósito.

Además de mi experiencia en backend, disfruto aprender y aplicar nuevas tecnologías, integrar prácticas <strong className='text-[#7BAA8F]'>DevSecOps</strong> y colaborar con equipos multidisciplinarios para convertir ideas en productos reales.

Cada proyecto —desde plataformas educativas como Bach hasta herramientas empresariales como <strong className='text-[#7BAA8F]'>EasyBiz</strong>— representa un paso más en mi búsqueda por unir la eficiencia del código con la sabiduría del diseño.
        </motion.p>
        
        <motion.div 
          className="flex justify-center gap-8 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }} // Anima los hijos en secuencia
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}>
              <AnimatedNumber value={metric.value} label={metric.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;

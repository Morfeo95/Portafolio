import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// Componente de métrica circular con animación
function CircularMetric({ value, label }) {
  const numberRef = useRef(null);
  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { once: true, margin: "-50px" });

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (isInView) {
      // Animar el número
      animate(0, value, {
        duration: 2,
        onUpdate(latest) {
          if (numberRef.current) {
            numberRef.current.textContent = latest.toFixed(0);
          }
        }
      });
    }
  }, [isInView, value]);

  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div ref={circleRef} className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Círculo de fondo */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="5"
            className="stroke-[#2C2C2E]"
            fill="none"
          />
          {/* Círculo de progreso animado */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="5"
            className="stroke-[#7BAA8F]"
            fill="none"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl font-bold text-[#F5F5F7]">
            +<span ref={numberRef}>0</span>
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-400 max-w-[200px]">{label}</p>
    </div>
  );
}

function Metricas() {
  const metrics = [
    { value: 3, label: 'Áreas de Especialización (Backend, Seguridad, Datos)' },
    { value: 6, label: 'Certificaciones y Cursos Completados' },
    { value: 6, label: 'Repositorios Activos en GitHub' }
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center items-center gap-8 w-full md:w-2xl"
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
          <CircularMetric value={metric.value} label={metric.label} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Metricas;
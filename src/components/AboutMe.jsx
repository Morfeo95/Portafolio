import { motion } from 'framer-motion';
import Talents from './Talents';
import Metricas from './Metricas';

function AboutMe() {
  return (
    <section id='sobreMi' className="flex flex-col justify-center items-center py-20 bg-[#1A1A1A]">
      <Talents />
      <Metricas />
    </section>
  );
}

export default AboutMe;
import { Cloud, Database, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

function Talents() {
    return (
        <section className='text-[#C0C0C0] font-motserrat text-2xl'>
            <motion.article className='flex gap-6 items-center p-12'
                whileHover={{ scale: 1.1 }}
            ><motion.div
                whileInView={{ rotate: 360 }}
                transition={{ duration: 1, ease: 'linear', delay: 0.5 }}
            ><Cloud size={90} color='#7BAA8F' /></motion.div>
                <motion.h2
                    whileInView={{ x: 0, opacity: 1 }}
                    animate={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >Certificacion Oracle Cloud Infrastructure Foundations Associate </motion.h2></motion.article>
            <motion.article className='flex gap-6 items-center p-12'
                whileHover={{ scale: 1.1 }}
            ><motion.div
                whileInView={{ rotate: 360 }}
                transition={{ duration: 1, ease: 'linear', delay: 0.8 }}
            ><Database size={90} color='#7BAA8F' /></motion.div>
                <motion.h2
                    whileInView={{ x: 0, opacity: 1 }}
                    animate={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >Extensa experiencia en bases de datos relacionales</motion.h2></motion.article>
            <motion.article className='flex gap-6 items-center p-12'
                whileHover={{ scale: 1.1 }}
            ><motion.div
                whileInView={{ rotate: 360 }}
                transition={{ duration: 1, ease: 'linear', delay: 0.8 }}
            ><Coffee size={90} color='#7BAA8F' /></motion.div><motion.h2
                whileInView={{ x: 0, opacity: 1 }}
                animate={{ x: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.9 }}>Experto en Java y Springboot</motion.h2></motion.article>
        </section>
    );
}

export default Talents;
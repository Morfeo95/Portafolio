import { Code, Database, ShieldCheck, BarChart, LayoutTemplate } from 'lucide-react';
import { delay, hover, motion, scale } from 'framer-motion';
import skillsData from '../Data/SkillsData';

const textVariants= {
    rest: {y: 30, delay: 0.5},
    hover: {y: 0, x: 15}
};

const listVariants = {
    rest: {opacity: 0, z: 0},
    hover: {opacity: 1, z: 1}
};

const cardVariants = {
    rest: { },
    hover: { }
};

const iconComponents = {
    Code: <Code size={40}/>,
    Database: <Database size={40}/>,
    ShieldCheck: <ShieldCheck size={40}/>,
    BarChart: <BarChart size={40}/>,
    LayoutTemplate: <LayoutTemplate size={40}/>,
};

function Talents() {
    return (
        <section className='font-motserrat text-2xl w-full flex flex-col justify-center items-center p-2'>
            <h2 className="text-6xl font-signika text-[#7BAA8F] text-center mb-12">Habilidades Técnicas</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {skillsData.map((item, index) => (
                    <motion.article 
                        key={item.id}
                        className='md:flex md:flex-col justify-center items-center relative lg:h-98 lg:w-85
                         text-[#7BAA8F] shadow-[3px_3px_5px_#7BAA8F] p-8 rounded-lg border-2 border-[#7BAA8F]
                         hover:border-[#4A90E2] hover:text-[#4A90E2] hover:scale-110 hover:-translate-y-2 hover:shadow-[8px_8px_10px_#4A90E2]
                         transition-all duration-300 w-42 h-49'
                        variants={cardVariants}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover="hover"
                        whileTap="hover"
                        animate="rest"
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex top-1 left-1 absolute'>
                            {iconComponents[item.icon]}
                        </div>
                        <div className='absolute left-3'>
                        <motion.h3 className="lg:text-5xl font-signika mt-4 mb-2 text-2xl"
                        variants={textVariants}
                        transition={{duration: 0.3, delay: 0.2}}
                        >{item.category}</motion.h3>
                        <motion.ul className="block gap-3 w-42 text-left font-titilium text-[#C0C0C0]"
                        variants={listVariants}
                        transition={{duration: 0.3, delay: 0.4}}
                        >
                            {item.skills.map((skill, i) => (
                                <li key={i} className="lg:text-lg text-xs">◉ {skill}</li>
                            ))}
                        </motion.ul>
                        </div>
                        <div className='flex bottom-1 right-1 absolute'>
                            {iconComponents[item.icon]}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

export default Talents;
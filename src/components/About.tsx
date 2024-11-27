import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Monitor, Trophy } from 'lucide-react';
import { useThemeStore } from '../store/theme';

const skills = [
  {
    icon: <Palette size={32} />,
    title: "Brand Design",
    description: "Creating unique and memorable brand identities"
  },
  {
    icon: <Monitor size={32} />,
    title: "UI/UX Design",
    description: "Crafting intuitive digital experiences"
  },
  {
    icon: <Trophy size={32} />,
    title: "Print Design",
    description: "Delivering high-quality print materials"
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section id="about" className={`min-h-screen ${isDark ? 'bg-black/95' : 'bg-gray-50'} py-20 px-4`}>
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <motion.img
              src="/umar.png"
              alt="Umar Tayyab"
              className="w-48 h-48 rounded-full object-cover shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate graphic designer with over 8 years of experience in creating
              compelling visual solutions. My approach combines creativity with strategic
              thinking to deliver impactful designs that resonate with audiences.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`p-6 rounded-lg ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm hover:bg-white/10' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              <div className="text-purple-400 mb-4">{skill.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.title}</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
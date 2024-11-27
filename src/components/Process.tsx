import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Search, Palette, Rocket } from 'lucide-react';
import { useThemeStore } from '../store/theme';

const processSteps = [
  {
    icon: <Search size={32} />,
    title: "Discovery",
    description: "Understanding your brand, goals, and target audience"
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Ideation",
    description: "Brainstorming creative concepts and solutions"
  },
  {
    icon: <Palette size={32} />,
    title: "Design",
    description: "Crafting pixel-perfect designs with attention to detail"
  },
  {
    icon: <Rocket size={32} />,
    title: "Delivery",
    description: "Launching your project with ongoing support"
  }
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section className={`${isDark ? 'bg-black/90' : 'bg-gray-100'} py-20 px-4`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Design Process
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A systematic approach to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg ${
                  isDark
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                    : 'bg-white shadow-lg border border-gray-100'
                } h-full`}
              >
                <div className="text-purple-400 mb-4">{step.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {step.description}
                </p>
              </motion.div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-[2px] bg-gradient-to-r from-purple-500/20 to-transparent transform translate-x-1/2">
                  <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-purple-500 transform -translate-y-1/2" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
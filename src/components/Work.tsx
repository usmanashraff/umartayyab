import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useKeyPressEvent } from 'react-use';

const projects = [
  {
    title: "Brand Identity",
    description: "Complete brand redesign for a tech startup",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    category: "Branding"
  },
  {
    title: "UI Design System",
    description: "Modern design system for enterprise applications",
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&q=80&w=800",
    category: "UI/UX"
  },
  {
    title: "Print Collection",
    description: "Minimalist poster series for art gallery",
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=800",
    category: "Print"
  },
  {
    title: "Motion Graphics",
    description: "Animated brand stories and social media content",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    category: "Animation"
  },
  {
    title: "Package Design",
    description: "Sustainable packaging solutions for eco-friendly brands",
    image: "https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&q=80&w=800",
    category: "Packaging"
  },
  {
    title: "Editorial Design",
    description: "Magazine layouts and digital publications",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    category: "Editorial"
  }
];

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + projects.length) % projects.length));
    setScale(1);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % projects.length));
    setScale(1);
  };

  useKeyPressEvent('ArrowLeft', handlePrevious);
  useKeyPressEvent('ArrowRight', handleNext);
  useKeyPressEvent('Escape', () => setSelectedIndex(null));

  return (
    <section id="work" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.2,
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1.000]
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg bg-white/5 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-sm text-purple-400 font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <motion.div 
                    className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink size={16} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedIndex(null);
                setScale(1);
              }
            }}
          >
            <button
              className="absolute top-4 right-4 text-white/75 hover:text-white"
              onClick={() => {
                setSelectedIndex(null);
                setScale(1);
              }}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white"
              onClick={handlePrevious}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                className="text-white/75 hover:text-white"
                onClick={() => setScale(prev => Math.min(prev + 0.5, 3))}
              >
                <ZoomIn size={24} />
              </button>
              <button
                className="text-white/75 hover:text-white"
                onClick={() => setScale(prev => Math.max(prev - 0.5, 0.5))}
              >
                <ZoomOut size={24} />
              </button>
            </div>

            <motion.div
              className="relative w-full max-w-5xl aspect-[4/3] overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <motion.img
                src={projects[selectedIndex].image}
                alt={projects[selectedIndex].title}
                className="w-full h-full object-contain"
                style={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
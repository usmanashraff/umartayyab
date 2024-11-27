import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = ['Home', 'Work', 'Services', 'Process', 'About', 'Contact'];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (item: string) => {
    setIsOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 mix-blend-difference">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            UMAR.
          </motion.span>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:opacity-75 transition-opacity"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 z-30 flex items-center justify-center"
          >
            <ul className="space-y-8 text-center">
              {menuItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="overflow-hidden"
                >
                  <motion.button
                    onClick={() => handleClick(item)}
                    className={`text-4xl sm:text-6xl font-bold transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-purple-400'
                        : 'text-white hover:text-purple-400'
                    }`}
                  >
                    {item}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
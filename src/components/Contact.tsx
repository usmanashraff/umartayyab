import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { FadeUp, FadeIn, SlideIn } from './ScrollReveal';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const mailtoLink = `mailto:umartayyab104@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${formData.get('name')}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Let's create something amazing together
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SlideIn>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:umartayyab104@gmail.com" 
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Mail size={20} />
                  <span>umartayyab104@gmail.com</span>
                </a>
                <a 
                  href="tel:+923427440786" 
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Phone size={20} />
                  <span>+92 342 7440786</span>
                </a>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin size={20} />
                  <span>Sargodha, Pakistan</span>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-bold mb-4 text-white">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>

          <FadeIn>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
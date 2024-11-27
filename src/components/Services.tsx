import { motion } from 'framer-motion';
import { 
  Monitor, 
  Layout, 
  Smartphone, 
  Image, 
  FileText, 
  FileCheck, 
  Share2, 
  Heart, 
  CreditCard, 
  Newspaper, 
  BookOpen, 
  Palette 
} from 'lucide-react';
import { FadeUp, ScaleIn } from './ScrollReveal';

const services = [
  {
    icon: <Monitor size={32} />,
    title: "Web Design",
    description: "Custom websites that capture your brand's essence"
  },
  {
    icon: <Layout size={32} />,
    title: "Landing Page Design",
    description: "High-converting landing pages that drive results"
  },
  {
    icon: <Smartphone size={32} />,
    title: "App Design",
    description: "Intuitive mobile app interfaces and experiences"
  },
  {
    icon: <Image size={32} />,
    title: "Panaflex Design",
    description: "Eye-catching outdoor advertising solutions"
  },
  {
    icon: <FileText size={32} />,
    title: "Professional CV",
    description: "Stand-out resume designs for career success"
  },
  {
    icon: <FileCheck size={32} />,
    title: "Letterpad Design",
    description: "Professional letterhead and stationery design"
  },
  {
    icon: <Share2 size={32} />,
    title: "Social Media Posts",
    description: "Engaging content for your social platforms"
  },
  {
    icon: <Heart size={32} />,
    title: "Wedding Cards",
    description: "Beautiful invitations for your special day"
  },
  {
    icon: <CreditCard size={32} />,
    title: "Business Cards",
    description: "Memorable business card designs"
  },
  {
    icon: <Newspaper size={32} />,
    title: "Flyer Designs",
    description: "Impactful flyers that grab attention"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Brochure Design",
    description: "Professional marketing materials"
  },
  {
    icon: <Palette size={32} />,
    title: "Logo Design",
    description: "Unique brand identities that stand out"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-black/95 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive design solutions for all your creative needs
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScaleIn key={service.title}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
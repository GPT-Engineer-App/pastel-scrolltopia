import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setShowEasterEgg(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      {showEasterEgg && <EasterEgg />}
    </div>
  );
};

const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-pink-100 shadow-md z-50">
    <nav className="container mx-auto px-6 py-3">
      <ul className="flex justify-center space-x-8">
        <li><a href="#home" className="text-purple-600 hover:text-purple-800 transition-colors">Home</a></li>
        <li><a href="#about" className="text-purple-600 hover:text-purple-800 transition-colors">About</a></li>
        <li><a href="#portfolio" className="text-purple-600 hover:text-purple-800 transition-colors">Portfolio</a></li>
        <li><a href="#contact" className="text-purple-600 hover:text-purple-800 transition-colors">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100">
    <div className="text-center">
      <motion.h1 
        className="text-6xl font-bold mb-4 text-purple-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Anton Osika
      </motion.h1>
      <motion.p 
        className="text-2xl text-purple-600 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Founder & Philosopher
      </motion.p>
      <motion.a 
        href="#contact" 
        className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-purple-50">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-800">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/placeholder.svg" alt="Anton Osika" className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            As a founder and philosopher, I blend innovative thinking with practical solutions. My journey has been shaped by a passion for exploring ideas and turning them into reality.
          </p>
          <p className="text-lg mb-4">
            With a background in both technology and philosophy, I bring a unique perspective to problem-solving and business strategy. I believe in the power of ideas to change the world and the importance of ethical considerations in entrepreneurship.
          </p>
          <div className="flex items-center space-x-4">
            <Book className="text-purple-600" />
            <span>Author of "The Philosophical Entrepreneur"</span>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <Briefcase className="text-purple-600" />
            <span>Founder of TechEthics Inc.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects = [
    { title: "EthicalAI", description: "An AI platform focused on ethical decision-making" },
    { title: "Philosophy App", description: "Mobile app for daily philosophical reflections" },
    { title: "TechEthics Blog", description: "A blog exploring the intersection of technology and ethics" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 bg-purple-100">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-800">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-purple-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Anton Osika. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-pink-300 transition-colors"><Github /></a>
          <a href="#" className="hover:text-pink-300 transition-colors"><Linkedin /></a>
          <a href="#" className="hover:text-pink-300 transition-colors"><Twitter /></a>
          <a href="#" className="hover:text-pink-300 transition-colors"><Mail /></a>
        </div>
      </div>
    </div>
  </footer>
);

const EasterEgg = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg text-center">
      <h3 className="text-2xl font-bold mb-4">You found the Easter Egg!</h3>
      <p className="mb-4">Here's a philosophical quote to ponder:</p>
      <blockquote className="italic text-purple-600">
        "The unexamined life is not worth living." - Socrates
      </blockquote>
      <button 
        onClick={() => setShowEasterEgg(false)}
        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
      >
        Close
      </button>
    </div>
  </div>
);

export default Index;

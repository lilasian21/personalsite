import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import HackTheBox from '@/components/sections/HackTheBox';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/common/Footer';

function App() {
  const { toast } = useToast();

  const handleNotImplemented = (feature = "Feature") => {
    toast({
      title: `🚧 ${feature} coming soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Toaster />
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} handleContactClick={() => scrollToSection('contact')} />
        <About />
        <HackTheBox handleNotImplemented={handleNotImplemented} />
        <Experience handleNotImplemented={handleNotImplemented} />
        <Skills />
        <Certifications />
        <Contact handleContactClick={() => handleNotImplemented('Contact Form')} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
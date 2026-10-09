
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BooksSection from './components/BooksSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import JournalSection from './components/JournalSection.jsx';
import NewsletterSection from './components/NewsletterSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

import './styles/site.css';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <BooksSection />
        <AboutSection />
        <TestimonialsSection />
        <JournalSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
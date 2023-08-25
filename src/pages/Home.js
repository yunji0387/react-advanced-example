import React from 'react';
import Header from '../components/Header';
import LandingSection from '../components/LandingSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactMeSection from '../components/ContactMeSection';
import Footer from '../components/Footer';
import Alert from '../components/Alert';

const Home = () => {
    return (
        <>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </>
    );
}

export default Home;
import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import IntroDell from '../components/IntroDell';
import Footer from '../common/Footer';

function Home() {
  return (
    <>
      <IntroDell />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

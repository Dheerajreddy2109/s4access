import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function S4AccessArchitectureDesign() {
  return (
    <>
      <Header />
      <section className='s4-access-architecture-design' style={{ padding: '100px 0 60px 0', minHeight: '60vh', backgroundColor: '#ca0d0dff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <h1 className="big-heading-text-black">S/4 Access architecture design</h1>
          <p className="text-black" style={{ marginTop: 32 }}>
            This is the S/4 Access architecture design page. Add your content here.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

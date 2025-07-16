import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function S4AccessProjects() {
  return (
    <>
      <Header />
      <section style={{ padding: '100px 0 60px 0', minHeight: '60vh' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <h1 className="big-heading-text-black">S/4 Access projects</h1>
          <p className="text-black" style={{ marginTop: 32 }}>
            This is the S/4 Access projects page. Add your content here.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
